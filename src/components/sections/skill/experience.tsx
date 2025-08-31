import { dataSkill } from '@/helpers/data';
import './experience.scss'
import { skillsImage } from '@/helpers/skill.image';
import Marquee from 'react-fast-marquee';

const Experience = () => {
    return(
        <div className='experience'>
            <h3>EXPERIENCE WITH</h3>
            <div className='skill'>
                <Marquee>
                    {dataSkill.map(skill => (
                        <div className='skill-item'>
                            <div className='skill-card'>
                                <img src={skillsImage(skill)} alt="skill" width={40} height={40}/>
                                <p className="skill-name">{skill}</p>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default Experience;