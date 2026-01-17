import React from 'react';
import { Hero } from './components/Hero';
import heroBg from '../../assets/images/ConcertHall.jpg';
import { Section } from './components/Section';
import { FeaturesGrid } from './components/FeaturesGrid';
import { FaMoneyBillWave, FaBuilding, FaFileInvoiceDollar } from 'react-icons/fa';
import './Home.css';

const homeFeatures = [
    {
        id: 1,
        icon: FaMoneyBillWave,
        title: "Real-Time Budgeting",
        description: "No more 'summing up' columns manually. Add a microphone, and watch your total update instantly."
    },
    {
        id: 2,
        icon: FaBuilding,
        title: "Venue Comparison",
        description: "Instantly switch between room sizes to see how capacity impacts your bottom line."
    },
    {
        id: 3,
        icon: FaFileInvoiceDollar,
        title: "Instant Quotes",
        description: "Generate a professional cost breakdown in seconds, ready to show your finance team."
    }
];

export const Home = () => {
    return (
        <main className="home-container">

            <Hero
                title="Event Ledger"
                subtitle="Stop guessing. Start calculating.  The ultimate budgeting tool for corporate event planners."
                ctaText="Start Planning Now"
                ctaLink="/planner"
                backgroundImage={heroBg}
            />

            <Section title="What is Event Ledger?">
                <p>
                    Event Ledger is a <strong>digital cost-estimator</strong> designed to replace messy spreadsheets.
                    It connects venue selection, AV equipment, and catering into a single,
                    real-time dashboard.
                </p>
            </Section>

            <FeaturesGrid
                title="Why Professionals Choose Us"
                features={homeFeatures}
            />
        </main>
    );
};