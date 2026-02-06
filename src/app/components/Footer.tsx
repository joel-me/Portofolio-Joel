import React from "react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white border-t border-neutral-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-bold text-xl tracking-tighter uppercase">Joel Sembiring</h4>
          <p className="text-neutral-500 text-xs mt-1">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
        
        <div className="flex gap-8 text-xs tracking-widest uppercase text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};
