import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Exemple } from './components/exemple';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Exemple />} />
      </Routes>
    </Router>
  );
}

export default App;
