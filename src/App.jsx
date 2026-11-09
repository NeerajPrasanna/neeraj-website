
import { useState } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import {
  FaUser, FaFolderOpen, FaBriefcase, FaGraduationCap,
  FaAward, FaEnvelope, FaGithub, FaLinkedin, FaFileAlt,
  FaTh, FaTimes, FaMinus, FaExpand, FaSun, FaMoon,
  FaLaptopCode, FaTerminal
} from "react-icons/fa";

import HeroTitle from "./Hero.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import ContactForm from "./ContactForm.jsx";

import "./App.css";

const applications = [
  { id: "about", name: "About Me", icon: FaUser, color: "#60a5fa" },
  { id: "projects", name: "Projects", icon: FaFolderOpen, color: "#a78bfa" },
  { id: "experience", name: "Experience", icon: FaBriefcase, color: "#34d399" },
  { id: "education", name: "Education", icon: FaGraduationCap, color: "#fbbf24" },
  { id: "certifications", name: "Certifications", icon: FaAward, color: "#fb923c" },
  { id: "contact", name: "Contact", icon: FaEnvelope, color: "#f472b6" },
  { id: "terminal", name: "Terminal", icon: FaTerminal, color: "#a3e635" },
  { id: "github", name: "GitHub", icon: FaGithub, color: "#e2e8f0" },
  { id: "linkedin", name: "LinkedIn", icon: FaLinkedin, color: "#60a5fa" },
];

const initialApps = ["about", "projects", "experience", "contact"];

function AboutApp() {
  return (
    <div className="app-page about-page">
      <div className="page-eyebrow">01 / INTRODUCTION</div>
      <h1>Hey, I'm <span>Neeraj Prasanna.</span></h1>

      <div className="about-role">
        <HeroTitle />
      </div>

      <p className="page-lead">
        I'm an Electronics and Computer Engineering student at VIT Chennai,
        interested in building systems at the intersection of embedded
        engineering, artificial intelligence and software.
      </p>

      <p>
        I enjoy taking ideas from concept to implementation — whether that's
        building an embedded system, experimenting with AI agents or
        developing software applications.
      </p>

      <p>
        Outside technology, I enjoy composing music, photography,
        editing and writing.
      </p>

      <div className="about-stats">
        <div><strong>03+</strong><span>Experience entries</span></div>
        <div><strong>AI + HW</strong><span>Areas of interest</span></div>
        <div><strong>VIT</strong><span>Chennai</span></div>
      </div>

      <div className="app-socials">
        <a href="https://github.com/NeerajPrasanna" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub ↗
        </a>
        <a href="https://www.linkedin.com/in/neerajprasanna/" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn ↗
        </a>
      </div>
    </div>
  );
}

function EducationApp() {
  return (
    <div className="app-page">
      <div className="page-eyebrow">04 / EDUCATION</div>
      <h1>Academic background.</h1>

      <div className="info-card">
        <span className="card-kicker">2023 — 2027 (EXPECTED)</span>
        <h2>Vellore Institute of Technology</h2>
        <p>B.Tech — Electronics and Computer Engineering</p>
        <span className="card-location">Chennai, Tamil Nadu, India</span>
      </div>

      <h3 className="subheading">Areas of study and interest</h3>
      <div className="tag-list">
        {["Electronics", "Computer Engineering", "Embedded Systems",
          "Artificial Intelligence", "Machine Learning", "IoT"].map(item =>
            <span key={item}>{item}</span>
          )}
      </div>
    </div>
  );
}

