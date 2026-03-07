import { useMemo, useState } from 'react';
import './project.scss'
import DetailProject from './detail.project';
import type { IProjectDetail } from './detail.project';
import { useLanguage } from '../../../context/LanguageContext';
import arrow from "../../../assets/images/arrow.png";

const Project = () => {
    const { lang } = useLanguage();
    const [isActive, setIsActive] = useState(false);
    const [isOpenDrawer, setIsOpDrawer] = useState(false);
    const [selectedProject, setSelectedProject] = useState<IProjectDetail | null>(null);

    const projects = useMemo<IProjectDetail[]>(
        () => [
            {
                id: "nt-viec",
                title: lang === "en" ? "NT-Viec – Job Search Website" : "NT-Viec – Website tìm kiếm việc làm",
                overview:
                    lang === "en"
                        ? "NT-Viec is a job search web application that helps users explore job opportunities from different companies. It focuses on a clean UI, fast browsing, and clear job detail views to improve the candidate experience."
                        : "NT-Viec là một ứng dụng web hỗ trợ tìm kiếm việc làm, giúp người dùng khám phá các cơ hội việc làm từ nhiều công ty khác nhau. Ứng dụng tập trung vào giao diện rõ ràng, tốc độ truy cập nhanh và trang chi tiết công việc trực quan để nâng cao trải nghiệm ứng viên.",
                techStack: {
                    frontend: ["React", "TypeScript", "SCSS", "Ant Design", "React Router"],
                    backend: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "JPA/Hibernate"],
                    tools: ["Git", "Postman", "VS Code"],
                },
                keyFeatures: lang === "en"
                    ? [
                        "Advanced job search with filters for location, position, and company",
                        "Detailed job pages displaying requirements, benefits, and company information",
                        "Secure authentication and authorization using Spring Security and OAuth2",
                        "Job application workflow allowing users to apply and track applications",
                        "Admin and company management for creating, editing, and managing job postings",
                        "RESTful API architecture with validation, pagination, and error handling",
                    ]
                    : [
                        "Tìm kiếm việc làm nâng cao với bộ lọc theo địa điểm, vị trí và công ty",
                        "Trang chi tiết công việc hiển thị yêu cầu, quyền lợi và thông tin công ty",
                        "Xác thực và phân quyền bảo mật bằng Spring Security và OAuth2",
                        "Quy trình nộp hồ sơ, cho phép người dùng ứng tuyển và theo dõi trạng thái",
                        "Quản lý tin tuyển dụng cho admin và nhà tuyển dụng: tạo, chỉnh sửa, quản lý bài đăng",
                        "Kiến trúc RESTful API với kiểm tra dữ liệu, phân trang và xử lý lỗi",
                    ],
                sourceCode: {
                    frontendUrl: "https://github.com/Ngoc-Trong2211/fe-nt-viec",
                    backendUrl: "https://github.com/Ngoc-Trong2211/nt-viec",
                },
            },
            {
                id: "taskpilot",
                title: lang === "en"
                    ? "NT-Kara - Online Karaoke Room Booking Platform"
                    : "NT-Kara - Nền tảng đặt phòng karaoke trực tuyến",
                overview:
                    lang === "en"
                        ? "NT-Kara is a web-based karaoke room booking system that allows users to easily browse available rooms, view detailed information, and make reservations online. The platform focuses on improving the booking experience through a clear interface and a structured backend system for managing rooms, schedules, and customer bookings."
                        : "NT-Kara là hệ thống đặt phòng karaoke trực tuyến, cho phép người dùng dễ dàng xem danh sách phòng, xem thông tin chi tiết và đặt phòng online. Nền tảng tập trung vào trải nghiệm đặt phòng thuận tiện với giao diện rõ ràng và hệ thống backend quản lý phòng, lịch đặt và khách hàng một cách chặt chẽ.",
                techStack: {
                    frontend: [],
                    backend: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "JPA/Hibernate", "Spring AI"],
                    tools: ["Git", "Swagger/OpenAPI", "Postman", "Intellij"],
                },
                keyFeatures: lang === "en"
                    ? [
                        "Browse karaoke rooms with detailed information such as capacity, price",
                        "Real-time room availability checking and online booking",
                        "Secure user authentication and role-based authorization",
                        "Booking management including reservation history and cancellation",
                        "Admin dashboard for managing rooms, schedules, and customer bookings",
                        "AI-powered chatbot to assist users with room recommendations and booking questions",
                        "RESTful APIs with validation and error handling for stable backend operations",
                    ]
                    : [
                        "Xem danh sách phòng karaoke với thông tin chi tiết như sức chứa, giá",
                        "Kiểm tra tình trạng phòng theo thời gian thực và đặt phòng trực tuyến",
                        "Xác thực người dùng an toàn và phân quyền theo vai trò",
                        "Quản lý đặt phòng gồm lịch sử đặt và hủy đặt",
                        "Trang quản trị cho phép quản lý phòng, lịch đặt và thông tin khách hàng",
                        "Chatbot AI hỗ trợ gợi ý phòng và giải đáp câu hỏi khi đặt chỗ",
                        "Hệ thống RESTful API với kiểm tra dữ liệu và xử lý lỗi đảm bảo backend ổn định",
                    ],
                sourceCode: {
                    frontendUrl: "",
                    backendUrl: "https://github.com/Ngoc-Trong2211/nt-kara",
                },
            },
        ],
        [lang]
    );

    return (
        <>
            <div id="projects" className="projects">
                <h2 className="projects-title">
                    {lang === "en" ? "MY PROJECTS" : "DỰ ÁN CỦA TÔI"}
                </h2>
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
                                            src={arrow}
                                            srcSet={`${arrow} 2x`}
                                            alt="arrow"
                                            className="projects-btn-learn-img"
                                        />
                                        <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#222222"}}>
                                            {lang === "en" ? "Learn more" : "Xem chi tiết"}
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