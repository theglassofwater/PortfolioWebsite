// import logo from './logo.svg';
import './App.css';
// import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects'; 
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Home />
      <Projects />
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
