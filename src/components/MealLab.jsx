import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Beaker, Zap, Flame } from 'lucide-react';

const MealLab = () => {
  const experiments = [
    { title: "Energy Extraction", icon: Zap, status: "Ready", color: "text-natgeo-yellow" },
    { title: "Vitamin Volumizer", icon: Beaker, status: "Active", color: "text-natgeo-orange" },
    { title: "Protein Pulsar", icon: Flame, status: "Standby", color: "text-red-500" },
  ];

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto">
      <header className="mb-6 md:mb-10 border-b-4 border-black/5 pb-6">
        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-none drop-shadow-md">
          MEAL LAB: <span className="text-natgeo-yellow">ACTIVE EXPERIMENTS</span>
        </h2>
        <p className="text-white/80 font-bold mt-2 text-xs md:text-sm italic uppercase">PROTOCOL: MOLECULAR GASTRONOMY FOR EXPLORERS</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiments.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bento-card hover:scale-105 transition-transform cursor-pointer group"
          >
            <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 border-2 border-gray-100 group-hover:border-natgeo-yellow`}>
              <exp.icon className={exp.color} size={28} />
            </div>
            <h3 className="text-xl font-black text-natgeo-brown mb-1 uppercase tracking-tighter">{exp.title}</h3>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Status: {exp.status}</p>
          </motion.div>
        ))}

        <div className="md:col-span-3 bento-card bg-natgeo-brown text-white py-12 md:h-64 flex flex-col items-center justify-center text-center px-6">
          <Microscope size={48} className="text-natgeo-yellow mb-4 animate-pulse md:w-16 md:h-16" />
          <h3 className="text-xl md:text-3xl font-black uppercase mb-2">Advanced Food Scanner</h3>
          <p className="max-w-md text-gray-400 font-medium text-xs md:text-base">This module is currently calibrating for high-altitude snacks. Check back after your next Everest mission!</p>
        </div>
      </div>
    </div>
  );
};

export default MealLab;
