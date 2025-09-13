import React from "react";
import "../css/Home.css";

function Home({ addTab }) {
    return (
        <div className="text-center p-8 bg-yellow-50 min-h-[60vh] flex flex-col items-center justify-center">
            <img
                src="/Samine_Logo.png"
                alt="My Art Space Logo"
                className="w-36 md:w-30 lg:w-60" 
                // className="w-60 h-auto mb-4 transition-transform duration-300 hover:rotate-6 hover:drop-shadow-lg"
            />
            <p>Welcome! This is my cozy little corner to showcase paintings & Connect.</p>

            <div className="icon-buttons">
                {/* About */}
                <div
                    className="icon-button"
                    onClick={() => addTab("About")}
                >
                    <img
                        src="/icons/app_icon_sample.png"
                        alt="About"
                        className="button-icon"
                    />
                    <span>About</span>
                </div>

                {/* Works */}
                <div
                    className="icon-button"
                    onClick={() => addTab("Works")}
                >
                    <img
                        src="/icons/app_icon_sample.png"
                        alt="Works"
                        className="button-icon"
                    />
                    <span>Works</span>
                </div>

                {/* Connect */}
                <div
                    className="icon-button"
                    onClick={() => addTab("Connect")}
                >
                    <img
                        src="/icons/app_icon_sample.png"
                        alt="Connect"
                        className="button-icon"
                    />
                    <span>Connect</span>
                </div>
            </div>
        </div>
    );
}

export default Home;
