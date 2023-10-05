const express = require('express');
const router = express.Router();
const User = require('../models/user.model');


router.post('/signup', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(200).json({ message: 'User signed up successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
