// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

function createElement(tag, attributes = {}, textContent = '') {
    const element = document.createElement(tag)
    for (let key in attributes) {
        element.setAttribute(key, attributes[key])
    }
    if (text) {
        element.textContent = text
    }
    return element
}

function addElementToDOM(id, content) {
    const element  = createElement('div', {id}, content)
    document.body.appendChild(element)
}

function simulateClick(id, text) {
    const element = document.getElementById(id)
    if (element) {
        element.remove()
    }
}
