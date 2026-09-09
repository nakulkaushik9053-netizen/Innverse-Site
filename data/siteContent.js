export const SITE_DATA = {
  hero: {
    eyebrow: "An Innovative Universe",
    heading: "BUILDING FUTURE-READY INNOVATORS.",
    subheading: "We help schools move beyond theory into hands-on learning — where students explore, build, test, and create real-world solutions. Not activities. Systems.",
    tagline: "Where Curiosity Becomes Creation.",
  },
  nodes: [
    {
      id: "ai",
      title: "Artificial Intelligence",
      tag: "AI",
      desc: "Practical machine learning & AI projects students can see, touch, and build — from object recognition to smart chatbots.",
      icon: "🧠",
      color: "#00AEEF",
      builds: ["Object recognition camera", "Custom voice assistant", "Smart attendance model"]
    },
    {
      id: "robotics",
      title: "Robotics",
      tag: "ROBOTICS",
      desc: "Design, assemble, and program autonomous robots — from line followers to multi-axis robotic arms.",
      icon: "🤖",
      color: "#F58220",
      builds: ["Line-following bot", "Obstacle-avoidance rover", "Robotic gripper arm"]
    },
    {
      id: "coding",
      title: "Coding",
      tag: "CODING",
      desc: "Computational thinking through block-based Scratch, Python scripts, and embedded C++ for microcontrollers.",
      icon: "💻",
      color: "#0FB5A6",
      builds: ["Interactive games", "Automation scripts", "Microcontroller firmware"]
    },
    {
      id: "iot",
      title: "IoT & Smart Systems",
      tag: "IoT",
      desc: "Connect sensors, microcontrollers, and cloud dashboards to build real-world environmental monitoring systems.",
      icon: "📡",
      color: "#00AEEF",
      builds: ["Smart irrigation system", "Home automation hub", "Air quality monitor"]
    },
    {
      id: "electronics",
      title: "Electronics",
      tag: "ELECTRONICS",
      desc: "Circuits, breadboards, sensors, and embedded hardware — the physical foundation of modern technology.",
      icon: "🔌",
      color: "#F58220",
      builds: ["LDR automatic streetlight", "Gas leak detector", "Digital multimeter module"]
    },
    {
      id: "design3d",
      title: "3D Design & Prototyping",
      tag: "3D DESIGN",
      desc: "Model, render, and 3D print custom parts, enclosures, and mechanical mechanisms from concept to physical object.",
      icon: "🧊",
      color: "#0FB5A6",
      builds: ["Custom robot chassis", "Sensor mounts", "Geometric mechanical gears"]
    }
  ],
  product: {
    title: "CircuitLab",
    eyebrow: "Our In-House Product",
    heading: "Built In-House. Used By Our Own Students.",
    description: "Meet CircuitLab — a browser-based interactive electronics and Arduino simulator built by INNVERSE. Students prototype circuits, write code, and simulate hardware behavior virtually before touching real components.",
    features: [
      "14+ real components — LDR, gas sensor, servo, ultrasonic, DHT11, LCD & more",
      "18 ready-made guided projects students can explore instantly",
      "Works on phone, tablet, and laptop — zero installation required",
      "Real-time C++ code execution with interactive sensor inputs"
    ],
    liveUrl: "/circuitlab"
  },
  schoolSpotlight: {
    eyebrow: "Real Impact In Real Classrooms",
    heading: "Partner School Ecosystems & Innovation Labs",
    schoolName: "Global Wisdom International School & Paragon 69 School",
    quote: "INNOVATION STARTS WITH OBSERVATION: Observe • Identify • Think • Build",
    subtext: "INNVERSE establishes dedicated, fully equipped Innovation Labs and hands-on technology ecosystems directly inside our partner schools.",
    gallery: [
      {
        id: "globalites-lab-full",
        title: "Globalites Innovation Lab - Real Classroom Setup",
        desc: "State-of-the-art Innovation Lab powered by INNVERSE at Global Wisdom International School featuring modular lab furniture, smart displays, and hands-on STEM stations.",
        image: "/images/globalites-innovation-lab.jpg",
        badge: "Globalites Innovation Lab",
        location: "Global Wisdom International School, Dera Bassi"
      },
      {
        id: "globalites-lab-tv",
        title: "Interactive Smart Board & Collaboration Display",
        desc: "Smart digital display and official INNVERSE collaboration banner inside Globalites Innovation Lab welcoming students to daily robotics and AI sessions.",
        image: "/images/globalites-lab-tv.jpg",
        badge: "Smart Lab Technology",
        location: "Dera Bassi Campus"
      },
      {
        id: "paragon-building",
        title: "Paragon Senior Secondary School (Sec-69 Mohali)",
        desc: "Paragon Senior Secondary School, Sector 69 SAS Nagar Mohali — one of our premier partner institutions driving future-tech education.",
        image: "/images/paragon-school-building.jpg",
        badge: "Partner Institution",
        location: "Sec-69, SAS Nagar, Mohali"
      },
      {
        id: "paragon-entrance",
        title: "Paragon 69 School Campus Entrance",
        desc: "Entrance view of Paragon 69 School, CBSE affiliated institution partnered with INNVERSE for robotics and computational thinking programs.",
        image: "/images/paragon-school-sign.jpg",
        badge: "CBSE Partner School",
        location: "Mohali, Punjab"
      },
      {
        id: "robot-team",
        title: "Young Innovators & Autonomous Robot Build",
        desc: "Global Wisdom International School students proudly showcasing their autonomous 4-wheel robot car build after a hands-on robotics session.",
        image: "/images/students-robot-team.jpg",
        badge: "Robotics & Hardware",
        location: "Dera Bassi Campus"
      },
      {
        id: "coding-session",
        title: "Hands-on C++ Coding & Circuit Testing",
        desc: "Students debugging micro-controller code on laptop and calibrating real-time motor signals connected to their robot car.",
        image: "/images/students-coding-robot.jpg",
        badge: "Coding & Electronics",
        location: "Innovation Lab"
      },
      {
        id: "poster-feature",
        title: "Every Line of Code Builds the Future",
        desc: "INNVERSE & Global Wisdom International School official partnership poster highlighting computational thinking and future skills.",
        image: "/images/every-line-of-code-poster.jpg",
        badge: "INNVERSE Ecosystem",
        location: "School Banner"
      }
    ]
  },

  about: {
    eyebrow: "About INNVERSE",
    heading: "An Innovative Universe for Young Minds.",
    description: "INNVERSE is building a culture of curiosity, creativity, and problem-solving in schools. Our programs move beyond theory and help students explore real technology through guided hands-on learning experiences.",
    pillars: [
      {
        title: "Learn by Building",
        desc: "Students turn abstract ideas into working circuits, models, and prototypes through guided hands-on building.",
        icon: "Wrench"
      },
      {
        title: "Think Like Innovators",
        desc: "Every activity strengthens curiosity, design thinking, problem-solving, and confident exploration.",
        icon: "Lightbulb"
      },
      {
        title: "Create Real-World Solutions",
        desc: "Programs connect concepts with meaningful projects across AI, robotics, IoT, electronics, and STEM.",
        icon: "Zap"
      }
    ]
  },
  programs: {
    eyebrow: "Programs & Services",
    heading: "Practical innovation learning for modern schools.",
    items: [
      { 
        id: "lab-setup",
        title: "Innovation Lab Setup", 
        desc: "Plan and establish practical school innovation spaces with tools, learning kits, power layouts, and ongoing support.",
        icon: "🔬",
        highlights: ["Custom floorplan layout", "Hardware kits & 3D printers", "Lab branding & storage solutions"]
      },
      { 
        id: "ai-robotics",
        title: "AI, Robotics & Coding", 
        desc: "Structured learning experiences where students code, automate, reason, and build intelligent systems.",
        icon: "🤖",
        highlights: ["Grade-wise curriculum", "Hands-on robot kits", "AI vision & speech projects"]
      },
      { 
        id: "iot-electronics",
        title: "IoT & Smart Projects", 
        desc: "Hands-on circuits, sensors, controllers, and smart prototypes that connect technology with daily life.",
        icon: "⚡",
        highlights: ["Sensor modules & breadboards", "IoT cloud dashboards", "Real-world environmental monitors"]
      },
      { 
        id: "3d-design",
        title: "3D Design & Prototyping", 
        desc: "Design, model, and prototype ideas using creative CAD tools and future-ready 3D printing workflows.",
        icon: "🧊",
        highlights: ["Tinkercad & CAD training", "3D printer operation", "Physical prototype creation"]
      },
      { 
        id: "workshops",
        title: "Workshops & Events", 
        desc: "Memorable bootcamps, hackathons, exhibitions, and innovation challenges for students and school communities.",
        icon: "🚀",
        highlights: ["Inter-school hackathons", "Science & tech fairs", "Student showcase exhibitions"]
      },
      { 
        id: "teacher-training",
        title: "Teacher Training & Faculty Enablement", 
        desc: "Empower educators with practical orientation, lesson plans, and classroom-ready confidence.",
        icon: "👩‍🏫",
        highlights: ["Continuous faculty workshops", "Ready-to-teach slide decks", "Direct mentor support"]
      }
    ]
  },
  labs: {
    eyebrow: "School Innovation Labs",
    heading: "Tailored Lab Packages For Every School",
    packages: [
      {
        id: "starter",
        name: "Starter Lab",
        tagline: "Essential STEM & Electronics setup for emerging schools.",
        capacity: "30 Students / Batch",
        space: "300 - 500 sq ft",
        includes: [
          "10x Arduino & Sensor Starter Kits",
          "5x Basic Robotics Chassis Kits",
          "Grade 6-8 Curriculum Modules",
          "2 Days Teacher Orientation Workshop",
          "CircuitLab Simulator School License"
        ]
      },
      {
        id: "advanced",
        name: "Advanced Innovation Lab",
        tagline: "Complete AI, Robotics, IoT & 3D Printing Ecosystem.",
        popular: true,
        capacity: "45 Students / Batch",
        space: "600 - 900 sq ft",
        includes: [
          "15x Advanced Arduino & IoT Wireless Kits",
          "10x AI & Camera Vision Modules",
          "2x High-Precision 3D Printers + Filament",
          "Grade 6-10 Comprehensive Curriculum",
          "4 Days On-site Faculty Masterclass",
          "Dedicated Student Project Showcase"
        ]
      },
      {
        id: "coe",
        name: "Center of Excellence Lab",
        tagline: "State-of-the-art Research & Future-Tech Hub for Lead Institutions.",
        capacity: "60+ Students / Batch",
        space: "1000+ sq ft",
        includes: [
          "Custom Modular Lab Furniture & Storage",
          "20x High-End Robotics & Drone Fabrication Kits",
          "4x Dual-Extruder 3D Printers + Laser Cutter",
          "AI, Machine Learning & Smart City Workstations",
          "Year-Round Co-Teaching & Dedicated Mentor Support",
          "Annual Inter-School Hackathon Hosting"
        ]
      }
    ]
  },
  process: {
    eyebrow: "Innovation Journey",
    heading: "An 8-Step Signature Method Students Carry Into Every Project",
    steps: [
      { num: "01", title: "Observe", desc: "Look closely at real environments and identify real-world problems worth solving." },
      { num: "02", title: "Identify", desc: "Pinpoint a specific, meaningful challenge to work on with clear constraints." },
      { num: "03", title: "Understand", desc: "Research the problem, its root causes, user needs, and available tools." },
      { num: "04", title: "Imagine", desc: "Brainstorm creative approaches without judging ideas too early." },
      { num: "05", title: "Design", desc: "Sketch circuit diagrams, CAD models, and step-by-step algorithms." },
      { num: "06", title: "Build", desc: "Assemble hardware, wire breadboards, and write functional code." },
      { num: "07", title: "Test", desc: "Run the prototype under real conditions, evaluate edge cases, and debug errors." },
      { num: "08", title: "Improve", desc: "Refine code, reinforce structural components, and present the final innovation." }
    ],
    quote: "Innovators do not quit — innovators iterate and improve."
  },
  projects: [
    {
      id: "dustbin",
      title: "Smart Automatic Dustbin",
      category: "iot",
      desc: "An ultrasonic sensor detects an approaching hand and automatically opens the lid using a servo motor — a hygiene-focused smart build.",
      components: ["Arduino UNO", "Ultrasonic HC-SR04", "Servo Motor SG90", "Battery Pack"],
      tags: ["IoT", "Sensors", "Automation"],
      difficulty: "Beginner",
      icon: "🗑️",
      accent: "#0FB5A6"
    },
    {
      id: "gas-leak",
      title: "Gas Leakage Alarm System",
      category: "electronics",
      desc: "MQ-2 gas sensor continuously monitors ambient LPG and smoke levels, sounding a loud buzzer alert when threshold safety limits are crossed.",
      components: ["Arduino UNO", "MQ-2 Gas Sensor", "Piezo Buzzer", "Status LEDs"],
      tags: ["Electronics", "Safety", "Sensors"],
      difficulty: "Intermediate",
      icon: "🚨",
      accent: "#F58220"
    },
    {
      id: "street-light",
      title: "Automatic Smart Street Light",
      category: "electronics",
      desc: "Light Dependent Resistors (LDR) measure natural sunlight intensity to automatically illuminate street lamps at dusk and switch them off at dawn.",
      components: ["Arduino UNO", "LDR Sensor", "High-Bright LEDs", "Resistor Array"],
      tags: ["Energy Saving", "LDR", "Automation"],
      difficulty: "Beginner",
      icon: "💡",
      accent: "#00AEEF"
    },
    {
      id: "line-follower",
      title: "Autonomous Line Follower Robot",
      category: "robotics",
      desc: "Dual infrared (IR) sensors detect dark floor tracks, sending speed adjustments to dual DC motor drivers for continuous path navigation.",
      components: ["Arduino UNO", "Dual IR Sensors", "L298N Motor Driver", "Robot Chassis"],
      tags: ["Robotics", "IR Sensor", "Motors"],
      difficulty: "Intermediate",
      icon: "🤖",
      accent: "#0B2341"
    },
    {
      id: "irrigation",
      title: "Smart Agricultural Irrigation",
      category: "iot",
      desc: "Soil moisture sensors read real-time soil hydration level and trigger a mini water pump relay only when crops require watering.",
      components: ["Arduino UNO", "Soil Moisture Sensor", "5V Relay Module", "Submersible Pump"],
      tags: ["IoT", "Agriculture", "Relay"],
      difficulty: "Intermediate",
      icon: "🌱",
      accent: "#0FB5A6"
    },
    {
      id: "home-automation",
      title: "Bluetooth Home Automation",
      category: "iot",
      desc: "An HC-05 Bluetooth module connects microcontrollers with a custom smartphone app to safely toggle AC appliances via relay switches.",
      components: ["Arduino UNO", "HC-05 Bluetooth Module", "4-Channel Relay", "App Interface"],
      tags: ["IoT", "Bluetooth", "App Control"],
      difficulty: "Advanced",
      icon: "🏠",
      accent: "#00AEEF"
    },
    {
      id: "obstacle-bot",
      title: "Obstacle Avoiding Rover",
      category: "robotics",
      desc: "Mounted ultrasonic distance sensor sweeps 180 degrees via servo, analyzing spatial paths to avoid walls and navigate around obstacles.",
      components: ["Arduino UNO", "HC-SR04 Ultrasonic", "Servo Motor", "DC Gearbox Motors"],
      tags: ["Robotics", "Obstacle Avoidance", "Navigation"],
      difficulty: "Intermediate",
      icon: "🚗",
      accent: "#F58220"
    },
    {
      id: "ai-vision",
      title: "AI Camera Object Recognition",
      category: "ai",
      desc: "ESP32-CAM module runs lightweight Neural Network image classification to detect objects, gesture commands, and face badges.",
      components: ["ESP32-CAM", "MicroSD Storage", "Trained AI Model", "OLED Display"],
      tags: ["AI", "Computer Vision", "ESP32"],
      difficulty: "Advanced",
      icon: "👁️",
      accent: "#D96A0F"
    }
  ],
  stats: [
    { number: "15+", label: "Partner Schools", sub: "Building active STEM ecosystems" },
    { number: "5,000+", label: "Students Trained", sub: "Hands-on project experience" },
    { number: "500+", label: "Projects Built", sub: "Working prototypes created" },
    { number: "98%", label: "Satisfaction Rate", sub: "From school principals & parents" }
  ],
  testimonials: [
    {
      quote: "INNVERSE transformed our school's approach to technology. Students don't just memorize concepts anymore — they build working robots and IoT circuits every single week.",
      author: "Dr. R. K. Sharma",
      title: "Principal, Apex Global School",
      location: "New Delhi"
    },
    {
      quote: "Setting up the Innovation Lab with INNVERSE was seamless. The teacher training and structured curriculum gave our faculty total confidence in leading AI and Coding classes.",
      author: "Sunita Verma",
      title: "STEM Coordinator, Heritage Public School",
      location: "Chandigarh"
    },
    {
      quote: "The CircuitLab simulator allowed our students to test complex Arduino projects before building them physically. Their problem-solving confidence has skyrocketed.",
      author: "Amitabh Sen",
      title: "Head of Technology, Modern Academy",
      location: "Mohali"
    }
  ],
  resources: [
    {
      title: "School Innovation Lab Setup Guide",
      type: "PDF Guide",
      desc: "Step-by-step roadmap to planning space, hardware budget, and safety protocols for K-12 STEM labs.",
      size: "2.4 MB"
    },
    {
      title: "AI & Robotics Curriculum Roadmap (Grades 6-10)",
      type: "Curriculum Map",
      desc: "Detailed week-by-week learning outcomes, project milestones, and evaluation criteria.",
      size: "1.8 MB"
    },
    {
      title: "CircuitLab Teacher Classroom Manual",
      type: "Educator Resource",
      desc: "18 ready-made interactive simulation lesson plans with schematics and C++ code keys.",
      size: "3.1 MB"
    }
  ],
  schools: {
    eyebrow: "For Schools",
    heading: "More Than a Lab. A Culture of Innovation.",
    benefits: [
      "Structured future-skills learning mapped to modern education standards",
      "Hands-on project-based education for Grades 6 through 12",
      "Age-appropriate progressive learning pathways across 6 domains",
      "Stronger student engagement, creativity, and technical confidence",
      "Inter-school innovation exhibitions and student project showcases",
      "Continuous mentor support and professional development for educators"
    ]
  },
  curriculumRoadmap: {
    eyebrow: "Grade-Wise Progression",
    heading: "A Progressive STEM & Innovation Pathway (Grades 3 to 12)",
    subtext: "Designed in accordance with NEP-2020 and CBSE Skill Subject mandates. Students advance from visual algorithmic logic to autonomous robotics and AI.",
    levels: [
      {
        id: "primary",
        grade: "Grades 3 - 5",
        title: "Curiosity & Logical Foundations",
        theme: "Observe & Play",
        color: "#00AEEF",
        badge: "Level 1: Foundations",
        hours: "32 Hours / Academic Year",
        topics: [
          "Block-based coding with Scratch & visual animations",
          "Simple machines, levers, pulleys & mechanical motion",
          "Paper circuits, conductive tape & safe LED circuits",
          "Algorithmic thinking & everyday pattern recognition"
        ],
        tools: ["Scratch 3.0", "Craft Electronics", "Logic Puzzles", "Tinkercad Shapes"],
        capstoneProject: "Interactive Animated Storybook & Musical Greeting Card",
        skills: ["Computational Thinking", "Fine Motor Skills", "Creative Expression"]
      },
      {
        id: "middle",
        grade: "Grades 6 - 8",
        title: "Hands-on Microcontrollers & Sensors",
        theme: "Build & Measure",
        color: "#F58220",
        badge: "Level 2: Builders",
        popular: true,
        hours: "48 Hours / Academic Year",
        topics: [
          "Arduino microcontroller hardware architecture & pinouts",
          "Digital & analog sensor interfacing (LDR, Ultrasonic, DHT11)",
          "Actuator control: Servo motors, DC gearmotors & relays",
          "Introduction to C++ syntax and breadboard prototyping",
          "Virtual hardware simulation on CircuitLab"
        ],
        tools: ["CircuitLab Simulator", "Arduino UNO", "Breadboards & Sensors", "Tinkercad 3D"],
        capstoneProject: "Autonomous Obstacle-Avoiding Rover & Smart Touchless Dustbin",
        skills: ["Hardware Debugging", "C++ Coding", "Spatial 3D Modeling"]
      },
      {
        id: "secondary",
        grade: "Grades 9 - 10",
        title: "IoT, Automation & Applied Robotics",
        theme: "Connect & Automate",
        color: "#0FB5A6",
        badge: "Level 3: Innovators",
        hours: "54 Hours / Academic Year",
        topics: [
          "ESP32 & NodeMCU Wi-Fi / Bluetooth IoT systems",
          "Cloud telemetry dashboards (Blynk, Adafruit IO)",
          "Dual motor driver kinematics (L298N, line tracking)",
          "Python scripting & data visualization for sensors",
          "Rapid 3D CAD prototyping & slicing for 3D printing"
        ],
        tools: ["ESP32 IoT Kits", "Python 3", "3D Printers & Slicers", "Cloud IoT Brokers"],
        capstoneProject: "IoT Smart Greenhouse with Mobile Telemetry & Line Following Bot",
        skills: ["Cloud Architecture", "Python Programming", "Kinematics & Mechanics"]
      },
      {
        id: "senior",
        grade: "Grades 11 - 12",
        title: "Artificial Intelligence, Drones & Capstones",
        theme: "Predict & Deploy",
        color: "#FFB800",
        badge: "Level 4: Future Engineers",
        hours: "60 Hours / Academic Year",
        topics: [
          "Edge AI Computer Vision with ESP32-CAM & OpenCV",
          "Lightweight neural networks for object & gesture recognition",
          "Drone aerodynamics, quadcopter assembly & flight physics",
          "PCB layout design and custom hardware manufacturing",
          "Patent filing methodology & inter-school competition prep"
        ],
        tools: ["ESP32-CAM", "OpenCV / TensorFlow Lite", "Drone Kits", "EasyEDA PCB"],
        capstoneProject: "AI Autonomous Camera Surveillance Turret & Quadcopter Flight Rig",
        skills: ["Computer Vision", "Flight Aerodynamics", "Research & Prototyping"]
      }
    ]
  },
  labZones: {
    eyebrow: "Architectural Design",
    heading: "Inside An INNVERSE Innovation Lab: 5 Core Functional Zones",
    subtext: "We don't just supply kits in boxes. We transform empty classrooms into high-energy, safety-certified R&D maker spaces.",
    zones: [
      {
        id: "ideation",
        number: "01",
        name: "Ideation & Design Hub",
        icon: "💡",
        accent: "#00AEEF",
        desc: "Where brainstorms become blueprints. Equipped with magnetic collaboration whiteboards, CAD workstations, and design-thinking sprint tables.",
        equipment: ["Modular Collaboration Desks", "Magnetic Glass Idea Boards", "CAD / 3D Modeling Workstations", "Sprint Planning Wall"]
      },
      {
        id: "electronics",
        number: "02",
        name: "Electronics & Breadboard Station",
        icon: "🔌",
        accent: "#F58220",
        desc: "Anti-static workstations engineered for safe circuit prototyping, digital multimeters, component drawers, and regulated DC power supplies.",
        equipment: ["Anti-Static ESD Workmats", "Regulated 5V/12V DC Bench Supplies", "Digital Multimeters & Oscilloscope", "Modular Sensor Organizers"]
      },
      {
        id: "prototyping",
        number: "03",
        name: "Rapid Prototyping & 3D Print Bay",
        icon: "🧊",
        accent: "#0FB5A6",
        desc: "Turning digital 3D models into physical reality within hours. Houses enclosed high-precision 3D printers and laser fabrication tooling.",
        equipment: ["Dual-Extrusion 3D Printers", "Eco-Friendly PLA & PETG Spools", "Precision Hand Tools & Drills", "Enclosed Fume Filtration Unit"]
      },
      {
        id: "arena",
        number: "04",
        name: "Robotics Arena & Testing Track",
        icon: "🤖",
        accent: "#FFB800",
        desc: "Dedicated physical test grounds featuring high-contrast line-follower grids, obstacle mazes, and enclosed drone hover testing cages.",
        equipment: ["Regulation Line-Follower Mats", "Modular Maze Barrier Walls", "Drone Safety Net Enclosure", "Digital Speed Timing Sensors"]
      },
      {
        id: "iot-ai",
        number: "05",
        name: "AI & Cloud IoT Server Rack",
        icon: "📡",
        accent: "#0284C7",
        desc: "The nerve center connecting student hardware to the internet. Live weather stations, smart classroom sensors, and local edge computing nodes.",
        equipment: ["Local Edge Computing Node", "Live Telemetry Classroom Display", "Wi-Fi 6 IoT Gateway Hub", "Sensor Network Testing Bench"]
      }
    ]
  },
  hardwareKits: {
    eyebrow: "Proprietary Hardware",
    heading: "Modular, Industrial-Grade Kits Engineered For Hands-On Classrooms",
    subtext: "Designed by INNVERSE engineers to withstand enthusiastic student hands, repeated assembly, and real-world experiments.",
    kits: [
      {
        id: "robomaster",
        name: "INNVERSE RoboMaster 4WD Chassis Kit",
        category: "Robotics",
        icon: "🤖",
        badge: "Hardware Kit #1",
        desc: "A heavy-duty aluminum composite chassis with 4 DC high-torque motors, omni-directional wheels, and quick-click mounting brackets for sensors.",
        features: [
          "Laser-cut dual-deck anodized chassis",
          "4x High-torque metal gear motors with rubber traction tyres",
          "Quick-swap brackets for Ultrasonic & Dual IR sensors",
          "Rechargeable Li-ion battery pack with short-circuit protection"
        ]
      },
      {
        id: "iot-pack",
        name: "INNVERSE Cloud IoT & Weather Station Kit",
        category: "IoT & Cloud",
        icon: "📡",
        badge: "Hardware Kit #2",
        desc: "Everything students need to deploy live environmental stations, wireless crop irrigation models, and smart city telemetry.",
        features: [
          "ESP32 dual-core Wi-Fi & Bluetooth microcontroller",
          "DHT22 high-accuracy temperature & humidity sensor",
          "MQ-135 Air Quality & Hazardous gas detection probe",
          "OLED display module + 4-channel isolated relay driver"
        ]
      },
      {
        id: "ai-vision",
        name: "INNVERSE AI Vision & Edge Computing Pack",
        category: "Artificial Intelligence",
        icon: "👁️",
        badge: "Hardware Kit #3",
        desc: "Demystifying Artificial Intelligence through tactile hardware. Students deploy computer vision models directly onto edge micro-controllers.",
        features: [
          "ESP32-CAM optical sensor with MicroSD storage",
          "Dual-axis pan & tilt servo tracking assembly",
          "Pre-trained classification models for face & color tracking",
          "USB serial programmer with plug-and-play jumper ribbon"
        ]
      },
      {
        id: "circuit-master",
        name: "INNVERSE SafeElectronics Prototyping Station",
        category: "Electronics",
        icon: "⚡",
        badge: "Hardware Kit #4",
        desc: "The foundation of all electronics learning. Over 30 modular sensor blocks and safety-shielded breadboards.",
        features: [
          "Regulated 5V/3.3V dual-rail breadboard power supply",
          "30+ snap-fit sensors (LDR, Sound, Touch, PIR, Buzzer, LEDs)",
          "Jumper wire organizers & multi-range digital multimeter",
          "100% low-voltage DC kid-safe architecture"
        ]
      }
    ]
  },
  competitions: {
    eyebrow: "Championship Mentorship",
    heading: "From School Lab To Global Olympiad Podiums",
    subtext: "We prepare and mentor student teams to represent their school in top national and international robotics & innovation competitions.",
    events: [
      {
        name: "World Robot Olympiad (WRO)",
        tag: "International",
        icon: "🏆",
        desc: "Prestigious global robotics challenge fostering creativity and problem-solving through autonomous robot missions."
      },
      {
        name: "FIRST LEGO League (FLL)",
        tag: "Global STEM",
        icon: "🤖",
        desc: "Hands-on robotics competition guiding students through real-world scientific themes and robotics design."
      },
      {
        name: "ATL Marathon (NITI Aayog)",
        tag: "National Flagship",
        icon: "🇮🇳",
        desc: "India's largest national innovation challenge encouraging grassroots student inventions and social impact prototypes."
      },
      {
        name: "CBSE National Science Exhibition",
        tag: "Board Affiliated",
        icon: "🔬",
        desc: "Premier annual exhibition for CBSE partner schools to showcase student technology and science models."
      },
      {
        name: "Smart India Hackathon (Junior)",
        tag: "Ministry of Education",
        icon: "💻",
        desc: "National software & hardware hackathon for school innovators solving real government & civic challenges."
      }
    ],
    highlight: "100% of our partner school competition teams receive dedicated mentor coaching, chassis fabrication, and mock judging trials."
  },
  safetyCompliance: {
    eyebrow: "Zero-Risk Standards",
    heading: "Uncompromising Safety, Quality & Reliability Standards",
    subtext: "School safety is our non-negotiable priority. Every INNVERSE component and lab protocol is designed to exceed institutional safety benchmarks.",
    pillars: [
      {
        icon: "⚡",
        title: "100% Kid-Safe Low Voltage",
        desc: "All student lab kits operate strictly at 5V to 12V DC power. Zero dangerous 220V AC exposure at student workstations."
      },
      {
        icon: "🛡️",
        title: "Short-Circuit & Reverse Polarity Protection",
        desc: "Smart power distribution modules automatically trip within 0.01 seconds if a student accidentally miswires a circuit."
      },
      {
        icon: "🔄",
        title: "48-Hour Rapid Replacement Guarantee",
        desc: "No student project sits stalled. Damaged sensors or controllers are replaced within 48 hours under our school maintenance SLA."
      },
      {
        icon: "📜",
        title: "NEP-2020 & NCF-SE 2023 Aligned",
        desc: "Curriculum seamlessly integrates with CBSE Subject 417 (AI), Coding, and experiential STEM pedagogical guidelines."
      }
    ]
  },
  faq: {
    eyebrow: "Frequently Answered Questions",
    heading: "Everything School Leaders & Educators Need To Know",
    tabs: [
      { id: "principals", label: "For Principals & Trustees" },
      { id: "teachers", label: "For STEM Teachers" },
      { id: "parents", label: "For Parents & Students" }
    ],
    questions: {
      principals: [
        {
          q: "How much classroom space is required to set up an INNVERSE Innovation Lab?",
          a: "Our modular setups are designed for flexibility. A Starter Lab comfortably fits in 300–500 sq ft, while our Advanced and Center of Excellence Labs require 600–1000+ sq ft. We provide customized 2D/3D floorplan blueprints based on your exact room dimensions."
        },
        {
          q: "Does this align with NEP 2020 and CBSE curriculum guidelines?",
          a: "Yes, 100%. INNVERSE curriculum directly fulfills the NEP-2020 mandates for mandatory coding from Grade 6 onwards, scientific temper development, and hands-on vocational exposure. It also directly maps to CBSE Skill Subjects including Artificial Intelligence (Code 417), Coding, and Information Technology."
        },
        {
          q: "How does this benefit school admissions and marketing?",
          a: "An active INNVERSE Innovation Lab is one of the highest-converting focal points during school campus tours. Schools host annual Tech Expos, showcase working student robots on social media, and feature student competition wins, giving parents tangible proof of modern future-skills education."
        },
        {
          q: "What ongoing maintenance and warranty support is provided?",
          a: "All lab packages include our 48-Hour Component Replacement Guarantee, regular mentor visits, annual hardware refresh options, and a dedicated school relationship manager."
        }
      ],
      teachers: [
        {
          q: "Do our existing teachers need prior robotics or coding degrees?",
          a: "No! We train existing science, math, or computer teachers through our comprehensive Faculty Masterclasses. We provide ready-to-teach slide presentations, student worksheets, step-by-step schematics, and code keys so any passionate teacher can lead confident classes."
        },
        {
          q: "How are student assessments and grading handled?",
          a: "We provide rubrics for project-based evaluation, assessing problem definition, circuit correctness, code efficiency, and teamwork — fully ready for report cards and CBSE internal assessments."
        },
        {
          q: "Can teachers use CircuitLab for homework or pre-lab preparation?",
          a: "Yes! CircuitLab is cloud-based and accessible from home on laptops, tablets, or phones. Teachers can assign virtual simulation tasks before students touch real physical components in the lab."
        }
      ],
      parents: [
        {
          q: "Will this increase my child's recreational screen time?",
          a: "No — it fundamentally transforms passive screen consumption into active creation. Instead of scrolling social media or playing video games, students use computers as engineering tools to code physical microcontrollers, sensors, and robots."
        },
        {
          q: "At what age should my child start learning robotics and coding?",
          a: "We introduce visual logic and mechanics starting from Grade 3 (ages 8–9). By Grades 6–8, students naturally transition into real C++ programming and microcontroller hardware without feeling overwhelmed."
        },
        {
          q: "How does this help in future career and college admissions?",
          a: "Hands-on projects, national hackathon participation, and technical portfolios set students apart for engineering, data science, and global university admissions. They graduate from school having built 10+ real-world prototypes."
        }
      ]
    }
  }
};


