const admin = require('firebase-admin');
const serviceAccount = require('./codetogive6-firebase-adminsdk-1sqaf-a652c70cae.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();


//function to fetch all resident data and return a list of all residents

async function getResidentsAllData() {
  const residentsRef = db.collection('residents');
  const snapshot = await residentsRef.get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return [];
  }
  const residentsData = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return residentsData;
}



async function getResidentsByUserID(userID) {
  const residentRef = db.collection('residents').doc(userID).get();
  const snapshot = await residentRef;
  
  if (!snapshot.exists) {
    console.log('No matching document.');
    return null; 
  }  
  
  const residentData = {
    id: snapshot.id,
    ...snapshot.data()
  };
  
  return residentData;
}

async function getObjectivesByUserID(userID) {
  // Directly reference the objectives subcollection of the specified resident
  const objectivesRef = db.collection('residents').doc(userID).collection('objectives');
  const snapshot = await objectivesRef.get();

  if (snapshot.empty) {
    console.log('No matching objectives.');
    return [];
  }

  const objectivesData = snapshot.docs.map(doc => ({
    objectiveId: doc.id,
    ...doc.data()
  }));

  return objectivesData.map(objective => ({
    residentId: userID,
    ...objective
  }));
}

async function getChronologicalNotesByUserID(userID) {
  // Directly access the subcollection 'chronologicalNotes' of the given residentID
  const notesRef = db.collection('residents').doc(userID).collection('chronologicalNotes');
  const notesSnapshot = await notesRef.orderBy('date', 'asc').get(); // Order the notes by date, ascending

  if (notesSnapshot.empty) {
    console.log('No matching notes.');
    return [];
  }

  const notes = notesSnapshot.docs.map(noteDoc => ({
    noteId: noteDoc.id,
    ...noteDoc.data()
  }));

  return notes
}


async function getResourcesByUserID(userID) {
  // Directly access the 'resources' subcollection for the given residentID
  const resourcesRef = db.collection('residents').doc(userID).collection('resources');
  const resourcesSnapshot = await resourcesRef.get();

  if (resourcesSnapshot.empty) {
    console.log('No matching resources.');
    return [];
  }

  const resources = resourcesSnapshot.docs.map(resDoc => ({
    resourceId: resDoc.id,
    ...resDoc.data()
  }));

  return resources;
}


async function getFollowupsByUserID(userID) {
  // Directly access the 'followups' subcollection for the given residentID
  const followupsRef = db.collection('residents').doc(userID).collection('followups');
  const followupsSnapshot = await followupsRef.get();

  if (followupsSnapshot.empty) {
    console.log('No matching followups.');
    return [];
  }

  const followups = followupsSnapshot.docs.map(followupDoc => ({
    followupId: followupDoc.id,
    ...followupDoc.data()
  }));

  return followups;

}

//get all followup documents for a given resident
async function getFollowUpsForResident(residentID) {
  const followUpsRef = db.collection('residents').doc(residentID).collection('followups');
  const snapshot = await followUpsRef.get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return [];
  }

  const followUpsData = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return followUpsData;
}





module.exports = {getResidentsAllData,getResidentsByUserID, getObjectivesByUserID, getChronologicalNotesByUserID, getResourcesByUserID, getFollowupsByUserID, getFollowUpsForResident};