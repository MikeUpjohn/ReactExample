import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function GetGreeting(user) {
  if(user) {
    return <div>
        <h1>Hello, {formatName(user)}</h1>
        <p>Good to see you!</p>
      </div>;
  }
  return <div>
  <h1>Hello, Stranger!</h1>
  <p>Good to see you!</p>
</div>;
}

function formatName(user) {
  return user.firstname + ' ' + user.lastname;
}

const user = {
  firstname: 'Mike2',
  lastname: 'Upjohn2'
};

const element = GetGreeting(user);

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
