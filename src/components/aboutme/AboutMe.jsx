import React, { useEffect } from 'react'
import ScreenHeading from "../../utilities/headings/ScreenHeading"
import "./aboutme.scss"

const INFORMATION = {
    description: "An aspiring computer software engineer with an interest in automating and optimizing processes.  Skilled in communication, group collaboration and management, and group motivation.",
    highlights: {
        bullets: [
            "Frontend and Backend web / mobile development",
            "Game development using Python",
            "Experience with React",
            "Creating and managing databases"
        ],
        heading: "Experience Highlights:"
    }
}
const renderAboutMe = () => {
    return (
        INFORMATION.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlighted"></div>
                <span>{value}</span>
            </div>
        ))
    )
}

export default function AboutMe() {
    return (
        <div className='about-container'>
            <div className='about-parent'>
                <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
                <div className="about-card">
                    <div className="about-profile"></div>
                    <div className="about-info">
                        <span className="about-description">{INFORMATION.description}</span>
                        <div className="about-highlights">
                            <div className="about-small-heading">
                                <span>{INFORMATION.highlights.heading}</span>
                            </div>
                            {renderAboutMe()}
                        </div>
                        <div className="profile-options">
                        <button className="profile-button">{""}Hire Me{" "}</button>
                        <a href="Resume.pdf" download="Resume.pdf"><button className="profile-button">Get Resume</button></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

