import React, { useState, useEffect } from 'react';
import './CaregiverResidentPage.css'; // Import CSS file
import { VscAccount } from "react-icons/vsc";
import { FaAddressBook, FaBuilding, FaFacebookMessenger } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { Link } from 'react-router-dom';


export const Profile = () => {
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

            </div>
        </div>
    );
};

export default Profile;