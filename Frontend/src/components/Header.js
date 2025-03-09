import React from "react";

const Header = ({ searchQuery, onSearch }) => {
  return (
    <div className="flex items-center p-4 bg-gray-100 shadow-md">
      <input
        type="text"
        value={searchQuery}
        onChange={onSearch}
        className="p-2 border border-gray-400 bg-white rounded-md w-1/2 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm"
        placeholder="Search..."
      />
    </div>
  );
};

export default Header;
