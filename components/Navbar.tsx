
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
    { name: 'Network', id: 'audience' },
    { name: 'Features', id: 'features' },
    { name: 'Mission', id: 'mission' },
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
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(30px)',
          paddingLeft: '40px',
          paddingRight: '12px',
          marginTop: '16px',
          borderRadius: '100px',
          border: '1px solid rgba(32, 19, 18, 0.08)',
          boxShadow: '0 20px 60px -15px rgba(32, 19, 18, 0.10)',
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
      ['home', 'about', 'audience', 'mission', 'features', 'get-app'].forEach((id) => {
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
        {/* Brand */}
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-aura-mahogany rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-aura-red group-hover:rotate-[360deg]">
            <span className="text-white font-serif font-black text-xl">A</span>
          </div>
          <div className="ml-4 flex flex-col">
            <span className="text-base font-serif font-bold text-aura-mahogany tracking-[0.12em] group-hover:text-aura-red transition-colors leading-none">AURACANTIK</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-aura-mahogany/30 leading-none mt-0.5">Premium Beauty Hub</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.id} className="relative py-2">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300 ${activeSection === link.id ? 'text-aura-red' : 'text-aura-mahogany/50 hover:text-aura-mahogany'
                    }`}
                >
                  {link.name}
                </a>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-aura-red transition-all duration-500 rounded-full ${activeSection === link.id ? 'w-4' : 'w-0'
                  }`} />
              </li>
            ))}
          </ul>

          <a
            href="#get-app"
            onClick={(e) => scrollToSection(e, 'get-app')}
            className="group flex items-center gap-2 px-6 py-3 bg-aura-mahogany text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-full hover:bg-aura-red transition-all duration-300 shadow-lg shadow-aura-mahogany/15 hover:scale-105 active:scale-95"
          >
            <span>Join Waitlist</span>
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[-1] bg-white/98 backdrop-blur-[40px] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'opacity-100' : 'opacity-0 translate-y-[-100%] pointer-events-none'
        }`}>
        <ul className="flex flex-col items-center gap-8">
          {[...navLinks, { name: 'Join Waitlist', id: 'get-app' }].map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-2xl font-serif italic tracking-[0.1em] transition-all ${activeSection === link.id ? 'text-aura-red' : 'text-aura-mahogany/30 hover:text-aura-mahogany'
                  }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-16 text-[9px] font-black uppercase tracking-[1em] text-aura-mahogany/10">AuraCantik · Est. 2024</div>
      </div>
    </nav>
  );
};

export default Navbar;
