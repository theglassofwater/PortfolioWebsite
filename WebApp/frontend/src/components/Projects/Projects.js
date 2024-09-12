import React from "react";
import styles from "./Projects.module.css";
import Project1Image from "../../assets/music_generator_icon.jpeg";

const Projects = () => {
    return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <Project
                title="Music Generator"
                link="https://www.github.com/theglassofwater/MusicGenerator"
                image={Project1Image}
                description="Description of Project 1 dsffnjdsnfdsnfjods fjdsnfjosdnf jisd fjosndfosd fjsof dsfnodsf"   
            />
            <Project
                title="Portfolio Website"
                link="https://www.github.com/theglassofwater/PortfolioWebsite"
                image={Project1Image}
                description="Description of Project 2 dsffnjdsnfdsnfjods fjdsnfjosdnf jisd fjosndfosd fjsof dsfnodsf"
            />
            <Project
                title="Project 3"
                link="https://www.github.com/theglassofwater"
                image={Project1Image}
                description="Description of Project 3 dsffnjdsnfdsnfjods fjdsnfjosdnf jisd fjosndfosd fjsof dsfnodsf"
            />
            <Project
                title="Project 4"
                link="https://www.github.com/theglassofwater"
                image={Project1Image}
                description="Description of Project 4 dsffnjdsnfdsnfjods fjdsnfjosdnf jisd fjosndfosd fjsof dsfnodsf"
            />
        </div>
    </section>
    
    );
}

function Project(props) {
    return (
        <div>
            <a href={props.link} target="_blank">
                <h2>{props.title}</h2>
                <img src={props.image} alt={props.title} />
            </a>
            <p>{props.description}</p>
        </div>
    );
}


export default  Projects;