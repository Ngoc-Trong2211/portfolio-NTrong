import { NavLink } from 'react-router-dom'
import './header.scss'

const Header = () => {
    return(
        <div className="header">
            <div className='header-home'>
                <NavLink to={"/"} className={({ isActive }) => isActive ? "header-active" : "header-btn"}>Home</NavLink>
            </div>
            <div className='header-about'>
                <NavLink to={"/about"} className={({ isActive }) => isActive ? "header-active" : "header-btn"}>About me</NavLink>
            </div>
        </div>
    )
}

export default Header