import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function App1() {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay
//   if (hours < 12) {
//     timeOfDay = "Morning"
//   } else if (hours > 12 && hours < 17) {
//     timeOfDay = "Afternoon"
//   } else {
//     timeOfDay = "Night"
//   }

//   return (
//     <h1>Good {timeOfDay}</h1>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
