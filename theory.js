"use strict";

//Title 🟧 Module 8 - Events: Lesson 03. Mouse Events

//* 🖱️ Mouse Events (JavaScript)

//? 🧠 Concept Explanation

//  Mouse events let us respond when a user interacts with the page using their mouse.
//  Think of it like this:
//  • “When the user does something with their mouse → we run some JavaScript”

//? ✅ Common Mouse Events

//  Here are the most important ones you will use:

//      Event       |   What it means
//  --------------- | ------------------------------
//  `click`         |   User clicks (down + up)
//  `dblclick`      |   Double click
//  `mousedown`     |   Mouse button pressed down
//  `mouseup`       |   Mouse button released
//  `mouseenter`    |   Mouse enters an element
//  `mouseleave`    |   Mouse leaves an element
//  `mousemove`     |   Mouse moves over an element

//? 💻 Basic Example

const button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log('Button clicked!');
});

//? 🔍 Line-by-line breakdown

//  const button = document.querySelector('button');

//  👉 We select a button from the DOM

button.addEventListener('click', function() {'Some code or text.'});

//  👉 We listen for a click event

console.log('Button clicked!');

//  👉 This runs when the click happens


//? 🖱️ More Examples

//  1. Mouse Enter & Leave

const box = document.querySelector('.box');

box.addEventListener('mouseenter', () => {
    console.log('Mouse entered');
});

box.addEventListener('mouseleave', () => {
    console.log('Mouse left');
});

//  👉 Useful for hover effects

//  2. Mouse Move

document.addEventListener('mousemove', (e) => {
    console.log(e.clientX, e.clientY);
});

//  👉 Tracks mouse position

//  3. Mouse Down vs Up

box.addEventListener('mousedown', () => {
    console.log('Mouse down');
});

box.addEventListener('mouseup', () => {
    console.log('Mouse up');
});

//  👉 Useful for drag interactions later

//! ⚠️ Common Beginner Mistakes
//  • ❌ Forgetting to select the element first
//  • ❌ Typing event names wrong (onclick instead of 'click')
//  • ❌ Not understanding the difference between:
//      • mouseenter vs mouseover
//      • click vs mousedown

//? 🧩 Guided Practice (Mini Task)

//  Let’s build something small:

//* 👉 Task: Color Changer Box

//  Goal:
//  • When you hover over a box, it changes color.
//  • When you leave, it resets.

//  🧱 Steps:
//  1. Create a <div> in HTML
//  2. Select it in JS
//  3. Add:
//      • mouseenter → change color
//      • mouseleave → reset color

//  ✅ You are done when:
//      • Hovering changes the color instantly and leaving restores it.


//# 🤔 Reflection Question

//  What do you think is the difference between:
//  • click
//  • mousedown
//  • mouseup
//  When would each be more useful?

//  Answer:
//  • click: Fires after a full press-and-release (mousedown then mouseup) on the same element. More useful for normal button-style actions where you only act on a completed click, like submitting a form or toggling UI.
//  • mousedown: Fires as soon as the mouse button is pressed down on an element. More useful for starting actions immediately, like beginning a drag, showing a pressed state, or starting a long-press timer.
//  • mouseup: Fires when the mouse button is released over an element. More useful for finishing or cancelling something that started on mousedown, like ending a drag or confirming a press-and-hold.

//  • click: Use for normal button-style actions that should only happen after a full press-and-release, like submitting a form, opening a link, toggling something, or activating via keyboard.
//  • mousedown: Use when you need to react immediately when the button is pressed, such as starting drag-and-drop, showing a pressed visual state, beginning a long-press, or starting continuous scrolling.
//  • mouseup: Use when you care about when an action ends, such as stopping drag-and-drop, stopping a hold-to-repeat action, or confirming a press that started earlier on mousedown.


//? 🚀 Encouragement
//  This is a big milestone. You are moving from static pages to interactive behavior — this is where JavaScript really shines.

//! Feedback

//TODO  Nice work — this is exactly how mouse events should be used 👏

