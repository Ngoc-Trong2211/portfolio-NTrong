import { dataSkill } from '@/helpers/data';
import './experience.scss'
import { skillsImage } from '@/helpers/skill.image';
import Marquee from 'react-fast-marquee';

const Experience = () => {
    return(
        <div className='experience'>
            <div className='experience-header'>
                <h2 className='experience-title'>EXPERIENCE WITH</h2>
                <div className='words'>
                    {dataSkill.map((skill, id)=> (
                        <h2 className='word' key={id}>{skill.toUpperCase()}</h2>
                    ))}
                </div>
            </div>
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