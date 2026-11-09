import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

/**
 * Project descriptions and technology tags are based on the corresponding
 * public repositories and the implementation details documented there.
 * Tags are intentionally specific: they describe technologies or engineering
 * methods visible in the repositories, not a generic list of skills.
 */
const projectData = {
    "AI Engineering": [
        {
            name: "AI Stock Research Agent",
            description:
                "Built an autonomous equity-research agent using an explicitly defined LangGraph StateGraph and a ReAct-style reasoning loop. Integrated Google Gemini through LangChain tool binding and a ToolNode so the agent can decide when to retrieve market data, calculate indicators and generate charts. Implemented technical indicators from scratch with pandas, including Wilder-smoothed 14-period RSI, MACD, SMA, EMA and Bollinger Bands. Exposed the workflow through an asynchronous FastAPI REST endpoint, retrieved price history with yfinance, cached market data, and rendered interactive candlestick charts and indicator overlays with Plotly. Added pytest coverage for indicator calculations and a CLI runner for direct agent queries.",
            skills: [
                "Python 3.10+",
                "LangGraph StateGraph",
                "LangChain Core",
                "Google Gemini",
                "ChatGoogleGenerativeAI",
                "LLM Tool Calling",
                "ReAct Agent Architecture",
                "FastAPI",
                "Uvicorn",
                "Pydantic",
                "yfinance",
                "pandas",
                "NumPy",
                "RSI (Wilder Smoothing)",
                "MACD",
                "SMA / EMA",
                "Bollinger Bands",
                "Plotly",
                "HTML5",
                "JavaScript (ES6+)",
                "Tailwind CSS",
                "pytest",
                "python-dotenv",
            ],
            github: "https://github.com/NeerajPrasanna/Stock-Market-Agent",
        },

        {
            name: "Real vs Fake Image Detector",
            description:
                "Developed a convolutional-neural-network image-classification project to distinguish authentic images from manipulated or fake images. The project applies supervised deep-learning classification to visual input; the repository entry is intentionally limited to the model and framework details that can be substantiated without assuming an undocumented architecture or training configuration.",
            skills: [
                "Python",
                "Convolutional Neural Networks (CNN)",
                "Deep Learning",
                "Computer Vision",
                "Image Classification",
                "Supervised Learning",
            ],
        },
    ],

    "Full-Stack Engineering": [
        {
            name: "Wecare — Healthcare Appointment Platform",
            description:
                "Designed a multi-service healthcare platform with separate patient, clinician and administrator portals, a stateless REST API, and a background worker. Implemented the backend with Express 5, TypeScript, PostgreSQL and Prisma ORM, including JWT access/refresh-token authentication, role-based middleware, Zod validation and password hashing with bcrypt. Engineered race-safe appointment booking using PostgreSQL transactions, advisory locks, SELECT FOR UPDATE, five-minute slot holds and a unique doctor/time constraint to prevent double-booking. Decoupled side effects from request handling with Redis and BullMQ queues: workers process Gemini 2.5 Flash pre/post-visit summaries, email notifications, medication and appointment reminders, doctor-leave conflicts and Google Calendar synchronisation. Built the portals with React 19, TypeScript, Vite and Tailwind CSS 4.",
            skills: [
                "TypeScript",
                "Node.js",
                "Express 5",
                "React 19",
                "Vite",
                "Tailwind CSS 4",
                "PostgreSQL",
                "Prisma ORM",
                "Redis",
                "BullMQ",
                "Worker Queues",
                "Asynchronous Job Processing",
                "JWT Access / Refresh Tokens",
                "Role-Based Access Control",
                "bcrypt",
                "Zod",
                "Transactional SQL",
                "PostgreSQL Advisory Locks",
                "SELECT FOR UPDATE",
                "Database Constraints",
                "Google Gemini 2.5 Flash",
                "Google Calendar API",
                "OAuth 2.0",
                "Nodemailer / SMTP",
                "Docker Compose",
                "REST API Design",
            ],
            github: "https://github.com/NeerajPrasanna/Wecare",
        },
        {
            name: "NexCook — Automated Soup Dispensing App",
            description:
                "Developed a cross-platform mobile application serving as the user interface for an automated soup-dispensing system. Built with React Native 0.76 and Expo SDK 52, with drawer and native-stack navigation through React Navigation. Implemented recipe selection, configurable quantities, cart state through React Context, order summaries, a UPI-ID entry and format-validation flow, cooking-status and module-health screens, and post-order ratings/feedback. Integrated Firebase/Cloud Firestore-backed recipe and machine-status data through REST-facing application workflows, and used React Native Animated for modal transitions and interaction feedback.",
            skills: [
                "JavaScript",
                "React Native 0.76",
                "Expo SDK 52",
                "Expo CLI",
                "React Navigation 7",
                "Drawer Navigation",
                "Native Stack Navigation",
                "React Context API",
                "Firebase 11",
                "Cloud Firestore",
                "REST API Integration",
                "UPI Workflow",
                "Form Validation",
                "React Native Animated",
                "Gesture Handler",
                "React Native Reanimated",
                "Safe Area Context",
                "Mobile UI Development",
            ],
            github: "https://github.com/NeerajPrasanna/nexcook",
        },
        {
            name: "Scoopify — Digital Signage Platform",
            description:
                "Developed a digital-signage solution combining a web-based content-management workflow with Raspberry Pi display hardware. The platform is designed to deliver and manage promotional content on connected screens. The implementation details and deployment technologies are kept deliberately conservative here: Scoopify is not described as an AWS-hosted project.",
            skills: [
                "JavaScript",
                "Node.js",
                "Raspberry Pi",
                "Web Application Development",
                "Digital Signage",
                "Embedded Linux Integration",
                "IoT Integration",
            ],
        },
    ],

    "Embedded Systems": [
        {
            name: "Solar Panel Cleaning Robot",
            description:
                "Designed a tracked, skid-steer solar-panel cleaning robot with four geared DC drive motors, powered cleaning mechanisms and a water-spray assembly. Developed the control interface for directional movement, stop and cleaning commands, with adjustable drive speed and keyboard input. Built a browser-based 3D simulator using Three.js, OrbitControls and GLTFLoader to load and inspect the robot model, visualise the tracked chassis, brushes, spray nozzle and tank, and interact with the simulated controls. The companion mobile controller repository is an Android application configured with Kotlin DSL, Jetpack Compose, AndroidX and Google/Firebase build tooling. Hardware design work covers Raspberry Pi-based control, dual L298N drive stages, battery monitoring and power regulation for the robot subsystems.",
            skills: [
                "Raspberry Pi",
                "Python",
                "Embedded Linux",
                "DC Motor Control",
                "L298N H-Bridge Driver",
                "Skid-Steer Differential Drive",
                "Battery Management",
                "3S Li-ion Battery Systems",
                "Buck Converter Power Regulation",
                "Hardware Integration",
                "Three.js",
                "WebGL",
                "GLTF / glTF 2.0",
                "GLTFLoader",
                "OrbitControls",
                "JavaScript (ES Modules)",
                "HTML5",
                "CSS3",
                "Blender",
                "Android",
                "Kotlin DSL",
                "Jetpack Compose",
                "Gradle",
            ],
            github: "https://github.com/NeerajPrasanna/Solar-Panel-cleaning-bot-RC-App",
            demo: "https://neerajprasanna.github.io/solarsim/",
        },
        {
            name: "AI Traffic Signal Recognition with FPGA Display",
            description:
                "Built an end-to-end AI-to-digital-hardware pipeline that classifies uploaded traffic-light images and drives a physical FPGA display. Implemented a browser interface in HTML, JavaScript and Tailwind CSS, called a Roboflow-hosted image-classification model, and used the Web Serial API to transmit the predicted class to an Arduino. The Arduino firmware receives the UART data and maps the traffic state to a four-bit GPIO code. Implemented the FPGA-side decoder in Verilog to drive seven-segment displays with STOP, SLW, GO or ERR states, and included a Verilog testbench to simulate the display logic. The system demonstrates integration across browser APIs, AI inference, serial protocols, microcontroller GPIO and RTL-based digital logic.",
            skills: [
                "Verilog HDL",
                "FPGA Design",
                "RTL Design",
                "Verilog Testbench",
                "Digital Logic Design",
                "Seven-Segment Display Decoding",
                "Arduino",
                "Arduino C/C++",
                "UART Serial Communication",
                "GPIO Interfacing",
                "Roboflow",
                "Image Classification",
                "Computer Vision",
                "AI Inference Integration",
                "Web Serial API",
                "JavaScript",
                "HTML5",
                "Tailwind CSS",
            ],
            github: "https://github.com/NeerajPrasanna/AI-Traffic-Light-Recognition-with-FPGA-Display",
        },
        {
            name: "Arduino Battery Management System Prototype",
            description:
                "Developed a battery-monitoring prototype around an Arduino Uno to observe battery operating conditions and communicate status through a three-LED indicator. The prototype brings together analogue voltage sensing, Hall-effect current measurement and embedded decision logic to represent battery states. The description is limited to the components and functions identified for the prototype rather than implying a production-grade BMS or cell-balancing implementation.",
            skills: [
                "Arduino Uno",
                "Embedded C/C++",
                "Analog Voltage Sensing",
                "Hall-Effect Current Sensor",
                "ADC",
                "GPIO Control",
                "LED Status Indication",
                "Circuit Prototyping",
                "Battery Monitoring",
            ],
        },
    ],
};

