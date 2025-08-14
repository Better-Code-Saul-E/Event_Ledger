import React from "react"
import './AppFooter.css'
import GithubIcon from '../../../assets/Github.svg'
import LinkedInIcon from '../../../assets/Github.svg'

export const AppFooter = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <a href="https://github.com/Better-Code-Saul-E" target="_blank">
            <img src={GithubIcon}
            alt="GitHub Profile"
                className="contact-icon" /></a>
            <p>© Saul Enriquez. {currentYear} All rights reserved</p>
            <a href="https://www.linkedin.com/in/saul-enriquez-chicago" target="_blank">
            <img src={LinkedInIcon}
                alt="LinkedIn Profile"
                className="contact-icon" /></a>
        </footer>
    );
};