/*---------- IMPORTS ----------*/
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// RENDER
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
