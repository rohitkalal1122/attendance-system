const express = require('express');
const path = require('path');

const app = express();

// Serve static files from client folder
app.use(express.static(path.join(__dirname, '../client')));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});