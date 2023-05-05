import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalJsx from './components/Global/Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalJsx>
        <App />
      </GlobalJsx>
    </BrowserRouter>
  </React.StrictMode>
);
