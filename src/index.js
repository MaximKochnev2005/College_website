import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

window.addEventListener('load' ,async function(Event) {
    let list = document.querySelectorAll('.menu-item')
    function setActiveClass(){
        list.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) => item.addEventListener('mouseover', setActiveClass))
    let menu = document.querySelector(".menu")
    let menuBtn = document.querySelector(".menu-btn")
    let closeBtn = document.querySelector(".close-btn")

    menuBtn.addEventListener('click', () => {
        menu.classList.add("active");
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove("active");
    });

});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
