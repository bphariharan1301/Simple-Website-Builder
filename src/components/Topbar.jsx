// src/components/Topbar.jsx

import React, { useState } from "react";
import "./Topbar.css";

const Topbar = ({ onUpdateStyles }) => {
    const [color, setColor] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [videoSrc, setVideoSrc] = useState("");

    const handleColorChange = (event) => {
        setColor(event.target.value);
        onUpdateStyles({ color: event.target.value });
    };

    const handleImageChange = (event) => {
        setImageSrc(event.target.value);
        onUpdateStyles({ imageSrc: event.target.value });
    };

    const handleVideoChange = (event) => {
        setVideoSrc(event.target.value);
        onUpdateStyles({ videoSrc: event.target.value });
    };

    return (
        <div className="topbar">
            <label>
                Text Color:
                <input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                />
            </label>
            <label>
                Image Source:
                <input
                    type="text"
                    value={imageSrc}
                    onChange={handleImageChange}
                    placeholder="Enter image URL"
                />
            </label>
            <label>
                Video Source:
                <input
                    type="text"
                    value={videoSrc}
                    onChange={handleVideoChange}
                    placeholder="Enter video URL"
                />
            </label>
        </div>
    );
};

export default Topbar;
