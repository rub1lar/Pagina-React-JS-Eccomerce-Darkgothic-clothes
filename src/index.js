import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC28tCKitMGy8B7lY087xFlue50xaq3v7A",
  authDomain: "e-comer-react.firebaseapp.com",
  projectId: "e-comer-react",
  storageBucket: "e-comer-react.appspot.com",
  messagingSenderId: "461526430582",
  appId: "1:461526430582:web:e4383dbde2fad229938057",
  measurementId: "G-2DDERZP3LC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
