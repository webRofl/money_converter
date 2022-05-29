import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Converter from './components/Converter/Converter';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Converter />} />
      <Route path="/converter" element={<Converter />} />
    </Routes>
  );
};

export default App;
