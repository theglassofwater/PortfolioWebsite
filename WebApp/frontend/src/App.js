// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects'; 
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
