const admin = require('firebase-admin');
const serviceAccount = require('./codetogive6-firebase-adminsdk-1sqaf-a652c70cae.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

const db = admin.firestore();


//function to fetch all caregiver data
async function getCaregiversAllData() {
  const caregiversRef = db.collection('caregivers');
  const snapshot = await caregiversRef.get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return [];
  }
  const caregiversData = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return caregiversData;
}

//function to fetch caregiver data by userID
async function getCaregiversByUserID(userID) {
  const caregiversRef = db.collection('caregivers');
  const snapshot = await caregiversRef.where('userID', '==', userID).get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return [];
  }

  const caregiversData = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return caregiversData;
}


//function to fetch caregiver data by firstName
async function getCaregiversByFirstName(firstName) {
  const caregiversRef = db.collection('caregivers');
  const snapshot = await caregiversRef.where('firstName', '==', firstName).get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return [];
  }

  const caregiversData = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return caregiversData;
}

//function to fetch caregiver data by lastName
async function getCaregiversByLastName(lastName) {
  const caregiversRef = db.collection('caregivers');
  const snapshot = await caregiversRef.where('lastName', '==', lastName).get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return [];
  }

  const caregiversData = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return caregiversData;
}

//function to fetch caregiver data by email
async function getCaregiversByEmail(email) {
  const caregiversRef = db.collection('caregivers');
  const snapshot = await caregiversRef.where('email', '==', email).get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return [];
  }

  const caregiversData = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return caregiversData;
}

//function to fetch all residents for a given caregiver
async function getCaregiversByResidentID(residentID) {
  const caregiversRef = db.collection('caregivers');
  const snapshot = await caregiversRef.where('residentID', '==', residentID).get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return [];
  }

  const caregiversData = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return caregiversData;
}

//function to fetch caregiver data by email
async function getCaregiversByEmail(email) {
  const caregiversRef = db.collection('caregivers');
  const snapshot = await caregiversRef.where('email', '==', email).get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return [];
  }

  const caregiversData = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return caregiversData;
}



module.exports = {
  getCaregiversAllData,
  getCaregiversByUserID,
  getCaregiversByFirstName,
  getCaregiversByLastName,
  getCaregiversByEmail,
  getCaregiversByResidentID
};