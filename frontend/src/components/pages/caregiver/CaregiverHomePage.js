import React, { useState, useEffect } from 'react';
import './CaregiverHomePage.css'; // Import CSS file
import { VscAccount } from "react-icons/vsc";
import { FaAddressBook, FaBuilding, FaFacebookMessenger } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { Link } from 'react-router-dom';
import company_logo from "../company_logo.png";
import { Chart } from 'primereact/chart';


const CaregiverHomePage = () => {
    const appointments = ['Appointment 1: Date and Time', 'Appointment 2: Date and Time', 'Appointment 3: Date and Time'];
    const [currentAppointmentIndex, setCurrentAppointmentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAppointmentIndex((currentAppointmentIndex + 1) % appointments.length);
        }, 5000);
        return () => clearInterval(interval); // This will clear Interval while unmounting the component
    }, [currentAppointmentIndex, appointments.length]);

    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    return (
        <div className="page-layout">
            <div>
                <div className="header-bar">
                    <h1>Hi! Caregiver Name</h1>
                    <div className="caregiver-homepage-before">
                        <Link to="/">
                            <img src={company_logo} alt="company logo" style={{width: '200px', height: '100px'}}/>
                        </Link>
                    </div>
                    <Link to="/caregiver_profile">
                        <VscAccount style={{ color: 'white', fontSize: '3em', marginRight: '50px' }}>
                        </VscAccount>
                    </Link>
                </div>
                <div className="appointment-view">
                    <h2>Current Appointment</h2>
                </div>
                <div className="caregiver-upcoming-appointment">
                    <h2>Upcoming Appointment</h2>
                    <div className="appointment-view">
                        <p>{appointments[currentAppointmentIndex]}</p>
                    </div>
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
                <div>
                    <canvas id="myChart"></canvas>
                    <div className='statistics-box'>
                        <Link to="/stat">
                        <Chart type='pie' data={data} />
                        </Link>
                    </div>
                </div>

                <div className='statistics-box'>
                    <h2>Statistics 2</h2>
                </div>


            </div>


        </div>
    );
};

export default CaregiverHomePage;