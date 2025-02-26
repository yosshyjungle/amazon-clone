import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex">
      <select className="bg-[#f3f3f3] px-2 rounded-l border-r border-gray-300">
        <option>すべて</option>
      </select>
      
      <input
        type="text"
        className="flex-1 p-2 outline-none"
        placeholder="Amazon.co.jpを検索"
      />
      
      <button className="bg-[#febd69] px-4 rounded-r hover:bg-[#f3a847]">
        <span className="text-[#131921]">🔍</span>
      </button>
    </div>
  );
};

export default SearchBar; 