import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css'; // Import your CSS file here
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);