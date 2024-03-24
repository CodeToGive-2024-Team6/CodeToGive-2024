const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the environment variable PORT or 3000 if not set

const {getResidentsAllData,getResidentsByUserID, getObjectivesByUserID, getChronologicalNotesByUserID, getResourcesByUserID, getFollowupsByUserID} = require('./getResidentData.js')

const {getCaregiversAllData,
  getCaregiversByUserID,
  getCaregiversByFirstName,
  getCaregiversByLastName,
  getCaregiversByEmail,
  getCaregiversByResidentID} = require('./getCaregiverData.js')

app.use(express.json()); // Middleware to parse JSON bodies

// Define a root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Endpoint for resident information. Currently contains a placeholder, needs to be replaced with real data.
app.get('/residentinfo/:resident_id', async (req, res) => {
  const residentId = req.params.resident_id;
  try {
    const info = await getResidentsByUserID(residentId);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//Endpoint for resident all data. Currently contains a placeholder, needs to be replaced with real data.
app.get('/residentalldata', async (req, res) => {
  try {
    const info = await getResidentsAllData();
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});


// Endpoint that lists all objectives for a given resident. Currently a placeholder, needs to be replaced with real data.
app.get('/objectives/:resident_id', async (req, res) => {
  const residentId = req.params.resident_id;
  try {
    const info = await getObjectivesByUserID(residentId);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoint that lists all notes written by caregivers for a resident, listed in chronological order. Currently a placeholder.
app.get('/notes/:resident_id', async (req, res) => {
  const residentId = req.params.resident_id;
  try {
    const info = await getChronologicalNotesByUserID(residentId);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoint that lists all available resources. Currently a placeholder.
app.get('/residentresources/:resident_id', async (req, res) => {
  const residentId = req.params.resident_id;
  try {
    const info = await getResourcesByUserID(residentId);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoint that lists all followups listed by caregiver. Currently a placeholder.
app.get('/followups/:resident_id', async (req, res) => {
  const residentId = req.params.resident_id;
  try {
    const info = await getFollowupsByUserID(residentId);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoint that lists all caregivers. Currently a placeholder.
app.get('/caregivers', async (req, res) => {
  try {
    const info = await getCaregiversAllData();
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoint that lists a caregiver by their user ID. Currently a placeholder.
app.get('/caregiver/:user_id', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const info = await getCaregiversByUserID(userId);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoint that lists all caregivers with a given first name. Currently a placeholder.
app.get('/caregiverbyname/:first_name', async (req, res) => {
  const firstName = req.params.first_name;
  try {
    const info = await getCaregiversByFirstName(firstName);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoint that lists all caregivers with a given last name. Currently a placeholder.
app.get('/caregiverbylastname/:last_name', async (req, res) => {
  const lastName = req.params.last_name;
  try {
    const info = await getCaregiversByLastName(lastName);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoint that lists all caregivers with a given email. Currently a placeholder.
app.get('/caregiverbyemail/:email', async (req, res) => {
  const email = req.params.email;
  try {
    const info = await getCaregiversByEmail(email);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});


// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});