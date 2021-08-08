import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function tick() {
//   var today = new Date();
//   var localTime = today.toLocaleTimeString();
//   var dayOfWeek = '';

//   switch (today.getDay()) {
//     case 0:
//       dayOfWeek = 'Sunday';
//       break;
//     case 1:
//       dayOfWeek = 'Monday';
//       break;
//     case 2:
//       dayOfWeek = 'Tuesday';
//       break;
//     case 3:
//       dayOfWeek = 'Wednesday';
//       break;
//     case 4:
//       dayOfWeek = 'Thursday';
//       break;
//     case 5:
//       dayOfWeek = 'Friday';
//       break;
//     case 6:
//       dayOfWeek = 'Saturday';
//       break;
//     default:
//       dayOfWeek = 'Unknown';
//   }

// const element = (
//   <div>
//     <h1>Hello, World!</h1>
//     <h2>It is {localTime}.</h2>
//     <h2>Today is {dayOfWeek}</h2>
//   </div>
// );
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
