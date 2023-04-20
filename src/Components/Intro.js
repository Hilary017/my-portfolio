import classes from "./Intro.module.css";
import image from "../images/mypix.jpg";

const Intro = () => {
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