import classes from "./Intro.module.css";
import image from "../images/mypix.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Intro = () => {
    // useEffect(() => {
    //     Aos.init({
    //         duration: 2000
    //     })
    // }, [])

    return <div className={classes.intro__section}>
        <div className={`container ${classes.intro__division}`}>
            <div className={classes.image__sect}>
                <img src={image} className={classes.my_pix} alt="my face" />
            </div>
            <div className={classes.info__sect}>
                <div>
                    <p>Hello</p>
                    <h2 className={classes.my__name}>I'm Hilary</h2>
                    <p>A Front-end Developer</p>
                </div>
            </div>
        </div>
    </div>
}

export default Intro;