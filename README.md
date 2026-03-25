# 🟧 Module 8 - Events: Lesson 03. Mouse Events

## Overview
This lesson introduces mouse events in JavaScript, allowing you to create interactive web experiences based on user actions.

---

## Key Concepts

### What Are Mouse Events?
Mouse events are actions triggered by user interactions with a mouse, such as clicking, hovering, or moving the cursor.

---

## Common Mouse Events

- click → Triggered when the mouse is clicked
- dblclick → Triggered on double click
- mousedown → When the mouse button is pressed
- mouseup → When the mouse button is released
- mouseenter → When the cursor enters an element
- mouseleave → When the cursor leaves an element
- mousemove → When the mouse moves

---

## Basic Example

```javascript
const button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log('Button clicked!');
});
```

---

## Practical Examples

### Hover Effect

```javascript
const box = document.querySelector('.box');

box.addEventListener('mouseenter', () => {
  box.style.backgroundColor = 'blue';
});

box.addEventListener('mouseleave', () => {
  box.style.backgroundColor = '';
});
```

---

### Mouse Position Tracking

```javascript
document.addEventListener('mousemove', (e) => {
  console.log(e.clientX, e.clientY);
});
```

---

## Key Differences

- click vs mousedown → click happens after press + release
- mouseenter vs mouseover → mouseenter does not bubble or retrigger inside children

---

## Best Practices

- Use addEventListener instead of inline events
- Prefer CSS classes over inline styles
- Keep logic simple and readable
- Separate concerns (JS for behaviour, CSS for styling)

---

## Exercises Completed

### Exercise 1: Press & Hold Button
- mousedown → change colour
- mouseup → revert colour

### Exercise 2: Hover Tracker
- Count number of hovers using state
- Update DOM dynamically

---

## Common Mistakes

- Forgetting to select elements before adding listeners
- Scope issues with variables inside event callbacks
- Misunderstanding event differences

---

## Summary

Mouse events allow you to:
- Respond to user interactions
- Build dynamic interfaces
- Track behaviour in real time

---

## Next Step

Lesson 04: The Event Object (e)
