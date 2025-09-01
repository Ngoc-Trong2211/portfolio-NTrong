import './about.scss'
import avatarImg from "assets/images/Avatar.png";

const About = () => {
    return (
        <div className='container'>
            <div className='container-header'>
                <div className='intro'>
                    <h3>Hello,</h3>
                    <h2>I'm Pham Vu Ngoc Trong</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni velit harum porro, sit ut nulla aspernatur eaque nesciunt cum rerum expedita esse perferendis ipsa quasi, saepe laborum. Vero, provident. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sequi fugit, tempora labore, cupiditate modi minima voluptas dignissimos aperiam eligendi provident exercitationem totam quo. Ab at quae veritatis nostrum sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquam iure itaque nulla cupiditate voluptates, ipsam expedita magnam dignissimos. Aliquid modi perspiciatis, corporis fugit provident non dignissimos ducimus adipisci vero.</p>
                </div>
                <div className='image'>
                    <img src={avatarImg} alt="" />
                </div>
            </div>
            <div className='container-education'>
                <h3>EDUCATION:</h3>
                <div className='education'>
                    <h4>abcbaaaaa</h4>
                    <p>...........</p>
                    <p>...........</p>
                </div>
            </div>
            <div className='container-contact'>
                <h3>FIND ME ON:</h3>
                <div className='email' style={{marginLeft: "20px", marginTop: "10px", display: "flex", alignItems: "center", gap: "10px"}}>
                    <img srcSet="./src/assets/images/email.png 2x" alt="" />
                    <p>abc@gmail.com</p>
                </div>
                <div className='logo-contact' style={{marginLeft: "20px", marginTop: "10px", display: "flex", alignItems: "center", gap: "10px"}}>
                    <a href="/" style={{width: "40px", height: "40px"}}><img srcSet="./src/assets/images/logof.png 2x" alt=""/></a>
                    <a href="/" style={{width: "40px", height: "40px"}}><img srcSet="./src/assets/images/logoi.png 2x" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default About;