//  You have applied the concept correctly.
//  Let’s walk through it briefly and then improve it slightly.

//? ✅ What You Did Well

const btnMouse = document.getElementById('btnMouse');

//  ✔️ Correctly selecting the element

btnMouse.addEventListener('mouseenter', () => {
    btnMouse.style.background = '#000';
});

//  ✔️ Using mouseenter for hover (good choice — cleaner than mouseover)

btnMouse.addEventListener('mouseleave', () => {
    btnMouse.style.background = '';
});

//  ✔️ Resetting the style when leaving

//? 🧠 Small Improvement (Best Practice)

//  Right now, you're directly styling with JavaScript.
//  That works — but in real projects, we usually:
//  👉 Use CSS classes instead of inline styles

//* 🔧 Improved Version

//  CSS
``` css
.dark {
    background: black;
    color: white;
}
```

//  JavaScript

btnMouse.addEventListener('mouseenter', () => {
    btnMouse.classList.add('dark');
});

btnMouse.addEventListener('mouseleave', () => {
    btnMouse.classList.remove('dark');
});

//? 💡 Why this is better
//  • Keeps styling in CSS (clean separation)
//  • Easier to maintain
//  • More scalable for real projects

//? ⚠️ Tiny Thing to Watch

btnMouse.style.background = '';

//  This works, but:
//  • It resets to default (which might not always be predictable)
//  Using classes avoids that uncertainty 👍


//# 🧩 Optional Challenge (Next Step)

//  Try this:
//  👉 Instead of just black, make it random colour on hover
//  Hint:

const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

//# 🤔 Reflection
//  Why do you think mouseenter is often preferred over mouseover for simple hover effects?
//  Answer: The "mouseenter" is often preferred because it fires only once when the pointer enters the element and does not bubble up the DOM, so moving the pointer between child elements inside a hovered element does not retrigger the handler on ancestors, which makes simple hover effects more predictable and easier to manage. This avoids extra event firing and logic to filter event.target.

//TODO  Random Colors

//  Generating random color with single line of js code 

//  The following snippet generates a random color in hexadecimal format.

var randomColorTest = '#'+Math.floor(Math.random()*16777215).toString(16);
//  generates a random color
//  You can place this in a function and call the function every time you need a random color.

function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
};

document.body.style.backgroundColor = generateRandomColor();
someDiv.style.color = generateRandomColor();

//  But,if you are curious to know why only the number 16777215 and toString(16) are used, then the following part covers those explanations.

//  Let's divide the code into 3 parts:
//  1.Why the number 16777215?
//  • Well this needs a little bit of Math. We all know that the colors range from #000000(pitch black) to #ffffff(pure white).
//  • The number of colors that exist from black to white as per rgb values are 16777216.
//  • This can be calculated simply by using permutation&combination formula [result = m to the power of n => 16 to power of 6 => 16777216].
//  • However our ultimate goal is to convert the number into hexadecimal format and 16777216 converts to 1000000 and 16777215 converts to ffffff. Hence we proceed with 167777215 as the highest number for hexadecimal conversion.

//  2.Randomness
//  • As we need some randomness in our output we are multiplying our magic number with Math.random() which returns floating number in range from inclusive of 0 to exclusive of 1 ```javascript.

Math.random()*16777215
//->9653486.355498075

//  3.Hexadecimal conversion
//  • Now we are in the endgame, the last part of the code. To convert a number to hexadecimal format string , we have a beautiful method toString() which accepts the number that tells to which format it has to convert.
//  • As we are converting to string of hexadecimal format and hence we pass 16 as the argument as follows ```javascript.

(96953486).toString(16)
//->934cee

Math.floor(Math.random()*16777215).toString(16);
//->12ef556

//! Feedback

//TODO  This is a strong attempt — you are very close. 👏
//  And more importantly, your thinking is solid (especially saving the original background 👍).
//  Let’s walk through it carefully.

//? 🧠 What You Did Well

const originalBackground = getComputedStyle(btnRandomColor).backgroundColor;

