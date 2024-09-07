import React from "react";
import styles from "./Projects.module.css";
import Project1Image from "../../assets/symbolic_music_gen_pic.jpeg";

const Projects = () => {
    return (
    <section id="projects" className={styles.container}>
        <h1 className="SectionTitle">Projects</h1>
        <div className={styles.ProjectsContainer}>
            <div>   
                <a href="https://www.github.com/theglassofwater/project1" target="_blank">
                    <h2>Music Generator</h2>
                    <img src={Project1Image} alt="Project 1" />
                </a>
                <p>Description of Project 1 dsffnjdsnfdsnfjods fjdsnfjosdnf jisd fjosndfosd fjsof dsfnodsf</p>
            </div>
    
            <div>
                <a href="https://www.github.com/theglassofwater/project2" target="_blank">
                    <h2>Project 2</h2>
                    <img src={Project1Image} alt="Project 2" />
                </a>
                <p>Description of Project 1 dsffnjdsnfdsnfjods fjdsnfjosdnf jisd fjosndfosd fjsof dsfnodsf</p>
            </div>
    
            <div>                    
                <a href="https://www.github.com/theglassofwater/project3" target="_blank">
                    <h2>Project 3</h2>
                    <img src={Project1Image} alt="Project 3" />
                </a>
                <p>Description of Project 1 dsffnjdsnfdsnfjods fjdsnfjosdnf jisd fjosndfosd fjsof dsfnodsf</p>
            </div>
    
            <div>
                <a href="https://www.github.com/theglassofwater/project4" target="_blank">
                    <h2>Project 4</h2>
                    <img src={Project1Image} alt="Project 4" />
                </a>

                <p>Description of Project 1 dsffnjdsnfdsnfjods fjdsnfjosdnf jisd fjosndfosd fjsof dsfnodsf</p>
            </div>
        </div>
    </section>
    
    );
}

export default Projects;