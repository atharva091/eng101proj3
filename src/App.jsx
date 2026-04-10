import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MealLab from './components/MealLab';
import HeartStats from './components/HeartStats';
import { Menu } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('mission');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-lab-black text-white font-sans overflow-hidden">
      {/* Sticky Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b-4 border-gray-100 z-30">
        <div className="bg-natgeo-yellow px-2 py-1 border-2 border-black font-black text-black text-xs">
          NAT GEO KIDS LAB
        </div>
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-natgeo-brown hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        {activeTab === 'mission' && <Dashboard />}
        {activeTab === 'meal' && <MealLab />}
        {activeTab === 'stats' && <HeartStats />}
      </main>
    </div>
  );
}

export default App;
