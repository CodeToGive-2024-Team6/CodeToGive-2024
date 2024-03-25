import React from 'react';

import './ResourcesFragment.css';
import houseLogo from '../../../house_logo.png'; // Import house logo image


function ResourcesFragment() {
    return (
        <div class="cards-container">
            <div class="card !bg-rose-200 !shadow-none">
                <a href="https://lechainon.org/en/">
                    <div class="category">Documents</div>
                    <h2 class="title" style={{marginRight:"0px"}}>Helpful Documents</h2>
                    <img src={houseLogo} alt="Resource 1"/>
                    <div class="description">Check out the following documents to help you on your journey!</div>
                </a>
            </div>
            <div class="card !bg-rose-200 !shadow-none">
                <a href="https://lechainon.org/en/">
                    <div class="category" >Workshops</div>
                    <h2 class="title" style={{marginRight:"50px"}}>Workshops</h2>
                    <img src={houseLogo} alt="Resource 2"/>
                    <div class="description">These are a list of wonderful workshops you can join in!</div>
                </a>
            </div>
            <div class="card !bg-rose-200 !shadow-none">
                <a href="https://lechainon.org/en/">
                    <div class="category">Shelters</div>
                    <h2 class="title" style={{marginRight:"38px"}}>Shelters</h2>
                    <img src={houseLogo} alt="Resource 3"/>
                    <div class="description">You have access to so many welcoming shelters!</div>
                </a>
            </div>
        </div>
    );
}

export default ResourcesFragment;
