import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MealLab from './components/MealLab';
import HeartStats from './components/HeartStats';

function App() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="flex h-screen w-screen bg-lab-black text-white font-sans overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {activeTab === 'mission' && <Dashboard />}
        {activeTab === 'meal' && <MealLab />}
        {activeTab === 'stats' && <HeartStats />}
      </main>
    </div>
  );
}

export default App;
