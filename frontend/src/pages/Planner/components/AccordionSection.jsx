import React from 'react';
import './AccordionSection.css';

export const AccordionSection = ({ title, isOpen, onClick, children }) => {
    return (
        <div className={`accordion-container ${isOpen ? 'open' : ''}`}>
            <button className={`accordion-header ${isOpen ? 'active' : ''}`}
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h3>{title}</h3>
                <span className="arrow">▼</span>
            </button>

            {isOpen && (
                <div className="accordion-content">
                    {children}
                </div>
            )}
        </div>
    );
};