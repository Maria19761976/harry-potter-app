import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<HomePage />} />
        <Route path="/staff" element={<HomePage />} />
        <Route path="/houses" element={<HomePage />} />
        <Route path="/character/:name" element={<CharacterDetailPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
