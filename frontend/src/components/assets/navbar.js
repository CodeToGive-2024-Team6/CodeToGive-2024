import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const Navbar = () => {
    return (
       <div className='header'>

        <Link to ='/'><h1>Le chainon</h1></Link>


       </div>
    );
}

export default Navbar;