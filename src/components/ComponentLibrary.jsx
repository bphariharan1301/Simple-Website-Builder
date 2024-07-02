// File: src/components/ComponentLibrary.jsx

import React from "react"
import TextBlock from "./TextBlock"
import ImageBlock from "./ImageBlock"
import VideoBlock from "./VideoBlock"
import ButtonBlock from "./ButtonBlock"

const ComponentLibrary = () => {
  return (
    <div className="p-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">Component Library</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <TextBlock text="Sample Text" />
        </div>
        <div>
          <ImageBlock
            src="/path/to/image.jpg"
            alt="Image Alt Text"
          />
        </div>
        <div>
          <VideoBlock src="/path/to/video.mp4" />
        </div>
        <div>
          <ButtonBlock text="Click Me" />
        </div>
      </div>
    </div>
  )
}

export default ComponentLibrary
