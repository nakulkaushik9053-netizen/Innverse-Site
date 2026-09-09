"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Presets data with full pinout schematics, interactive code, and default sensor states
const SIM_PRESETS = [
  {
    id: 'smart-dustbin',
    name: 'Touchless Smart Dustbin',
    category: 'Robotics & Automation',
    icon: '🤖',
    board: 'Arduino UNO R3',
    difficulty: 'Beginner',
    desc: 'Uses ultrasonic sonar waves to detect hand proximity within 20cm and automatically rotates the servo lid open for 3 seconds.',
    components: [
      { name: 'Arduino UNO R3', type: 'MCU', pin: '5V / GND' },
      { name: 'HC-SR04 Ultrasonic', type: 'Sensor', pin: 'Trig: Pin 9, Echo: Pin 10' },
      { name: 'SG90 Micro Servo', type: 'Actuator', pin: 'Signal: Pin 6 (PWM)' },
      { name: 'Piezo Buzzer', type: 'Output', pin: 'Signal: Pin 8' }
    ],
    controls: [
      { id: 'distance', label: 'Proximity Distance (cm)', min: 2, max: 150, default: 12, unit: 'cm', icon: '📏' }
    ],
    code: `#include <Servo.h>

const int TRIG_PIN = 9;
const int ECHO_PIN = 10;
const int SERVO_PIN = 6;
const int BUZZER_PIN = 8;

Servo lidServo;

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  
  lidServo.attach(SERVO_PIN);
  lidServo.write(0); // Lid Closed (0 deg)
  Serial.println("CircuitLab: Smart Dustbin Initialized.");
}

void loop() {
  long duration, distance;
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  duration = pulseIn(ECHO_PIN, HIGH);
  distance = duration * 0.034 / 2;

  Serial.print("Target Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  if (distance < 20 && distance > 0) {
    Serial.println(">> HAND DETECTED! Opening Lid to 90 deg...");
    tone(BUZZER_PIN, 1000, 100);
    lidServo.write(90);
    delay(3000);
    lidServo.write(0);
    Serial.println(">> Closing Lid.");
  }
  delay(500);
}`
  },
  {
    id: 'solar-streetlight',
    name: 'Smart Solar Streetlight',
    category: 'Energy & IoT',
    icon: '💡',
    board: 'Arduino UNO R3',
    difficulty: 'Beginner',
    desc: 'Monitors ambient sunlight levels using a light dependent resistor (LDR) to automatically switch on high-intensity LED illumination at dusk.',
    components: [
      { name: 'Arduino UNO R3', type: 'MCU', pin: '5V / GND' },
      { name: 'LDR Photoresistor', type: 'Sensor', pin: 'Analog: Pin A0' },
      { name: '5V Relay Module', type: 'Switch', pin: 'Control: Pin 7' },
      { name: 'High Brightness LED', type: 'Output', pin: 'Relay Out' }
    ],
    controls: [
      { id: 'lux', label: 'Ambient Light Level (Lux)', min: 0, max: 1000, default: 180, unit: 'Lux', icon: '☀️' }
    ],
    code: `const int LDR_PIN = A0;
const int RELAY_PIN = 7;
const int THRESHOLD_LUX = 300;

void setup() {
  Serial.begin(9600);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
  Serial.println("CircuitLab: Solar Streetlight Ready.");
}

void loop() {
  int ldrRaw = analogRead(LDR_PIN);
  // Convert raw 0-1023 analog reading to approximate Lux
  int lux = map(ldrRaw, 0, 1023, 0, 1000);

  Serial.print("Light Level: ");
  Serial.print(lux);
  Serial.println(" Lux");

  if (lux < THRESHOLD_LUX) {
    digitalWrite(RELAY_PIN, HIGH); // Relay ON
    Serial.println(">> DUSK DETECTED. Streetlight Relay -> ACTIVE [ON]");
  } else {
    digitalWrite(RELAY_PIN, LOW);  // Relay OFF
    Serial.println(">> DAYLIGHT DETECTED. Streetlight Relay -> STANDBY [OFF]");
  }
  delay(800);
}`
  },
  {
    id: 'gas-alarm',
    name: 'Air Quality & Gas Alert Station',
    category: 'Safety & Industrial IoT',
    icon: '🚨',
    board: 'Arduino UNO R3',
    difficulty: 'Intermediate',
    desc: 'Monitors combustible gas PPM levels via MQ-2 sensor, updates a 16x2 LCD display in real-time, and triggers an emergency alarm upon hazard detection.',
    components: [
      { name: 'Arduino UNO R3', type: 'MCU', pin: '5V / GND' },
      { name: 'MQ-2 Gas/Smoke Sensor', type: 'Sensor', pin: 'Analog: Pin A1' },
      { name: '16x2 LCD (I2C)', type: 'Display', pin: 'SDA: A4, SCL: A5' },
      { name: 'Piezo Alarm Buzzer', type: 'Output', pin: 'Signal: Pin 5' }
    ],
    controls: [
      { id: 'gasPpm', label: 'Gas Concentration (PPM)', min: 50, max: 800, default: 340, unit: 'PPM', icon: '💨' }
    ],
    code: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);
const int GAS_PIN = A1;
const int ALARM_PIN = 5;
const int HAZARD_PPM = 400;

void setup() {
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
  pinMode(ALARM_PIN, OUTPUT);
  lcd.setCursor(0, 0);
  lcd.print("INNVERSE GasMon");
  Serial.println("CircuitLab: Gas Monitoring System Online.");
}

void loop() {
  int rawGas = analogRead(GAS_PIN);
  int ppm = map(rawGas, 0, 1023, 50, 800);

  lcd.setCursor(0, 1);
  lcd.print("Gas: ");
  lcd.print(ppm);
  lcd.print(" PPM  ");

  Serial.print("MQ-2 Sensor Value: ");
  Serial.print(ppm);
  Serial.println(" PPM");

  if (ppm >= HAZARD_PPM) {
    tone(ALARM_PIN, 2400, 400);
    lcd.setCursor(10, 1);
    lcd.print("[ALERT]");
    Serial.println(">> HAZARD WARNING! High Gas Concentration!");
  } else {
    noTone(ALARM_PIN);
    lcd.setCursor(10, 1);
    lcd.print("[SAFE] ");
  }
  delay(600);
}`
  },
  {
    id: 'ai-vision-tracker',
    name: 'AI Edge Vision Object Tracker',
    category: 'Artificial Intelligence',
    icon: '👁️',
    board: 'ESP32-CAM AI Vision',
    difficulty: 'Advanced',
    desc: 'Runs lightweight edge computer vision on an ESP32-CAM to track objects and position dual pan/tilt servos in 2D space.',
    components: [
      { name: 'ESP32-CAM Board', type: 'MCU + Cam', pin: '5V / GND / Serial' },
      { name: 'OV2640 Camera Lens', type: 'Optical', pin: 'MIPI CSI' },
      { name: 'Pan Servo (X-Axis)', type: 'Actuator', pin: 'GPIO 14' },
      { name: 'Tilt Servo (Y-Axis)', type: 'Actuator', pin: 'GPIO 15' }
    ],
    controls: [
      { id: 'trackX', label: 'Object Target X Pos (°)', min: 0, max: 180, default: 90, unit: '°', icon: '↔️' },
      { id: 'trackY', label: 'Object Target Y Pos (°)', min: 10, max: 170, default: 65, unit: '°', icon: '↕️' }
    ],
    code: `#include "esp_camera.h"
#include <ESP32Servo.h>

Servo panServo;
Servo tiltServo;

const int PAN_PIN = 14;
const int TILT_PIN = 15;

void setup() {
  Serial.begin(115200);
  panServo.attach(PAN_PIN);
  tiltServo.attach(TILT_PIN);
  
  panServo.write(90);
  tiltServo.write(90);
  Serial.println("ESP32-CAM AI Neural Vision Initialized. Frame Rate: 30 FPS");
}

void loop() {
  // Simulating neural network bounding box detection
  int targetX = 90; // Updated from slider
  int targetY = 65; // Updated from slider

  panServo.write(targetX);
  tiltServo.write(targetY);

  Serial.print("Target Lock -> Pan Angle: ");
  Serial.print(targetX);
  Serial.print(" deg | Tilt Angle: ");
  Serial.print(targetY);
  Serial.println(" deg");
  delay(100);
}`
  }
];

// Expanded list of standalone hardware modules for the component browser
const HARDWARE_LIBRARY = [
  { name: 'Arduino UNO R3', category: 'Microcontrollers', voltage: '5V DC', icon: '🟩', desc: 'ATmega328P based MCU board with 14 digital IO pins, 6 analog inputs, and 16MHz crystal oscillator.' },
  { name: 'ESP32-CAM Module', category: 'Microcontrollers', voltage: '3.3V / 5V', icon: '📷', desc: 'Dual-core 32-bit MCU with integrated Wi-Fi, Bluetooth 4.2 LE, and OV2640 2MP camera sensor.' },
  { name: 'Raspberry Pi Pico', category: 'Microcontrollers', voltage: '3.3V DC', icon: '🍇', desc: 'RP2040 dual ARM Cortex-M0+ microcontroller with 26 multi-function GPIO pins and PIO state machines.' },
  { name: 'HC-SR04 Ultrasonic', category: 'Sensors', voltage: '5V DC', icon: '🦇', desc: 'Non-contact ultrasonic range finder providing 2cm - 400cm measurement with 3mm accuracy.' },
  { name: 'LDR Photoresistor', category: 'Sensors', voltage: '5V DC', icon: '☀️', desc: 'Light dependent sensor whose resistance decreases proportionally as ambient light intensity increases.' },
  { name: 'MQ-2 Gas / Smoke', category: 'Sensors', voltage: '5V DC', icon: '💨', desc: 'Combustible gas and smoke sensor sensitive to LPG, i-butane, propane, methane, alcohol, and hydrogen.' },
  { name: 'PIR Motion Sensor', category: 'Sensors', voltage: '5V - 12V', icon: '🚶', desc: 'Pyroelectric infrared sensor detecting infrared radiation changes emitted by human bodies up to 7m.' },
  { name: 'DHT11 Temp & Humidity', category: 'Sensors', voltage: '3.3V - 5V', icon: '🌡️', desc: 'Calibrated digital signal output temperature and humidity sensor complex with +/-2°C accuracy.' },
  { name: 'SG90 Micro Servo', category: 'Actuators', voltage: '4.8V - 6V', icon: '⚙️', desc: '9g lightweight positional servo motor capable of 180-degree rotation controlled via PWM signals.' },
  { name: '16x2 I2C LCD Display', category: 'Displays', voltage: '5V DC', icon: '📟', desc: '16 column by 2 row character alphanumeric display using PCF8574 I2C backpack for 2-wire serial connection.' },
  { name: '5V Single Relay Module', category: 'Power & Switches', voltage: '5V Trigger', icon: '🔌', desc: 'Optocoupler isolated electromagnetic switch rating up to AC 250V 10A / DC 30V 10A for high-voltage isolation.' },
  { name: 'Active Piezo Buzzer', category: 'Audio & Outputs', voltage: '3.3V - 5V', icon: '🔔', desc: 'Internal oscillation piezo transducer generating continuous 2.5kHz audible alarm tone when high logic applied.' }
];

export default function InteractiveCircuitSim() {
  const [activePresetId, setActivePresetId] = useState('smart-dustbin');
  const [isSimulating, setIsSimulating] = useState(true);
  const [activeTab, setActiveTab] = useState('workbench'); // 'workbench' | 'code' | 'library'
  const [sensorValues, setSensorValues] = useState({
    distance: 12,
    lux: 180,
    gasPpm: 340,
    trackX: 90,
    trackY: 65
  });
  const [serialLogs, setSerialLogs] = useState([]);
  const [activeLibCategory, setActiveLibCategory] = useState('All');

  const preset = SIM_PRESETS.find((p) => p.id === activePresetId) || SIM_PRESETS[0];

  // Update slider state
  const handleSliderChange = (id, val) => {
    setSensorValues((prev) => ({ ...prev, [id]: Number(val) }));
  };

  // Simulation engine log loop simulation
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false, minute: '2-digit', second: '2-digit' }) + '.' + Math.floor(Math.random() * 90 + 10);

      let logMsg = '';
      if (preset.id === 'smart-dustbin') {
        const d = sensorValues.distance;
        if (d < 20) {
          logMsg = `[${timeStr}] Trig echo: ${d}cm | Status: TARGET IN RANGE (<20cm) | Servo -> 90° OPEN | Buzzer BEEP!`;
        } else {
          logMsg = `[${timeStr}] Trig echo: ${d}cm | Status: Searching... | Servo -> 0° CLOSED`;
        }
      } else if (preset.id === 'solar-streetlight') {
        const lx = sensorValues.lux;
        if (lx < 300) {
          logMsg = `[${timeStr}] LDR Pin A0: ${lx} Lux (<300) | DUSK MODE | Relay Pin 7 -> HIGH [LED ON]`;
        } else {
          logMsg = `[${timeStr}] LDR Pin A0: ${lx} Lux (>=300) | DAYLIGHT MODE | Relay Pin 7 -> LOW [LED OFF]`;
        }
      } else if (preset.id === 'gas-alarm') {
        const ppm = sensorValues.gasPpm;
        if (ppm >= 400) {
          logMsg = `[${timeStr}] MQ-2 Pin A1: ${ppm} PPM | ⚠️ DANGER! Gas threshold (>400 PPM) breached! Alarm ON`;
        } else {
          logMsg = `[${timeStr}] MQ-2 Pin A1: ${ppm} PPM | Normal atmosphere level | Alarm Standby`;
        }
      } else if (preset.id === 'ai-vision-tracker') {
        logMsg = `[${timeStr}] ESP32-CAM Frame #842 | Object Bounding Box -> X: ${sensorValues.trackX}°, Y: ${sensorValues.trackY}° | Servos Locked`;
      }

      setSerialLogs((prev) => [logMsg, ...prev.slice(0, 15)]);
    }, 1200);

    return () => clearInterval(interval);
  }, [isSimulating, preset.id, sensorValues]);

  // Derive dynamic visual state variables
  const isDustbinOpen = preset.id === 'smart-dustbin' && sensorValues.distance < 20;
  const isStreetlightOn = preset.id === 'solar-streetlight' && sensorValues.lux < 300;
  const isGasAlertOn = preset.id === 'gas-alarm' && sensorValues.gasPpm >= 400;

  // Filter hardware library
  const libCategories = ['All', 'Microcontrollers', 'Sensors', 'Actuators', 'Displays', 'Power & Switches', 'Audio & Outputs'];
  const filteredLibrary = activeLibCategory === 'All'
    ? HARDWARE_LIBRARY
    : HARDWARE_LIBRARY.filter(item => item.category === activeLibCategory);

  return (
    <div className="circuitlab-interactive-wrapper" id="circuitlab-demo">
      <div className="wrap">
        {/* TOP HEADER CONTROL BAR */}
        <div className="sim-top-bar glass-card">
          <div className="bar-title">
            <span className="brand-badge">CIRCUITLAB 3.0</span>
            <span className="sim-mode-tag">
              <span className={`status-indicator ${isSimulating ? 'active' : 'paused'}`} />
              {isSimulating ? 'SIMULATION RUNNING' : 'SIMULATION PAUSED'}
            </span>
          </div>

          {/* PROJECT SELECTOR DROPDOWN / BUTTONS */}
          <div className="preset-selector">
            {SIM_PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setActivePresetId(p.id);
                  setSerialLogs([]);
                }}
                className={`preset-btn ${activePresetId === p.id ? 'active' : ''}`}
              >
                <span className="p-ic">{p.icon}</span>
                <span className="p-name">{p.name}</span>
              </button>
            ))}
          </div>

          <div className="bar-actions">
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className={`btn btn-sm ${isSimulating ? 'btn-pause' : 'btn-play'}`}
            >
              {isSimulating ? '⏸ Pause Sim' : '▶ Run Sim'}
            </button>
          </div>
        </div>

        {/* WORKSTATION LAYOUT */}
        <div className="workstation-grid">
          {/* LEFT SIDEBAR: CONTROLS & WIRING SCHEMATICS */}
          <div className="workstation-sidebar glass-card">
            <div className="sidebar-header">
              <h3>{preset.name}</h3>
              <div className="preset-badges">
                <span className="tag-board">{preset.board}</span>
                <span className="tag-diff">{preset.difficulty}</span>
              </div>
            </div>

            <p className="preset-desc">{preset.desc}</p>

            {/* SENSOR INPUT SLIDERS */}
            <div className="input-controls-group">
              <h4 className="group-title">🎛️ Live Physical Hardware Input</h4>
              {preset.controls.map((ctrl) => {
                const curVal = sensorValues[ctrl.id] ?? ctrl.default;
                return (
                  <div key={ctrl.id} className="control-slider-box">
                    <div className="slider-label-row">
                      <span>{ctrl.icon} {ctrl.label}</span>
                      <span className="slider-val">{curVal} {ctrl.unit}</span>
                    </div>
                    <input
                      type="range"
                      min={ctrl.min}
                      max={ctrl.max}
                      value={curVal}
                      onChange={(e) => handleSliderChange(ctrl.id, e.target.value)}
                      className="sim-slider"
                    />
                  </div>
                );
              })}
            </div>

            {/* COMPONENT PINOUT SCHEMATICS */}
            <div className="components-list-group">
              <h4 className="group-title">🔌 Active Wire Schematic Pins</h4>
              <div className="pins-grid">
                {preset.components.map((c, i) => (
                  <div key={i} className="pin-row">
                    <span className="comp-name">{c.name}</span>
                    <span className="comp-pin">{c.pin}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN CENTER STAGE: WORKBENCH CANVAS OR CODE STUDIO */}
          <div className="workstation-main glass-card">
            <div className="tab-navigation">
              <button
                onClick={() => setActiveTab('workbench')}
                className={`tab-btn ${activeTab === 'workbench' ? 'active' : ''}`}
              >
                🔬 3D Interactive Canvas Workbench
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
              >
                💻 Live Arduino C++ Code
              </button>
              <button
                onClick={() => setActiveTab('library')}
                className={`tab-btn ${activeTab === 'library' ? 'active' : ''}`}
              >
                🧰 Hardware Component Library (12+)
              </button>
            </div>

            <div className="tab-content">
              {/* 1. WORKBENCH CANVAS */}
              {activeTab === 'workbench' && (
                <div className="workbench-canvas">
                  <div className="canvas-header">
                    <span>Target Microcontroller: <strong style={{ color: 'var(--orange)' }}>{preset.board}</strong></span>
                    <span className="voltage-tag">⚡ System Power: 5.0V DC Active</span>
                  </div>

                  {/* VISUAL CIRCUIT DIAGRAM & ANIMATED HARDWARE RENDER */}
                  <div className="canvas-visual-area">
                    {/* SVG DYNAMIC WIRE LINES */}
                    <svg className="wire-svg-overlay" viewBox="0 0 700 350">
                      <defs>
                        <linearGradient id="vccGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ff4d4d" />
                          <stop offset="100%" stopColor="#ff9999" />
                        </linearGradient>
                        <linearGradient id="sigGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00aeef" />
                          <stop offset="100%" stopColor="#00ffcc" />
                        </linearGradient>
                      </defs>

                      {/* Wire lines from MCU to Sensors */}
                      <path d="M 220,170 C 290,120 320,80 420,80" stroke="#ff4d4d" strokeWidth="3" fill="none" strokeDasharray="6,4" />
                      <path d="M 220,185 C 290,165 320,160 420,160" stroke="#1a1a1a" strokeWidth="3" fill="none" />
                      <path
                        d="M 220,200 C 290,210 320,240 420,240"
                        stroke="url(#sigGrad)"
                        strokeWidth="3.5"
                        fill="none"
                        className={isSimulating ? 'wire-pulse' : ''}
                      />
                    </svg>

                    {/* MICROCONTROLLER GRAPHIC */}
                    <div className="mcu-board-graphic">
                      <div className="mcu-chip">
                        <span className="mcu-logo">ATmega328P</span>
                        <div className="chip-ic-pins">
                          {[...Array(14)].map((_, i) => (
                            <span key={i} className="ic-pin" />
                          ))}
                        </div>
                      </div>
                      <div className="board-label">{preset.board}</div>
                      <div className="mcu-usb-port">USB</div>
                      <div className="mcu-led-txrx">
                        <span className={`tx-led ${isSimulating ? 'blink' : ''}`}>TX</span>
                        <span className="pwr-led active">PWR</span>
                      </div>
                    </div>

                    {/* DYNAMIC SENSOR / ACTUATOR DISPLAY BASED ON PRESET */}
                    <div className="active-hardware-stage">
                      {preset.id === 'smart-dustbin' && (
                        <div className="dustbin-stage">
                          <div className="ultrasonic-graphic">
                            <div className="sonar-eyes">
                              <span className={`eye ${isDustbinOpen ? 'ping' : ''}`}>TX</span>
                              <span className="eye">RX</span>
                            </div>
                            <span className="device-name">HC-SR04 Sonar</span>
                            {/* Waves animation */}
                            <div className="sonar-waves">
                              <span className="wave w1" />
                              <span className="wave w2" />
                              <span className="wave w3" />
                            </div>
                          </div>

                          <div className="servo-dustbin-graphic">
                            <div className="bin-body">
                              <div className={`bin-lid ${isDustbinOpen ? 'open' : 'closed'}`}>
                                LID (90°)
                              </div>
                              <span className="bin-label">Smart Bin</span>
                            </div>
                            <div className="servo-motor">
                              <span className="servo-gear">⚙️</span>
                              <span className="servo-horn">SG90 Servo</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {preset.id === 'solar-streetlight' && (
                        <div className="solar-stage">
                          <div className="ldr-sensor-graphic">
                            <div className="ldr-lens" style={{ opacity: sensorValues.lux / 1000 + 0.2 }}>
                              ☀️
                            </div>
                            <span className="device-name">LDR Photoresistor ({sensorValues.lux} Lux)</span>
                          </div>

                          <div className="relay-lamp-graphic">
                            <div className={`relay-box ${isStreetlightOn ? 'active' : ''}`}>
                              <span>5V Relay Switch</span>
                              <span className="relay-status">{isStreetlightOn ? 'CLICK! [CLOSED]' : '[OPEN]'}</span>
                            </div>
                            <div className={`lamp-fixture ${isStreetlightOn ? 'glowing' : 'off'}`}>
                              <span className="bulb-icon">💡</span>
                              <span className="glow-cone" />
                            </div>
                          </div>
                        </div>
                      )}

                      {preset.id === 'gas-alarm' && (
                        <div className="gas-stage">
                          <div className="mq2-sensor-graphic">
                            <div className="sensor-mesh">
                              <span className={`smoke-cloud ${isGasAlertOn ? 'dense' : ''}`}>💨</span>
                            </div>
                            <span className="device-name">MQ-2 Gas Sensor ({sensorValues.gasPpm} PPM)</span>
                          </div>

                          <div className="lcd-display-graphic">
                            <div className="lcd-screen">
                              <div className="lcd-line1">INNVERSE GasMon v1.2</div>
                              <div className="lcd-line2">
                                Gas:{sensorValues.gasPpm}PPM {isGasAlertOn ? '!ALERT!' : '[SAFE]'}
                              </div>
                            </div>
                            <span className="device-name">LCD 16x2 (I2C)</span>
                          </div>

                          <div className={`buzzer-alarm ${isGasAlertOn ? 'alarming' : ''}`}>
                            🔔 <span>{isGasAlertOn ? '2400Hz ALARM!' : 'Standby'}</span>
                          </div>
                        </div>
                      )}

                      {preset.id === 'ai-vision-tracker' && (
                        <div className="ai-vision-stage">
                          <div className="esp-cam-graphic">
                            <div className="cam-lens">
                              <span className="lens-glass">👁️</span>
                              <span className="cam-flash">📸</span>
                            </div>
                            <span className="device-name">ESP32-CAM AI Lens</span>
                          </div>

                          <div className="pan-tilt-rig">
                            <div
                              className="servo-gimbal"
                              style={{
                                transform: `rotateX(${sensorValues.trackY - 90}deg) rotateY(${sensorValues.trackX - 90}deg)`
                              }}
                            >
                              <span className="gimbal-target">🎯 Lock: ({sensorValues.trackX}°, {sensorValues.trackY}°)</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 2. CODE STUDIO TAB */}
              {activeTab === 'code' && (
                <div className="code-studio">
                  <div className="code-header">
                    <span>File: <code>sketch.ino</code> (C++ Arduino IDE)</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(preset.code)}
                      className="btn btn-sm btn-outline"
                    >
                      📋 Copy Code
                    </button>
                  </div>
                  <pre className="code-editor-block">
                    <code>{preset.code}</code>
                  </pre>
                </div>
              )}

              {/* 3. HARDWARE COMPONENT LIBRARY */}
              {activeTab === 'library' && (
                <div className="hardware-library-view">
                  <div className="lib-cat-filters">
                    {libCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveLibCategory(cat)}
                        className={`cat-chip ${activeLibCategory === cat ? 'active' : ''}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="lib-cards-grid">
                    {filteredLibrary.map((item, idx) => (
                      <div key={idx} className="glass-card lib-item-card">
                        <div className="lib-top">
                          <span className="item-ic">{item.icon}</span>
                          <div>
                            <h5>{item.name}</h5>
                            <span className="item-volt">{item.voltage}</span>
                          </div>
                        </div>
                        <p>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* LIVE SERIAL MONITOR CONSOLE FOOTER */}
            <div className="serial-monitor-panel">
              <div className="serial-header">
                <span>🖥️ Arduino Serial Monitor (Baud Rate: 9600)</span>
                <button onClick={() => setSerialLogs([])} className="btn-clear">Clear Logs</button>
              </div>
              <div className="serial-body">
                {serialLogs.length === 0 ? (
                  <span className="serial-placeholder">Waiting for incoming telemetry packets...</span>
                ) : (
                  serialLogs.map((log, i) => (
                    <div key={i} className="serial-line">{log}</div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .circuitlab-interactive-wrapper {
          padding: 40px 0 80px;
        }

        .sim-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 16px;
          border-left: 4px solid var(--orange);
        }

        .bar-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-badge {
          font-family: var(--font-head);
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 1px;
          color: var(--orange);
        }

        .sim-mode-tag {
          font-size: 11px;
          font-weight: 700;
          color: var(--ink-soft);
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.06);
          padding: 4px 10px;
          border-radius: 12px;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #777;
        }

        .status-indicator.active {
          background: var(--teal);
          box-shadow: 0 0 8px var(--teal);
        }

        .preset-selector {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .preset-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ccc;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .preset-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
        }

        .preset-btn.active {
          background: linear-gradient(135deg, rgba(247, 148, 29, 0.2), rgba(0, 174, 239, 0.2));
          border-color: var(--orange);
          color: #fff;
        }

        .workstation-grid {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .workstation-grid {
            grid-template-columns: 1fr;
          }
        }

        .workstation-sidebar {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sidebar-header h3 {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .preset-badges {
          display: flex;
          gap: 8px;
        }

        .tag-board {
          font-size: 10px;
          font-weight: 700;
          background: rgba(0, 174, 239, 0.15);
          color: var(--teal);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .tag-diff {
          font-size: 10px;
          font-weight: 700;
          background: rgba(247, 148, 29, 0.15);
          color: var(--orange);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .preset-desc {
          font-size: 0.88rem;
          color: var(--ink-soft);
          line-height: 1.5;
        }

        .group-title {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--orange);
          margin-bottom: 12px;
        }

        .control-slider-box {
          margin-bottom: 16px;
        }

        .slider-label-row {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .slider-val {
          color: var(--teal);
          font-family: monospace;
        }

        .sim-slider {
          width: 100%;
          accent-color: var(--orange);
          cursor: pointer;
        }

        .pins-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pin-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: 6px;
          font-size: 11px;
        }

        .comp-name {
          font-weight: 600;
          color: #ddd;
        }

        .comp-pin {
          font-family: monospace;
          color: var(--teal);
        }

        .workstation-main {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tab-navigation {
          display: flex;
          gap: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 12px;
          flex-wrap: wrap;
        }

        .tab-btn {
          background: transparent;
          border: none;
          color: var(--ink-soft);
          font-size: 13px;
          font-weight: 600;
          padding: 8px 16px;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .tab-btn.active {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border-bottom: 2px solid var(--orange);
        }

        .workbench-canvas {
          background: #040d1a;
          border-radius: 12px;
          padding: 20px;
          border: 1px solid rgba(0, 174, 239, 0.2);
          position: relative;
        }

        .canvas-header {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          margin-bottom: 16px;
          color: #aaa;
        }

        .voltage-tag {
          color: #4cd964;
          font-weight: 600;
        }

        .canvas-visual-area {
          min-height: 280px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 24px;
          padding: 20px 0;
        }

        .wire-svg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .wire-pulse {
          stroke-dasharray: 8, 4;
          animation: dash 1s linear infinite;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -24;
          }
        }

        /* MCU Graphic */
        .mcu-board-graphic {
          width: 170px;
          height: 210px;
          background: #006699;
          border-radius: 10px;
          padding: 16px;
          position: relative;
          border: 2px solid #0099cc;
          box-shadow: 0 10px 30px rgba(0, 102, 153, 0.4);
          z-index: 2;
        }

        .mcu-chip {
          background: #111;
          height: 90px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: #666;
          font-family: monospace;
          font-size: 10px;
        }

        .chip-ic-pins {
          position: absolute;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .ic-pin {
          width: 4px;
          height: 8px;
          background: #aaa;
        }

        .board-label {
          color: #fff;
          font-family: var(--font-head);
          font-weight: 800;
          font-size: 12px;
          margin-top: 14px;
          text-align: center;
        }

        .mcu-usb-port {
          position: absolute;
          top: -10px;
          left: 20px;
          width: 35px;
          height: 14px;
          background: #aaa;
          border-radius: 2px;
          font-size: 8px;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .mcu-led-txrx {
          position: absolute;
          bottom: 12px;
          right: 12px;
          display: flex;
          gap: 6px;
          font-size: 9px;
        }

        .tx-led, .pwr-led {
          padding: 1px 4px;
          border-radius: 3px;
          font-weight: bold;
        }

        .tx-led.blink {
          background: #ffcc00;
          color: #000;
          animation: blinker 0.4s infinite;
        }

        .pwr-led.active {
          background: #4cd964;
          color: #000;
        }

        @keyframes blinker {
          50% { opacity: 0.2; }
        }

        /* Active Hardware Elements */
        .active-hardware-stage {
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .dustbin-stage, .solar-stage, .gas-stage, .ai-vision-stage {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .ultrasonic-graphic {
          background: #1e3a5f;
          padding: 16px;
          border-radius: 10px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
        }

        .sonar-eyes {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 8px;
        }

        .eye {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #000;
          border: 3px solid #ccc;
          color: #fff;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .eye.ping {
          border-color: var(--teal);
          box-shadow: 0 0 12px var(--teal);
        }

        .device-name {
          font-size: 11px;
          color: #aaa;
          display: block;
        }

        .bin-body {
          width: 90px;
          height: 110px;
          background: #222;
          border-radius: 8px;
          border: 2px solid #444;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .bin-lid {
          position: absolute;
          top: -14px;
          width: 100px;
          height: 14px;
          background: var(--orange);
          color: #000;
          font-size: 9px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: transform 0.4s ease;
          transform-origin: left center;
        }

        .bin-lid.open {
          transform: rotate(-65deg);
        }

        .relay-box {
          background: #111;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid #333;
          font-size: 11px;
          text-align: center;
        }

        .relay-box.active {
          border-color: var(--teal);
          box-shadow: 0 0 15px rgba(0, 174, 239, 0.3);
        }

        .lamp-fixture {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .bulb-icon {
          font-size: 40px;
        }

        .lamp-fixture.glowing .bulb-icon {
          filter: drop-shadow(0 0 20px #ffcc00);
        }

        .lcd-screen {
          background: #004400;
          color: #66ff66;
          font-family: monospace;
          padding: 10px 16px;
          border-radius: 6px;
          border: 4px solid #111;
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);
          font-size: 12px;
        }

        .buzzer-alarm {
          padding: 10px 14px;
          background: #222;
          border-radius: 8px;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .buzzer-alarm.alarming {
          background: rgba(255, 77, 77, 0.2);
          border: 1px solid #ff4d4d;
          color: #ff4d4d;
          animation: pulse 0.5s infinite alternate;
        }

        @keyframes pulse {
          to { transform: scale(1.05); }
        }

        /* Code Studio */
        .code-studio {
          background: #081424;
          border-radius: 8px;
          padding: 16px;
        }

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          font-size: 12px;
          color: #aaa;
        }

        .code-editor-block {
          background: #040b14;
          padding: 16px;
          border-radius: 6px;
          overflow-x: auto;
          font-family: monospace;
          font-size: 12px;
          line-height: 1.6;
          color: #88c0d0;
          max-height: 380px;
        }

        /* Hardware Library */
        .lib-cat-filters {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .cat-chip {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--ink-soft);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .cat-chip.active {
          background: var(--orange);
          color: #000;
          font-weight: 700;
        }

        .lib-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          max-height: 380px;
          overflow-y: auto;
        }

        .lib-item-card {
          padding: 14px;
        }

        .lib-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .item-ic {
          font-size: 24px;
        }

        .lib-top h5 {
          font-size: 13px;
          margin-bottom: 2px;
        }

        .item-volt {
          font-size: 10px;
          color: var(--teal);
          font-family: monospace;
        }

        .lib-item-card p {
          font-size: 11px;
          color: var(--ink-soft);
          line-height: 1.4;
        }

        /* Serial Monitor Panel */
        .serial-monitor-panel {
          background: #020710;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px;
        }

        .serial-header {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #aaa;
          margin-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 6px;
        }

        .btn-clear {
          background: transparent;
          border: none;
          color: var(--orange);
          cursor: pointer;
          font-size: 10px;
        }

        .serial-body {
          height: 90px;
          overflow-y: auto;
          font-family: monospace;
          font-size: 11px;
          color: #4cd964;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .serial-placeholder {
          color: #666;
        }
      `}</style>
    </div>
  );
}