//  ✔️ Excellent idea — you are trying to preserve the original state
//  ✔️ This is exactly how developers think (state → change → restore)

//  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');

//  ✔️ Perfect random color generation.
//  ✔️ You even handled edge cases with padStart — very nice.

//! ⚠️ The Issue (Important)

btnRandomColor.addEventListener('mouseleave', () => {
    btnRandomColor.style.backgroundColor = randomColor;
});

//* 🚨 Problem:
//  • randomColor is not defined in this scope.
//  Why?
//  Because it was created inside the mouseenter function:

btnRandomColor.addEventListener('mouseenter', () => {
    const randomColor = 'Expression expected';
});

//  👉 That means it only exists inside that function.

//* 🔍 How to Think About It
//  Think of functions like separate rooms:
//  • mouseenter room → has randomColor
//  • mouseleave room → does NOT know it exists

//? ✅ Fix Option 1 (Best for Your Goal)

//  You already had the right idea earlier 👇

btnRandomColor.addEventListener('mouseleave', () => {
    btnRandomColor.style.backgroundColor = originalBackground;
});

//  ✔️ Clean
//  ✔️ Predictable
//  ✔️ Uses your saved value

//? ✅ Fix Option 2 (If You Wanted to Reuse the Same Random Color)

//  Move randomColor outside:

//  let randomColor;

btnRandomColor.addEventListener('mouseenter', () => {
    randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    btnRandomColor.style.backgroundColor = randomColor;
});

btnRandomColor.addEventListener('mouseleave', () => {
    btnRandomColor.style.backgroundColor = randomColor;
});

//! 👉 But note: this won’t “reset” — it keeps the same color.

//? 🧩 Guided Improvement

//  Your intended behavior seems to be:
//  • Hover → random color
//  • Leave → original color

//# 🤔 Reflection

//  Why do you think JavaScript limits variables to the function they are created in?
//  (Hint: imagine large apps with lots of variables…)
//  Answer: JavaScript limits variables to the function they are created in (function scope) to maintain code integrity, prevent global namespace pollution, and enable closures. This encapsulation makes code easier to debug, prevents variable name collisions across different parts of an application, and allows for efficient memory management via garbage collection.

//? 🚀 Encouragement

//  This was genuinely strong work — especially:
//  • Thinking about restoring state
//  • Handling random color generation properly
//  You are starting to think like a developer now, not just follow syntax.

//TODO  Here are two carefully designed exercises that build your understanding of mouse events without jumping ahead to the event object.

//# 🧩 Exercise 1: Press & Hold Button

//* 🎯 Goal
//  Make a button react differently when the mouse is pressed down vs released.

//* 🧠 Concept Focus
//  • mousedown
//  • mouseup

//* 🧱 What to Build
//  When:
//  • Mouse down → button turns red
//  • Mouse up → button turns green

//* 💻 Starter Hint

button.addEventListener('mousedown', () => {
    // change color
});

button.addEventListener('mouseup', () => {
    // change color back
});

//* ✅ Success Criteria
//  • Holding the mouse keeps it red
//  • Releasing changes it to green

//* 💡 Why This Matters
//  This is the foundation of:
//  • Drag & drop
//  • Drawing apps
//  • Game controls

//! Feedback

//TODO  Excellent — this is fully correct 👏
//  You HAve implemented the behavior exactly as intended.
//  Let’s break it down briefly and then level it up slightly.

//? ✅ What You Did Well

btnConceptFocus.addEventListener('mousedown', () => {
    btnConceptFocus.style.backgroundColor = 'red';
});

//  ✔️ Correct event (mousedown)
//  ✔️ Immediate visual feedback when pressing
//  ✔️ Clear and simple logic

btnConceptFocus.addEventListener('mouseup', () => {
    btnConceptFocus.style.backgroundColor = 'green';
});

//  ✔️ Correct pairing with mouseup
//  ✔️ Behavior feels natural (press → release)

//? 🧩 Optional Enhancement

//  Make it feel more like a real button:

btnConceptFocus.addEventListener('mousedown', () => {
    btnConceptFocus.style.transform = 'scale(0.95)';
});

