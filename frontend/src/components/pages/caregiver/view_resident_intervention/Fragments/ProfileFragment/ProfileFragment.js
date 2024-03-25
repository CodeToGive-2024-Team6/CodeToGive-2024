import React from 'react';
import { useEffect, useState } from "react";
import './ProfileFragment.css';

function ProfileFragment({resident}) {    
    const [residents, setResidents] = useState([]);
    const [displayedResidents, setDisplayedResidents] = useState([]);
    
    console.log(resident);
    
    
    // Fetch residents data from the endpoint
    useEffect(() => {
        fetch(`/residentinfo/${resident.id}`) // This is the endpoint you're connecting to, e.g. 'http://localhost:5000/residentinfo/1
            .then(response => response.json())
            .then(data => {
                setResidents(data);
                setDisplayedResidents(data);
            })
            .catch(error => console.error('Error fetching resident data:', error));
    }, []); // The empty array ensures this effect runs once after the initial render

    console.log(residents);
    const startDate = residents.planStartDate ? new Date(residents.planStartDate._seconds * 1000).toLocaleDateString() : 'N/A';    console.log(startDate);
    

    return (
        <div className='profile-wrapper'>
            <div className='assigned-caregiver'>
                <p>Assigned Caregiver: </p> 
            </div>

            <div className="resident-name">
                <h1>{residents.firstName} {residents.lastName}</h1>
            </div>

            <div className='containerRow1'>

                <div className="titles">
                    <h1>Basic Details</h1>
                    <div className="profile-container-basic-details">
                            <p>
                                <strong>Age: </strong> {residents.age}
                            </p>
                            <p>
                                <strong>City/ Borough:</strong> {residents.borough}
                            </p>
                            <p>
                                <strong>Revenue:</strong> {residents.income}
                            </p>
                            <p>
                                <strong>Significant Persons:</strong> {residents.significantPersons && residents.significantPersons.map(person => person).join(', ')} 
                                
                            </p>
                            <p>
                                <strong>Immigrant Status:</strong> {residents.immigrantStatus}
                            </p>
                            <p>
                                <strong>With Child:</strong> {residents.withChild}
                            </p>
                            <p>
                                <strong>Native:</strong> {residents.native}
                            </p>
                            <p>
                                <strong>Veteran:</strong> {residents.veteran}
                            </p>
                    </div>

                    <div className="titles">
                        <h1>Resident Status</h1>
                        <div className="profile-container-resident-status">
                                <p>
                                    <strong>Plan Start Date:</strong> {startDate}
                                </p>
                                <p>
                                    <strong>Start Date of the Stay:</strong> {startDate}
                                </p>
                                <p>
                                    <strong>Place Accommodation:</strong> {residents.currentAccommodation}
                                </p>
                                <p>
                                    <strong>First Visit:</strong> {String(residents.firstVisit)}
                                </p>
                                <p>
                                    <strong>Issues:</strong> {residents.challenges && residents.challenges.map(challenge => challenge).join(', ')}
                                </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='containerRow2'>
                <div className="titles">
                    <h1>Treatment Care</h1>
                    <div className="profile-container-care">
                        <h3>Treatment Team:</h3>
                        <div className='table'>
                            <div className='teamColumn1'>
                                <strong>Job</strong>
                                <text>Psychiatrist</text>
                                <text>Social Worker</text>
                            </div>
                            <div className='teamColumn2'>
                                <strong>Name</strong>
                                <text>Dr. XYZ</text>
                                <text>Mr. ABC</text>
                            </div>
                            <div className='teamColumn3'>
                                <strong>Address</strong>
                                <text>1234 Sherbrooke Est</text>
                                <text>Chum Hosipital</text>
                            </div>
                        </div>

                        <br />

                        <h3>Community Services:</h3>
                        <div className='table'>
                            <div className='teamColumn1'>
                                <strong>Name</strong>
                                <text>Spectre de rue</text>
                                <text>Cactus</text>
                            </div>
                            <div className='teamColumn2'>
                                <strong>Services Provided</strong>
                                <text>STD,HIV, HCV and overdose ...</text>
                                <text>Supervised Injection Center..</text>
                            </div>
                            <div className='teamColumn3'>
                                <strong>Address</strong>
                                <text>1280 Ontario st E</text>
                                <text>1233 rue du berger</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileFragment;
