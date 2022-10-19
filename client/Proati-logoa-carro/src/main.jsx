import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Provider from './context/MyProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
);
