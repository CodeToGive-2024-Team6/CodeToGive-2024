import React from 'react';
import { useEffect, useState } from "react";
import './ProfileFragment.css';

function ProfileFragment() {
    const [residents, setResidents] = useState([]);
    const [displayedResidents, setDisplayedResidents] = useState([]);
    
    // Fetch residents data from the endpoint
    useEffect(() => {
        fetch('/residentalldata')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log('here')
                // Transform data to match the existing structure expected by the rendering logic
                const transformedData = data.map(resident => ({
                    name: `${resident.firstName} ${resident.lastName}`,
                    caregiver: resident.caregiver,
                    age: resident.age,
                    borough: resident.borough,
                    income: resident.income,
                    significantPersons: resident.significantPersons,
                    immigrant: resident.immigrationStatus,
                    house: resident.currentAccommodation,
                }));
                setResidents(transformedData);
                setDisplayedResidents(transformedData);
            })
            .catch(error => console.error('Error fetching resident data:', error));
    }, []); // The empty array ensures this effect runs once after the initial render

    return (
        <div className='profile-wrapper'>
            <div className='assigned-caregiver'>
                <p>Assigned Caregiver: </p>
            </div>
            <div className="resident-name">
                <h1>Resident Name</h1>
            <div className="titles">
                <h1>Basic Details</h1>
                <div className="profile-container-basic">
                        <p>
                            <strong>Age: </strong> 30
                        </p>
                        <p>
                            <strong>City/ Borough:</strong> Ville-Marie
                        </p>
                        <p>
                            <strong>Revenue:</strong> $1,234/month
                        </p>
                        <p>
                            <strong>Significant Persons:</strong> 450-555-1234 (Grand mother)
                        </p>
                        <p>
                            <strong>Immigrant Status:</strong> Citizen
                        </p>
                        <p>
                            <strong>With Child:</strong> No
                        </p>
                        <p>
                            <strong>Native:</strong> No
                        </p>
                        <p>
                            <strong>Veteran:</strong> Yes
                        </p>
                </div>
            </div>

            <div className="titles">
                <h1>Resident Status</h1>
                <div className="profile-container-status">
                        <p>
                            <strong>Plan Start Date:</strong> 2024/02/02
                        </p>
                        <p>
                            <strong>Start Date of the Stay:</strong> 2024/02/15
                        </p>
                        <p>
                            <strong>Place Accommodation:</strong> House 5
                        </p>
                        <p>
                            <strong>First Visit:</strong> Yes
                        </p>
                        <p>
                            <strong>Issues:</strong> Substance Abuse, Sexual Assault
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
