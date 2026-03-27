"use strict";

//Title 🟧 Module 8 - Events: Lesson 03. Mouse Events

//? 🧩 Guided Practice (Mini Task)

const btnMouse = document.getElementById('btnMouse');

btnMouse.addEventListener('mouseenter', () => {
    btnMouse.classList.add('dark');
    btnMouse.style.transform = 'scale(0.95)';
});

btnMouse.addEventListener('mouseleave', () => {
    btnMouse.classList.remove('dark');
    btnMouse.style.transform = 'scale(1)';
});


//? 🧩 Optional Challenge (Next Step)

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


//? 🧩 Exercise 1: Press & Hold Button

const btnConceptFocus = document.getElementById('btnConceptFocus');

btnConceptFocus.addEventListener('mousedown', () => {
    btnConceptFocus.style.backgroundColor = 'red';
    btnConceptFocus.style.transform = 'scale(0.95)';
});

btnConceptFocus.addEventListener('mouseup', () => {
    btnConceptFocus.style.backgroundColor = 'green';
    btnConceptFocus.style.transform = 'scale(1)';
});

//? 🧩 Exercise 2: Interactive Hover Tracker

let count  = 0;
const hoverCount = document.getElementById('hoverCount');
const btnHover = document.getElementById('btnHover');

btnHover.addEventListener('mouseenter', () => {
    count++;
    hoverCount.textContent = `${count}`;
});


//? 🧩 Deep Practice Challenge: “Interactive Button System”

const btnSystem = document.getElementById('btnSystem');

btnSystem.addEventListener('mouseenter', () => {
    btnSystem.style.backgroundColor = 'blue';
});

btnSystem.addEventListener('mouseleave', () => {
    btnSystem.style.backgroundColor = '';
});

btnSystem.addEventListener('mousedown', () => {
    btnSystem.style.transform = 'scale(0.95)';
});

btnSystem.addEventListener('mouseup', () => {
    btnSystem.style.transform = 'scale(1)';
});

/*
btnSystem.addEventListener('click', () => {
    const originalText = btnSystem.textContent;
    btnSystem.textContent = 'Clicked!';

    setTimeout(() => {
        btnSystem.textContent = originalText;
    }, 1000);
});
*/

let timeoutId2;

btnSystem.addEventListener('click', () => {
    const originalText = btnSystem.textContent;
    btnSystem.textContent = 'Clicked!';

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        btnSystem.textContent = originalText;
    }, 1000);
});


//? 🧩 Mini Project: Interactive Reaction Button

let currentIndex = 0;
const reactionBtn = document.getElementById('reactionBtn');
const reactionText = document.getElementById('reactionText');
const reactions = ["👍 Like", "🔥 Fire", "😂 Funny", "😮 Wow"];
const originalText = reactionText.textContent;

reactionBtn.addEventListener('mouseenter', () => {
    reactionBtn.style.backgroundColor = 'blue';
});

reactionBtn.addEventListener('mouseleave', () => {
    reactionBtn.style.backgroundColor = '';
});

reactionBtn.addEventListener('mousedown', () => {
    reactionBtn.style.transform = 'scale(0.95)';
});

document.addEventListener('mouseup', () => {
    reactionBtn.style.transform = 'scale(1)';
});

reactionBtn.addEventListener('click', () => {
    reactionText.textContent = reactions[currentIndex];
    currentIndex = (currentIndex + 1) % reactions.length;
});


