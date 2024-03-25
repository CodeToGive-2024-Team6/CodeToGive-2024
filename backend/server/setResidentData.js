const admin = require('firebase-admin');
const serviceAccount = require('./codetogive6-firebase-adminsdk-1sqaf-a652c70cae.json');


const db = admin.firestore();


// JSON To be structured as follows:
// {description: string-type, healthDeterminant: array[string], means: string-type, status: string-type, term: string-type, title: string-type}
function setGoals(residentId, goalsData) {
    const goalsRef = db.collection('residents').doc(residentId).collection('objectives');
    return goalsRef.add(goalsData);
}

// Updates a specific goal for a resident
function updateGoal(residentId, goalId, goalData) {
    const goalRef = db.collection('residents').doc(residentId).collection('objectives').doc(goalId);
    return goalRef.update(goalData);
}

// Deletes a specific goal for a resident
function deleteGoal(residentId, goalId) {
    const goalRef = db.collection('residents').doc(residentId).collection('objectives').doc(goalId);
    return goalRef.delete();
}

// JSON To be structured as follows:
// {date: date-type, details: string-type, interventionSetUp: string-type, linkedGoal: string-type, motive: string-type, noteType: string-type, observations: string-type}
function setNotes(residentId, notesData) {
    const notesRef = db.collection('residents').doc(residentId).collection('chronologicalNotes');
    return notesRef.add(notesData);
}

// JSON To be structured as follows:
// {description: string-type, issues: string-type, link: string-type, objectives: string-type, title: string-type}
function setResources(residentId, resourcesData) {
    const resourcesRef = db.collection('residents').doc(residentId).collection('resources');
    return resourcesRef.add(resourcesData);
}

// JSON To be structured as follows:
// {date: date-type, meansOfCommunication: string-type, note: string-type, title: string-type, type: string-type}
function setFollowUps(residentId, followUpsData) {
    const followUpsRef = db.collection('residents').doc(residentId).collection('followups');
    return followUpsRef.add(followUpsData);
}


//JSON To be structured as follows:
// {age: integer, borough: string, caregivers: array[caregiver-IDS], challenges: array[string], currentAccomodation: string, endOfStayDate: date, firstName: string, lastName: string, firstVisit: boolean, immigrationStatus: string, income: string, native: boolean, planEndDate: date, planStartDate: date, significantPersons: array[string], veteran: boolean, withChild: boolean}
function setResidentInfo(generalInfoData) {
    const generalInfoRef = db.collection('residents').doc(); 
    return generalInfoRef.set(generalInfoData);
}

module.exports = {
    
    setGoals,
    setNotes,
    updateGoal,
    deleteGoal,
    setResources,
    setFollowUps,
    setResidentInfo
    };




