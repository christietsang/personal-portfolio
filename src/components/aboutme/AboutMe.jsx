import React from 'react';
import ScreenHeading from "../../utilities/headings/ScreenHeading";
import "./aboutme.scss";

const INFORMATION = {
    description: "I am an aspiring computer software engineer with an interest in automating and optimizing processes.  Skilled in communication, group collaboration and management, and group motivation.",
    highlights: {
        bullets: [
            "📲 Frontend and Backend Web / Mobile Dev",
            "🐍 Artificial Intelligence and Game Dev in Python",
            "⚛️ Experience with React",
            "🎫 Creating and managing databases"
        ],
        heading: "Experience Highlights:"
    }
}

{/* Loops through array and renders each element in bullets */}
const renderAboutMe = () => {
    return (
        INFORMATION.highlights.bullets.map((value) => (
            <div className="highlight">
                <div className="highlighted"></div>
                <span>{value}</span>
            </div>
        ))
    )
}

export default function AboutMe() {
    return (
        <div className='about-container' id="aboutme">
            <div className='about-parent'>
                {/* Loading heading and subheading for about me section. */}
                <div className="heading">
                    <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
                </div>
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
                            {/* Contains "Hire Me" and "Get Resume" buttons */}
                            <div className="button-box">
                                <a href='#contact'><button className="profile-button">Hire Me</button></a>
                                <a href="Christie Tsang - Resume.pdf" download="Christie Tsang - Resume.pdf"><button className="profile-button">Get Resume</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

