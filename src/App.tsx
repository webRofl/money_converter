import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Converter from './components/Converter/Converter';
import Ao from './components/ao/ao';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Ao />} />
      <Route path="/converter" element={<Converter />} />
    </Routes>
  );
};

export default App;
