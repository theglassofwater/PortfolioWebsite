// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import MusicGeneratorPage from './components/MusicGeneratorPage';
import AimTrainerPage from './components/AimTrainerPage';

function App() {
  // the urls starting with PortfolioWebsite is for github.io, idk why it assumes that it needs to start with this
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PortfolioWebsite" element={<HomePage />} /> 
        <Route path="/music-generator" element={<MusicGeneratorPage />} />
        <Route path="/aim-trainer" element={<AimTrainerPage />} />
        <Route path="/PortfolioWebsite/music-generator" element={<MusicGeneratorPage />} />
        <Route path="/PortfolioWebsite/aim-trainer" element={<AimTrainerPage />} />
      </Routes>
    </>
  );
}

export default App;
