import React from "react";
import "../css/Home.css";
import { playCuteSound } from "../utils/sound";

function Home({ addTab }) {

    function handleButtonClick(name) {
        // Optional: add a little "pressed" animation here via CSS class toggle
        setTimeout(() => {
            addTab(name);
        }, 200); // 200ms delay
    }
    return (
        <div className="text-center p-8 min-h-[60vh] flex flex-col items-center justify-center">
            <img
                src="/icons/Logo_Title.png"
                alt="My Art Space Logo"
                className="logo-title"
            />

            <p>Welcome! This is my cozy little corner to showcase paintings & Connect.</p>

            {/* Grid for icon buttons */}
            <div
                className="
        grid 
          grid-cols-2 gap-6 mt-6   /* phones: 2 per row */
          md:flex md:gap-8 md:justify-center /* desktop: inline row */
        "
            >
                {/* About */}
                <div
                    className="icon-button"
                    onClick={() => {
                        playCuteSound(500);
                        handleButtonClick("About")
                    }}
                >
                    <img
                        src="/icons/About_Button.png"
                        alt="About"
                        className="button-icon"
                    />
                    <span>About</span>
                </div>

                {/* Works */}
                <div
                    className="icon-button"
                    onClick={() => {
                        playCuteSound(600);
                        handleButtonClick("Works")
                    }}
                >
                    <img
                        src="/icons/Work_Button.png"
                        alt="Works"
                        className="button-icon"
                    />
                    <span>Works</span>
                </div>

                {/* Connect */}
                <div
                    className="icon-button relative"
                    onClick={() => {
                        playCuteSound(700);
                        handleButtonClick("Connect")
                    }}
                >
                    <img
                        src="/icons/Connect_Button.png"
                        alt="Connect"
                        className="button-icon"
                    />
                    <span>Connect</span>
                </div>

                {/* Soon... */}
                <div className="icon-button relative"
                    onClick={() => {
                        playCuteSound(800);
                    }}
                >
                    <img
                        src="/icons/stars.png"
                        alt="Overlay"
                        className="button-overlay"
                    />
                    <img
                        src="/icons/More_Soon.png"
                        alt="More"
                        className="button-icon"
                    />
                    <span>Soon...</span>
                </div>
            </div>
        </div>
    );
}

export default Home;
