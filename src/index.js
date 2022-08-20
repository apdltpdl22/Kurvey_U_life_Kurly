import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { store } from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<SignUp />}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
