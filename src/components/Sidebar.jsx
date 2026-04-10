import React from 'react';
import { Target, Microscope, HeartPulse, X } from 'lucide-react';

// MISSION CONTROL: Asset successfully moved to /public/logo.png
const CUSTOM_LOGO_PATH = "/logo.png";

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'mission', icon: Target, label: 'MY MISSION' },
    { id: 'meal', icon: Microscope, label: 'MEAL LAB' },
    { id: 'stats', icon: HeartPulse, label: 'HEART STATS' },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`
        fixed md:relative z-50
        w-64 h-full bg-white border-r-4 border-gray-100 p-6 flex flex-col gap-10
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col gap-1 relative">
          {/* Close button for mobile */}
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden absolute -top-2 -right-2 p-2 text-gray-400 hover:text-black"
          >
            <X size={20} />
          </button>

          {CUSTOM_LOGO_PATH ? (
            <div className="w-full">
              <img 
                src={CUSTOM_LOGO_PATH} 
                alt="National Geographic Kids" 
                className="w-[180px] h-auto object-contain" 
              />
            </div>
          ) : (
            <div className="bg-natgeo-yellow p-1 border-2 border-black w-fit">
              <div className="border border-black px-3 py-1 bg-natgeo-yellow">
                <h1 className="text-xl font-black text-black tracking-tighter leading-none">NATIONAL GEOGRAPHIC</h1>
                <h1 className="text-2xl font-black text-black tracking-tighter leading-none italic">KIDS</h1>
              </div>
            </div>
          )}
          <p className="text-[10px] font-bold text-gray-500 tracking-[0.3em] mt-2 uppercase">Health Lab</p>
          <p className="text-[9px] font-medium text-gray-400 mt-1 uppercase tracking-wider">Programmed and Deployed by Atharva Neelabh</p>
        </div>

        <nav className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${activeTab === item.id
                ? 'bg-natgeo-yellow text-black shadow-md translate-x-1'
                : 'text-gray-500 hover:bg-gray-50 hover:text-black'
                }`}
            >
              <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-black' : 'group-hover:text-natgeo-orange'}`} />
              <span className="font-extrabold text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 bg-natgeo-brown rounded-xl">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Status Report</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-natgeo-yellow rounded-full animate-bounce" />
            <span className="text-xs font-bold text-white uppercase italic">Ready to Explore</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
