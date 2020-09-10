import React from "react";
import ReactDOM from "react-dom";
import firebase from 'firebase';

import './global.css'
import App from './components/App.js';

const container = document.getElementById("app");

// ReactDOM.render(___que___, ___donde___)

firebase.initializeApp({
    apiKey: "AIzaSyDZBBC_HeduRUfYZiA3WlXzkgSy4OAQGoI",
    authDomain: "ar-pages.firebaseapp.com",
    databaseURL: "https://ar-pages.firebaseio.com",
    projectId: "ar-pages",
    storageBucket: "ar-pages.appspot.com",
    messagingSenderId: "558518215130",
    appId: "1:558518215130:web:fcec16c6f347193c1ea0e3",
    measurementId: "G-3S4V7FDSPP"
});

ReactDOM.render(<App
    
    />, container);