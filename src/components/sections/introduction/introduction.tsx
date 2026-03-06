import avatarImg from "assets/images/Avatar.png";
import './introduction.scss'

const Introduction = () => {
    const handleScrollProject = () => {
        const projectSection = document.getElementById("projects");
        if (projectSection){
            projectSection.scrollIntoView({behavior: "smooth"});
        }
    }

    return(
        <div className="introduction">
            <div className="introduction-image">
                <img src={avatarImg} alt="" />
            </div>
            <h1>I do code and make content <span className="introduction-highlight">about it!</span></h1>
            <p className="introduction-text">
                Welcome to my portfolio! I'm a Java and Web Developer who enjoys building modern web applications and learning new technologies. Here you can explore some of my projects and see the technologies I work with.
            </p>
            <div className="introduction-btn">
                <div className="introduction-btn-getintouch">
                    <button
                        className="introduction-btn-getintouch-none"
                        onClick={handleScrollProject}    
                    >My Projects</button>
                </div>
                <div className="introduction-btn-downloadcv">
                    <a
                        href="/prj/prjOutline.docx"
                        download
                        className="introduction-btn-getintouch-none"
                    >
                        Download my Project Outline
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Introduction;