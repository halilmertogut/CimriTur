// server.js

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Simulated Data (In-Memory)
const users = [
    { id: 1, name: 'Halil Mert ÖĞÜT', email: 'halilmertogut@gmail.com', password: 'password1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Dinçer VELİOĞLU', email: 'dincervelioglu@gmail.com', password: 'password2', imageUrl: 'https://via.placeholder.com/150' }
  ];  

// Endpoints
app.get('/users', (req, res) => {
  res.json(users); // Sends a JSON response with the users
});

app.post('/register', (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json({ message: `User added with ID: ${newUser.id}` }); // Send a JSON response
  } else {
    res.status(400).json({ error: 'Name and email are required' }); // Send error as JSON
  }
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    
    if (user && user.password === password) { // Check if user exists and password matches
      res.json({ message: `User logged in with email: ${email}`, user: { name: user.name, imageUrl: user.imageUrl }});
    } else if (user) {
      res.status(400).json({ error: 'Incorrect password' });
    } else {
      res.status(400).json({ error: 'User not found' });
    }
  });
  

// Server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
