import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from './component/weather.js';
import Info from './component/info.js';
import QR from './component/qr.js';
import Booking from './component/booking.js';
import './style.css';

const Card = () => {
    return (
      <div className='card'>
        <Info />
        <Weather />
        <QR />
      </div>
    );
  };

const App = () => {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Card />} />
                    <Route path='/boka' element={<Booking />} />
                </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);