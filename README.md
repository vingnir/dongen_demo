# Dongens Coding School

Welcome to Dongens Coding School! This project is a simple, beginner-friendly web page example that demonstrates basic HTML, CSS, and JavaScript usage, including how to create a modal dialog box for user login and how to handle basic backend authentication with Node.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How to Use](#how-to-use)
- [Backend Setup](#backend-setup)
- [Code Examples](#code-examples)
- [File Structure](#file-structure)

## Introduction

This project serves as an educational resource for those learning the basics of web development. It includes a simple webpage layout with navigation, content sections, and a modal dialog for user authentication. The backend, built with Node.js and Express, handles basic authentication by validating a hardcoded username and password.

## Features

- **Responsive Layout**: The page adjusts to different screen sizes.
- **Modal Dialog**: A popup modal for user login.
- **Hamburger Menu**: A simple hamburger menu icon.
- **Basic Form Handling**: Includes a basic form within the modal.
- **Backend Authentication**: A Node.js backend that handles form submission and validates user credentials.

## How to Use

1. **Clone or Download the Project**:
   - Clone the repository using the following command:
     ```bash
     git clone https://github.com/vingnir/dongen_demo
     ```
   - Or download the zip file and extract it.
   
2. **Open the Project**:
   - Open the `index.html` or `page2.html` file in your web browser.

3. **Interact with the Page**:
   - Click on the "Sign in/Sign up" button to open the login modal.
   - Use the hamburger menu (if implemented) to trigger actions (e.g., alerts).

## Backend Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Navigate to the Project Directory**:
   - Open your terminal and navigate to the project directory.

2. **Install Dependencies**:
   - Run the following command to install the necessary Node.js packages:
     ```bash
     npm install
     ```

3. **Run the Server**:
   - Start the Node.js server with the following command:
     ```bash
     node server.js
     ```
   - The server will run on `http://localhost:3000`.

### Backend Logic

The backend is a simple Node.js server that uses Express to handle POST requests for user login. The credentials are hardcoded for demonstration purposes.

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Hardcoded credentials
const validUsername = 'dongen';
const validPassword = 'dongen';

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON data

// Handle form submission (API endpoint)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === validUsername && password === validPassword) {
        res.json({ success: true, username });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Code Examples

### 1. Opening the Login Modal

The login modal can be opened using the following JavaScript function:

```javascript
/**
 * Opens the modal by setting the display style to 'block'.
 */
function openDongensModal() {
    document.getElementById('modal').style.display = 'block';
}
```

### 2. Closing the Login Modal

The modal can be closed using this function:

```javascript
/**
 * Closes the modal by setting the display style to 'none'.
 */
function closeDongensModal() {
    document.getElementById('modal').style.display = 'none';
}
```

### 3. Form Submission and Backend Validation

JavaScript that handles form submission, sends the data to the backend, and processes the response:

```javascript
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('nameInput').value;
    const password = document.getElementById('passwordInput').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Send credentials as JSON
    })
    .then(response => response.json()) // Parse the JSON response
    .then(result => {
        if (result.success) {
            document.getElementById('btntext').innerHTML = `<img id="loginicon" src="images/usericon.png"> ${result.username} (Logout)`;
            document.getElementById('modal').style.display = 'none';

            // Change the button's click handler to handle logging out
            document.querySelector('.loginbtn').onclick = function() {
                // Reset the button text to "signin/signup" on logout
                document.getElementById('btntext').innerHTML = '<img id="loginicon" src="images/usericon.png"> signin/signup';

                // Reassign the button's click handler to reopen the login modal
                this.onclick = openDongensModal;
            };
        } else {
            alert(result.message); // Display an error message if the login fails
        }
    })
    .catch(error => console.error('Error:', error)); // Log any errors
};
```

### 4. Basic HTML Structure

Here is a snippet of the HTML structure, including the modal:

```html
<button class="loginbtn" onclick="openDongensModal()">Sign in/Sign up</button>

<div id="modal" style="display: none;">
    <div class="modal-overlay">
        <div class="modal-wrapper">
            <span onclick="closeDongensModal()">&times;</span>
            <form id="loginForm">
                <label for="nameInput">Username</label>
                <input id="nameInput" type="text" name="username">
                <label for="passwordInput">Password</label>
                <input id="passwordInput" type="password" name="password">
                <button id="submitBtn" type="submit">LOGIN</button>
            </form>
        </div>
    </div>
</div>
```

## File Structure

```
Dongens-Coding-School/
├── css/
│   ├── style-page2.css
│   └── style.css
├── images/
│   └── usericon.png
├── js/
│   ├── script.js
│   └── page2.js
├── index.html
├── page2.html
├── .gitignore
├── README.md
└── server.js
```

---

You can clone the repository using this link: [https://github.com/vingnir/dongen_demo](https://github.com/vingnir/dongen_demo).
```

