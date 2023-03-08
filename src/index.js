import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

createRoot(document.querySelector('#root')).render(

  <>
    <App />
  </>
  
  /*
  const name = ['Parth', 'Dudhatra'];
  const data = [1, ...name, 17, 'male'];
  console.log(data)
  console.log();

  const word = ['a', 'b', 'c', 'd', 'e', 'f'];
  const [a, b, ...letter] = word;
  console.log(a) // a
  console.log(b) // b
  console.log(letter) // c, d, e, f
  */
)