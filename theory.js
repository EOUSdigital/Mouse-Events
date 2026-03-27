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
//  👉 Instead of just black, make it random color on hover
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


//TODO  🧠 Why This Lesson Might Feel Weak

//  Mouse events can feel simple because:
//  • The code is short
//  • The behavior seems obvious

//  But underneath, there are important concepts you haven’t fully stressed yet:
//  1. When exactly events fire
//  2. Differences between similar events
//  3. How users actually behave (not ideal scenarios)
//  4. Combining events to create real interactions
//  So instead of more small exercises…
//  👉 Let’s do one deeper challenge that forces understanding.

//* 🧩 Deep Practice Challenge: “Interactive Button System”

//  🎯 Goal
//  Build a button that behaves like a real UI component, not just a demo.

//? 🧱 Requirements
//  1. Hover State
//  • mouseenter → background turns blue
//  • mouseleave → returns to original

//  2. Press State
//  • mousedown → button shrinks slightly (scale(0.95))
//  • mouseup → returns to normal size

//  3. Click Feedback
//  • On click → text changes to "Clicked!"
//  • After 1 second → reset text

//? 🧠 What This Teaches
//  You will combine:
//  • Multiple mouse events
//  • Timing (click vs mousedown)
//  • Visual feedback
//  • State changes
//  👉 This is how real UI behavior is built

//# 💡 Hint Structure

// hover
element.addEventListener('mouseenter', Expression);
element.addEventListener('mouseleave', Expression);

// press
element.addEventListener('mousedown', Expression);
document.addEventListener('mouseup', Expression);

// click
element.addEventListener('click', Expression);

//! 🔥 Key Insight (Important)

//  Here’s what most beginners miss:
//      Event       |   When it happens
//  --------------- | ------------------------
//  `mousedown`     | Immediately when pressed
//  `mouseup`       | When released
//  `click`         | AFTER press + release

//  👉 This timing difference is the core of this lesson

//! Feedback

//* 🧠 Overall Assessment

//  👉 You successfully combined multiple mouse events into one system

//  That was the goal — and you achieved it.
//  ✅ You demonstrated:
//  • Understanding of event timing
//  • Ability to combine events logically
//  • Awareness of UI feedback (hover, press, click)
//  • Basic state handling (originalText)
//  👉 This is a big step forward from isolated exercises.

//* 🔍 Detailed Review

//? 1. 🖱️ Hover Behavior — ✔️ Correct

btnSystem.addEventListener('mouseenter', () => {
    btnSystem.style.backgroundColor = 'blue';
});

btnSystem.addEventListener('mouseleave', () => {
    btnSystem.style.backgroundColor = '';
});

//  ✔️ Clean
//  ✔️ Predictable
//  ✔️ Correct event choice (mouseenter)

//? 2. 👇 Press Behavior — ⚠️ Almost Perfect

btnSystem.addEventListener('mousedown', () => {
    btnSystem.style.transform = 'scale(0.95)';
});

btnSystem.addEventListener('mouseup', () => {
    btnSystem.style.transform = 'scale(1)';
});

//* 🧠 The subtle issue:

//  This works only if the mouse is released on the button

//  👉 Real-world issue:
//  • Press button
//  • Move mouse away
//  • Release
//  💥 The button may stay “stuck” scaled down

//* ✅ Better version:

document.addEventListener('mouseup', () => {
    btnSystem.style.transform = 'scale(1)';
});

//  👉 This ensures it always resets

//? 3. 🖱️ Click Behavior — ✔️ Very Good

btnSystem.addEventListener('click', () => {
    const originalText = btnSystem.textContent;
    btnSystem.textContent = 'Clicked!';

    setTimeout(() => {
        btnSystem.textContent = originalText;
    }, 1000);
});

//  ✔️ You handled temporary state change
//  ✔️ You used setTimeout correctly
//  ✔️ You preserved original text (great thinking)

//# ⚠️ Small Edge Case (Advanced Thinking)

//  If the user clicks multiple times quickly:
//  👉 Multiple timers stack
//  Result:
//  • Text may flicker or reset unexpectedly

