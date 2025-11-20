import React from "react";
import "../css/About.css";

function About() {
    return (
        <div className="about-tab-frame"> {/* outer frame */}
            <div className="about-tab">
                <img
                    src="/about_icons/Welcome.png"
                    alt="Welcome"
                    className="about-welcome-img"
                />
                {/* Header with image */}
                <div className="about-header-container">
                    <img
                        src="/about_icons/profile.png"
                        alt="Profile"
                        className="about-profile-img"
                    />
                    <div>
                        <h2 className="about-header">Dessamine Almuete</h2>
                        <p className="about-intro">
                            Hi! I’m Des “Samine”, an illustrator, graphic designer, and UI/UX designer.
                        </p>
                    </div>
                </div>

                {/* Grid of boxes */}
                <div className="about-grid">
                    {/* First Row */}
                    <div className="about-box education-box">
                        <h3>Education</h3>
                        <p>
                            Bachelor of Science in Information Technology<br />
                            Pangasinan State University, Urdaneta City
                            <img src="/about_icons/21-25.png" alt="Graduation date" className="Graduation-date" />
                        </p>
                    </div>

                    <div className="about-box tools-box">
                        <h3>Tools & Software</h3>
                        <div className="tools-grid">
                            <div className="tool-item">
                                <img src="/about_icons/Ps.png" alt="Photoshop" />
                                <span className="tool-tip">Photoshop</span>
                            </div>

                            <div className="tool-item">
                                <img src="/about_icons/Ai.png" alt="Illustrator" />
                                <span className="tool-tip">Illustrator</span>
                            </div>

                            <div className="tool-item">
                                <img src="/about_icons/Ae.png" alt="After Effects" />
                                <span className="tool-tip">After Effects</span>
                            </div>

                            <div className="tool-item">
                                <img src="/about_icons/Figma.png" alt="Figma" />
                                <span className="tool-tip">Figma</span>
                            </div>

                            <div className="tool-item">
                                <img src="/about_icons/Vs.png" alt="VS Code" />
                                <span className="tool-tip">VS Code</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="second-row-grid">
                    <div className="about-box experience-box">
                        <h3>Experience</h3>
                        <ul>
                            <li>
                                Creatives Committee <br /> Guild of Multimedia Artists (GMA)
                                <br />
                                <img src="/about_icons/22-25.png" alt="GMA Dates" className="experience-date" />
                            </li>
                            <li>
                                Creatives Committee <br /> Information Technologists’ League (Intel)
                                <br />
                                <img src="/about_icons/23-24.png" alt="Intel Dates" className="experience-date" />
                            </li>
                            <li>
                                Graphics Intern <br /> National Irrigation Administration(NIA)
                                <br />
                                <img src="/about_icons/25.png" alt="NIA Dates" className="experience-date" />
                            </li>
                        </ul>
                    </div>

                    {/* Right column wrapper */}
                    <div className="about-right-column">
                        <div className="about-box language-box">
                            <h3>Languages</h3>
                            <p>Fluent in Filipino • Conversational English</p>
                        </div>
                        <div className="about-box interest-box">
                            <h3>Other Interests</h3>
                            <p>Animated movies • Webtoons & Manhua • Birds (a newfound interest) • AFK Journey </p>
                        </div>
                    </div>

                </div>

                {/* Last Row: Banner */}
                <div className="banner-box">
                    <img
                        src="/about_icons/banner.png"
                        alt="Banner"
                        className="about-banner-img"
                    />
                </div>
            </div>
        </div>

    );
}

export default About;
