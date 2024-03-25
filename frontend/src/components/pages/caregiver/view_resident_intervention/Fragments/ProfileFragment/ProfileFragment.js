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
    //run a for loop to get the significant persons
    

    return (
        <div className='profile-wrapper'>
            <div className='assigned-caregiver'>
                <p>Assigned Caregiver: </p> 
            </div>
            <div className="resident-name">
                <h1>{residents.firstName} {residents.lastName}</h1>
            <div className="titles">
                <h1>Basic Details</h1>
                <div className="profile-container-basic">
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
            </div>

            <div className="titles">
                <h1>Resident Status</h1>
                <div className="profile-container-status">
                        <p>
                            <strong>Plan Start Date:</strong> 
                        </p>
                        <p>
                            <strong>Start Date of the Stay:</strong> 
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

            <div className="titles">
                <h1>Treatment Care</h1>
                <div className="profile-container-care">
                        <p>
                            <strong>Treatment Team</strong>
                        </p>
                        <p>Psychiatrist             DR. XYZ        1234 Sherbrooke ESt</p>
                        <p>Social Worker            Mr. ABC         Chum Hosipital</p>
                            <strong>Community Services:</strong>
                        <p>
                        Spectre de rue       STD,HIV, HCV and overdose ...    1280 Ontario st E
                        </p>
                        <p>Cactus                           Supervised Injection Center...           1233 rue du berger
                        </p>
                        <p>
                        .......
                            ......
                        </p>
                </div>
            </div>
            </div>
        </div>

    );
}

export default ProfileFragment;
