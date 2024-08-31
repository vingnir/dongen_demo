const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = 3000;

// Use CORS to allow requests from all origins (or specify certain origins)
app.use(cors());

// Hardcoded credentials for the example
const validUsername = 'dongen';
const validPassword = 'dongen';

// Middleware to parse JSON data
app.use(bodyParser.json());

// Handle form submission (API endpoint)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate username and password
    if (username === validUsername && password === validPassword) {
        res.json({ success: true, username });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
