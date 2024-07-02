// File: src/components/ElementProperties.jsx

import React from "react"

const ElementProperties = ({ selectedElement, onUpdateElement }) => {
  const handleTextChange = (event) => {
    onUpdateElement({ ...selectedElement, text: event.target.value })
  }

  return (
    <div className="p-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">Element Properties</h3>
      {selectedElement && (
        <div>
          {selectedElement.type === "text" && (
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Text Content
              </label>
              <input
                type="text"
                value={selectedElement.text}
                onChange={handleTextChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          )}
          {/* Add more input fields for other element properties */}
        </div>
      )}
    </div>
  )
}

export default ElementProperties
