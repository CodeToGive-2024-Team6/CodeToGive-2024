import React from 'react';

function ResourcesFragment() {
    return (
        <div class="cards-container">
            <div class="card mx-6">
                <a href="https://lechainon.org/en/">
                    <div class="category">Documents</div>
                    <h2 class="title">Helpful Documents</h2>
                    <img src="https://via.placeholder.com/150" alt="Resource 1"/>
                    <div class="description">Check out the following documents to help you on your journey!</div>
                </a>
            </div>
            <div class="card mx-6">
                <a href="https://lechainon.org/en/">
                    <div class="category">Workshops</div>
                    <h2 class="title">Workshops</h2>
                    <img src="https://via.placeholder.com/150" alt="Resource 1"/>
                    <div class="description">These are a list of wonderful workshops you can join in!</div>
                </a>
            </div>
            <div class="card mx-6">
                <a href="https://lechainon.org/en/">
                    <div class="category">Shelters</div>
                    <h2 class="title">Shelters</h2>
                    <img src="https://via.placeholder.com/150" alt="Resource 1"/>
                    <div class="description">You have access to so many welcoming shelters!</div>
                </a>
            </div>
        </div>
    );
}

export default ResourcesFragment;
