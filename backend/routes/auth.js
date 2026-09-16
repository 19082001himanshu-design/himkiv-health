const express = require('express');
const router = express.Router();
const db = require('../config/db');

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, error: 'Username and password required' });
  }

  const user = db.users.getAll().find(u => u.username === username.trim());
  if (!user || user.passwordHash !== password) {
    return res.status(401).json({ success: false, error: 'Invalid credentials. Contact Himanshu Sharma.' });
  }

  // Generate lightweight session token
  const token = Buffer.from(`${user.id}:${user.username}:${Date.now()}`).toString('base64');

  res.json({
    success: true,
    user: {
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      role: user.role
    },
    token
  });
});

// GET /api/auth/me
router.get('/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Not authorized' });
  }

  const founder = db.users.getAll()[0];
  res.json({
    success: true,
    user: {
      id: founder.id,
      username: founder.username,
      fullName: founder.fullName,
      role: founder.role
    }
  });
});

module.exports = router;
