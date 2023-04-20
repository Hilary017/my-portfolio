import img from "../images/logo.svg";
import classes from "./Project.module.css";

const Project = (props) => {
    return <div className={classes.card__sect} id="project">
        <div className={classes.card}>
            <img src={props.image} className={classes.project__img} alt="ratepunk" />
            <div>
                <h5 style={{fontWeight: "bold"}}>{props.title}</h5>
                <p className={classes.project__describe}>{props.description}</p>
                <div className={classes.project__link}>
                    <a target="_blank" rel="noreferrer" href={props.git}>
                        <button className={classes.github_link}>Github</button>
                    </a>
                    <a target="_blank" rel="noreferrer" href={props.url}>
                        <button className={classes.site__link}>Visit Site</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default Project;