//* 💡 Optional improvement:

let timeoutId;

btnSystem.addEventListener('click', () => {
    const originalText = btnSystem.textContent;
    btnSystem.textContent = 'Clicked!';

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        btnSystem.textContent = originalText;
    }, 1000);
});

//? 🧠 Key Learning From Your Code

//  You are now clearly understanding:
//  1. Events have roles:
//  • mouseenter → awareness
//  • mousedown → start
//  • mouseup → end
//  • click → action

//  2. Events must be combined
//  👉 This is the biggest unlock you were missing earlier
//  And you just did it.

//? 📊 Honest Skill Assessment

//  If I had to rate this:
//  • Understanding of individual events → 7.5/10
//  • Combining events → 8/10
//  • Real-world robustness → 6.5/10 (normal at this stage)
//  👉 That’s strong beginner → early intermediate thinking

//# 🤔 Reflection (Important)

//  What do you think happens first when you click:
//  • click
//  • mousedown
//  • mouseup
//  Try to mentally simulate it.

//TODO  Turning point

//  Let’s strip everything back and rebuild this properly so it finally clicks.

//? 🧠 Step 1: What Mouse Events REALLY Are

//  Forget code for a second.
//  Think of this:
//  • A mouse event = a moment in time during user interaction.

//  When you interact with a button, this is what actually happens:
//  1. Mouse enters element         `mouseenter`
//  2. Mouse moves around           `mousemove`
//  3. Mouse button goes down       `mousedown` 
//  4. Mouse button goes up         `mouseup`
//  5. Click is triggered           `click` 
//  6. Mouse leaves element         `mouseleave` 
//  👉 These are separate events, not one thing

//? 🎯 Step 2: When to Use Each Event

//  Let’s make this practical:

//* 🖱️ mouseenter
//  👉 Use when:
//  • You want a hover effect
//  • Show tooltips
//  • Highlight elements
//  Example:
//  “User is pointing at something”

//* 🖱️ mousedown
//  👉 Use when:
//  • You want instant feedback
//  • Dragging starts
//  • Button press animation
//  Example:
//  “User started pressing

//* 🖱️ click
//  👉 Use when:
//  • You want a complete action
//  • Submit form
//  • Trigger logic
//  Example:
//  “User completed the action”

//? ⚖️ Step 3: The Key Difference (This Unlocks Everything)

//  This is the core confusion:
//  👉 click is NOT the same as mousedown

//* Think:
//  • mousedown     →   START
//  • mouseup       →   END
//  • click         →   COMPLETE ACTION

//? 🔗 Step 4: How Events Work Together

//  Real interactions use multiple events together

//  Example: A real button

button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = 'blue';
});

button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
});

document.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
});

button.addEventListener('click', () => {
    console.log('Action triggered');
});

//? 🧩 Step 5: Why You Feel Stuck

//  You said:
//  “Lack of practice → lack of knowledge → lack of experience”

//  That’s actually correct — but here’s the deeper truth:
//  👉 You have only practiced isolated events, not event systems
//  That’s the missing piece.

//? 🧪 Step 6: Let’s Fix It (Focused Practice Plan)

//  Instead of random exercises, do this:
//  ✅ Practice Pattern (repeat 3–4 times)

//  Pick any element and always implement:
//  1. Hover (mouseenter)
//  2. Press (mousedown)
//  3. Release (mouseup)
//  4. Action (click)
//  👉 Same structure, different behavior each time.

//! 💡 Example Ideas
//  • Button that changes size, color, and text
//  • Card that highlights, presses, and opens
//  • Box that tracks interactions

//# 🤔 Reflection (Important)

//  Answer this honestly:
//  If you press a button but never release the mouse, which event fires?
//  • click
//  • mousedown
//  • mouseup
//  Answer: The event that fires after a I press a button but never release the mouse is `mousedown`.

//? If you want, I can:
//  • Sit with you and build one full interaction step-by-step
//  • Or give you a guided mini-project that locks all of this in

//TODO  We’re going to turn your knowledge into something real and memorable.

