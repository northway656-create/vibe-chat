import React from 'react';
import { BiUser, BiEnvelope, BiShield } from 'react-icons/bi';

const ProfileCard = ({ activeChat }) => {
  return (
    <div className="w-[300px] h-full bg-white border-l border-[#E2E8F0] flex flex-col p-6 shrink-0 overflow-y-auto custom-scrollbar">
      {/* Profile Overview Card Header */}
      <div className="flex flex-col items-center text-center pb-6 border-b border-[#F0F4F8]">
        <img src={activeChat.avatar} alt={activeChat.name} className="w-24 h-24 rounded-full object-cover ring-4 ring-purple-50 mb-4" />
        <h3 className="text-base font-bold text-[#1E1E24]">{activeChat.name}</h3>
        <p className="text-xs text-[#718096] font-medium mt-0.5">Product Designer</p>
      </div>

      {/* Meta Identity and Structural Information */}
      <div className="mt-6 space-y-5">
        <h4 className="text-xs font-bold text-[#A0AEC0] tracking-wider uppercase">User Information</h4>
        
        <div className="flex items-center gap-3 text-sm">
          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#718096]">
            <BiUser size={18} />
          </div>
          <div>
            <p className="text-[11px] text-[#A0AEC0] font-semibold">Username</p>
            <p className="text-xs font-semibold text-[#1E1E24]">@emily_design</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#718096]">
            <BiEnvelope size={18} />
          </div>
          <div>
            <p className="text-[11px] text-[#A0AEC0] font-semibold">Email Address</p>
            <p className="text-xs font-semibold text-[#1E1E24]">emily@example.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#718096]">
            <BiShield size={18} />
          </div>
          <div>
            <p className="text-[11px] text-[#A0AEC0] font-semibold">Encryption</p>
            <p className="text-xs font-semibold text-[#38A169]">End-to-End Encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
            
