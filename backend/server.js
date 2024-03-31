// backend/server.js

const express = require('express');
const app = express();
const port = 3001; // Choose any port you prefer

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
