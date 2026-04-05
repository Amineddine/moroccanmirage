"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function CustomizePage() {
  const [step, setStep] = useState(1);
  const totalSteps = 8;
  const [direction, setDirection] = useState(1);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "",
    dates: "", duration: "",
    party: "",
    regions: [] as string[],
    pace: "", accommodation: "",
    interests: [] as string[],
    budget: "", notes: "",
  });

  const nextStep = () => {
    if (step < totalSteps) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const submitForm = () => {
    setDirection(1);
    setStep(9);
  };

  const toggleArray = (category: "regions" | "interests", val: string) => {
    const list = formData[category] as string[];
    setFormData({ 
      ...formData, 
      [category]: list.includes(val) ? list.filter(i => i !== val) : [...list, val] 
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 60 : -60,
      opacity: 0,
      filter: "blur(12px)",
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 60 : -60,
      opacity: 0,
      filter: "blur(12px)",
      scale: 1.05
    })
  };

  return (
    <div className="bg-obsidian min-h-screen w-full flex flex-col lg:flex-row font-sans text-alabaster selection:bg-sandstone selection:text-obsidian overflow-hidden">
      
      {/* Left Fixed Panel */}
      <div className="w-full lg:w-[40%] p-10 md:p-16 lg:p-24 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 bg-obsidian z-20">
        <div>
          <Link href="/" className="text-sandstone hover:text-white uppercase text-[10px] font-bold inline-block transition-colors tracking-[0.3em]">&larr; Return Home</Link>
        </div>
        
        <div className="mt-20 lg:mt-0 flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step < 9 ? (
              <motion.div 
                key="active"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full"
              >
                <p className="text-sandstone/60 font-sans tracking-[0.4em] text-[11px] uppercase mb-8">
                  Step {String(step).padStart(2, '0')} — {String(totalSteps).padStart(2, '0')}
                </p>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] text-alabaster leading-[1.05] tracking-tight">
                  Craft Your <br/><span className="text-sandstone italic font-light pr-4">Signature</span><br/> Journey.
                </h1>
                
                <div className="mt-16 sm:mt-24 w-full h-[1px] bg-white/5 relative">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-sandstone" 
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / totalSteps) * 100}%` }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full"
              >
                <p className="text-sandstone font-sans tracking-[0.4em] text-[11px] uppercase mb-8">Complete</p>
                <h1 className="font-serif text-5xl md:text-6xl text-alabaster leading-[1.05] tracking-tight">
                  Request <br/><span className="text-sandstone italic font-light">Received</span>
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Sliding Panel */}
      <div className="w-full lg:w-[60%] min-h-[60vh] lg:min-h-screen flex flex-col relative px-8 md:px-16 lg:px-24 xl:px-32 py-16 lg:py-0 justify-center bg-[#070707]">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-sandstone/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="w-full max-w-2xl relative flex-1 flex flex-col justify-center my-auto z-10">
          <AnimatePresence mode="wait" custom={direction}>
            
            {step === 1 && (
              <motion.div key="1" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="w-full">
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-semibold text-sandstone/70 mb-12">01. Who is traveling?</h2>
                <div className="flex flex-col gap-12 lg:gap-16">
                  <div className="relative group">
                    <input type="text" className="w-full bg-transparent border-0 border-b border-white/10 pb-4 text-3xl md:text-5xl font-serif text-white placeholder:text-white/10 focus:ring-0 focus:border-sandstone transition-colors outline-none" placeholder="Primary Contact Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="relative group">
                    <input type="email" className="w-full bg-transparent border-0 border-b border-white/10 pb-4 text-3xl md:text-5xl font-serif text-white placeholder:text-white/10 focus:ring-0 focus:border-sandstone transition-colors outline-none" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="relative group">
                    <input type="tel" className="w-full bg-transparent border-0 border-b border-white/10 pb-4 text-3xl md:text-5xl font-serif text-white placeholder:text-white/10 focus:ring-0 focus:border-sandstone transition-colors outline-none" placeholder="WhatsApp Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="2" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="w-full">
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-semibold text-sandstone/70 mb-12">02. Arrival Timeline</h2>
                <div className="flex flex-col gap-12 lg:gap-16">
                  <div className="relative group">
                    <input type="text" className="w-full bg-transparent border-0 border-b border-white/10 pb-4 text-3xl md:text-5xl font-serif text-white placeholder:text-white/10 focus:ring-0 focus:border-sandstone transition-colors outline-none" placeholder="e.g. October 2026" value={formData.dates} onChange={(e) => setFormData({...formData, dates: e.target.value})} />
                  </div>
                  <div className="relative group">
                    <input type="text" className="w-full bg-transparent border-0 border-b border-white/10 pb-4 text-3xl md:text-5xl font-serif text-white placeholder:text-white/10 focus:ring-0 focus:border-sandstone transition-colors outline-none" placeholder="Duration (e.g. 12 Days)" value={formData.duration} onChange={(e) => setFormData({...formData, duration: e.target.value})} />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="3" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="w-full">
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-semibold text-sandstone/70 mb-12">03. Travel Composition</h2>
                <div className="flex flex-col">
                  {["Solo Traveler", "Couple / Pair", "Family with Kids", "Group of Friends"].map((option, i) => (
                    <button key={option} onClick={() => setFormData({...formData, party: option})} 
                      className={`group w-full py-8 md:py-10 border-b transition-all duration-500 flex items-center justify-between text-left ${formData.party === option ? "border-sandstone" : "border-white/5 hover:border-white/20"}`}>
                      <span className={`font-serif text-3xl md:text-4xl lg:text-5xl transition-all duration-500 ease-out ${formData.party === option ? "text-sandstone translate-x-4 md:translate-x-8" : "text-white/30 group-hover:text-white group-hover:translate-x-2"}`}>
                        {option}
                      </span>
                      <span className={`text-[10px] font-sans tracking-[0.3em] font-bold transition-opacity duration-500 ${formData.party === option ? "opacity-100 text-sandstone" : "opacity-0 text-white"}`}>
                        SELECTED
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="4" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="w-full">
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-semibold text-sandstone/70 mb-12">04. Distinct Regions</h2>
                <div className="flex flex-col">
                  {["Sahara & Golden Dunes", "Atlas Mountain Valleys", "Imperial Medinas", "Coastal Retreats", "Undecided"].map((option) => (
                    <button key={option} onClick={() => toggleArray("regions", option)} 
                      className={`group w-full py-6 md:py-8 border-b transition-all duration-500 flex items-center justify-between text-left ${formData.regions.includes(option) ? "border-sandstone" : "border-white/5 hover:border-white/20"}`}>
                      <span className={`font-serif text-2xl md:text-4xl transition-all duration-500 ease-out ${formData.regions.includes(option) ? "text-sandstone translate-x-4" : "text-white/30 group-hover:text-white group-hover:translate-x-2"}`}>
                        {option}
                      </span>
                      <span className={`text-[10px] font-sans tracking-[0.3em] font-bold transition-opacity duration-500 ${formData.regions.includes(option) ? "opacity-100 text-sandstone" : "opacity-0 text-white"}`}>
                        SELECTED
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="5" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="w-full">
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-semibold text-sandstone/70 mb-12">05. Pacing & Energy</h2>
                <div className="flex flex-col">
                  {["Relaxed & Immersive", "Curated Balance", "Intense Exploration"].map((option) => (
                    <button key={option} onClick={() => setFormData({...formData, pace: option})} 
                      className={`group w-full flex flex-col py-8 border-b transition-all duration-500 text-left ${formData.pace === option ? "border-sandstone" : "border-white/5 hover:border-white/20"}`}>
                      <span className={`font-serif text-3xl md:text-4xl transition-all duration-500 ease-out mb-2 ${formData.pace === option ? "text-sandstone translate-x-2 md:translate-x-6" : "text-white/30 group-hover:text-white"}`}>
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div key="6" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="w-full">
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-semibold text-sandstone/70 mb-12">06. Accommodations</h2>
                <div className="flex flex-col">
                  {["Authentic Palatial Riads", "Sahara Luxury Tents", "Modern 5-Star Resorts", "A Mix of Everything"].map((option) => (
                    <button key={option} onClick={() => setFormData({...formData, accommodation: option})} 
                      className={`group w-full py-8 md:py-10 border-b transition-all duration-500 flex items-center justify-between text-left ${formData.accommodation === option ? "border-sandstone" : "border-white/5 hover:border-white/20"}`}>
                      <span className={`font-serif text-3xl md:text-4xl transition-all duration-500 ease-out ${formData.accommodation === option ? "text-sandstone translate-x-4 md:translate-x-8" : "text-white/30 group-hover:text-white group-hover:translate-x-2"}`}>
                        {option}
                      </span>
                      <span className={`text-[10px] font-sans tracking-[0.3em] font-bold transition-opacity duration-500 ${formData.accommodation === option ? "opacity-100 text-sandstone" : "opacity-0 text-white"}`}>
                        SELECTED
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 7 && (
              <motion.div key="7" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="w-full">
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-semibold text-sandstone/70 mb-12">07. Inspirations</h2>
                <div className="flex flex-col">
                  {["Architecture & History", "Gastronomy & Tasting", "Atlas Trekking", "Desert Photography", "Hammams & Wellness"].map((option) => (
                    <button key={option} onClick={() => toggleArray("interests", option)} 
                      className={`group w-full py-6 md:py-8 border-b transition-all duration-500 flex items-center justify-between text-left ${formData.interests.includes(option) ? "border-sandstone" : "border-white/5 hover:border-white/20"}`}>
                      <span className={`font-serif text-2xl md:text-4xl transition-all duration-500 ease-out ${formData.interests.includes(option) ? "text-sandstone translate-x-4" : "text-white/30 group-hover:text-white group-hover:translate-x-2"}`}>
                        {option}
                      </span>
                      <span className={`text-[10px] font-sans tracking-[0.3em] font-bold transition-opacity duration-500 ${formData.interests.includes(option) ? "opacity-100 text-sandstone" : "opacity-0 text-white"}`}>
                        SELECTED
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 8 && (
              <motion.div key="8" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="w-full">
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-semibold text-sandstone/70 mb-12">08. Final Details</h2>
                <div className="flex flex-col gap-12 lg:gap-16">
                  <div className="relative group">
                    <input type="text" className="w-full bg-transparent border-0 border-b border-white/10 pb-4 text-3xl md:text-5xl font-serif text-white placeholder:text-white/10 focus:ring-0 focus:border-sandstone transition-colors outline-none" placeholder="Budget Estimation" value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} />
                  </div>
                  <div className="relative group">
                    <textarea rows={2} className="w-full bg-transparent border-0 border-b border-white/10 pb-4 text-3xl md:text-5xl font-serif text-white placeholder:text-white/10 focus:ring-0 focus:border-sandstone transition-colors outline-none resize-none leading-snug" placeholder="Additional desires..." value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 9 && (
              <motion.div key="9" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="w-full flex justify-center text-center">
                <div className="max-w-md">
                   <p className="text-white/50 font-light leading-relaxed text-lg">
                     Thank you. Our luxury travel curators are reviewing your exact requirements and will return an exquisitely detailed proposal within 24 hours.
                   </p>
                   <Link href="/" className="mt-16 inline-block uppercase text-[10px] tracking-widest font-bold bg-white text-obsidian px-12 py-5 hover:bg-sandstone transition-colors duration-500">Return To The Mirage</Link>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Global Context Controls */}
        {step < 9 && (
          <div className="mt-auto pt-16 flex items-center justify-between w-full max-w-2xl relative z-20 pb-8 lg:pb-0">
            <button onClick={prevStep} className={`flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ${step === 1 ? "opacity-0 pointer-events-none" : "text-white/40 hover:text-white hover:-translate-x-2"}`}>
              <ArrowLeft size={14} strokeWidth={1.5} /> Previous
            </button>
            
            {step < totalSteps ? (
              <button onClick={nextStep} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-sandstone hover:text-white transition-all duration-500 hover:translate-x-2 group">
                Next <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button onClick={submitForm} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-obsidian bg-sandstone px-8 py-4 hover:bg-white transition-all duration-500">
                Submit Inquiry <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
