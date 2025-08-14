import React from 'react';
import './AppNavbar.css';

export const AppNavbar = ({ showDetails, onShowDetailsClick }) => {
    return (
        <nav className="navbar_event_conference">
            <div className="company_logo">Event Ledger</div>
            <div className="right_navbar">
                <div className="nav_links">
                    <a href="#venue">Venue</a>
                    <a href="#addons">Add-ons</a>
                    <a href="#meals">Meals</a>
                </div>
                <button className="details_button" onClick={onShowDetailsClick}>
                    {showDetails ? "Back to Items" : "Show Details"}
                </button>
            </div>
        </nav>
    );
};