import avatarImg from "assets/images/Avatar.png";
import './introduction.scss'

const Introduction = () => {
    return(
        <div className="introduction">
            <div className="introduction-image">
                <img src={avatarImg} alt="" />
            </div>
            <h1>I do code and make content <span className="introduction-highlight">about it!</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab officiis accusamus possimus, dolore aliquid, libero amet sit, quos labore magni earum ipsa ut illo sed debitis veritatis aspernatur omnis.</p>
            <div className="introduction-btn">
                <div className="introduction-btn-getintouch">
                    <button className="introduction-btn-getintouch-none">My Project</button>
                </div>
                <div className="introduction-btn-downloadcv">
                    <button className="introduction-btn-getintouch-none">Download my CV</button>
                </div>
            </div>
        </div>
    )
}

export default Introduction;