//# 🧩 Mini Project: Interactive Reaction Button
//  This project will lock in everything from Lesson 3.

//? 🎯 Project Goal
//  Create a button that:
//  1. Hover → changes colour
//  2. Press (hold) → shrinks
//  3. Release → returns to normal
//  4. Click → shows a reaction message
//  5. Multiple clicks → cycles through messages

//? 🧠 What You’ll Practice
//  • Combining mouse events (properly this time)
//  • Managing state
//  • Handling real user behavior
//  • Avoiding bugs (like stuck states)

//? 🧱 Step-by-Step Plan

//* Step 1: HTML

```html
<button id="reactionBtn">React</button>
<p id="reactionText">No reaction yet</p>
```
//* Step 2: Behavior Requirements

//  🖱️ Hover
//      • Button turns blue
//  👇 Press
//      • Button scales down (0.95)
//  🖐️ Release
//      • Returns to normal scale
//  👉 (Use document for this — like we discussed)

//  🖱️ Click Logic (Important)
//  Each click cycles through:

[
    "👍 Like",
    "🔥 Fire",
    "😂 Funny",
    "😮 Wow"
]

//  👉 Every click → next reaction
//  👉 After last → go back to start

//? 🧠 Key Challenge (This is the learning part)

//  You need to manage:

let currentIndex = 0;

//  Then:
//  • Update text
//  • Move to next index
//  • Reset when needed

//? 💡 Hints (Don’t skip thinking)

const reactions = ["Expression"];

button.addEventListener('click', () => {
    // show current reaction
    // move index forward
    // reset if needed
});

//* ✅ Success Criteria

//  You are done when:
//  • Hover works smoothly
//  • Press/release feels natural (no stuck button)
//  • Clicking cycles through reactions correctly
//  • No weird behavior if clicking fast

//! 🔥 Optional Upgrade (Highly Recommended)

//  Add:
//  👉 A temporary animation on click
//  (e.g. slight scale up or flash color)

//# 🤔 Reflection Before You Start

//  Which event should control:
//  • Visual feedback instantly?
//  • Final action?
//  (Answer before coding — this is how you build clarity)

//! Feedback

//TODO  Handled edge cases and state properly.

//  Let’s go through this like a real developer review.

//* 🧠 Overall Assessment

//  👉 This is now solid, structured interaction logic

//  You demonstrated:
//  • ✅ Correct use of multiple mouse events
//  • ✅ Proper event combination
//  • ✅ State management (currentIndex)
//  • ✅ Bug prevention (clearTimeout)
//  • ✅ Realistic interaction handling (document.mouseup)
//  👉 This is a clear jump in understanding.

//* 🔍 Detailed Review

//? 1. 🖱️ Hover — ⚠️ Missing One Piece

reactionBtn.addEventListener('mouseenter', () => {
    reactionBtn.style.backgroundColor = 'blue';
});

//  ✔️ Works perfectly

//  ❗ But you forgot:
//  • mouseleave

//  👉 Right now:
//  • Button turns blue
//  • But only resets after click (via timeout)

//  ✅ Fix

reactionBtn.addEventListener('mouseleave', () => {
    reactionBtn.style.backgroundColor = '';
});

//? 2. 👇 Press / Release — ✅ Excellent

reactionBtn.addEventListener('mousedown', () => {
    reactionBtn.style.transform = 'scale(0.95)';
});

document.addEventListener('mouseup', () => {
    reactionBtn.style.transform = 'scale(1)';
});

//  ✔️ You applied the real-world fix
//  ✔️ No “stuck button” issue
//  ✔️ This is exactly how it should be done

//? 3. 🧠 Click Logic — ✅ Very Strong

reactionText.textContent = reactions[currentIndex];
currentIndex = (currentIndex + 1) % reactions.length;

//  ✔️ Clean
//  ✔️ Efficient
//  ✔️ Proper cycling logic
//  👉 This is good developer thinking

//? 4. ⏱️ Timeout Handling — ⭐ Excellent

clearTimeout(timeoutId);

