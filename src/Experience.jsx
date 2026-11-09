
import React, { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
} from "framer-motion";
import "./Experience.css";

const experiences = [
    {
        number: "01",
        category: "ENGINEERING / RESEARCH",
        role: "Engineering Intern",
        company: "Center for Advanced Materials and Innovative Technologies",
        location: "VIT Chennai, India",
        type: "Internship",
        project: "Solar Panel Cleaning Robot",
        description:
            "Designed and implemented a working prototype of an autonomous solar panel cleaning robot, combining mechanical design, embedded electronics and software control.",
        highlights: [
            "Designed the robot architecture for cleaning inclined solar panels.",
            "Developed the embedded control system using Raspberry Pi.",
            "Integrated motor drivers, DC motors and battery management components.",
            "Built a wireless control interface for robot movement and cleaning operations.",
        ],
        tags: ["Robotics", "Raspberry Pi", "Embedded Systems", "IoT"],
        accent: "robot",
    },
    {
        number: "02",
        category: "CONTENT / TECHNOLOGY",
        role: "Technical Content Intern",
        company: "SUKI SOFTWARE SOLUTIONS PVT LTD",
        location: "Chennai, India",
        period: "Jun 2025 — Jul 2025",
        type: "Hybrid · Internship",
        project: "ERP Technology & Research",
        description:
            "Translated technical research into accessible industry insights, helping communicate the company's expertise in enterprise software and ERP solutions.",
        highlights: [
            "Researched emerging ERP technologies, trends and enterprise applications.",
            "Authored technical blog articles to strengthen the company's industry presence.",
            "Aligned technical content with marketing objectives and brand positioning.",
        ],
        tags: ["Technical Writing", "ERP", "Research", "Content Strategy"],
        accent: "content",
    },
    {
        number: "03",
        category: "HARDWARE / ENERGY SYSTEMS",
        role: "Project Contributor",
        company: "Green Field Energy Solution",
        location: "West Bengal, India",
        period: "Feb 2024 — Mar 2024",
        type: "Remote · Project",
        project: "Real-time Battery Management System",
        description:
            "Collaborated with peers to develop an Arduino-based battery monitoring prototype designed to provide real-time visibility into battery operating conditions.",
        highlights: [
            "Implemented continuous battery voltage monitoring using an Arduino Uno.",
            "Developed a three-LED indication system for undercharged, optimal and overcharged states.",
            "Integrated a resistor voltage-divider circuit and Hall effect current sensor.",
            "Processed analog sensor readings to monitor real-time voltage and current conditions.",
            "Delivered the working prototype as part of a sustainable energy innovation initiative.",
        ],
        tags: ["Arduino", "Battery Management", "Sensors", "Electronics"],
        accent: "battery",
    },
];

function ExperienceCard({ item, index }) {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start 95%", "end 15%"],
    });

    // Scroll-driven 3D depth
    const rotateX = useTransform(
        scrollYProgress,
        [0, 0.45, 1],
        [9, 0, -4]
    );

    const translateY = useTransform(
        scrollYProgress,
        [0, 0.45, 1],
        [65, 0, -20]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.85, 1],
        [0.25, 1, 1, 0.65]
    );

    // Interactive mouse tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {
        stiffness: 150,
        damping: 20,
    });

    const springY = useSpring(mouseY, {
        stiffness: 150,
        damping: 20,
    });

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        mouseX.set((0.5 - y) * 7);
        mouseY.set((x - 0.5) * 9);
    }

    function resetTilt() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.article
            className="experience-entry"
            ref={cardRef}
            style={{
                rotateX,
                y: translateY,
                opacity,
                transformPerspective: 1200,
            }}
        >
            <div className="experience-number">
                <span>{item.number}</span>
                <div className="experience-timeline-dot" />
            </div>

            <motion.div
                className={`experience-card ${item.accent}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetTilt}
                style={{
                    rotateX: springX,
                    rotateY: springY,
                }}
                whileHover={{
                    scale: 1.015,
                    transition: { duration: 0.25 },
                }}
            >
                <div className="experience-card-top">
                    <span className="experience-category">
                        {item.category}
                    </span>
                    <span className="experience-period">
                        {item.period || item.type}
                    </span>
                </div>

                <div className="experience-main">
                    <div className="experience-info">
                        <h3>{item.role}</h3>
                        <h4>{item.company}</h4>

                        <div className="experience-location">
                            <span>↗</span> {item.location}
                        </div>

                        <p className="experience-description">
                            {item.description}
                        </p>
                    </div>

                    <div className="experience-visual">
                        <div className="experience-visual-number">
                            {item.number}
                        </div>
                        <span>{item.project}</span>
                        <div className="visual-decoration">
                            {item.accent === "robot" && "◈"}
                            {item.accent === "content" && "✳"}
                            {item.accent === "battery" && "⌁"}
                        </div>
                    </div>
                </div>

                <div className="experience-divider" />

                <div className="experience-details">
                    <span className="details-label">WHAT I WORKED ON</span>

                    <ul>
                        {item.highlights.map((highlight, i) => (
                            <li key={i}>
                                <span className="highlight-marker">↳</span>
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="experience-tags">
                    {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>

                <div className="experience-card-footer">
                    <span>EXPERIENCE / {item.number}</span>
                    <span>0{index + 1} — 03</span>
                </div>
            </motion.div>
        </motion.article>
    );
}

export default function Experience() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end end"],
    });

    const progressScale = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <section
            className="experience-section"
            id="experience"
            ref={sectionRef}
        >
            <div className="experience-heading">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-eyebrow">
                        03 / THE JOURNEY SO FAR
                    </span>

                    <h2>
                        Experience<span className="heading-dot">.</span>
                    </h2>

                    <p>
                        Building things, exploring technology and turning
                        ideas into working systems.
                    </p>
                </motion.div>

                <div className="experience-heading-aside">
                    <span>SELECTED EXPERIENCE</span>
                    <span>2024 — PRESENT</span>
                </div>
            </div>

            <div className="experience-timeline">
                <div className="timeline-track">
                    <motion.div
                        className="timeline-progress"
                        style={{ scaleY: progressScale }}
                    />
                </div>

                <div className="experience-list">
                    {experiences.map((item, index) => (
                        <ExperienceCard
                            key={item.number}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                className="experience-endnote"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <span>THE JOURNEY CONTINUES</span>
                <span>MORE TO BUILD. MORE TO LEARN. ↗</span>
            </motion.div>
        </section>
    );
}
