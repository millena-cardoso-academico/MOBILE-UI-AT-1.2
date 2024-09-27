import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/App.css';
import App from './components/App';

const linkMontserrat = document.createElement('link');
linkMontserrat.rel = 'stylesheet';
linkMontserrat.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap';
document.head.appendChild(linkMontserrat);

const linkDancingScript = document.createElement('link');
linkDancingScript.rel = 'stylesheet';
linkDancingScript.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
document.head.appendChild(linkDancingScript);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);