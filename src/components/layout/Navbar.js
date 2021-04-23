import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to="/">
                        <i className="fas fa-suitcase-rolling"></i> TravelLife
                    </Link>
                </h1>
                <ul>
                    <li> <Link to="!#">Travelers</Link> </li>
                    <li> <Link to="/register">Sign up</Link> </li>
                    <li> <Link to="/login">Sign in</Link> </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;