import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
// import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
        <h1>test</h1>{' '}
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
