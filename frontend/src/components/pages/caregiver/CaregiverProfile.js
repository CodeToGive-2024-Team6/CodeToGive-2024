import React from "react";
import { Link } from "react-router-dom";
import './CaregiverProfile.css'; // Import CSS file
//import company logo
import company_logo from "../company_logo.png";
import { MdNavigateBefore } from "react-icons/md";

const CaregiverProfile = () => {
    return (
        <div>
            <div className="caregiver-profile-header">
                <div className="caregiver-before">
                    <Link to="/caregiver_homepage">
                        <MdNavigateBefore />
                    </Link>
                       
                </div>
                <div className="caregiver-profile"> </div>
                <img src={company_logo} alt="company logo" style={{width: '400px', height: '200px', marginLeft: '60%'}}/>
            </div>
            
            <div className="caregiver-profile-container">
                <h2>Caregiver Name</h2>
                    <p>
                        <strong>Location:</strong> Location
                    </p>
                    <p>
                        <strong>Facility:</strong> Facility
                    </p>
                    <p>
                        <strong>Phone:</strong> Phone
                    </p>
                    <p>
                        <strong>Email:</strong> Email
                    </p>
            </div>
        </div>
    );
};

export default CaregiverProfile;