import React from 'react';
import '../css/navbar.css';

function Navbar(){
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;