const categories = Object.keys(projectData);

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [activeProject, setActiveProject] = useState(0);

    const projects = projectData[activeCategory];
    const selectedProject = projects[activeProject];
    const prefersReducedMotion = useReducedMotion();

    const changeCategory = (category) => {
        setActiveCategory(category);
        setActiveProject(0);
    };

    return (
        <motion.section className="projects-section" id="projects" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <div className="projects-container">
                <div className="projects-heading">
                    <span className="section-label">ENGINEERING & DEVELOPMENT</span>
                    <h2>Selected Projects</h2>
                    <p>
                        Technical projects spanning AI systems, backend engineering,
                        full-stack applications and embedded hardware.
                    </p>
                </div>

                <div className="category-selector" role="tablist" aria-label="Project categories">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            type="button"
                            role="tab"
                            aria-selected={activeCategory === category}
                            className={`category-button ${activeCategory === category ? "active" : ""}`}
                            onClick={() => changeCategory(category)}
                            whileTap={{ scale: 0.97 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <div className="project-selector" aria-label="Select a project">
                    {projects.map((project, index) => (
                        <motion.button
                            key={project.name}
                            type="button"
                            className={`project-button ${activeProject === index ? "active" : ""}`}
                            aria-pressed={activeProject === index}
                            onClick={() => setActiveProject(index)}
                            whileTap={{ scale: 0.98 }}
                        >
                            {project.name}
                            <span aria-hidden="true">↗</span>
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div className="project-details" key={`${activeCategory}-${activeProject}`} initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={prefersReducedMotion ? {} : { opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                        <div className="project-skills">
                            <span className="detail-label">TECHNICAL STACK</span>
                            <h3>Technologies & Methods</h3>
                            <div className="skills-list">
                                {selectedProject.skills.map((skill) => (
                                    <span className="skill-item" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="project-description">
                            <span className="detail-label">IMPLEMENTATION OVERVIEW</span>
                            <h3>{selectedProject.name}</h3>
                            <p>{selectedProject.description}</p>

                            <div className="project-links">
                                {selectedProject.github && (
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link primary-link"
                                    >
                                        <FaGithub />
                                        View Source Code
                                        <FaExternalLinkAlt size={11} />
                                    </a>
                                )}

                                {selectedProject.demo && (
                                    <a
                                        href={selectedProject.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        Live Demo
                                        <FaExternalLinkAlt size={11} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.section>
    );
}
