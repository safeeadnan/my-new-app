// backend/server.js

const express = require('express');
const app = express();

// Sample route to handle GET requests
app.get('/api/data', (req, res) => {
  // Sample data
  const data = { message: 'Hello from backend!' };
  res.json(data);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
