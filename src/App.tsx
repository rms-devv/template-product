import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlockRenderer from './pages/home';
import { BlockProvider } from './context/blockContext';


function App() {
  return (
    <BlockProvider>
    <Router>
      <Routes>
        <Route path="/" element={<BlockRenderer />} />
      </Routes>
    </Router>
  </BlockProvider>
  );
}

export default App;
