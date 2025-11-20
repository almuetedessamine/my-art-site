import React from "react";
import "../css/About.css";

function About() {
    return (
        <div className="about-tab-frame"> {/* outer frame */}
            <div className="about-tab">
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
                        </p>
                    </div>

                    <div className="about-box tools-box">
                        <h3>Tools & Software</h3>
                        <div className="tools-grid">
                            <img src="/about_icons/Ps.png" alt="Photoshop" />
                            <img src="/about_icons/Ai.png" alt="Illustrator" />
                            <img src="/about_icons/Ae.png" alt="After Effects" />
                            <img src="/about_icons/Figma.png" alt="Figma" />
                            <img src="/about_icons/Vs.png" alt="VS Code" />
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="about-box experience-box">
                        <h3>Experience</h3>
                        <ul>
                            <li>Creatives Committee, GMA (2022–2025) – Assisted in design and creative outputs for projects.</li>
                            <li>Creatives Committee, Intel (2023–2024) – Contributed visuals and digital materials.</li>
                            <li>Graphics Intern, NIA (Feb–May 2025) – Produced graphic assets and supported creative team.</li>
                        </ul>
                    </div>

                    <div className="about-box language-box">
                        <h3>Languages</h3>
                        <p>Fluent in Filipino • Conversational English</p>
                    </div>

                    <div className="about-box interest-box">
                        <h3>Other Interests</h3>
                        <p>Animated movies • Webtoons & Manhua • Birds (a newfound interest) • AFK Journey • Game design</p>
                    </div>

                    {/* Last Row */}
                    <div className="about-box banner-box">
                        <h3>Artwork Banner</h3>
                        <p>[Placeholder for artwork image/banner]</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
