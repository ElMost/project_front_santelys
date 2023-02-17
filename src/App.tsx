import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import NavBar from './components/navbar/NavBar';
import { About } from './pages/about/About';
import Devis from './pages/devis/Devis';
import Login from './components/authentification/login/Login';
import Engagement from './pages/engagement/Engagement';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/login" element={<Login />} />
        <Route path="engagement" element={<Engagement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
