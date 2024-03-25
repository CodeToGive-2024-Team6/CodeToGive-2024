import React, { useState, useEffect } from 'react';
import './CaregiverHomePage.css'; // Import CSS file
import { VscAccount } from "react-icons/vsc";
import { FaAddressBook, FaBuilding, FaFacebookMessenger } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { Link } from 'react-router-dom';
import company_logo from "../company_logo.png";
import { Chart } from 'primereact/chart';


const CaregiverHomePage = () => {
    const appointments =
     ["Doctor's Visit with Linda Hudson || Tue 24 || 8:00am - 10:00am",
    "Amy Sandy's fundraiser  || Fri  April  5th || 4:00pm - 7:00pm" ,
    "Wellness Workshop Series  || Wed 17th || 1:00pm - 3:00pm",]
    const [currentAppointmentIndex, setCurrentAppointmentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAppointmentIndex((currentAppointmentIndex + 1) % appointments.length);
        }, 5000);
        return () => clearInterval(interval); // This will clear Interval while unmounting the component
    }, [currentAppointmentIndex, appointments.length]);

    const data = {
        labels: ['Emergency housing', 'Transition','Short-term', ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'RGB(0,103,158)',    
                'RGBA(0,103,158,0.31)', 
                'RGBA(0,75,205,0.28)', 
            ],
            hoverOffset: 4
        }]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Current Occupation Rate',
                font: {
                    size: 20
                }
            }
        }
    };
    const data2= {
        labels: ['Ada', 'Dora','Yan','Lisa'],
        datasets: [{
            label: 'My First Dataset',
            data: [3, 5, 1,2],
            backgroundColor: [
                'RGB(0,103,158)',    
                'RGBA(0,103,158,0.31)', 
                'RGBA(0,75,205,0.28)', 
            ],
            hoverOffset: 4
        }]
    };

    const options2 = {
        plugins: {
            title: {
                display: true,
                text: 'Weekly Goal Completion',
                font: {
                    size: 20
                }
            }
        }
    };

    return (
        <div className="page-layout">
            
                
            <div className="home-header">
                    <h1>Hi! Caregiver Name</h1>

                    <div className="caregiver-homepage-before">
                        <Link to="/">
                            <img src={company_logo} alt="company logo" style={{width: '200px', height: '100px'}}/>
                        </Link>
                    </div>

                    <Link to="/caregiver_profile">
                        <VscAccount style={{ color:'#4fadd5', fontSize: '2em', marginRight: '50px' }}>
                        </VscAccount>
                    </Link>
            </div>
          

            
            <div className="upcoming-appointment">
                    <h4 style={{color:'white',  marginLeft:'6%', margin:'2%'}}>Upcoming Appointment</h4>
                    <div className="appointment-view">
                        <p>{appointments[currentAppointmentIndex]}</p>
                    </div>

            </div>
            
            <div className="grid-view">

                <Link to="/caregiver_search"style={{ textDecoration: 'none', color: 'black', fontWeight:'600' }} className="grid-box">
                    <FaBuilding style={{fontSize: '5em', padding: 10}}/>
                    <p>Search Facility</p>
                </Link>


                <Link to="/caregiver_add_resident"style={{textDecoration: 'none', color: 'black' , fontWeight:'600'  }} className="grid-box">
                    <CgAddR style={{ fontSize: '5em' }} />

                    <p>Add Resident</p>
                </Link>

                <Link to="/caregiver_communication" style={{ textDecoration: 'none', color: 'black', fontWeight:'600'  }} className="grid-box">
                    <FaFacebookMessenger style={{fontSize: '5em', padding: 10}} />
                    <p>Communication</p>
                </Link>

                <div className="grid-box" style={{ textDecoration: 'none', color: 'black', fontWeight:'600' }}>
                    <FaAddressBook style={{fontSize: '5em', padding: 10}} />
                    <p>My Resident</p>
                </div>
            </div>
        

        <div className='grid-view-stats'>
            <div>
                <canvas id="myChart"></canvas>
                <div className='statistics-box'>
                    <Link to="/stat">
                    <Chart type='pie' data={data}  options={options} />
                    </Link>
                </div>
            </div>

            <div className='statistics-box'>
                <Link to="/stat">
                    <Chart type='bar' data={data2}  options={options2} />
                </Link>
            </div>


        </div>


    </div>
    );
};

export default CaregiverHomePage;