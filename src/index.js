import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './components/example1/App';
import App3 from './components/example2/App';
import './style/style.scss';




const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(
    <App3 />
);