import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import CamperPage from '../pages/CamperPage/CamperPage';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';

function App() {
  return (
    <div>
      <Logo />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperPage />} />
      </Routes>
    </div>
  );
}

export default App;
