import { useMemo, useState } from 'react';
import './project.scss'
import DetailProject from './detail.project';
import type { IProjectDetail } from './detail.project';

const Project = () => {
    const [isActive, setIsActive] = useState(false);
    const [isOpenDrawer, setIsOpDrawer] = useState(false);
    const [selectedProject, setSelectedProject] = useState<IProjectDetail | null>(null);

    const projects = useMemo<IProjectDetail[]>(
        () => [
            {
                id: "nt-viec",
                title: "NT-Viec – Job Search Website",
                overview:
                    "NT-Viec is a job search web application that helps users explore job opportunities from different companies. It focuses on a clean UI, fast browsing, and clear job detail views to improve the candidate experience.",
                techStack: {
                    frontend: ["React", "TypeScript", "SCSS", "Ant Design", "React Router"],
                    backend: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "JPA/Hibernate"],
                    tools: ["Git", "Postman", "VS Code"],
                },
                keyFeatures: [
                    "Advanced job search with filters for location, position, and company",
                    "Detailed job pages displaying requirements, benefits, and company information",
                    "Secure authentication and authorization using Spring Security and OAuth2",
                    "Job application workflow allowing users to apply and track applications",
                    "Admin and company management for creating, editing, and managing job postings",
                    "RESTful API architecture with validation, pagination, and error handling",
                ],
                sourceCode: {
                    frontendUrl: "https://github.com/Ngoc-Trong2211/fe-nt-viec",
                    backendUrl: "https://github.com/Ngoc-Trong2211/nt-viec",
                },
            },
            {
                id: "taskpilot",
                title: "NT-Kara - Online Karaoke Room Booking Platform",
                overview:
                    "NT-Kara is a web-based karaoke room booking system that allows users to easily browse available rooms, view detailed information, and make reservations online. The platform focuses on improving the booking experience through a clear interface and a structured backend system for managing rooms, schedules, and customer bookings.",
                techStack: {
                    frontend: [],
                    backend: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "JPA/Hibernate", "Spring AI"],
                    tools: ["Git", "Swagger/OpenAPI", "Postman", "Intellij"],
                },
                keyFeatures: [
                    "Browse karaoke rooms with detailed information such as capacity, price",
                    "Real-time room availability checking and online booking",
                    "Secure user authentication and role-based authorization",
                    "Booking management including reservation history and cancellation",
                    "Admin dashboard for managing rooms, schedules, and customer bookings",
                    "AI-powered chatbot to assist users with room recommendations and booking questions",
                    "RESTful APIs with validation and error handling for stable backend operations",
                ],
                sourceCode: {
                    frontendUrl: "",
                    backendUrl: "https://github.com/Ngoc-Trong2211/nt-kara",
                },
            },
        ],
        []
    );

    return (
        <>
            <div id="projects" className="projects">
                <h2 className="projects-title">MY PROJECTS</h2>
                <div className="projects-list">
                    {projects.map((p) => (
                        <div key={p.id} className="projects-card">
                            <div className="projects-image">
                                <img
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=60"
                                    alt={p.title}
                                />
                            </div>
                            <div className="projects-content">
                                <h3 className="projects-name">{p.title}</h3>
                                <div className="projects-btn">
                                    <button
                                        className="projects-btn-git"
                                        onClick={() => window.open(p.sourceCode.backendUrl, "_blank")}
                                    >
                                        <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "16px"}}>
                                            GitHub
                                        </span>
                                    </button>
                                    <button
                                        className={`projects-btn${isActive && selectedProject?.id === p.id ? "-active" : "-learn"}`}
                                        onClick={() => {
                                            setSelectedProject(p);
                                            setIsActive(true);
                                            setIsOpDrawer(true);
                                        }}
                                    >
                                        <img
                                            srcSet="./src/assets/images/arrow.png 2x"
                                            alt="arrow"
                                            className="projects-btn-learn-img"
                                        />
                                        <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#222222"}}>
                                            Learn more
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <DetailProject 
                setIsOpDrawer={setIsOpDrawer}
                isOpenDrawer={isOpenDrawer}
                setIsActive={setIsActive}
                project={selectedProject}
            ></DetailProject>
        </>
    )
}

export default Project;