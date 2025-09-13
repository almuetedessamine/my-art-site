import React, { useState, useEffect } from "react";
import "../css/Background.css";

function Background() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="background">
            <div
                className="cursor-glow"
                style={{ left: pos.x, top: pos.y }}
            ></div>
        </div>
    );
}

export default Background;
