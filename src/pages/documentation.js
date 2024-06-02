

import React from 'react';

const DocumentationSearch = () => {
  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-800">
      <div className="flex items-center bg-gray-700 rounded-md px-3 py-2">
        <input 
          type="text" 
          placeholder="Search documentation..." 
          className="bg-transparent text-white outline-none placeholder-gray-400" 
        />
        <kbd className="bg-gray-600 text-white text-xs px-1 py-0.5 rounded ml-2">
          ⌘K
        </kbd>
      </div>
      <button className="bg-gray-900 text-white px-3 py-2 rounded-md">
        Feedback
      </button>
      <button className="bg-white text-black px-3 py-2 rounded-md">
        Learn
      </button>
    </div>
  );
};

export default DocumentationSearch;
