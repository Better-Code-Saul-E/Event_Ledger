import React from "react";
import './FeaturesGrid.css'

export const FeaturesGrid = ({ title, features }) => {
    return (
        <section className="section-why">
            <h2>{title}</h2>

            <div className="features-grid">
                {features.map((feature) => (
                    <div className="feature-card" key={feature.id}>
                        <div className="icon-wrapper">
                            <feature.icon className="feature-icon" />
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
