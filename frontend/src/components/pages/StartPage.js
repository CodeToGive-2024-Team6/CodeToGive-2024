import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css'; // Import CSS file
import companyLogo from './company_logo.png'; // Import company logo image
import houseLogo from './house_logo.png'; // Import house logo image

const StartPage = () => {
    return (
        <div className="start-page">
            <div className="header">
                <img src={companyLogo} alt="Company Logo" className="logo" />
            </div>

            <div className="button-container">
                <Link to="/caregiver_homepage" className="button-link">
                    <button className="circle caregiver">Caregivers</button>
                </Link>
                <Link to="/resident_homepage" className="button-link">
                    <button className="circle resident">Residents</button>
                </Link>
                <img src={houseLogo} alt="House Logo" className="houselogo" />
            </div>
            <div className="rectangle"></div>
        </div>
    );
};

export default StartPage;
