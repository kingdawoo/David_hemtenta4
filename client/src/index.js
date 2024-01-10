import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from './component/weather.js';
import Info from './component/info.js';
import QR from './component/qr.js';
import Booking from './component/booking.js';
import Admin from './component/adminlogin.js';
import AddDate from './component/dateadd.js';
import StatusButton from './component/statusbutton.js';
import './style.css';

const Card = () => {
  const [status, setStatus] = useState('tillgänglig');
  const updateStatus = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div className='card'>
      <Info />
      <Weather />
      <QR />
      <p className='status'>Status: {status}</p>
    </div>
  );
};

const BookingPage = () => {
  return (
    <div className='booking-page'>
      <Booking />
      <Admin />
    </div>
  );
}

const AdminPage = () => {
  const handleStatusChange = (newStatus) => {
    console.log('Admin status changed:', newStatus);
  };

  return (
    <div className='admin-page'>
      <AddDate />
      <StatusButton onStatusChange={handleStatusChange} />
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/boka' element={<BookingPage />} />
        <Route path='/tider' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
