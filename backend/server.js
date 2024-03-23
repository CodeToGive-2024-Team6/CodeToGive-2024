const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the environment variable PORT or 3000 if not set

app.use(express.json()); // Middleware to parse JSON bodies

// Define a root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});