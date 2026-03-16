import avatarImg from "assets/images/Myavt.jpg";
import './introduction.scss'
import { useLanguage } from "../../../context/LanguageContext";

const Introduction = () => {
    const { lang } = useLanguage();
    const handleScrollProject = () => {
        const projectSection = document.getElementById("projects");
        if (projectSection){
            projectSection.scrollIntoView({behavior: "smooth"});
        }
    }

    return(
        <div className="introduction">
            <div className="introduction-image">
                <img src={avatarImg} alt="avatar" />
            </div>
            <h1>
                {lang === "en"
                    ? "I do code and make content "
                    : "Tôi viết code và tạo nội dung "}
                <span className="introduction-highlight">
                    {lang === "en" ? "about it!" : "về nó!"}
                </span>
            </h1>
            <p className="introduction-text">
                {lang === "en"
                    ? "Welcome to my portfolio! I'm a Java and Web Developer who enjoys building modern web applications and learning new technologies. Here you can explore some of my projects and see the technologies I work with."
                    : "Chào mừng bạn đến với portfolio của tôi! Tôi là một Java & Web Developer, yêu thích xây dựng các ứng dụng web hiện đại và học hỏi công nghệ mới. Tại đây, bạn có thể xem qua một số dự án và các công nghệ mà tôi đang sử dụng."}
            </p>
            <div className="introduction-btn">
                <div className="introduction-btn-getintouch">
                    <button
                        className="introduction-btn-getintouch-none"
                        onClick={handleScrollProject}
                    >
                        {lang === "en" ? "My Projects" : "Dự án của tôi"}
                    </button>
                </div>
                <div className="introduction-btn-downloadcv">
                    <a
                        href="/prj/Pham-Vu-Ngoc-Trong.pdf"
                        download
                        className="introduction-btn-getintouch-none"
                    >
                        {lang === "en" ? "Download my CV" : "Tải CV của tôi"}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Introduction;