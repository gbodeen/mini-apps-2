const express = require('express');
const router = express.Router();

router.get('/scores', (req, res) => {
  res.status(500).send('No routes configured.'); // FIX ME
});

router.post('/score', (req, res) => {
  res.status(500).send('No routes configured.'); // FIX ME
});

module.exports = router;