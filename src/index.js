import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Globalstyle } from './styles/globalstyles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Globalstyle /> 
    <App />
  </React.StrictMode>
);


