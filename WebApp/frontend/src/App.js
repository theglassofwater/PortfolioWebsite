// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import MusicGenerator from './components/MusicGenerator';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music-generator" element={<MusicGenerator />} />
      </Routes>
    </>
  );
}

export default App;
