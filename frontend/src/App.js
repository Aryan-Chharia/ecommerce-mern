import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import DonationPage from './pages/Donate';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/donate"
            element={<DonationPage />}
          />

          <Route 
            path="/login" 
            element={<LoginPage />}  
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
