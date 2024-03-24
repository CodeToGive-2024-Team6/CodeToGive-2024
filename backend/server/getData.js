const admin = require('firebase-admin');
const serviceAccount = require('codetogive6-firebase-adminsdk-1sqaf-a652c70cae.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();