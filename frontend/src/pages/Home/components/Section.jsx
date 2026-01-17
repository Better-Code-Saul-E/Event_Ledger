import React from "react";
import './Section.css'

export const Section = ({ title, children }) => {
    return (
        <section className="section-what">
            <div className="content-wrapper">
                <h2>{title}</h2>
                <div className="section-body">
                    {children}
                </div>
            </div>
        </section> 
    );
};