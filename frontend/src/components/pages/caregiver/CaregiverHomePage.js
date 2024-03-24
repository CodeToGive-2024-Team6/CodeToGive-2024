import React, { useState, useEffect } from 'react';
import './CaregiverHomePage.css'; // Import CSS file
import { VscAccount } from "react-icons/vsc";
import { FaAddressBook, FaBuilding, FaFacebookMessenger } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { Link } from 'react-router-dom';


const CaregiverHomePage = () => {
    const appointments = ['Appointment 1: Date and Time', 'Appointment 2: Date and Time', 'Appointment 3: Date and Time'];
    const [currentAppointmentIndex, setCurrentAppointmentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAppointmentIndex((currentAppointmentIndex + 1) % appointments.length);
        }, 5000);
        return () => clearInterval(interval); // This will clear Interval while unmounting the component
    }, [currentAppointmentIndex, appointments.length]);

    return (
        <div className="page-layout">
            <div>
                <div className="header-bar">
                    <h1>Hi! Caregiver Name</h1>
                    <VscAccount
                        style={{ color: 'white', fontSize: '2em', marginRight: '50px' }}
                    />
                </div>
                <div className="appointment-view">
                    <h2>Current Appointment</h2>
                    <p>{appointments[currentAppointmentIndex]}</p>
                </div>
                <div className="grid-view">

                    <Link to="/caregiver_search"style={{ textDecoration: 'none', color: 'black' }} className="grid-box">
                        <FaBuilding style={{fontSize: '4em'}}/>
                        <p>Search Facility</p>
                    </Link>

                    <div className="grid-box">
                        <CgAddR style={{ fontSize: '4em' }} />
                        <p>Add Resident</p>
                    </div>
                    <div className="grid-box">
                        <FaFacebookMessenger style={{ fontSize: '4em' }} />
                        <p>Communication</p>
                    </div>
                    <div className="grid-box">
                        <FaAddressBook style={{ fontSize: '4em' }} />
                        <p>My Resident</p>
                    </div>
                </div>
            </div>

            <div className='grid-view-stats'>
                <div className='statistics-box'>
                    <h2>Statistics 1</h2>
                </div>

                <div className='statistics-box'>
                    <h2>Statistics 2</h2>
                </div>


            </div>


        </div>
    );
};

export default CaregiverHomePage;