// import React from "react";
import "./CaregiverResidentPage.css"; // Import CSS file

//import company logo
import company_logo from "./company_logo.png";
import {VscAccount} from  "react-icons/vsc";


// HomePage.js

import React, { useEffect } from 'react';
// import './ResidentHomePage.css'; // Import CSS file
// import { VscAccount } from "react-icons/vsc";
import { LuGoal } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
//import companyLogo from './company_logo.png';
const CaregiverResidentPage = () => {
    return (
        <div>
            <div className="header-bar-resident">
                
                <div className="circle-icon">
                </div>

                {/* add company logo to the header */}
                <img src={company_logo} alt="company logo" style={{width: '400px', height: '200px', marginLeft: '60%'}}/>
                {/* add circle */}
    
            </div>
        
        </div>
    );
    }

export default CaregiverResidentPage;

