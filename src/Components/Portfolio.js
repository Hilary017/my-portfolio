import Project from "./Project"
import ratepunk from "../images/ratepunk.png";
import stores from "../images/hillsStores.png";
import form from "../images/multistepform.png";
import classes from "./Portfolio.module.css";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, []);

    const projects = [
        {
            id: "d1",
            image: stores,
            title: "hillStores",
            url: "https://hillsstores.netlify.app/",
            git: "https://github.com/Hilary017/hillsStores",
            description: "hillsStores is a fully responsive e-commerce single page application(SPA) built with react.js. The useContext API was used to manage state accross components. Paystack payment gateway was implemented to enable users make seamless payment for goods purchased right from their bedroom. Do take a tour around the website and have a wonderful shopping experience."
        },
        {
            id: "d2",
            image: ratepunk,
            title: "Ratepunk",
            url: "https://hillsratepunk.netlify.app/",
            git: "https://github.com/Hilary017/ratepunk",
            description: "Ratepunk is a landing page built for a hotel booking company. This includes a login component that validates the email address entered by the user and if the email is valid, stores the email address on a dummy database, created on firebase."
        },
        {
            id: "d3",
            image: form,
            title: "hillsMultiStepForm",
            url: "https://hillsmultistepform.netlify.app/",
            git: "https://github.com/Hilary017/MultiStepForm",
            description: "hillsMultiStepForm is a fully responsive multi-step registration form built with React.js. The form is divided into four pages, 3 steps and a finishing page for users to confirm all the entered information from step 1 to 3. On this project, the Redux toolkit was used to manage state accross various components while the react-router-dom was used to manage the various pages into a single page. User information is collected and then stored on a dummy database created on Firebase."
        },
    ]

    return <div className={classes.portfolio__sect}>
            <h2 style={{textAlign: "center", color: "rgb(0, 30, 95)", fontWeight: "bold", fontSize: "2rem"}}>My Projects</h2>
            {projects.map(item => <Project key={item.id} 
                                            image={item.image} 
                                            title={item.title} 
                                            git={item.git}
                                            url={item.url}
                                            description={item.description} />)}
    </div>
}

export default Portfolio;