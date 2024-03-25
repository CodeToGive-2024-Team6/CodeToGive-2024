import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CaregiverAddResident.css';
import { MdNavigateBefore } from "react-icons/md";
//import { setResidentInfo } from "../../setResidentData.js"; // Importing database function

function CaregiverAddResident() {
    

    const [residentInfo, setResidentInfo] = useState({
        firstName: '',
        lastName: '',
        age: '',
        borough: '',
        revenue: '',
        plan_start: '',
        start_stay: '',
        currentAccomodation: '',
        veteran: '',
        immigrantStatus: '',
        nativeStatus: '',
        withChild: '',
        significantPersons: [],
        challenges: [],

    });

    const handleFormSubmit = (e) => {

        e.preventDefault();
        console.log(residentInfo);

        // Prepare the new reminder data
        const newResidentData = {
            firstName: residentInfo.firstName,
            lastName: residentInfo.lastName,
            age: residentInfo.age,
            borough: residentInfo.borough,
            income: residentInfo.revenue,
            planStartDate: residentInfo.plan_start,
            firstVisit: true,
            planEndDate: '',
            endOfStayDate: '',
            challenges: residentInfo.challenges,
            currentAccomodation: residentInfo.currentAccomodation,
            veteran: residentInfo.veteran,
            immigrationStatus: residentInfo.immigrantStatus,
            native: residentInfo.nativeStatus,
            withChild: residentInfo.withChild,
            significantPersons: residentInfo.significantPersons,
            caregivers: []

        };

        

        // Add the new resident to the Firebase
        fetch(`/setResidentInfo/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newResidentData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        // Clear the form inputs
        setResidentInfo({
            firstName: '',
            lastName: '',
            age: '',
            borough: '',
            revenue: '',
            plan_start: '',
            start_stay: '',
            currentAccomodation: '',
            veteran: '',
            immigrantStatus: '',
            nativeStatus: '',
            withChild: '',
            significantPersons: [],
            challenges: [],
        });
    };
            


       


    
    return (           
        <div>
            <div className="before-addresident">
                <Link to="/caregiver_homepage">
                    <MdNavigateBefore />
                </Link>
            </div>   
            <body1>
                <div className='add-container'>
                    <header> Register a Resident </header>
                    <form action='#' class="addform" onSubmit={handleFormSubmit}>
                        <div class="form-group">
                            <label for='first_name'>First Name:</label>
                            <input type='text' id='first_name' placeholder='Enter first name' required />
                        </div>

                        <div class="form-group">
                            <label for='last_name'>Last Name:</label>
                            <input type='text' id='last_name' placeholder='Enter last name' required />
                        </div>

                        <div class="column">
                            <div class="form-group">
                                <label for='age'>Age:</label>
                                <input type='number' id='age' placeholder='Enter the age' required />
                            </div>

                            <div class="form-group">
                                <label for='borough'>City/ Borough:</label>
                                <input type='text' id='borough' placeholder='Enter the city/ borough' required />
                            </div>

                            <div class="form-group">
                                <label for='revenue'>Revenue:</label>
                                <input type='number' id='revenue' placeholder='Enter the revenue' required />
                            </div>
                        </div>

                        <div class="column">
                            <div class="form-group">
                                <label for='plan_start'>Plan Start Date:</label>
                                <input type='date' id='plan_start' placeholder='Enter the Plan Start Date:' required />
                            </div>

                            <div class="form-group">
                                <label for='start_stay'>Stay Start Date:</label>
                                <input type='date' id='start_date' placeholder='Enter the Stay Start Date:' required />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for='issue'>Issues:</label>
                            <input type='text' id='issue' placeholder='Enter issues' required />
                        </div>

                        
                        <div class="checkbox">
                            <h3>Veteran:</h3>
                            <div class="veteran-option">
                                <div class="veteran">
                                    <input type="radio" id="check-veteran" name="veteran" checked />
                                    <label for="check-veteran">Yes</label>
                                </div>
                                <div class="veteran">
                                    <input type="radio" id="check-veteran-not" name="veteran" />
                                    <label for="check-veteran-not">No</label>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="select-box">
                                <select>
                                    <option hidden>-- Immigrant Status --</option>
                                    <option>Permanent Resident</option>
                                    <option>Citizen</option>
                                    <option>Student Visa</option>
                                    <option>Work Visa</option>
                                    <option>Others</option>
                                </select>
                            </div>

                            <div class="select-box">
                                <select>
                                    <option hidden>-- Native Status --</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>

                            <div class="select-box">
                                <select>
                                    <option hidden>-- With Child --</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for='significant'>Significant Persons:</label>
                            <input type='text' id='cellnumber' placeholder='Enter the cell number' required />
                            <div class="column">
                                <div class="select-box">
                                    <select>
                                        <option hidden>-- Relationship --</option>
                                        <option>Parents</option>
                                        <option>Grand Parents</option>
                                        <option>Friends</option>
                                        <option>Cousin</option>
                                        <option>Partners</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button>Submit</button>

                    </form>
                </div>
            </body1>
        </div>  
    );
}

export default CaregiverAddResident;