document.addEventListener('mouseup', () => {
    btnConceptFocus.style.transform = 'scale(1)';
});

//  👉 Now it visually presses down — much more realistic

//# 🤔 Reflection

//  Why do you think "click" alone would not work for this exercise?
//  (Hint: think about timing and control)
//  Answer: Because "click" only fires after the full press‑and‑release has finished, I would see the scale change too late, as a momentary flash after the interaction is over. For a realistic “pressing down” effect, I need the visual change to start immediately when the mouse button goes down (mousedown) and reset on mouseup, not just on the final "click" event.


//# 🧩 Exercise 2: Interactive Hover Tracker

//* 🎯 Goal
//  Track how many times the user hovers over a box.

//* 🧠 Concept Focus
//  • mouseenter
//  • Updating state (a variable)
//  • DOM text updates

//* 🧱 What to Build
//  • A box (div)
//  • A text element showing:
//  👉 “Hovered: 0 times”
//  Each time the mouse enters the box:
//  • Increase the counter
//  • Update the text

//* 💻 Starter Hint

let count  = 0;

box.addEventListener('mouseenter', () => {
    count++;
});

//* ✅ Success Criteria
//  • Count increases every time you hover.
//  • Text updates correctly in real time.

//* 🌱 Bonus Challenge (Optional)
//  👉 Reset the counter when the mouse leaves the box.

//# 🤔 Reflection
//  Which feels more “continuous” interaction:
//  • mouseenter
//  • mousedown

//  Why do you think that is?
//  Answer: 

//? 🚀 Encouragement
//  This is exactly how you build real skill:
//  👉 Small variations of the same concept
//  👉 Repetition with purpose
//  If you complete these, you will be very well prepared for Lesson 4 (Event Object), where everything becomes more dynamic.

//! Feedback

//TODO  This is really solid work 👏 — you’ve clearly understood both mouse events and state (the count variable).

//  Let’s walk through it properly.

//  let count  = 0;

//  ✔️ You created a state variable
//  ✔️ This persists between events — very important concept

btnHover.addEventListener('mouseenter', () => {
    count++;
    hoverCount.textContent = count;
});

//  ✔️ Correct event (mouseenter)
//  ✔️ Incrementing the counter properly
//  ✔️ Updating the DOM in real time
//  👉 This is exactly how interactive UIs work in real apps

//* 🧠 Why This Is Important

//  You have just combined three key skills:
//  1. Events → detecting user interaction
//  2. State → storing data (count)
//  3. DOM updates → showing changes

//  👉 This is the foundation of:
//  • Counters
//  • Dashboards
//  • Games
//  • User tracking

//* 🔍 Small Improvement (Clarity)

//  Right now your UI says: Hovered: 0 times
//  But your JS only updates the number.

//  That’s fine — but a slightly clearer version is: hoverCount.textContent = count;
//  OR (optional improvement):  hoverCount.textContent = `${count}`;
//  👉 Not required — just consistency thinking

//  🧩 Optional Enhancement (Level Up)
//  👉 Reset on mouse leave (your bonus challenge)

btnHover.addEventListener('mouseleave', () => {
    count = 0;
    hoverCount.textContent = count;
});

//  👉 Even better: Add visual feedback

btnHover.addEventListener('mouseenter', () => {
    count++;
    hoverCount.textContent = count;
    btnHover.style.backgroundColor = 'lightblue';
});

btnHover.addEventListener('mouseleave', () => {
    btnHover.style.backgroundColor = '';
});

//# 🤔 Reflection

//  What do you think would happen if we used:
//  • mouseover instead of mouseenter?
//  (Hint: try moving the mouse around inside the button)
//  Answer: "mouseover" would make the handler fire more often, including when moving between child elements and via bubbling, whereas "mouseenter" fires just once when entering the element itself.

//? 🚀 Encouragement

//  This is genuinely strong progress.
//  You are no longer just “writing code” — you are:
//  • Managing state
//  • Controlling UI behavior
//  • Thinking about user interaction
