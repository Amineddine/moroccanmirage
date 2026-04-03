"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Professional, multi-lingual chauffeurs",
  "Premium Mercedes-Benz V-Class & S-Class",
  "Rugged Range Rover & Toyota Land Cruiser TX for desert excursions",
  "Seamless airport transfers & VIP meet-and-greet",
  "Complimentary Wi-Fi and refreshments onboard"
];

export default function PremiumActivities() {
  return (
    <section id="premium" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
        
        {/* Left Side: Sticky Content */}
        <div className="lg:sticky top-32 h-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
              Elite Experiences
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-atlas mb-8 leading-[1.1]">
              Luxury & Professional <br/>
              <span className="italic font-light text-sahara">Transportation</span>
            </h2>
            <p className="text-lg text-atlas/70 font-light leading-relaxed mb-10 max-w-lg">
              Traverse the varied landscapes of Morocco in absolute comfort. Our exclusive fleet ensures that whether you are navigating the ancient medinas or conquering the dunes of the Sahara, your journey is as magnificent as the destination itself.
            </p>
            
            <ul className="space-y-5 mb-12">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 text-atlas/80"
                >
                  <CheckCircle2 className="w-6 h-6 text-sahara shrink-0" />
                  <span className="text-lg font-light">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <button className="bg-atlas text-white px-8 py-4 rounded-full hover:bg-sahara transition-colors shadow-xl hover:shadow-sahara/30 flex items-center gap-3">
              Reserve Your Fleet
            </button>
          </motion.div>
        </div>

        {/* Right Side: Floating/Scrolling Images */}
        <div className="flex flex-col gap-10 mt-10 lg:mt-0">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full h-[60vh] lg:h-[70vh] rounded-[2rem] overflow-hidden sticky top-20 shadow-2xl"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2600&auto=format&fit=crop')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-atlas/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-white text-xl font-medium tracking-wide">Mercedes V-Class VIP</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full h-[60vh] lg:h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl relative lg:-ml-12 lg:mt-32 border-4 border-white"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2600&auto=format&fit=crop')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-atlas/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-white text-xl font-medium tracking-wide">Land Cruiser TX Desert Expedition</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
