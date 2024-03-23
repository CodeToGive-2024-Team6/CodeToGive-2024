import React, { useState, useEffect } from 'react';
import './CaregiverHomePage.css'; // Import CSS file
import { VscAccount } from "react-icons/vsc";

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
        <div>
            <div className="header-bar">
                <h1>Hi! Caregiver Name</h1>
                <VscAccount 
                    style={{color: 'white', fontSize: '2em', marginRight: '10px'}}
                />  
            </div>
            <div className="appointment-view">
                <h2>Current Appointment</h2>
                <p>{appointments[currentAppointmentIndex]}</p>
            </div>
        </div>
    );
};

export default CaregiverHomePage;