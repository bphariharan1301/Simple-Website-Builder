// File: src/components/PageManagement.jsx

import React from "react"

const PageManagement = ({ pages, currentUrl, onPageChange }) => {
  return (
    <div className="p-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">Page Management</h3>
      <ul className="divide-y divide-gray-200">
        {pages.map((page, index) => (
          <li
            key={index}
            className={`py-2 ${currentUrl === page.url ? "font-bold" : ""}`}
          >
            <button
              onClick={() => onPageChange(page.url)}
              className="text-blue-600 hover:text-blue-800 focus:outline-none"
            >
              {page.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PageManagement
