import React from "react";
import styles from "./Skills.module.css";
import tick from "../../assets/tick.svg";
import SkillsList from "./../Extra/SkillsList";

const Skills = () => {
    return (
        <section id="Skills" className={styles.container}>
            <h1>
                Skills
            </h1>
            <div className={styles.skillContainer}>   
                <SkillsList icon={tick} name="Python"/>
                <SkillsList icon={tick} name="SQL"/>
                <SkillsList icon={tick} name="JavaScript"/>
                <SkillsList icon={tick} name="HTML"/>
                <SkillsList icon={tick} name="CSS"/>
                <SkillsList icon={tick} name="Java"/>
                <SkillsList icon={tick} name="MatLab"/>
            </div>
            <hr />
            <div className={styles.skillContainer}>   
                <SkillsList icon={tick} name="Data"/>
                <SkillsList icon={tick} name="Data"/>
                <SkillsList icon={tick} name="Data"/>
                <SkillsList icon={tick} name="Data"/>
                <SkillsList icon={tick} name="Data"/>
                <SkillsList icon={tick} name="Data"/>
                <SkillsList icon={tick} name="Data"/>
            </div>
            <hr />
        </section>
    );
}

export default Skills;