import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import NAVBAR from './components/navbar';
import HomePage from './pages/Home';
import PortfolioPage from './pages/Portfolio';
import BlogIndexPage from './pages/BlogIndex';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <NAVBAR />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;