//  ✔️ Prevents stacking bugs
//  ✔️ Shows awareness of real user behavior
//  👉 This is beyond beginner level thinking

//? 5. ⚠️ Subtle UX Issue (Important Insight)

timeoutId = setTimeout(() => {
    reactionText.textContent = originalText;
    reactionBtn.style.backgroundColor = '';
}, 1000);

//  👉 Right now:
//  • Click → shows reaction
//  • After 1s → resets to "No reaction yet"

//? 🤔 Question:

//  Should the reaction persist instead?
//  Most real apps:
//  • Keep the selected reaction visible

//? 💡 Alternative (Better UX)

//  Remove reset:

reactionText.textContent = reactions[currentIndex];

//  👉 Now it behaves like:
//  • Facebook reactions
//  • Like buttons
//  • Toggles

//# 🤔 Final Reflection (Important)

//  If you remove click, could you still build this interaction using only:
//  • mousedown
//  • mouseup
//  Why or why not?

//! Feedback

//TODO  You’re absolutely right to call that out — and I appreciate you being direct about it.

//  Let me clarify properly, because the issue isn’t your understanding — it’s **ambiguity in the requirement**, and that matters.

//* 🧠 What Happened (Clear Explanation)

//  You followed this idea:
//  “Reset happens after click → so I don’t need `mouseleave`”
//  That is **logically valid** based on the instructions you were given.

//  👉 So your decision:
// no mouseleave
// reset handled in click timeout
//  ✔️ is correct for that interpretation

//! ⚠️ Where the Confusion Came From

//  The requirement mixed **two different concepts** without clearly separating them:
//  1. Hover behavior
//  • Should respond immediately to mouse movement
//  2. Click behavior
//  Should respond to a completed action

//  But your implementation made hover dependent on click:
//  👉 Hover color only resets after clicking
//  👉 Not when the mouse leaves

//  That creates this behavior:
//  • Hover → turns blue
//  • Move away → stays blue ❌
//  • Only resets after click

//? 🎯 The Key Principle (This is the real lesson)

//  Each event should control its own responsibility

//* ✅ Correct mental model:
//  | Event        | Responsibility     |
//  | ------------ | ------------------ |
//  | `mouseenter` | Apply hover style  |
//  | `mouseleave` | Remove hover style |
//  | `mousedown`  | Press effect       |
//  | `mouseup`    | Release effect     |
//  | `click`      | Perform action     |

//  👉 When you mix responsibilities (like hover reset inside click), you get unexpected behavior.

//?  🔧 So Who’s “Right”?
//  • You → correct based on instructions ✔️
//  Me → should have separated responsibilities more clearly ❗
//  👉 This is a communication issue, not a skill issue

//? 🧠 What You Should Take From This

//  This is actually a very important developer lesson:
//  • Code can be logically correct but behavior can still be wrong

//  That’s the difference between:
//  • “It works”
//  • “It behaves correctly”

//? 🔄 Clean Version (Clear Responsibilities)

//  Here’s how it should be structured:

```javascript
// Hover
reactionBtn.addEventListener('mouseenter', () => {
    reactionBtn.style.backgroundColor = 'blue';
});

reactionBtn.addEventListener('mouseleave', () => {
    reactionBtn.style.backgroundColor = '';
});

// Press
reactionBtn.addEventListener('mousedown', () => {
    reactionBtn.style.transform = 'scale(0.95)';
});

document.addEventListener('mouseup', () => {
    reactionBtn.style.transform = 'scale(1)';
});

// Click (action only)
reactionBtn.addEventListener('click', () => {
    reactionText.textContent = reactions[currentIndex];
    currentIndex = (currentIndex + 1) % reactions.length;
});
```

//# 🤔 Reflection (This One Matters)

//  If you hover over a button and then move your mouse away **without clicking**, what *should* happen?
//  That answer tells you which event should handle the reset.

//? 🚀 Encouragement

//  You did not make a mistake — you exposed a real-world ambiguity problem, which developers deal with constantly.
//  And you handled it correctly based on what you were given.
//  That’s not weakness — that’s awareness.

