import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';


//fontawesome  6.4.2 version 
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
