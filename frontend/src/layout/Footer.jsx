import React from "react";
import GithubIcon from '../assets/icons/Github.svg';
import LinkedInIcon from '../assets/icons/LinkedIn.svg';
import './Footer.css';

const SOCIAL_LINKS = [
    {
        id: 'github',
        name: 'GitHub Profile',
        url: 'https://github.com/Better-Code-Saul-E',
        icon: GithubIcon
    },
    {
        id: 'linkedin',
        name: 'LinkedIn Profile',
        url: 'https://www.linkedin.com/in/saul-enriquez-chicago',
        icon: LinkedInIcon
    }
];

const SocialLink = ({ url, name, icon }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label={name}
    >
        <img src={icon} alt="" className="contact-icon" />
    </a>
);

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-text">
                    <p> &copy; {currentYear} <strong>Event Ledger</strong>.
                        Designed & Built by <span className="highlight">Saul Enriquez</span>.
                    </p>
                </div>

                <div className="footer-socials">
                    {SOCIAL_LINKS.map((social) => (
                        <SocialLink
                            key={social.id}
                            {...social}
                        />
                    ))}
                </div>

            </div>
        </footer>
    );
};