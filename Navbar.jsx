import React from 'react';
import { BiMenu, BiGlobe, BiBell } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="h-[64px] w-full bg-white border-b border-[#E2E8F0] px-6 flex items-center justify-between z-10 shrink-0">
      {/* Left Utilities */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-[#718096] hover:bg-gray-50 rounded-lg transition-colors">
          <BiMenu size={24} />
        </button>
      </div>

      {/* Right Session Control Panel */}
      <div className="flex items-center gap-5">
        <button className="p-2 text-[#A0AEC0] hover:text-[#718096] transition-colors">
          <BiGlobe size={20} />
        </button>
        
        <button className="p-2 text-[#A0AEC0] hover:text-[#718096] relative transition-colors">
          <BiBell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="w-[1px] h-6 bg-[#E2E8F0]"></div>

        {/* Authenticated User Session Profile Details */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <h4 className="text-xs font-bold text-[#1E1E24]">John Doe</h4>
            <p className="text-[10px] text-[#38A169] font-medium">Online</p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" 
              alt="John Doe" 
              className="w-9 h-9 rounded-full object-cover ring-2 ring-purple-100"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#38A169] border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
        
