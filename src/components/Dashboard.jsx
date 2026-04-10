import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Utensils, Star, ShieldCheck, ChevronRight, RefreshCcw, Search } from 'lucide-react';
import { SNACK_PAIRS } from '../data/snacks';

const Dashboard = () => {
  const [step, setStep] = useState(1); // 1: Form, 2: Scanning, 3: Results
  const [formData, setFormData] = useState({ name: '', favoriteActivity: '', snack: '' });
  const [analysis, setAnalysis] = useState(null);

  const handleStartAnalysis = (e) => {
    e.preventDefault();
    const result = SNACK_PAIRS.find(s => s.original.toLowerCase() === formData.snack.toLowerCase()) 
                   || SNACK_PAIRS[Math.floor(Math.random() * SNACK_PAIRS.length)];
    
    setAnalysis(result);
    setStep(2);
    
    setTimeout(() => {
      setStep(3);
    }, 3000);
  };

  const resetMission = () => {
    setStep(1);
    setFormData({ name: '', favoriteActivity: '', snack: '' });
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <header className="mb-10 flex justify-between items-end border-b-4 border-black/5 pb-6">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight leading-none drop-shadow-md">
            LAB REPORT: <span className="text-natgeo-yellow">HEALTH MISSION</span>
          </h2>
          <p className="text-white/80 font-bold mt-2 italic">STATUS: {step === 1 ? 'WAITING FOR DATA' : step === 2 ? 'SCANNING BIOMETRICS...' : 'MISSION LOG COMPLETE'}</p>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="bg-white px-4 py-2 border-2 border-black font-black text-black text-sm uppercase">EDITION: 2026.04</div>
          <div className="bg-natgeo-yellow px-4 py-2 border-2 border-black font-black text-black text-sm uppercase shadow-[4px_4px_0px_#000]">PAGE 01</div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bento-card relative">
              <div className="absolute -top-4 -left-4 bg-natgeo-yellow border-2 border-black px-4 py-1 font-black text-black text-xs uppercase shadow-md">
                RECERTIFICATION REQUIRED
              </div>
              
              <div className="mb-8 mt-4">
                <h3 className="text-3xl font-black text-natgeo-brown uppercase leading-tight mb-2">Daily Mission Briefing</h3>
                <p className="text-gray-500 font-medium">Identify your current fuel source and tell us about your next adventure.</p>
              </div>
              
              <form onSubmit={handleStartAnalysis} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-black text-natgeo-brown uppercase tracking-widest">Explorer Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Ranger Alex"
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-natgeo-yellow outline-none transition-all font-bold text-black"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-xs font-black text-natgeo-brown uppercase tracking-widest">Next Adventure</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Scuba Diving"
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-natgeo-yellow outline-none transition-all font-bold text-black"
                      value={formData.favoriteActivity}
                      onChange={(e) => setFormData({...formData, favoriteActivity: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-black text-natgeo-brown uppercase tracking-widest">Current Fuel Intake</label>
                  <div className="relative">
                    <input 
                      required
                      type="text" 
                      placeholder="What are you snacking on right now?"
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-4 pl-12 focus:border-natgeo-yellow outline-none transition-all font-bold text-lg text-black"
                      value={formData.snack}
                      onChange={(e) => setFormData({...formData, snack: e.target.value})}
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-natgeo-brown hover:bg-black text-white font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 text-lg border-b-4 border-black"
                >
                  START LAB SCAN <ChevronRight size={24} />
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center min-h-[500px]"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-72 h-72 border-8 border-white/30 rounded-full flex items-center justify-center"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 bg-natgeo-yellow rounded-full border-4 border-black flex flex-col items-center justify-center shadow-2xl">
                  <Utensils className="w-16 h-16 text-black mb-2" />
                  <p className="font-black text-black text-xl italic uppercase tracking-tighter">Analyzing...</p>
                </div>
              </div>
              
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-2 bg-white shadow-[0_0_20px_white] z-10"
              />
            </div>
            
            <div className="mt-16 bg-white border-2 border-black px-8 py-4 shadow-[8px_8px_0px_#3D2B1F]">
              <p className="font-black text-natgeo-brown uppercase italic text-center tracking-widest">Target: {formData.snack}</p>
            </div>
          </motion.div>
        )}

        {step === 3 && analysis && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto"
          >
            {/* Mission Log Header */}
            <div className="md:col-span-12 flex flex-col md:flex-row gap-6">
              <div className="flex-1 bento-card border-none relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-natgeo-yellow px-4 py-2 border-b-2 border-l-2 border-black font-black uppercase text-xs">OFFICIAL REPORT</div>
                <h4 className="text-4xl font-black text-natgeo-brown uppercase mb-3">Mission Insight</h4>
                <p className="text-xl font-bold text-gray-600 leading-relaxed">
                  Hey <span className="text-natgeo-orange">{formData.name}!</span> We've logged your <span className="underline decoration-natgeo-yellow decoration-4 underline-offset-4">{formData.snack}</span> into the database.
                </p>
                <div className="mt-6 p-4 bg-gray-50 border-l-4 border-natgeo-yellow rounded-r-lg">
                   <p className="text-sm font-black text-natgeo-brown italic">"To master your {formData.favoriteActivity} mission, you need consistent daily fuel!"</p>
                </div>
              </div>

              <div className="md:w-72 bento-card bg-natgeo-brown text-white flex flex-col items-center justify-center text-center border-none shadow-[8px_8px_0px_#FFCC00]">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-gray-400">DAILY FUEL SCORE</h4>
                <div className="text-7xl font-black text-natgeo-yellow mb-2">{analysis.healthScore}</div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} fill={i <= 4 ? "#FFCC00" : "none"} className={i <= 4 ? "text-natgeo-yellow" : "text-gray-600"} size={16} />
                  ))}
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded">Rank: Field Agent</p>
              </div>
            </div>

            {/* Protocol Upgrade Section */}
            <div className="md:col-span-12">
               <div className="bg-white border-4 border-black p-4 mb-6 inline-block shadow-[6px_6px_0px_#000]">
                 <h3 className="text-2xl font-black text-black italic uppercase tracking-tighter flex items-center gap-3">
                   <ShieldCheck className="text-natgeo-orange" size={28} /> UPGRADE PROTOCOL: DAILY POWER-UPS
                 </h3>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* The Treat */}
                 <div className="bento-card border-2 border-gray-100 bg-gray-50 group hover:border-natgeo-orange transition-colors">
                   <div className="flex justify-between items-start mb-6">
                     <span className="bg-natgeo-brown text-white px-3 py-1 font-black text-[10px] uppercase tracking-widest">THE CLASSIC TREAT</span>
                     <Star className="text-natgeo-orange" fill="#F39C12" size={20} />
                   </div>
                   <h4 className="text-4xl font-black text-natgeo-brown mb-2 uppercase tracking-tighter">{analysis.original}</h4>
                   <p className="text-gray-500 font-bold mb-6 italic">{analysis.status}</p>
                   <div className="p-4 bg-white border-2 border-gray-100 rounded-lg text-sm font-medium text-gray-500">
                      Great for special occasions and weekend fun!
                   </div>
                 </div>

                 {/* The Power-Up */}
                 <div className="bento-card border-4 border-natgeo-yellow group shadow-[12px_12px_0px_rgba(255,204,0,0.15)]">
                    <div className="flex justify-between items-start mb-6">
                      <span className="bg-natgeo-yellow text-black px-3 py-1 font-black text-[10px] uppercase tracking-widest border border-black italic">
                        DAILY POWER-UP
                      </span>
                      <Sparkles className="text-natgeo-yellow animate-pulse" fill="#FFCC00" size={24} />
                    </div>
                    <h4 className="text-4xl font-black text-natgeo-brown mb-2 uppercase tracking-tighter">{analysis.swap}</h4>
                    <p className="text-natgeo-orange font-black mb-6 italic">{analysis.swapBadge}</p>
                    <div className="p-4 bg-natgeo-yellow/10 border-2 border-natgeo-yellow/20 rounded-lg text-sm font-bold text-natgeo-brown">
                      {analysis.swapBenefits}
                    </div>
                 </div>
               </div>
               
               <div className="mt-12 flex flex-col items-center gap-4">
                 <p className="text-white font-black uppercase italic tracking-widest text-sm drop-shadow-md">Every mission needs a treat! For maximum power, try these daily swaps.</p>
                 <button 
                  onClick={resetMission}
                  className="bg-white hover:bg-natgeo-yellow text-black border-4 border-black px-10 py-4 font-black uppercase tracking-widest shadow-[8px_8px_0px_#3D2B1F] transition-all flex items-center gap-2 group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_#3D2B1F]"
                 >
                   <RefreshCcw className="group-hover:rotate-180 transition-transform duration-500" /> Start New Lab Scan
                 </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
