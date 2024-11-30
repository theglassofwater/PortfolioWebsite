// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import MusicGeneratorPage from './components/MusicGeneratorPage';
import AimTrainerPage from './components/AimTrainerPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music-generator" element={<MusicGeneratorPage />} />
        <Route path="/aim-trainer" element={<AimTrainerPage />} />
      </Routes>
    </>
  );
}

export default App;
