import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
