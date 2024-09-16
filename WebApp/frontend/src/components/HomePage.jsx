import '../App.css';
// import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Projects from './Projects/Projects'; 
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function HomePage() {
    return (
        <div>
            <Header />
            <Home />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomePage;