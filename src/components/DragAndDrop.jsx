// src/components/DragAndDrop.js

import React, { useState, useEffect } from "react";
import templatesData from "../assets/templates.json";
import "./DragAndDrop.css";
import "./templates/swe.css";
import "./templates/uiux.css";
import "./templates/content-writer.css";
import "./templates/data-scientist.css";

const DragAndDrop = () => {
    const [templates, setTemplates] = useState([]);
    const [droppedTemplate, setDroppedTemplate] = useState(null);

    useEffect(() => {
        setTemplates(templatesData);
    }, []);

    const onDragStart = (event, template) => {
        event.dataTransfer.setData("template", JSON.stringify(template));
    };

    const onDrop = (event) => {
        event.preventDefault();
        const template = JSON.parse(event.dataTransfer.getData("template"));
        setDroppedTemplate(template);
    };

    const onDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="container">
            <div className="box">
                <h2 className="title">Drag these templates</h2>
                <div className="grid">
                    {templates.map((template) => (
                        <img
                            key={template.id}
                            src={template.thumbnail}
                            alt={template.name}
                            draggable
                            onDragStart={(event) =>
                                onDragStart(event, template)
                            }
                            className="thumbnail"
                        />
                    ))}
                </div>
            </div>

            <div
                className="box drop-zone"
                onDrop={onDrop}
                onDragOver={onDragOver}
            >
                <h2 className="title">Drop here</h2>
                <div className="grid">
                    {droppedTemplate && (
                        <div
                            className="template-content"
                            dangerouslySetInnerHTML={{
                                __html: droppedTemplate.htmlContent,
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DragAndDrop;
