// Create  web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET requests
app.get('/', (req, res) => {
    res.send('Welcome to the Skills API!');
});

// Route to handle POST requests
app.post('/skills', (req, res) => {
    const skill = req.body.skill;
    res.json({ message: `Skill ${skill} added successfully!` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


