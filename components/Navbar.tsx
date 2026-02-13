
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Audience', id: 'audience' },
    { name: 'Features', id: 'features' },
  ];

  useEffect(() => {
    const nav = navRef.current;
    const container = containerRef.current;
    if (!nav || !container) return;

    gsap.fromTo(nav, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'expo.out', delay: 0.5 }
    );

    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;

      if (isScrolled) {
        gsap.to(container, {
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(30px)',
          paddingLeft: '40px',
          paddingRight: '12px',
          marginTop: '20px',
          borderRadius: '100px',
          border: '1px solid rgba(32, 19, 18, 0.08)',
          boxShadow: '0 30px 60px -15px rgba(32, 19, 18, 0.12)',
          duration: 0.8,
          ease: 'expo.out'
        });
        gsap.to(nav, { paddingTop: '0px', duration: 0.8 });
      } else {
        gsap.to(container, {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(0px)',
          paddingLeft: '0px',
          paddingRight: '0px',
          marginTop: '0px',
          borderRadius: '0px',
          border: '1px solid transparent',
          boxShadow: 'none',
          duration: 0.8,
          ease: 'expo.out'
        });
        gsap.to(nav, { paddingTop: '20px', duration: 0.8 });
      }

      // Spy logic
      const scrollPos = window.scrollY + 200;
      ['home', 'about', 'audience', 'features', 'get-app'].forEach((id) => {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      const offset = 120;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-[80] pt-6 px-6 md:px-12 pointer-events-none">
      <div 
        ref={containerRef}
        className="max-w-[1400px] mx-auto flex justify-between items-center h-20 transition-all pointer-events-auto"
      >
        {/* Monogram Brand */}
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-aura-mahogany rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-aura-red group-hover:rotate-[360deg]">
            <span className="text-white font-serif font-black text-xl">A</span>
          </div>
          <div className="ml-5 flex flex-col">
            <span className="text-lg font-serif font-bold text-aura-mahogany tracking-[0.1em] group-hover:text-aura-red transition-colors">AURA</span>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-aura-mahogany/30">Cantik Premium</span>
          </div>
        </div>
        
        {/* Nav Items */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.id} className="relative py-2">
                <a 
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-[12px] uppercase tracking-[0.3em] font-extrabold transition-all duration-300 ${
                    activeSection === link.id ? 'text-aura-red' : 'text-aura-mahogany/40 hover:text-aura-mahogany'
                  }`}
                >
                  {link.name}
                </a>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] bg-aura-red transition-all duration-500 rounded-full ${
                  activeSection === link.id ? 'w-4' : 'w-0'
                }`} />
              </li>
            ))}
          </ul>
          
          <a 
            href="#get-app"
            onClick={(e) => scrollToSection(e, 'get-app')}
            className="px-8 py-3.5 bg-aura-mahogany text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-aura-red transition-all shadow-xl shadow-aura-mahogany/10 hover:scale-105 active:scale-95"
          >
            Enter Network
          </a>
        </div>

        {/* Mobile Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-12 h-12 flex flex-col items-center justify-center space-y-1.5"
          aria-label="Toggle Menu"
        >
          <span className={`h-[2px] bg-aura-mahogany rounded-full transition-all duration-500 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`h-[2px] bg-aura-mahogany rounded-full transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
          <span className={`h-[2px] bg-aura-mahogany rounded-full transition-all duration-500 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-5'}`} />
        </button>
      </div>

      {/* Mobile Menu Refined Overlay */}
      <div className={`fixed inset-0 z-[-1] bg-white/98 backdrop-blur-[40px] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 translate-y-[-100%] pointer-events-none'
      }`}>
        <ul className="flex flex-col items-center gap-10">
          {[...navLinks, { name: 'Join Network', id: 'get-app' }].map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-3xl font-serif italic tracking-[0.1em] transition-all ${
                  activeSection === link.id ? 'text-aura-red' : 'text-aura-mahogany/30 hover:text-aura-mahogany'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-20 text-[10px] font-black uppercase tracking-[1em] text-aura-mahogany/10">Project AuraCantik</div>
      </div>
    </nav>
  );
};

export default Navbar;
