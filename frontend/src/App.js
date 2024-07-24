import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
