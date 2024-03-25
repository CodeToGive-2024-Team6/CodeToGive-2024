const admin = require('firebase-admin');
const serviceAccount = require('./codetogive6-firebase-adminsdk-1sqaf-a652c70cae.json');


const db = admin.firestore();


//function to set caregiver data
//need email, firstName, lastName, residentReferences fields

function setCaregiverData(caregiverData) {
    const caregiversRef = db.collection('caregivers');
    return caregiversRef.add({
        email: caregiverData.email,
        firstName: caregiverData.firstName,
        lastName: caregiverData.lastName,
        residentReferences: caregiverData.residentReferences
    });
}



//function to update caregiver data
//need email, firstName, lastName, residentReferences fields
async function updateCaregiverData(caregiverData) {
    const caregiversRef = db.collection('caregivers').doc(caregiverData.id);
    return caregiversRef.update({
        email: caregiverData.email,
        firstName: caregiverData.firstName,
        lastName: caregiverData.lastName,
        residentReferences: caregiverData.residentReferences
    });
}

//function to delete caregiver data
async function deleteCaregiverData(caregiverId) {
    const caregiversRef = db.collection('caregivers').doc(caregiverId);
    return caregiversRef.delete();
}

//functions to update fields one at a time

//need email field
async function updateCaregiverEmail(caregiverId, email) {
    const caregiversRef = db.collection('caregivers').doc(caregiverId);
    return caregiversRef.update({
        email: email
    });
}

//need firstName field
async function updateCaregiverFirstName(caregiverId, firstName) {
    const caregiversRef = db.collection('caregivers').doc(caregiverId);
    return caregiversRef.update({
        firstName: firstName
    });
}

//need lastName field
async function updateCaregiverLastName(caregiverId, lastName) {
    const caregiversRef = db.collection('caregivers').doc(caregiverId);
    return caregiversRef.update({
        lastName: lastName
    });
}

//need residentReferences field
async function updateCaregiverResidentReferences(caregiverId, residentReferences) {
    const caregiversRef = db.collection('caregivers').doc(caregiverId);
    return caregiversRef.update({
        residentReferences: residentReferences
    });
}







module.exports = {
    setCaregiverData
};


