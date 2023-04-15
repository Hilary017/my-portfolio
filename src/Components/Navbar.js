import { useState } from "react";
import classes from "./Navbar.module.css";
import Backdrop from "./Backdrop";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const toggleNavbar = () => {
        setToggle(prev => !prev)
    }

    return <nav className={classes.main_navbar}>
        {/* {toggle && <Backdrop />} */}
        <div className={classes.navbar__sect}>
            <div className={classes.nav_logo}>
                <a href="#">
                    <h1 className={classes.my_logo}>
                        devHills
                    </h1>
                </a>
            </div>
            <div className={classes.desktop__nav}>
                <ul>
                    <li className={classes.nav__active}>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#project">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </div>
            <button onClick={toggleNavbar} className={`${classes.toggle__nav} ${toggle ? classes.toggle_true : null}`}>
                <span className={`${classes.top_toggle} ${toggle ? classes.top_true : null}`}></span>
                <span className={`${classes.toggle_middle} ${toggle ? classes.middle_true : null}`}></span>
                <span className={`${classes.toggle_bottom} ${toggle ? classes.bottom_true : null}`}></span>
            </button>
        </div>
        <div className={`${classes.mobile__nav} ${toggle ? classes.mobile__active : null}`}>
            <ul>
                <li>
                    <a href="#home" onClick={toggleNavbar}>Home</a>
                </li>
                <li>
                    <a href="#about" onClick={toggleNavbar}>About Me</a>
                </li>
                <li>
                    <a href="#project" onClick={toggleNavbar}>Projects</a>
                </li>
                <li>
                    <a href="#contact" onClick={toggleNavbar}>Contact Me</a>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar;