import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductForm from './Components/ProductForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo-produto" element={<ProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;
