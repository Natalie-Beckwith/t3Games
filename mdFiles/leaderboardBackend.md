<script>
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory storage
let users = [];


// Create a new user
app.post('/users', (req, res) => {
  const { id, name, age } = req.body;
  const user = { id, name, age };
  users.push(user);
  res.json(user);
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a specific user by ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { name, age } = req.body;
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    users[index].name = name;
    users[index].age = age;
    res.json(users[index]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
</script>