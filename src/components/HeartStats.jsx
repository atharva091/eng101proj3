import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Activity, Thermometer, Wind } from 'lucide-react';

const HeartStats = () => {
  const stats = [
    { label: "BPM", value: "72", icon: HeartPulse, color: "text-red-500" },
    { label: "O2 SAT", value: "98%", icon: Wind, color: "text-blue-500" },
    { label: "TEMP", value: "98.6°", icon: Thermometer, color: "text-natgeo-orange" },
  ];

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
      <header className="mb-6 md:mb-10 border-b-4 border-black/5 pb-6">
        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-none drop-shadow-md">
          HEART STATS: <span className="text-natgeo-yellow">VITAL SIGNS</span>
        </h2>
        <p className="text-white/80 font-bold mt-2 text-xs md:text-sm italic uppercase">BIO-METRIC TELEMETRY FOR FIELD AGENTS</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-10">
        <div className="bento-card relative h-64 md:h-80 flex flex-col items-center justify-center border-none overflow-hidden">
           <div className="absolute inset-0 bg-gray-50/50 -z-10" />
           <motion.div 
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ duration: 0.8, repeat: Infinity }}
             className="text-red-500 mb-2 md:mb-4"
           >
             <HeartPulse size={80} className="md:w-32 md:h-32" />
           </motion.div>
           <h3 className="text-4xl md:text-5xl font-black text-natgeo-brown">72 <span className="text-base md:text-xl text-gray-400">BPM</span></h3>
           <p className="text-[10px] md:text-sm font-black text-gray-400 uppercase tracking-widest mt-1 md:mt-2">Current Heart Rate</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {stats.slice(1).map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bento-card flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border-2 border-gray-100">
                  <stat.icon className={stat.color} size={24} />
                </div>
                <div>
                   <p className="text-2xl font-black text-natgeo-brown leading-none">{stat.value}</p>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(j => <div key={j} className="w-4 h-1 bg-natgeo-yellow rounded-full" />)}
              </div>
            </motion.div>
          ))}
          
          <div className="bento-card bg-natgeo-yellow border-none flex items-center gap-4 py-8">
             <Activity className="text-black" size={32} />
             <div>
               <p className="text-lg font-black text-black leading-tight">CONDITION: OPTIMAL</p>
               <p className="text-xs font-bold text-black/60 uppercase tracking-wider">Ready for deep sea or mountain missions.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartStats;
