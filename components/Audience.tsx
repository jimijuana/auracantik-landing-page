
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Audience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      }
    });

    tl.fromTo(titleRef.current,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'expo.out' }
    )
      .fromTo([leftColRef.current, rightColRef.current],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'expo.out' },
        '-=1'
      );
  }, []);

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('get-app');
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
  };

  const profs = [
    "Professional Makeup Artists",
    "High Fashion Models",
    "Elite Photographers",
    "Creative Directors",
  ];
  const clients = [
    "Luxury Cosmetic Brands",
    "International Ad Agencies",
    "Fashion Houses",
    "Production Studios",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-44 px-6 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-aura-red opacity-[0.02] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-aura-mahogany opacity-[0.02] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="text-aura-red/50 text-[9px] font-black uppercase tracking-[0.9em] mb-6 inline-block">The Network</span>
          <h2
            ref={titleRef}
            className="text-4xl md:text-[5.5rem] font-serif font-bold text-aura-mahogany leading-[1.05] tracking-tighter"
          >
            Built for <span className="italic">Malaysian</span> <br /> Creative Leaders
          </h2>
          <p className="mt-6 text-base font-light text-aura-mahogany/50 max-w-xl mx-auto leading-relaxed">
            Whether you are a creative professional or a brand looking for exceptional talent, AuraCantik is your dedicated space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Creators Card */}
          <div
            ref={leftColRef}
            className="group relative bg-aura-offwhite p-12 md:p-16 rounded-[3rem] border border-aura-mahogany/5 transition-all duration-700 hover:shadow-xl hover:shadow-aura-mahogany/5 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-aura-red/8 rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-aura-red" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-aura-red">For Creators</span>
              </div>
              <h3 className="text-aura-mahogany font-serif font-bold text-3xl md:text-4xl mb-3 tracking-tight">
                Showcase Your Artistry
              </h3>
              <p className="text-aura-mahogany/50 text-sm font-light leading-relaxed mb-10">
                Build your verified portfolio, receive premium casting calls, and collaborate with Malaysia's top brands — all in one place.
              </p>
              <ul className="space-y-5 mb-12">
                {profs.map((item, i) => (
                  <li key={i} className="flex items-center space-x-5 group/item">
                    <div className="w-8 h-[1.5px] bg-aura-red/25 group-hover/item:w-16 group-hover/item:bg-aura-red transition-all duration-500" />
                    <span className="text-lg font-light tracking-wide text-aura-mahogany group-hover/item:translate-x-1 transition-transform duration-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#get-app"
              onClick={scrollToWaitlist}
              className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-aura-mahogany text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full self-start hover:bg-aura-red transition-all duration-300 hover:scale-105 shadow-lg shadow-aura-mahogany/15"
            >
              Apply as Creator
              <svg className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Brands Card */}
          <div
            ref={rightColRef}
            className="group relative bg-aura-mahogany text-aura-offwhite p-12 md:p-16 rounded-[3rem] transition-all duration-700 hover:shadow-2xl hover:shadow-aura-red/10 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
          >
            {/* Dark decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-aura-red opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-aura-red opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-aura-red" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-aura-red">For Institutions</span>
              </div>
              <h3 className="text-aura-offwhite font-serif font-bold text-3xl md:text-4xl mb-3 tracking-tight">
                Discover Elite Talent
              </h3>
              <p className="text-white/40 text-sm font-light leading-relaxed mb-10">
                Access a curated roster of verified, high-calibre beauty and fashion professionals to elevate your next campaign or production.
              </p>
              <ul className="space-y-5 mb-12">
                {clients.map((item, i) => (
                  <li key={i} className="flex items-center space-x-5 group/item">
                    <div className="w-8 h-[1.5px] bg-aura-red/40 group-hover/item:w-16 group-hover/item:bg-aura-red transition-all duration-500" />
                    <span className="text-lg font-light tracking-wide text-white/80 group-hover/item:translate-x-1 transition-transform duration-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#get-app"
              onClick={scrollToWaitlist}
              className="group/btn relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-aura-red text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full self-start hover:bg-white hover:text-aura-mahogany transition-all duration-300 hover:scale-105 shadow-lg shadow-aura-red/30"
            >
              Partner With Us
              <svg className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
