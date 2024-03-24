import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css'; // Import CSS file
import companyLogo from './company_logo.png'; // Import company logo image
import houseLogo from './house_logo.png'; // Import house logo image
import { FaPeopleRoof } from "react-icons/fa6";
import { TbUserHeart } from "react-icons/tb";



const StartPage = () => {
    return (
        <div className="start-page">
            <div className="header">
                <img src={companyLogo} alt="Company Logo" className="logo" />
            </div>

            <div className="button-container">
                <Link to="/caregiver_homepage" className="button-link">
                    <button className="circle caregiver">
                        <TbUserHeart style={{ fontSize: '4em' }} />
                    </button>
                    <div className="caregivers-name">
                        <p>Caregivers</p>
                    </div>
                </Link>
                <Link to="/resident_homepage" className="button-link">
                    <button className="circle resident">
                        <FaPeopleRoof style={{ fontSize: '4em' }} />
                    </button>
                    <div className="residents-name">
                        <p>Residents</p>
                    </div>
                </Link>

                <img src={houseLogo} alt="House Logo" className="houselogo" />
            </div>
            <div className="footer-container">
                <div className="heart-container">
                    <div className="x1 heart"></div>
                    <div className="x2 heart"></div>
                    <div className="x3 heart"></div>
                    <div className="x4 heart"></div>
                    <div className="x5 heart"></div>
                </div>
                <div className="rectangle"></div>
            </div>

        </div>
    );
};

export default StartPage;
