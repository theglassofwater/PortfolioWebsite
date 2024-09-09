// import logo from './logo.svg';
import './App.css';
// import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects'; 
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Home />
      <Projects />
      <Skills />
      <Contact />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App;
