import React from "react";
import style from "./About.module.css"


const About = () => {
    return (
        <div className={style.mainBlock}>
            <h2>Technologies used in this project:</h2>
            <ul>
                <li>React</li>
                <li>Hook</li>
                <li>Sass / Scss</li>
            </ul>
        </div>

    )
}

export default About;