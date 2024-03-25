const admin = require('firebase-admin');
const serviceAccount = require('./codetogive6-firebase-adminsdk-1sqaf-a652c70cae.json');


const db = admin.firestore();

function setGoals(residentId, goalsData) {
    const goalsRef = db.collection('residents').doc(residentId).collection('objectives');
    return goalsRef.add(goalsData);
}

function setNotes(residentId, notesData) {
    const notesRef = db.collection('residents').doc(residentId).collection('chronologicalNotes');
    return notesRef.add(notesData);
}

function setResources(residentId, resourcesData) {
    const resourcesRef = db.collection('residents').doc(residentId).collection('resources');
    return resourcesRef.add(resourcesData);
}

function setFollowUps(residentId, followUpsData) {
    const followUpsRef = db.collection('residents').doc(residentId).collection('followups');
    return followUpsRef.add(followUpsData);
}

function setGeneralInfoData(generalInfoData) {
    const generalInfoRef = db.collection('residents').doc(generalInfoData.residentID);
    return generalInfoRef.set({
      firstName: generalInfoData.firstName,
      lastName: generalInfoData.lastName,
      planStartDate: generalInfoData.planStartDate,
      startDateOfStay: generalInfoData.startDateOfStay,
      endOfStayDate: generalInfoData.endOfStayDate,
      placeOfAccommodation: generalInfoData.placeOfAccommodation,
      firstVisit: generalInfoData.firstVisit,
      immigrationStatus: generalInfoData.immigrationStatus,
      native: generalInfoData.native,
      veteran: generalInfoData.veteran,
      withChild: generalInfoData.withChild,
      exitOrientation: generalInfoData.exitOrientation,
      issues: generalInfoData.issues,
      age: generalInfoData.age,
      borough: generalInfoData.borough,
      revenue: generalInfoData.revenue,
      caregivers: generalInfoData.caregivers,
      significantPersons: generalInfoData.significantPersons,
      treatmentTeam: generalInfoData.treatmentTeam,
      communityServices: generalInfoData.communityServices
      
    });
  }

module.exports = {
    
    setGoals,
    setNotes,
    setResources,
    setFollowUps,
    setGeneralInfoData
    };




