const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the environment variable PORT or 3000 if not set

app.use(express.json()); // Middleware to parse JSON bodies

// Define a root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Endpoint for resident information. Currently contains a placeholder, needs to be replaced with real data.
app.get('/residentinfo/:resident_id', (req, res) => {
  const residentId = req.params.resident_id; 
  res.json({ message: `Placeholder for data for resident ${residentId}` });
});

// Endpoint that lists all objectives for a given resident. Currently a placeholder, needs to be replaced with real data.
app.get('/objectives/:resident_id', (req, res) => {
  const residentId = req.params.resident_id;
  res.json({ message: `Placeholder for objective data for resident ${residentId}` });
});

// Endpoint that lists all notes written by caregivers for a resident, listed in chronological order. Currently a placeholder.
app.get('/notes/:resident_id', (req, res) => {
  const residentId = req.params.resident_id;
  res.json({ message: `Placeholder for note data for resident ${residentId}` });
});

// Endpoint that lists all available resources. Currently a placeholder.
app.get('/resources', (req, res) => {
  res.json({message: `Placeholder for resource data`});
});

// Endpoint that lists all followups listed by caregiver. Currently a placeholder.
app.get('/followups/:resident_id', (req, res) => {
  const residentId = req.params.resident_id;
  res.json({ message: `Placeholder for follow-up data for resident ${residentId}` });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});