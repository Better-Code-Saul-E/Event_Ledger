import React from "react";
import { Link } from "react-router-dom";
import './Hero.css'
  
export const Hero = ({ title, subtitle, ctaText, ctaLink, backgroundImage }) => {
    return (
        <div className="hero" style={{ '--bg-image': `url(${backgroundImage})` }}>
            <div className="hero-content">
                <h1>{title}</h1>
                <p className="subtitle">
                    {subtitle}
                </p>
                {ctaText && (
                    <Link to={ctaLink ?? '#'} className="cta-button">
                        {ctaText}
                    </Link>
                )}
            </div>
        </div>
    );
};
