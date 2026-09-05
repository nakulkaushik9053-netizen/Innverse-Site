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
  }
};

