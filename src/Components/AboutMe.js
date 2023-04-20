
import classes from "./AboutMe.module.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500
        })
    }, [])

    return <div>
            <div className={`container ${classes.intro__division}`} id="about">
                <div data-aos="fade-up" className={classes.about__sect}>
                    <h2 style={{color: "rgb(0, 30, 95)", fontWeight: "bold", fontSize: "2rem"}}>About Me</h2>
                    <div  className={classes.about__description}>
                        <p>
                            I am a front-end web developer with proficiency in HTML5, CSS3, Bootstrap5, 
                            SASS, JavaScript, React, Redux and Git. Currently, I am taking a course on node.js so 
                            as to understand the backend part of web development and broaden my knowledge about
                            web development. I love to take up coding challenges as I believe this is the only way to
                            get better and become a software engineer. I believe there is no limit to what a man can achieve. 
                            Determination is key!
                        </p>
                        <a target="_" href="https://drive.google.com/file/d/1DGjn4eSGRqXoRWDiO_VlWiD5_jkrTFP_/view?usp=sharing">
                            <button className={classes.download__cv}>View CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
}

export default AboutMe;