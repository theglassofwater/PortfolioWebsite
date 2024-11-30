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
                link="/music-generator"
                image={Project1Image}
                description="Click to generate some music!"   
                openInSamePage={true}
            />
            <Project
                title="Aim Trainer"
                link="/aim-trainer"
                image={Project1Image}
                description="Click to play the game!       "
                openInSamePage={true}
            />
            <Project
                title="Portfolio Website"
                link="https://www.github.com/theglassofwater/PortfolioWebsite"
                image={Project1Image}
                description="Description of Project 2 dsffnjdsnfdsnfjods fjdsnfjosdnf jisd fjosndfosd fjsof dsfnodsf"
            />
            <Project
                title="Electricity"
                link="https://github.com/theglassofwater/Electricity"
                image={Project1Image}
                description="Description of Project 2 dsffnjdsnfdsnfjods fjdsnfjosdnf jisd fjosndfosd fjsof dsfnodsf"
            />
            <Project
                title="Aim Trainer"
                link="/aim-trainer"
                image={Project1Image}
                description="Click to play the game!"
            />
        </div>
    </section>
    
    );
}

function Project(props) {
    const openInSamePage = props.openInSamePage ? {} : { target: "_blank"};

    return (
        <div>
            <a href={props.link} {...openInSamePage}>
            {/* <a href={props.link} target="_blank"> */}
                <h2>{props.title}</h2>
                <img src={props.image} alt={props.title} />
            </a>
            <p>{props.description}</p>
        </div>
    );
}

export default  Projects;