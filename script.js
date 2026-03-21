"use strict";

//Title 🟧 Module 8 - Events: Lesson 03. Mouse Events

//# 🧩 Guided Practice (Mini Task)

const btnMouse = document.getElementById('btnMouse');

btnMouse.addEventListener('mouseenter', () => {
    btnMouse.classList.add('dark');
});

btnMouse.addEventListener('mouseleave', () => {
    btnMouse.classList.remove('dark');
});


//# 🧩 Optional Challenge (Next Step)

const btnRandomColor = document.getElementById('btnRandomColor');
const originalBackground = getComputedStyle(btnRandomColor).backgroundColor;

btnRandomColor.addEventListener('mouseenter', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    btnRandomColor.style.backgroundColor = randomColor;
});

btnRandomColor.addEventListener('mouseleave', () => {
    btnRandomColor.style.backgroundColor = originalBackground;
});


//# 🧩 Exercise 1: Press & Hold Button

const btnConceptFocus = document.getElementById('btnConceptFocus');

button.addEventListener('mousedown', () => {
    btnConceptFocus.style.color = 'red';
});

button.addEventListener('mouseup', () => {
    btnConceptFocus.style.color = 'green';
});



//# 🧩 Exercise 2: Interactive Hover Tracker

const btnHoverTracker = document.getElementById('btnHoverTracker');























































































