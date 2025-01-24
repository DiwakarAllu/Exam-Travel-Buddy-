import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact'
import Home from './components/Home';
import Features from './components/Features';
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import About from './components/About';



function App() {
 
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
