
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
                            I am a full-stack developer with proficiency in HTML5, CSS3, Bootstrap5, JavaScript, React.js, 
                            Next.js, Node.js, Express.js, Git and GitHub. I also have knowledge of cloud computing as 
                            I have taken and passed both the AWS Cloud Practitioner and Developer Associate exams. 
                            I am passionate about software development and problem solving. I am inquisitive and curious as 
                            I always want to know why things are done in their current ways and if there are better ways of doing them. 
                            I love challenging tasks as it pushes me to learn new things. 
                            I believe that there is no limit to what a man can achieve. Determination is key.
                        </p>
                        <a target="_" href="https://drive.google.com/file/d/1UcQwJtmAuOvmbUjlT1DdmTZ_-PP-IcJh/view?usp=sharing">
                            <button className={classes.download__cv}>View CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
}

export default AboutMe;