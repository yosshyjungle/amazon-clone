import React from 'react';
import Logo from '../common/Logo';
import SearchBar from '../common/SearchBar';

const Header: React.FC = () => {
  return (
    <header className="bg-[#131921] text-white p-2">
      <div className="flex items-center justify-between">
        <Logo />
        
        <div className="flex-1 mx-4">
          <SearchBar />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer">
            <div className="text-xs">こんにちは、ログイン</div>
            <div className="font-bold">アカウント＆リスト</div>
          </div>
          
          <div className="cursor-pointer">
            <div className="text-xs">返品もこちら</div>
            <div className="font-bold">注文履歴</div>
          </div>
          
          <div className="cursor-pointer flex items-center">
            <span className="text-[#f08804] text-xl">0</span>
            <span className="ml-1 font-bold">カート</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 