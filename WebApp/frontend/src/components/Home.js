import React from "react";
import YeImage from "../assets/logos/YE-192x192.png";
import gitIcon from "../assets/github_icon.svg";
import linkedinIcon from "../assets/linkedin_icon.svg";
import CV from "../assets/CV_Base_Data.pdf";

const Home = () => {
    return (
        <section id="home">  
            <h1 className="Navbar">Projects    Home     Contact</h1>
            <div className="Pic"> 
                <img src={YeImage} alt="Youssef El Aasar" />
            </div>
            <div>
                <h1>Youssef 
                    <br />
                    El Aasar
                </h1>
                <h2>Computer Science Masters Graduate</h2>
                <span>
                    <a href="https://www.linkedin.com/in/youssefelaasar" target="_blank">
                        <img src={linkedinIcon} alt="LinkedIn Icon" />
                    </a>

                    <a href="https://www.github.com/theglassofwater" target="_blank">
                        <img src={gitIcon} alt="GitHub Icon" />
                    </a>
                </span>
                <p>
                    Curious programmer with a passion for learning and problem solving.
                </p>
                <a href={CV} target="_blank">  
                    <button download>Download CV</button>
                </a>
            </div>
        </section>
    );
}

export default Home;