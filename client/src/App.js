import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import NoPage from './pages/NoPage';

import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><FooterComponent /></>}>

          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />

          <Route path="*" element={<NoPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;