import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Certification from './components/Certification';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <Router>
      <Buttons />  {/* Navigation Buttons */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
