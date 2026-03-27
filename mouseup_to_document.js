"use strict";

//Title 🟧 Module 8 - Events: Lesson 03. Mouse Events

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


//! ERROR: Every time when a button from section 3 is clicked the button Press & Hold fires and the button is activated.     

//  The “Press & Hold” styles fire because you attached `mouseup` to `document`, so any mouseup anywhere on the page will run that handler.

//‼️ What’s happening

//  You did this:

btnConceptFocus.addEventListener('mousedown', () => {
    btnConceptFocus.style.backgroundColor = 'red';
    btnConceptFocus.style.transform = 'scale(0.95)';
});

document.addEventListener('mouseup', () => {
    btnConceptFocus.style.backgroundColor = 'green';
    btnConceptFocus.style.transform = 'scale(1)';
});

//? 🔍 Because `mouseup` is on `document`, it runs when you release the mouse after clicking any button, not just `btnConceptFocus`. [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event)

//* The same thing happens with `btnSystem`:

document.addEventListener('mouseup', () => {
    btnSystem.style.transform = 'scale(1)';
});

//  So, any mouseup will reset `btnSystem`’s transform.

//? 🧮 How to fix it

//  Attach `mouseup` to the specific button instead of `document`, or check the event target.

//  Simplest fix: per-element listeners

// Press & Hold button
btnConceptFocus.addEventListener('mousedown', () => {
    btnConceptFocus.style.backgroundColor = 'red';
    btnConceptFocus.style.transform = 'scale(0.95)';
});

btnConceptFocus.addEventListener('mouseup', () => {
    btnConceptFocus.style.backgroundColor = 'green';
    btnConceptFocus.style.transform = 'scale(1)';
});

// System button
btnSystem.addEventListener('mousedown', () => {
    btnSystem.style.transform = 'scale(0.95)';
});

btnSystem.addEventListener('mouseup', () => {
    btnSystem.style.transform = 'scale(1)';
});

//  If you really want `mouseup` on `document` (so releasing outside still works), then check `event.target` or a flag so you only apply styles when that particular button was the one pressed.

//!⁉️ Question: If I really want mouseup on document (so releasing outside still works), how can I check event.target or a flag so you only apply styles when that particular button was the one pressed?

//TODO You can track which button started the press with a flag, then only react on `mouseup` if that flag is set (and optionally if the same button is involved).

//? Step-by-step reasoning

//  1. You want `mousedown` on a specific button, but `mouseup` on `document` so releasing outside still finishes the effect.
//      [soft8soft] (https://www.soft8soft.com/topic/mouseup-event-outside-of-html-button-element/)
//  2. Because `mouseup` is global, you need a way to know “a press started on this button and is still active”. A simple boolean or a variable holding the pressed element works.
//      [stack overflow] (https://stackoverflow.com/questions/76955236/how-to-handle-click-only-if-both-mouse-down-and-mouse-up-were-on-same-element)
//  3. On `mousedown` of the button, set the flag (`isPressingConcept = true`) and apply the “pressed” styles.  
//  4. On `mouseup` on `document`, check that flag. If it is `true`, run the “release” styles and then reset the flag to `false`.  
//  5. Optionally, also check whether `event.target` (or `event.target.closest('button')`) is the same button, if you only want to treat mouseup on that specific button as a “release”.
//      [stack overflow] (https://stackoverflow.com/questions/67973984/getting-desired-event-target-when-listener-is-on-the-document)

//? Concrete flag pattern

//  Press & Hold button with flag and document mouseup:
const btnConceptFocus = document.getElementById('btnConceptFocus');
let isPressingConcept = false;

// When mouse goes down on the button, start press
btnConceptFocus.addEventListener('mousedown', () => {
    isPressingConcept = true;
    btnConceptFocus.style.backgroundColor = 'red';
    btnConceptFocus.style.transform = 'scale(0.95)';
});

// When mouse goes up anywhere in the document
document.addEventListener('mouseup', (event) => {
    if (!isPressingConcept) return; // ignore if we didn't start on this button

    isPressingConcept = false;      // reset flag

    // Option A: always release, even if mouseup is outside the button
    btnConceptFocus.style.backgroundColor = 'green';
    btnConceptFocus.style.transform = 'scale(1)';
});

//  If you want to require that the mouseup happens on the same button (like a strict “click”):

document.addEventListener('mouseup', (event) => {
    if (!isPressingConcept) return;
    isPressingConcept = false;

    // Only treat as release if mouseup is on the same button (or inside it)
    const releasedOnButton = event.target === btnConceptFocus || event.target.closest('#btnConceptFocus');

    if (!releasedOnButton) return;

    btnConceptFocus.style.backgroundColor = 'green';
    btnConceptFocus.style.transform = 'scale(1)';
});

//  Shared variable pattern for multiple buttons
//  You can also store the currently pressed button in a variable instead of a boolean:

let activePressButton = null;

btnConceptFocus.addEventListener('mousedown', () => {
    activePressButton = btnConceptFocus;
    btnConceptFocus.style.backgroundColor = 'red';
    btnConceptFocus.style.transform = 'scale(0.95)';
});

document.addEventListener('mouseup', (event) => {
    if (!activePressButton) return;

    // Optionally check event.target / closest:
    const releasedOnSame = event.target === activePressButton || event.target.closest('#' + activePressButton.id);

    // Apply release logic if you want it even when outside:
    activePressButton.style.backgroundColor = 'green';
    activePressButton.style.transform = 'scale(1)';
    activePressButton = null;
});

//  This pattern lets you keep `mouseup` on `document` while ensuring only the button that started the press gets its “release” styles.













































