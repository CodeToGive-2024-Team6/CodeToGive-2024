import React from 'react';
import './ProfileFragment.css';

function ProfileFragment() {

    return (
        <div className='profile-wrapper'>
            <div className='assigned-caregiver'>
                <p>Assigned Caregiver: Caregiver Name</p>
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
