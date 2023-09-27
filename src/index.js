import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//App is a component that we are using and we are importing it from the App.js file
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';

// root is the element that we are rendering the App component to
// root of the DOM tree is the topmost element of the DOM tree and everything is underneath is a child of the root
const root = ReactDOM.createRoot(document.getElementById('root'));

// getCurrentDate is a function that returns the current date
const getCurrentDate = () => {
  const date = new Date();
  return date.toDateString();
}

// greeting is a variable that contains a JSX element
//JSX is a syntax extension to JavaScript and it is used to write HTML in React
const greeting = <h1>Hello World. Today is {getCurrentDate()}</h1>;


//render is a function that renders the App component to the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
