import React from "react";
// import styles from "./Skills.module.css";
import tick from "../../assets/tick.svg";
import SkillsList from "./../Extra/SkillsList";

const Skills = () => {
    return (
        <section id="Skills">
            <h1>
                Skills
            </h1>
            <div>   
                <SkillsList icon={tick} name="Data"/>
            </div>
        </section>
    );
}

export default Skills;