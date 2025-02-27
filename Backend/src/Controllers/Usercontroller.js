const express = require('express');
const router = express.Router();

let users = [];


router.get('/users', (req, res) => {
  res.status(200).json({
    message: 'Fetched all users successfully',
    users: users
  });
});


router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.id === id);
  if (user) {
    res.status(200).json({
      message: 'User found',
      user: user
    });
  } else {
    res.status(404).json({
      message: 'User not found'
    });
  }
});

router.post('/users', (req, res) => {
  const { id, username, email } = req.body;
  const newUser = { id, username, email };
  users.push(newUser);

  res.status(201).json({
    message: 'User created successfully',
    user: newUser
  });
});


router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  let user = users.find(user => user.id === id);
  
  if (user) {
    user.username = username;
    user.email = email;
    res.status(200).json({
      message: 'User updated successfully',
      user: user
    });
  } else {
    res.status(404).json({
      message: 'User not found'
    });
  }
});

router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== id);
  
  res.status(200).json({
    message: 'User deleted successfully'
  });
});

module.exports = router;
