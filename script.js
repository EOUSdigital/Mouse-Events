"use strict";

//Title 🟧 Module 8 - Events: Lesson 03. Mouse Events

//# 🧩 Guided Practice (Mini Task)

const btnMouse = document.getElementById('btnMouse');

btnMouse.addEventListener('mouseenter', () => {
    btnMouse.classList.add('dark');
    btnMouse.style.transform = 'scale(0.95)';
});

btnMouse.addEventListener('mouseleave', () => {
    btnMouse.classList.remove('dark');
    btnMouse.style.transform = 'scale(1)';
});


//# 🧩 Optional Challenge (Next Step)

const btnRandomColor = document.getElementById('btnRandomColor');
const originalBackground = getComputedStyle(btnRandomColor).backgroundColor;

btnRandomColor.addEventListener('mouseenter', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    btnRandomColor.style.backgroundColor = randomColor;
    btnRandomColor.style.transform = 'scale(0.95)';
});

btnRandomColor.addEventListener('mouseleave', () => {
    btnRandomColor.style.backgroundColor = originalBackground;
    btnRandomColor.style.transform = 'scale(1)';
});


//# 🧩 Exercise 1: Press & Hold Button

const btnConceptFocus = document.getElementById('btnConceptFocus');

btnConceptFocus.addEventListener('mousedown', () => {
    btnConceptFocus.style.backgroundColor = 'red';
    btnConceptFocus.style.transform = 'scale(0.95)';
});

document.addEventListener('mouseup', () => {
    btnConceptFocus.style.backgroundColor = 'green';
    btnConceptFocus.style.transform = 'scale(1)';
});



//# 🧩 Exercise 2: Interactive Hover Tracker

const btnHover = document.getElementById('btnHover');

let count  = 0;

btnHover.addEventListener('mouseenter', () => {
    document.getElementById("btnHover") = count++;
});





















































































