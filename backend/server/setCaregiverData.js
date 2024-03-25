const admin = require('firebase-admin');
const serviceAccount = require('./codetogive6-firebase-adminsdk-1sqaf-a652c70cae.json');


const db = admin.firestore();

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
async function updateCaregiverEmail(caregiverId, email) {
    const caregiversRef = db.collection('caregivers').doc(caregiverId);
    return caregiversRef.update({
        email: email
    });
}

async function updateCaregiverFirstName(caregiverId, firstName) {
    const caregiversRef = db.collection('caregivers').doc(caregiverId);
    return caregiversRef.update({
        firstName: firstName
    });
}

async function updateCaregiverLastName(caregiverId, lastName) {
    const caregiversRef = db.collection('caregivers').doc(caregiverId);
    return caregiversRef.update({
        lastName: lastName
    });
}

async function updateCaregiverResidentReferences(caregiverId, residentReferences) {
    const caregiversRef = db.collection('caregivers').doc(caregiverId);
    return caregiversRef.update({
        residentReferences: residentReferences
    });
}







module.exports = {
    setCaregiverData
};


