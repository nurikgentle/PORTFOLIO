import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Russian from './Russian';
import Kyrgyz from './Kyrgyz';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/en' element={<App />} /> 
        <Route path='/' element={<Russian />} /> 
        <Route path='/k' element={<Kyrgyz />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


