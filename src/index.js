import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
