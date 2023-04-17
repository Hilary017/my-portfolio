
import classes from "./AboutMe.module.css";

const AboutMe = () => {
    return <div>
            <div className={classes.intro__division} id="about">
                <div className={classes.about__sect}>
                    <h2 style={{color: "rgb(0, 30, 95)"}}>ABOUT ME</h2>
                    <div className={classes.about__description}>
                        <p>
                            I am a front-end web developer with proficiency in HTML5, CSS3, Bootstrap5, 
                            SASS, JavaScript, React, Redux and Git. Currently, I am taking a course on node.js so 
                            as to understand the backend part of web development and broaden my knowledge about
                            web development. I love to take up coding challenges as I believe this is the only way to
                            get better and become a software engineer. I believe there is no limit to what a man can achieve. 
                            Determination is key!
                        </p>
                        <a target="_" href="https://drive.google.com/file/d/1s8bb9sMG_z4yJDkACF4sEyxqei7mOTIz/view?usp=share_link">
                            <button className={classes.download__cv}>View CV</button>
                        </a>
                    </div>
                </div>
                {/* <div>
                    <h2>Developing With Passion While Exploring The World</h2>
                    <p>I just want to sit in my bedroom, write codes and build wonderful solutions that help to 
                        make human lives easier. During my leisure period, I love to listen to music and sing. I also do like to 
                        travel alot.
                    </p>
                    <button>Download my CV</button>
                </div> */}
            </div>
        </div>
}

export default AboutMe;