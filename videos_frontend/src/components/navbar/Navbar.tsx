import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Videos</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/new-video">Create</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar
