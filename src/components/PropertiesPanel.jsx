import React from "react"

const PropertiesPanel = ({ element, onPropertyChange }) => {
  return (
    <div className="properties-panel">
      <h3>Properties</h3>
      {element.tagName === "IMG" && (
        <input
          type="text"
          placeholder="Image URL"
          onChange={(e) => onPropertyChange("src", e.target.value)}
        />
      )}
      {element.tagName === "P" && (
        <input
          type="color"
          onChange={(e) => onPropertyChange("color", e.target.value)}
        />
      )}
      {/* Add more property inputs based on element type */}
    </div>
  )
}

export default PropertiesPanel
