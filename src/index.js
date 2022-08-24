import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import {Provider} from 'react-redux';
import {store} from './app/store';
import reportWebVitals from './reportWebVitals';

// pages
import Login from './components/Login';
import SignUp from './components/SignUp';
import SearchResult from './components/SearchResult';
import Category from './components/CategoryDetail/CategoryDetail';
import axios from 'axios';

axios.defaults.baseURL = 'http://server.u-life-kurly.com/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<SearchResult />} />
        <Route path="/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
