import React from 'react';
// import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import * as ReactDOMClient from 'react-dom/client';
const container = document.getElementById('root'); 
const root = ReactDOMClient.createRoot(container); 
root.render(<App tab="profile"/>);


reportWebVitals();
