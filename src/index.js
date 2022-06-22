import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthService from "./Service/AuthService";
import reportWebVitals from './reportWebVitals';

const authService = new AuthService();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App authService={authService}/>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
