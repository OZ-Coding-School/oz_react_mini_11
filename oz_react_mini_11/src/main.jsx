import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // ✅ 이거 꼭 있어야 CSS 적용됨

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
