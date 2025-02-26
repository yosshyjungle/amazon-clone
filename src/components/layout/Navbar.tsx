import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#232f3e] text-white p-2">
      <div className="flex items-center space-x-4">
        <div className="flex items-center cursor-pointer">
          <span className="mr-1">≡</span>
          <span>すべて</span>
        </div>
        
        <div className="flex space-x-4">
          <span className="cursor-pointer">Prime Video</span>
          <span className="cursor-pointer">ミュージック</span>
          <span className="cursor-pointer">本</span>
          <span className="cursor-pointer">ホーム＆キッチン</span>
          <span className="cursor-pointer">食品＆飲料</span>
          <span className="cursor-pointer">新着商品</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 