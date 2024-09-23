import styles from './Header.module.css';

function Header() {
    return (
        <section id="header">
            <div className={styles.container} >
                <h1>
                    <span onClick={() => scrollToSection('header')}>Home</span> 
                    <span onClick={() => scrollToSection('projects')}>Projects</span> 
                    <span onClick={() => scrollToSection('skills')}>Skills</span> 
                    <span onClick={() => scrollToSection('contact')}>Contact</span>
                </h1>
            </div>
        </section>
    );
}

function scrollToSection(sectionId){
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export default Header;