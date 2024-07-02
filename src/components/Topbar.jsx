// src/components/Topbar.jsx

import React, { useState } from "react";
import "./Topbar.css";

const Topbar = ({ onUpdateStyles }) => {
    const [color, setColor] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [videoSrc, setVideoSrc] = useState("");

    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setColor(newColor);
        onUpdateStyles({ color: newColor });
    };

    const handleImageChange = (event) => {
        const newImageSrc = event.target.value;
        setImageSrc(newImageSrc);
        onUpdateStyles({ imageSrc: newImageSrc });
    };

    const handleVideoChange = (event) => {
        const newVideoSrc = event.target.value;
        setVideoSrc(newVideoSrc);
        onUpdateStyles({ videoSrc: newVideoSrc });
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
