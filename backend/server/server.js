const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000; // Use the environment variable PORT or 3000 if not set

const {getResidentsAllData,getResidentsByUserID, getObjectivesByUserID, getChronologicalNotesByUserID, getResourcesByUserID, getFollowupsByUserID} = require('./getResidentData.js')
const { setGoals, setNotes, setResources, setFollowUps, setResidentInfo, updateGoal, deleteGoal } = require('./setResidentData');

const {getCaregiversAllData,
  getCaregiversByUserID,
  getCaregiversByFirstName,
  getCaregiversByLastName,
  getCaregiversByEmail,
  getCaregiversResidents
} = require('./getCaregiverData.js')


const {setCaregiverData,
  updateCaregiverData,
  deleteCaregiverData,
  updateCaregiverEmail,
  updateCaregiverFirstName,
  updateCaregiverLastName} = require('./setCaregiverData.js')

app.use(express.json()); // Middleware to parse JSON bodies

app.use(cors());

// app.use(bodyParser.json());


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

app.patch('/objectives/:residentId/:objectiveId', async (req, res) => {
  const { residentId, objectiveId } = req.params;
  const updatedGoalData = req.body;

  try {
    await updateGoal(residentId, objectiveId, updatedGoalData);
    res.json({ message: 'Goal successfully updated' });
  } catch (error) {
    console.error('Error updating goal:', error);
    res.status(500).send({ message: 'Failed to update goal', error: error.message });
  }
});

app.delete('/objectives/:residentId/:objectiveId', async (req, res) => {
  const { residentId, objectiveId } = req.params;

  try {
    await deleteGoal(residentId, objectiveId);
    res.json({ message: 'Goal successfully deleted' });
  } catch (error) {
    console.error('Error deleting goal:', error);
    res.status(500).send({ message: 'Failed to delete goal', error: error.message });
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

// Endpoint that lists the residents assigned to a caregiver. Currently a placeholder.
app.get('/caregiverresidents/:caregiver_id', async (req, res) => {
  const caregiverId = req.params.caregiver_id;
  try {
    const info = await getCaregiversResidents(caregiverId);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});


// Endpoint to add a new caregiver. Currently a placeholder.
app.post('/caregiveradd', async (req, res) => {
  const caregiverData = req.body;
  try {
    const info = await setCaregiverData(caregiverData);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});


// Endpoint to update a caregiver's information. Currently a placeholder.
app.put('/caregiverupdate/:caregiver_id', async (req, res) => {
  const caregiverData = req.body;
  try {
    const info = await updateCaregiverData(caregiverData);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoint to delete a caregiver. Currently a placeholder.
app.delete('/caregiverdelete/:caregiver_id', async (req, res) => {
  const caregiverId = req.params.caregiver_id;
  try {
    const info = await deleteCaregiverData(caregiverId);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoint to update a caregiver's email. Currently a placeholder.
app.put('/caregiverupdateemail/:caregiver_id', async (req, res) => {
  const caregiverId = req.params.caregiver_id;
  const email = req.body.email;
  try {
    const info = await updateCaregiverEmail(caregiverId, email);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoint to update a caregiver's first name. Currently a placeholder.
app.put('/caregiverupdatefirstname/:caregiver_id', async (req, res) => {
  const caregiverId = req.params.caregiver_id;
  const firstName = req.body.firstName;
  try {
    const info = await updateCaregiverFirstName(caregiverId, firstName);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoint to update a caregiver's last name. Currently a placeholder.
app.put('/caregiverupdatelastname/:caregiver_id', async (req, res) => {
  const caregiverId = req.params.caregiver_id;
  const lastName = req.body.lastName;
  try {
    const info = await updateCaregiverLastName(caregiverId, lastName);
    res.json(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});








// POST endpoint to set goals for a resident
app.post('/setgoals/:residentId', async (req, res) => {
  const { residentId } = req.params; 
  const goalsData = req.body; 
  
  try {
    await setGoals(residentId, goalsData); 
    res.status(201).send({ message: 'Goals successfully added' });
  } catch (error) {
    console.error('Error adding goals:', error);
    res.status(500).send({ message: 'Failed to add goals', error: error.message });
  }
});

// POST endpoint to set notes for a resident
app.post('/setnotes/:residentId', async (req, res) => {
  const { residentId } = req.params; 
  const goalsData = req.body; 
  
  try {
    await setNotes(residentId, goalsData); 
    res.status(201).send({ message: 'Notes successfully added' });
  } catch (error) {
    console.error('Error adding Notes:', error);
    res.status(500).send({ message: 'Failed to add Notes', error: error.message });
  }
});

// POST endpoint to set resources for a resident
app.post('/setresources/:residentId', async (req, res) => {
  const { residentId } = req.params; 
  const goalsData = req.body; 
  
  try {
    await setResources(residentId, goalsData); 
    res.status(201).send({ message: 'Resources successfully added' });
  } catch (error) {
    console.error('Error adding Resources:', error);
    res.status(500).send({ message: 'Failed to add Resources', error: error.message });
  }
});

// POST endpoint to set followups for a resident
app.post('/setfollowups/:residentId', async (req, res) => {
  const { residentId } = req.params; 
  const goalsData = req.body; 
  
  try {
    await setFollowUps(residentId, goalsData); 
    res.status(201).send({ message: 'Follow-ups successfully added' });
  } catch (error) {
    console.error('Error adding Follow-ups:', error);
    res.status(500).send({ message: 'Failed to add Follow-ups', error: error.message });
  }
});


// POST endpoint to set followups for a resident
app.post('/setresidentinfo/', async (req, res) => {
  const goalsData = req.body; 
  
  try {
    await setResidentInfo(goalsData); 
    res.status(201).send({ message: 'Resources successfully added' });
  } catch (error) {
    console.error('Error adding Resources:', error);
    res.status(500).send({ message: 'Failed to add Resources', error: error.message });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});