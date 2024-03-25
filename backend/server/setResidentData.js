const admin = require('firebase-admin');
const serviceAccount = require('./codetogive6-firebase-adminsdk-1sqaf-a652c70cae.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

//function to set resident data
async function setResidentsData(residentData) {
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

module.exports = setResidentsData;


