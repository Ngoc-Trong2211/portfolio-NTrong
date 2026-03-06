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
                    backend: ["Java", "Spring Boot", "Spring Security", "OAuth2", "MySQL"],
                    tools: ["Git", "Postman", "VS Code"],
                },
                keyFeatures: [
                    "Browse and search job listings with a clean, responsive interface",
                    "View detailed job information with structured sections",
                    "Secure authentication and authorization with Spring Security",
                    "Backend APIs designed for scalable job and company management",
                ],
                sourceCode: {
                    frontendUrl: "LINK_GITHUB_FE",
                    backendUrl: "https://github.com/Ngoc-Trong2211/nt-viec",
                },
            },
            {
                id: "taskpilot",
                title: "TaskPilot – Task Management Platform",
                overview:
                    "TaskPilot is a full-stack task management application designed to help individuals and small teams plan, track, and deliver work efficiently. It combines a modern dashboard experience with a secure, well-structured API for reliable day-to-day productivity.",
                techStack: {
                    frontend: ["React", "TypeScript", "SCSS", "Ant Design", "React Router"],
                    backend: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "JPA/Hibernate"],
                    tools: ["Git", "Docker", "Swagger/OpenAPI", "Postman"],
                },
                keyFeatures: [
                    "Kanban-style task workflow with status-based organization",
                    "User authentication with JWT and role-based access control",
                    "Create, assign, and prioritize tasks with due dates and labels",
                    "Advanced filtering and search for fast task discovery",
                    "Activity history to track changes and collaboration",
                    "Validation and error handling for consistent API behavior",
                ],
                sourceCode: {
                    frontendUrl: "LINK_GITHUB_TASKPILOT_FE",
                    backendUrl: "LINK_GITHUB_TASKPILOT_BE",
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