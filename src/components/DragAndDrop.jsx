// src/components/DragAndDrop.jsx

import React, { useState, useEffect } from "react"
import templatesData from "../assets/templates.json"
import Topbar from "./Topbar"
import PropertiesPanel from "./PropertiesPanel"
import "./DragAndDrop.css"
import "./templates/swe.css"
import "./templates/uiux.css"
import "./templates/content-writer.css"
import "./templates/data-scientist.css"

const DragAndDrop = () => {
  const [templates, setTemplates] = useState([])
  const [droppedTemplate, setDroppedTemplate] = useState(null)
  const [templateStyles, setTemplateStyles] = useState({
    color: "",
    imageSrc: "",
    videoSrc: "",
  })
  const [selectedElement, setSelectedElement] = useState(null)
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [currentTheme, setCurrentTheme] = useState("theme-light")

  useEffect(() => {
    setTemplates(templatesData)
  }, [])

  const handleElementClick = (element) => {
    setSelectedElement(element)
  }

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode)
  }

  const handleThemeChange = (themeClass) => {
    setCurrentTheme(themeClass)
  }

  const handlePropertyChange = (property, value) => {
    if (selectedElement) {
      const updatedTemplate = {
        ...droppedTemplate,
        htmlContent: droppedTemplate.htmlContent.replace(
          new RegExp(`${selectedElement.type}[^>]*>`),
          `${selectedElement.type} ${property}="${value}">`
        ),
      }
      setDroppedTemplate(updatedTemplate)
    }
  }

  const onDragStart = (event, template) => {
    event.dataTransfer.setData("template", JSON.stringify(template))
  }

  const onDrop = (event) => {
    event.preventDefault()
    const template = JSON.parse(event.dataTransfer.getData("template"))
    setDroppedTemplate(template)
  }

  const onDragOver = (event) => {
    event.preventDefault()
  }

  const handleUpdateStyles = (styles) => {
    setTemplateStyles((prevStyles) => ({ ...prevStyles, ...styles }))
  }

  const applyTemplateStyles = (htmlContent) => {
    let updatedHtml = htmlContent
    if (templateStyles.color) {
      updatedHtml = updatedHtml.replace(
        /(<[^>]+style="[^"]*)color:[^;"]*;?([^"]*")/g,
        `$1color: ${templateStyles.color};$2`
      )
    }
    if (templateStyles.imageSrc) {
      updatedHtml = updatedHtml.replace(
        /<img src="([^"]*)"/g,
        `<img src="${templateStyles.imageSrc}"`
      )
    }
    if (templateStyles.videoSrc) {
      updatedHtml = updatedHtml.replace(
        /<video[^>]*>[^<]*<\/video>/g,
        `<video src="${templateStyles.videoSrc}" controls>Your browser does not support the video tag.</video>`
      )
    }
    return updatedHtml
  }

  return (
    <div className={`container ${currentTheme}`}>
      <Topbar
        onUpdateStyles={handleUpdateStyles}
        onThemeChange={handleThemeChange}
      />
      <button onClick={togglePreviewMode}>
        {isPreviewMode ? "Exit Preview" : "Enter Preview"}
      </button>
      <div className={`drag-drop-area ${isPreviewMode ? "preview-mode" : ""}`}>
        <div className="box">
          <h2 className="title">Drag these templates</h2>
          <div className="grid">
            {templates.map((template) => (
              <img
                key={template.id}
                src={template.thumbnail}
                alt={template.name}
                draggable
                onDragStart={(event) => onDragStart(event, template)}
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
          <div className={templates.length > 0 ? "" : "grid"}>
            {droppedTemplate && (
              <div
                className="template-content"
                dangerouslySetInnerHTML={{
                  __html: applyTemplateStyles(droppedTemplate.htmlContent),
                }}
                onClick={(e) => handleElementClick(e.target)}
              />
            )}
          </div>
        </div>
        {selectedElement && (
          <PropertiesPanel
            element={selectedElement}
            onPropertyChange={handlePropertyChange}
          />
        )}
      </div>
    </div>
  )
}

export default DragAndDrop
