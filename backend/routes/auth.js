const express = require('express');
const router = express.Router();

const roles = { manager: 'manager', kitchen: 'kitchen' };

router.post('/', (req, res) => {
  const { role, password } = req.body;
  if (roles[role] && roles[role] === password) {
    res.json({ success: true, role });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;

