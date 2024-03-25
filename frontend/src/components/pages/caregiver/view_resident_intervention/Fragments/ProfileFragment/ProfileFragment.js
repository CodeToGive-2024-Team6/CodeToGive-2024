import React from 'react';
import './ProfileFragment.css';

function ProfileFragment() {

    return (
        <div className='container'>
            <h1>Profile Fragment</h1>

            <div className='containerRow1'>
                <div className='basicDetails'>
                    <h2>Basic Details</h2>
                    <h3>Age:</h3>
                    <text>30</text>
                    <h3>City/ Borough:</h3>
                    <text>Ville-Marie</text>
                    <h3>Revenue:</h3>
                    <text>$1,234/month</text>
                    <h3>Significant Persons:</h3>
                    <text>450-555-1234 (Grand mother)</text>
                    <h3>Immigrant Status:</h3>
                    <text>Citizen</text>
                    <h3>With Child:</h3>
                    <text>No</text>
                    <h3>Native:</h3>
                    <text>No</text>
                    <h3>Veteran: </h3>
                    <text>Yes</text>
                </div>

                <div className='residentStatus'>
                    <h2>Resident Status</h2>
                    <h3>Plan Start Date:</h3>
                    <text>2024/02/02</text>
                    <h3>Start Date of the Stay:</h3>
                    <text>2024/02/15</text>
                    <h3>Place Accommodation:</h3>
                    <text>House 5</text>
                    <h3>First Visit:</h3>
                    <text>Yes</text>
                    <h3>Issues:</h3>
                    <text>Substance Abuse, Sexual Assault</text>
                </div>
            </div>

            <div className='containerRow2'>
                <div className='treatmentTeam'>
                    <h2>Treatment Care</h2>

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
    );
}

export default ProfileFragment;

