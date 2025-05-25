const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

module.exports = app;
