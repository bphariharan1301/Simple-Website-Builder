// File: src/components/PreviewMode.jsx

import React from "react"

const PreviewMode = ({ previewUrl }) => {
  return (
    <div className="p-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">Preview Mode</h3>
      <div className="overflow-auto">
        <iframe
          title="Preview"
          className="w-full h-screen"
          src={previewUrl}
          frameBorder="0"
        />
      </div>
    </div>
  )
}

export default PreviewMode
