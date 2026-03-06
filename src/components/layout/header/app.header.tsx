import { NavLink } from 'react-router-dom'
import './header.scss'
import { useLanguage } from '../../../context/LanguageContext'
import enFlag from "assets/svg/language/en.svg";
import viFlag from "assets/svg/language/vi.svg";

const Header = () => {
    const { lang, toggleLang } = useLanguage();

    return(
        <div className="header">
            <div className='header-home'>
                <NavLink to={"/"} className={({ isActive }) => isActive ? "header-active" : "header-btn"}>
                    {lang === "en" ? "Home" : "Trang chủ"}
                </NavLink>
            </div>
            <div className='header-about'>
                <NavLink to={"/about"} className={({ isActive }) => isActive ? "header-active" : "header-btn"}>
                    {lang === "en" ? "About me" : "Giới thiệu"}
                </NavLink>
            </div>
            <button
                type="button"
                className="header-lang"
                onClick={toggleLang}
                aria-label={lang === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh"}
            >
                <img
                    src={lang === "en" ? enFlag : viFlag}
                    alt="language flag"
                    className="header-lang-flag"
                />
                <span className="header-lang-text">
                    {lang === "en" ? "EN" : "VI"}
                </span>
            </button>
        </div>
    )
}

export default Header