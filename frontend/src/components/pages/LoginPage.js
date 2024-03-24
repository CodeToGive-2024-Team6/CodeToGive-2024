// LoginPage.js

import React from 'react';
import './LoginPage.css'; // Import CSS file
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="login-page">
            <h2>Login</h2>
            <form>
                <label htmlFor="username">Username:</label><br />
                <input type="text" id="username" name="username" /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" name="password" /><br />
            </form>
            <Link to="/home">
                <button>Submit</button>
            </Link>
        </div>
    );
};

export default LoginPage;
