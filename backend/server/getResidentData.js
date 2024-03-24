const admin = require('firebase-admin');
const serviceAccount = require('./codetogive6-firebase-adminsdk-1sqaf-a652c70cae.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function getResidentsByUserID(userID) {
  const residentsRef = db.collection('residents');
  const snapshot = await residentsRef.where('userID', '==', userID).get();
  
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


async function getObjectivesByUserID(userID) {
  const residentsRef = db.collection('residents');
  const snapshot = await residentsRef.where('userID', '==', userID).get();

  if (snapshot.empty) {
    console.log('No matching residents.');
    return [];
  }

  // Prepare to gather all objectives for matching resident
  let objectivesData = [];

  for (let doc of snapshot.docs) {
    const residentId = doc.id;
    // Access the subcollection 'objectives' for each resident
    const objectivesRef = db.collection('residents').doc(residentId).collection('objectives');
    const objectivesSnapshot = await objectivesRef.get();

    if (!objectivesSnapshot.empty) {
      const objectives = objectivesSnapshot.docs.map(objDoc => ({
        objectiveId: objDoc.id,
        ...objDoc.data()
      }));
      
      objectivesData.push({
        residentId: residentId,
        objectives: objectives
      });
    }
  }

  return objectivesData;
}


async function getChronologicalNotesByUserID(userID) {
  const residentsRef = db.collection('residents');
  const snapshot = await residentsRef.where('userID', '==', userID).get();

  if (snapshot.empty) {
    console.log('No matching residents.');
    return [];
  }

  let notesData = [];

  for (let doc of snapshot.docs) {
    const residentId = doc.id;
    // Access the subcollection 'chronologicalNotes' for given residentID
    const notesRef = db.collection('residents').doc(residentId).collection('chronologicalNotes');
    const notesSnapshot = await notesRef.orderBy('date', 'asc').get(); // Order the notes by date, ascending

    if (!notesSnapshot.empty) {
      const notes = notesSnapshot.docs.map(noteDoc => ({
        noteId: noteDoc.id,
        ...noteDoc.data()
      }));

      notesData.push({
        residentId: residentId,
        notes: notes
      });
    }
  }

  return notesData;
}


async function getResourcesByUserID(userID) {
  const residentsRef = db.collection('residents');
  const snapshot = await residentsRef.where('userID', '==', userID).get();

  if (snapshot.empty) {
    console.log('No matching residents.');
    return [];
  }

  // Prepare to gather all resources for matching resident
  let resourcesData = [];

  for (let doc of snapshot.docs) {
    const residentId = doc.id;
    // Access the subcollection 'resources' for each resident
    const resourcesRef = db.collection('residents').doc(residentId).collection('resources');
    const resourcesSnapshot = await resourcesRef.get();

    if (!resourcesSnapshot.empty) {
      const resources = resourcesSnapshot.docs.map(resDoc => ({
        resourceId: resDoc.id,
        ...resDoc.data()
      }));
      
      resourcesData.push({
        residentId: residentId,
        resources: resources
      });
    }
  }

  return resourcesData;
}


async function getFollowupsByUserID(userID) {
  const residentsRef = db.collection('residents');
  const snapshot = await residentsRef.where('userID', '==', userID).get();

  if (snapshot.empty) {
    console.log('No matching residents.');
    return [];
  }

  // Prepare to gather all followups for the matching resident
  let followupsData = [];

  for (let doc of snapshot.docs) {
    const residentId = doc.id;
    // Access the subcollection 'followups' for each resident
    const followupsRef = db.collection('residents').doc(residentId).collection('followups');
    // Ensure to adjust the orderBy field and direction according to your needs
    const followupsSnapshot = await followupsRef.orderBy('date', 'asc').get();

    if (!followupsSnapshot.empty) {
      const followups = followupsSnapshot.docs.map(followupDoc => ({
        followupId: followupDoc.id,
        ...followupDoc.data()
      }));

      followupsData.push({
        residentId: residentId,
        followups: followups
      });
    }
  }

  return followupsData;
}


module.exports = {getResidentsByUserID, getObjectivesByUserID, getChronologicalNotesByUserID, getResourcesByUserID, getFollowupsByUserID}