
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-aura-mahogany text-aura-offwhite border-t border-white/5">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <h2 className="text-3xl font-serif font-bold text-aura-red mb-4">AuraCantik</h2>
          <p className="text-white/40 font-light max-w-xs">
            A premium social marketplace by <span className="text-white/60 font-medium">AURA</span>. Redefining Malaysia's beauty and fashion industry.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-aura-red transition-colors">Instagram</a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-aura-red transition-colors">LinkedIn</a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-aura-red transition-colors">Contact</a>
          </div>
          <p className="text-xs text-white/30 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} AURA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
