const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, 'dist')));

// API Routes
app.post('/api/order', (req, res) => {
  const { name, phone, type, message } = req.body;
  console.log(`[Order Received] Name: ${name}, Phone: ${phone}, Type: ${type}, Message: ${message}`);
  res.status(200).json({ status: 'success', message: 'Order received and being processed' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`
  🚀 Besan Server is running!
  📡 Port: ${PORT}
  🌍 Accessibility: All interfaces (0.0.0.0)
  `);
});