function CertificationsApp() {
  const certificates = [
    {
      title: "Oracle Generative AI Professional",
      issuer: "Oracle",
      date: "July 2025",
      category: "GENERATIVE AI"
    },
    {
      title: "Software Testing",
      issuer: "IIIT Bangalore",
      date: "November 2024",
      category: "SOFTWARE ENGINEERING"
    },
    {
      title: "British Airways Data Science Job Simulation",
      issuer: "Forage",
      date: "January 2026",
      category: "DATA SCIENCE"
    },
    {
      title: "Robotics and Controls Job Simulation",
      issuer: "Johnson & Johnson · Forage",
      date: "May 2026",
      category: "ROBOTICS"
    },
  ];

  return (
    <div className="app-page">
      <div className="page-eyebrow">05 / CREDENTIALS</div>
      <h1>Certifications & programs.</h1>

      <div className="certificate-list">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={certificate.title}>
            <div className="certificate-icon"><FaAward /></div>
            <div>
              <span className="card-kicker">{certificate.category}</span>
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              <span className="card-location">{certificate.date}</span>
            </div>
            <span className="certificate-number">0{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TerminalApp({ openApp }) {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([
    "NEER.OS Terminal [Version 1.0]",
    "Welcome to Neeraj's workspace.",
    "Type 'help' to see available commands.",
  ]);

  const runCommand = (event) => {
    event.preventDefault();
    const input = command.trim().toLowerCase();
    if (!input) return;

    const commands = {
      help: "Available: about, projects, experience, education, contact, github, linkedin, clear",
      about: "Neeraj Prasanna — Electronics and Computer Engineering student, VIT Chennai.",
      projects: "Opening Projects...",
      experience: "Opening Experience...",
      education: "Opening Education...",
      contact: "Opening Contact...",
      github: "github.com/NeerajPrasanna",
      linkedin: "linkedin.com/in/neerajprasanna/",
    };

    if (input === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    const response = commands[input] || `Command not found: ${input}`;

    setHistory(previous => [...previous, `visitor@neer-os:~$ ${input}`, response]);

    if (["projects", "experience", "education", "contact"].includes(input)) {
      openApp(input);
    }

    setCommand("");
  };

  return (
    <div className="terminal-app">
      <div className="terminal-output">
        {history.map((line, index) => <div key={index}>{line}</div>)}
      </div>
      <form className="terminal-input" onSubmit={runCommand}>
        <span>visitor@neer-os:~$</span>
        <input
          value={command}
          onChange={event => setCommand(event.target.value)}
          autoFocus
          placeholder="Type a command..."
        />
      </form>
    </div>
  );
}

function ApplicationContent({ id, openApp }) {
  switch (id) {
    case "about":
      return <AboutApp />;
    case "projects":
      return <div className="existing-component"><Projects /></div>;
    case "experience":
      return <div className="existing-component"><Experience /></div>;
    case "education":
      return <EducationApp />;
    case "certifications":
      return <CertificationsApp />;
    case "contact":
      return (
        <div className="app-page">
          <div className="page-eyebrow">06 / GET IN TOUCH</div>
          <h1>Let's build something.</h1>
          <p className="page-lead">
            Have an interesting project, opportunity or collaboration in mind?
            I'd love to hear from you.
          </p>
          <div className="contact-app-form"><ContactForm /></div>
          <p className="contact-email">
            Or email directly: <a href="mailto:neerajpv2005@gmail.com">neerajpv2005@gmail.com</a>
          </p>
        </div>
      );
    case "terminal":
      return <TerminalApp openApp={openApp} />;
    default:
      return null;
  }
}

function AppWindow({
  id,
  index,
  focused,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  maximized,
  openApp,
}) {
  const app = applications.find(item => item.id === id);
  if (!app) return null;

  const Icon = app.icon;
  const dragControls = useDragControls();
  return (
    <motion.div
      className={`application-window ${focused ? "focused" : ""} ${maximized ? "maximized" : ""}`}
      style={{
        zIndex: focused ? 100 : 20 + index,
        left: `calc(50% - 430px + ${index * 24}px)`,
        top: `${75 + index * 22}px`,
      }}
      initial={{ opacity: 0, scale: 0.92, y: 25 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 15 }}
      transition={{ duration: 0.22 }}
      drag={!maximized}
      dragControls={dragControls}
      dragMomentum={false}
      dragListener={false}
      onPointerDown={onFocus}
    >
      <div
        className="window-titlebar"
        onPointerDown={(event) => {
          onFocus();
          if (!maximized && !event.target.closest("button")) {
            dragControls.start(event);
          }
        }}
        onDoubleClick={onMaximize}
        style={{ cursor: maximized ? "default" : "grab" }}
      >
        <div className="window-controls">
          <button className="window-close" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>
          <button className="window-minimize" onClick={onMinimize} aria-label="Minimize">
            <FaMinus />
          </button>
          <button className="window-maximize" onClick={onMaximize} aria-label="Maximize">
            <FaExpand />
          </button>
        </div>

        <div className="window-title">
          <Icon />
          <span>{app.name}</span>
        </div>


      </div>

      <div className="window-content">
        <ApplicationContent id={id} openApp={openApp} />
      </div>
    </motion.div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [launcherOpen, setLauncherOpen] = useState(false);
  const [windows, setWindows] = useState([]);
  const [focused, setFocused] = useState(null);

  const openApp = (id) => {
    if (id === "github") {
      window.open("https://github.com/NeerajPrasanna", "_blank", "noopener,noreferrer");
      return;
    }

    if (id === "linkedin") {
      window.open("https://www.linkedin.com/in/neerajprasanna/", "_blank", "noopener,noreferrer");
      return;
    }

    setWindows(previous => {
      const exists = previous.find(item => item.id === id);

      if (exists) {
        return previous.map(item =>
          item.id === id
            ? { ...item, minimized: false }
            : item
        );
      }

      return [...previous, {
        id,
        minimized: false,
        maximized: false,
        order: previous.length,
      }];
    });

    setFocused(id);
    setLauncherOpen(false);
  };

  const closeApp = (id) => {
    setWindows(previous => previous.filter(item => item.id !== id));
    setFocused(null);
  };

  const minimizeApp = (id) => {
    setWindows(previous =>
      previous.map(item =>
        item.id === id ? { ...item, minimized: true } : item
      )
    );
    setFocused(null);
  };

  const maximizeApp = (id) => {
    setWindows(previous =>
      previous.map(item =>
        item.id === id
          ? { ...item, maximized: !item.maximized }
          : item
      )
    );
  };

  const focusApp = (id) => {
    setFocused(id);
  };

  const visibleWindows = windows.filter(item => !item.minimized);

  return (
    <div className={`desktop-shell ${darkMode ? "dark" : "light"}`}>
      <main className="desktop-area">
        <div className="desktop-wallpaper">
          <div className="wallpaper-orb orb-one" />
          <div className="wallpaper-orb orb-two" />
          <div className="wallpaper-grid" />
        </div>

        <div className="desktop-identity">

          <h1>NEERAJ<span>.</span></h1>
          <p>Engineering ideas into reality.</p>
          <div className="identity-line" />
          <small>ELECTRONICS · SOFTWARE · AI</small>
        </div>

        <div className="desktop-icons">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.button
                className="desktop-icon"
                key={app.id}
                onClick={() => openApp(app.id)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.045 }}
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="desktop-icon-art" style={{ "--icon-color": app.color }}>
                  <Icon />
                </span>
                <span>{app.name}</span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {visibleWindows.map((item, index) => (
            <AppWindow
              key={item.id}
              id={item.id}
              index={index}
              focused={focused === item.id}
              onFocus={() => focusApp(item.id)}
              onClose={() => closeApp(item.id)}
              onMinimize={() => minimizeApp(item.id)}
              onMaximize={() => maximizeApp(item.id)}
              maximized={item.maximized}
              openApp={openApp}
            />
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {launcherOpen && (
            <>
              <motion.div
                className="launcher-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLauncherOpen(false)}
              />
              <motion.div
                className="app-launcher"
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
              >
                <div className="launcher-heading">
                  <div>
                    <span>APPLICATIONS</span>
                    <h2>What would you like to explore?</h2>
                  </div>
                  <button onClick={() => setLauncherOpen(false)} aria-label="Close launcher">
                    <FaTimes />
                  </button>
                </div>

                <div className="launcher-grid">
                  {applications.map(app => {
                    const Icon = app.icon;
                    return (
                      <button key={app.id} onClick={() => openApp(app.id)}>
                        <span style={{ "--icon-color": app.color }}><Icon /></span>
                        {app.name}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>

      <footer className="desktop-dock">
        <button className="dock-launcher" onClick={() => setLauncherOpen(!launcherOpen)} aria-label="Applications">
          <FaTh />
        </button>

        <div className="dock-divider" />

        {applications.filter(app =>
          windows.some(item => item.id === app.id)
        ).map(app => {
          const Icon = app.icon;
          const activeWindow = windows.find(item => item.id === app.id);

          return (
            <button
              className={`dock-item ${focused === app.id ? "active" : ""}`}
              key={app.id}
              title={app.name}
              onClick={() => {
                if (!activeWindow.minimized && focused === app.id) {
                  minimizeApp(app.id);
                } else {
                  openApp(app.id);
                }
              }}
            >
              <Icon />
              <i />
            </button>
          );
        })}

        <div className="dock-spacer" />

        <a className="dock-external" href="https://github.com/NeerajPrasanna" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a className="dock-external" href="https://www.linkedin.com/in/neerajprasanna/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <span className="dock-clock">NP. / 2026</span>
      </footer>
    </div>
  );
}

export default App;
