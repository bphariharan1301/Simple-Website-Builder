// File: src/App.js

import React from "react"
import DragAndDrop from "./components/DragAndDrop"
import ElementProperties from "./components/ElementProperties"
import ComponentLibrary from "./components/ComponentLibrary"
import PreviewMode from "./components/PreviewMode"
import PageManagement from "./components/PageManagement"
import TemplateSystem from "./components/TemplateSystem"

function App() {
  return (
    <div className="flex flex-wrap p-4">
      {/* Left Panel: Drag and Drop Interface */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <DragAndDrop />
      </div>

      {/* Middle Panel: Element Properties and Component Library */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <ElementProperties />
        <ComponentLibrary />
      </div>

      {/* Right Panel: Preview Mode, Page Management, Template System */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <PreviewMode />
        <PageManagement />
        <TemplateSystem />
      </div>
    </div>
  )
}

export default App
