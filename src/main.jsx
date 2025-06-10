import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './Login';
import App from './App';
//import Chat from './components/Chat';
import NotFound from './components/NotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route index element={<Login/> } />
          <Route path="/" element={<Login/> } />
          <Route path="login" element={<Login/> } />
          <Route path="chat" element={<Login/> }/>
          <Route path="*" element={<NotFound/> } />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);