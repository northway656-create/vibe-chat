import React from 'react';
import { 
  BiMessageSquareDetail, BiPhone, BiVideo, BiUser, 
  BiStar, BiBell, BiHelpCircle, BiShieldQuarter, 
  BiFileText, BiCog 
} from 'react-icons/bi';

const Sidebar = () => {
  const menuItems = [
    { icon: <BiMessageSquareDetail size={22} />, label: 'Messages', active: true },
    { icon: <BiPhone size={22} />, label: 'Voice Call' },
    { icon: <BiVideo size={22} />, label: 'Video Call' },
    { icon: <BiUser size={22} />, label: 'People' },
    { icon: <BiStar size={22} />, label: 'Favorites' },
    { icon: <BiBell size={22} />, label: 'Notifications' },
  ];

  const policyItems = [
    { icon: <BiHelpCircle size={20} />, label: 'Help Center' },
    { icon: <BiShieldQuarter size={20} />, label: 'Safety Center' },
    { icon: <BiFileText size={20} />, label: 'Terms of Service' },
    { icon: <BiShieldQuarter size={20} />, label: 'Privacy Policy' },
  ];

  return (
    <div className="w-[260px] h-full bg-white border-r border-[#E2E8F0] flex flex-col justify-between p-6 shrink-0">
      {/* Application Branding Header */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 bg-[#635BFF] rounded-xl flex items-center justify-center text-white font-bold text-lg">
            💬
          </div>
          <span className="text-xl font-bold text-[#2A2050]">VibeChat</span>
        </div>

        {/* Primary Dashboard Navigation Links */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                item.active 
                  ? 'bg-[#F0EEFF] text-[#635BFF]' 
                  : 'text-[#718096] hover:bg-[#F8FAFC] hover:text-[#1A202C]'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Secondary Meta Information & System Settings */}
      <div className="space-y-6">
        <div className="border-t border-[#EDF2F7] pt-4 space-y-1">
          {policyItems.map((item, index) => (
            <button key={index} className="w-full flex items-center gap-4 px-4 py-2 text-xs font-medium text-[#A0AEC0] hover:text-[#4A5568] transition-colors">
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
        
        <button className="w-full flex items-center gap-4 px-4 py-3 text-sm font-medium text-[#718096] hover:bg-[#F8FAFC] rounded-xl transition-all">
          <BiCog size={22} />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
            
