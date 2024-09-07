import React from "react";
import styles from "./Projects.module.css";
import Project1Image from "../../assets/symbolic_music_gen_pic.jpeg";

const Projects = () => {
    return (
    <section id="projects" className={styles.container}>
        <h1 className="SectionTitle">Projects</h1>
        <div className={styles.ProjectsContainer}>
            <div>
                <h2>Music Generator</h2>
                <a href="https://www.github.com/theglassofwater/project1" target="_blank">
                    <img src={Project1Image} alt="Project 1" />
                </a>
                <p>Description of Project 1 dsffnjdsnfdsnfjods fjdsnfjosdnf jisd fjosndfosd fjsof dsfnodsf</p>
            </div>
    
            <div>
                <h2>Project 2</h2>
                <a href="https://www.github.com/theglassofwater/project2" target="_blank">
                    <img src="https://via.placeholder.com/150" alt="Project 2" />
                </a>
                <p>Description of Project 2</p>
            </div>
    
            <div>
                <h2>Project 3</h2>
                <a href="https://www.github.com/theglassofwater/project3" target="_blank">
                    <img src="https://via.placeholder.com/150" alt="Project 3" />
                </a>
                <p>Description of Project 3</p>
            </div>
    
            <div>
                <h2>Project 4</h2>
                <a href="https://www.github.com/theglassofwater/project4" target="_blank">
                    <img src="https://via.placeholder.com/150" alt="Project 4" />
                </a>
                <p>Description of Project 4</p>
            </div>
        </div>
    </section>
    
    );
}

export default Projects;