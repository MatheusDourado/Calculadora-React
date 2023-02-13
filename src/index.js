//React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Views
import { Home } from './views/Home';

//Styles
import "./assets/styles/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);

