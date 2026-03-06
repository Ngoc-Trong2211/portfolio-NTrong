import { dataSkill } from '@/helpers/data';
import './experience.scss'
import { skillsImage } from '@/helpers/skill.image';
import Marquee from 'react-fast-marquee';

const Experience = () => {
    return(
        <div className='experience'>
            <div className='experience-header'>
                <h2 className='experience-title'>EXPERIENCE WITH</h2>
            </div>
            <div className='skill'>
                <Marquee>
                    {dataSkill.map((skill, id) => (
                        <div className='skill-item'>
                            <div className='skill-card'>
                                <img src={skillsImage(skill)} alt="skill" width={40} height={40}/>
                                <p className="skill-name" key={id}>{skill}</p>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default Experience;