import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CounterProvider } from "./context/Counter";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterProvider>
      <h1 className='title'>CONTEXT API</h1>
      <App />
    </CounterProvider>
  </React.StrictMode >
);


reportWebVitals();
