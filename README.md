# 📘 Module 08 --- Lesson 03: Mouse Events

## 🎯 Overview

This lesson introduces **mouse events in JavaScript**, allowing
developers to respond to user interactions such as hovering, clicking,
and pressing buttons.

Mouse events are essential for building **interactive web interfaces**.

------------------------------------------------------------------------

## 🧠 Core Concept

A mouse event represents a **specific moment in a user's interaction**
with the page.

### Interaction Timeline

1.  Mouse enters element      → `mouseenter`
2.  Mouse moves               → `mousemove`
3.  Mouse button pressed      → `mousedown`
4.  Mouse button released     → `mouseup`
5.  Action completes          → `click`
6.  Mouse leaves              → `mouseleave`

------------------------------------------------------------------------

## 🖱️ Common Mouse Events

| Event             | Description                     |
|-------------------|---------------------------------|
| click             | Fires after mousedown + mouseup |
| dblclick          | Double click                    |
| mousedown         | Mouse button pressed            |
| mouseup           | Mouse button released           |
| mouseenter        | Cursor enters element           |
| mouseleave        | Cursor leaves element           |
| mousemove         | Cursor moves over element       |

------------------------------------------------------------------------

## ⚖️ Key Differences

### 👆 click vs mousedown

-   `mousedown` → immediate response
-   `click` → completed action

### 🖱️ mouseenter vs mouseover

-   `mouseenter` → fires once when entering\
-   `mouseover` → fires repeatedly when moving inside children

------------------------------------------------------------------------

## 🧩 Event Responsibility Model

Each event has a **clear responsibility**:

-   `mouseenter` → apply hover styles
-   `mouseleave` → remove hover styles
-   `mousedown` → start interaction (press)
-   `mouseup` → end interaction (release)
-   `click` → perform final action

------------------------------------------------------------------------

## 💻 Basic Example

``` javascript
const button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log('Button clicked!');
});
```

------------------------------------------------------------------------

## 💻 Combined Interaction Example

``` javascript
const button = document.querySelector('button');

// Hover
button.addEventListener('mouseenter', () => {
  button.style.backgroundColor = 'blue';
});

button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = '';
});

// Press
button.addEventListener('mousedown', () => {
  button.style.transform = 'scale(0.95)';
});

document.addEventListener('mouseup', () => {
  button.style.transform = 'scale(1)';
});

// Click
button.addEventListener('click', () => {
  console.log('Action performed');
});
```

------------------------------------------------------------------------

## 🧠 State in Mouse Events

State allows us to **store and update data across interactions**.

``` javascript
let count = 0;

box.addEventListener('mouseenter', () => {
  count++;
  console.log(count);
});
```

------------------------------------------------------------------------

## 🧪 Exercises Completed

### Exercise 1: Press & Hold Button

-   `mousedown` → change style
-   `mouseup` → reset style

### Exercise 2: Hover Tracker

-   Count hover interactions
-   Update DOM dynamically

------------------------------------------------------------------------

## 🧩 Mini Project: Interactive Reaction Button

### Features:

-   Hover → visual feedback
-   Press → button shrinks
-   Release → resets correctly
-   Click → cycles reactions
-   Handles rapid clicking safely

``` javascript
let currentIndex = 0;
const reactions = ["👍 Like", "🔥 Fire", "😂 Funny", "😮 Wow"];

button.addEventListener('click', () => {
  text.textContent = reactions[currentIndex];
  currentIndex = (currentIndex + 1) % reactions.length;
});
```

------------------------------------------------------------------------

## ⚠️ Common Mistakes

-   Not selecting elements before adding listeners;
-   Using wrong event types (`click` vs `mousedown`);
-   Mixing responsibilities between events;
-   Scope issues (variables inside event callbacks);
-   Not handling edge cases (e.g. releasing mouse outside element).

------------------------------------------------------------------------

## ✅ Best Practices

-   Use `addEventListener` instead of inline events;
-   Prefer CSS classes over inline styles;
-   Keep logic simple and readable;
-   Separate concerns (JS for behavior, CSS for styling).

------------------------------------------------------------------------

## 🧠 Key Takeaways

-   Mouse events represent **different stages of interaction**;
-   Each event should have **one responsibility**;
-   Combining events creates **real UI behavior**.
-   Understanding timing is critical:
    -   `mousedown` → start;
    -   `mouseup` → end;
    -   `click` → complete action.

------------------------------------------------------------------------

## 🚀 Next Step

➡️ **Lesson 04: The Event Object (`e`)**

You will learn: - How to access event data
- Mouse position
- Target elements
- Advanced interaction control

------------------------------------------------------------------------

## 💬 Final Note

- Mastering mouse events is not about memorization,
- it is about understanding **user behavior and interaction flow**.
