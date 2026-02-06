import React from "react";
import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter, ArrowDown } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <section id="about" className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        
        {/* Profile Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 lg:w-4/12 flex-shrink-0"
        >
          <div className="relative aspect-[3/4] w-full">
            <img
              src="https://res.cloudinary.com/deyitg53d/image/upload/v1770297422/1--448_mlvzdi.jpg"
              alt="Alex Lens - Photographer"
              className="w-full h-full object-cover grayscale rounded-sm shadow-xl"
            />
            {/* Minimal accent border */}
            <div className="absolute top-4 -right-4 w-full h-full border border-neutral-200 -z-10 rounded-sm" />
          </div>
          
          <div className="flex gap-6 mt-8 justify-center md:justify-start">
             <a href="https://www.instagram.com/joel_.smb/" className="text-neutral-400 hover:text-black transition-colors"><Instagram size={20} /></a>
             <a href="https://www.linkedin.com/in/joel-alwan-sembiring-3b8455324/" className="text-neutral-400 hover:text-black transition-colors"><Linkedin size={20} /></a>
             <a href="#" className="text-neutral-400 hover:text-black transition-colors"><Twitter size={20} /></a>
          </div>
        </motion.div>

        {/* Content Column */}
        <div className="flex-1 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-neutral-900">
              JOEL SEMBIRING
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 uppercase tracking-[0.2em] mb-12">
              Photographer • Videographer • Editor • Sound Engineer • Live Stream Operator
            </p>

            <div className="space-y-6 text-neutral-600 leading-relaxed max-w-2xl text-lg font-light">
              <p>
              I am a visual and audio storyteller with a passion for capturing raw, authentic moments that define every experience. As a Photographer, Videographer, Editor, Sound Engineer, and Live Stream Operator, I bring a comprehensive and technical approach to every project from production to post-production and live execution.
              </p>
              <p>
                My philosophy is simple: <span className="text-black font-medium">minimalism amplifies meaning</span>. 
                I remove distractions to focus on emotion, composition, sound, and light the elements that bring stories to life in the most genuine and impactful way.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-neutral-100 pt-8 max-w-lg">
              <div>
                <h4 className="text-3xl font-bold text-neutral-900">3+</h4>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-neutral-900">100+</h4>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2">Projects</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-neutral-900">100%</h4>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2">Dedication</p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-20 flex items-center gap-4 text-neutral-400 text-sm tracking-widest uppercase cursor-pointer hover:text-black transition-colors"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown size={16} />
              Scroll to Works
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
