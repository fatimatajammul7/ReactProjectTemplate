const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Enable CORS
app.use(cors()); // Add this line

// Endpoint for receiving the AJAX request
app.post('/data', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);
  res.json({ message: 'Data received successfully!' });
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
