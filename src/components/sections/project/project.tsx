import { useState } from 'react';
import './project.scss'
import DetailProject from './detail.project';

const Project = () => {
    const [isActive, setIsActive] = useState(false);
    const [isOpenDrawer, setIsOpDrawer] = useState(false);

    return (
        <>
            <div className="projects">
                <h2 className="projects-title">MY PROJECTS</h2>
                <div className={`projects-total ${isActive ? "active" : ""}`}>
                    <div className={`projects-body ${isActive ? "active" : ""}`}>
                        <div className='projects-image'>
                            <img src="https://images.unsplash.com/photo-1755519371418-2e0737bbfc9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="image project" />
                        </div>
                        <div className='projects-content'>
                            <h3 className='projects-name'>HTML CSS</h3>
                            <div className='projects-btn'>
                                <button className='projects-btn-git'><span style={{fontFamily: "'Poppins', sans-serif", fontSize: "16px"}}>Github</span></button>
                                <button className={`projects-btn${isActive ? "-active" : "-learn"}`}
                                    onClick={() => {
                                        setIsActive(!isActive);
                                        setIsOpDrawer(!isActive);
                                    }}
                                >
                                    <img srcSet="./src/assets/images/arrow.png 2x" alt="arrow" className='projects-btn-learn-img'/>
                                    <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#222222"}}>Learn more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DetailProject 
                setIsOpDrawer={setIsOpDrawer}
                isOpenDrawer={isOpenDrawer}
                setIsActive={setIsActive}
            ></DetailProject>
        </>
    )
}

export default Project;