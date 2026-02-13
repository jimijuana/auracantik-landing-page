
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

  const profs = ["Pro Makeup Artists", "High Fashion Models", "Elite Photographers", "Creative Directors"];
  const clients = ["Luxury Cosmetic Brands", "International Ad Agencies", "Fashion Houses", "Production Studios"];

  return (
    <section 
      ref={sectionRef}
      className="py-48 px-6 bg-white relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-32">
          <span className="text-aura-red/40 text-[10px] font-black uppercase tracking-[1em] mb-8 inline-block">The Network</span>
          <h2 
            ref={titleRef}
            className="text-5xl md:text-[6rem] font-serif font-bold text-aura-mahogany leading-[1] tracking-tighter"
          >
            Built for <span className="italic">Malaysian</span> <br/> Creative Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div 
            ref={leftColRef} 
            className="group relative bg-aura-offwhite p-16 md:p-24 rounded-[4rem] border border-aura-mahogany/5 transition-all duration-1000 hover:shadow-2xl hover:shadow-aura-mahogany/5"
          >
            <h3 className="text-aura-red font-serif italic text-3xl md:text-4xl mb-12 tracking-wide">
              The Creators
            </h3>
            <ul className="space-y-8">
              {profs.map((item, i) => (
                <li key={i} className="flex items-center space-x-6 group/item">
                  <div className="w-10 h-[1px] bg-aura-red/20 group-hover/item:w-20 group-hover/item:bg-aura-red transition-all duration-700" />
                  <span className="text-xl md:text-2xl font-light tracking-wide text-aura-mahogany group-hover/item:translate-x-2 transition-transform duration-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div 
            ref={rightColRef} 
            className="group relative bg-aura-mahogany text-aura-offwhite p-16 md:p-24 rounded-[4rem] transition-all duration-1000 hover:shadow-2xl hover:shadow-aura-red/10 overflow-hidden"
          >
            {/* Dark Mode Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-aura-red opacity-[0.03] blur-[100px] rounded-full" />
            
            <h3 className="text-aura-red font-serif italic text-3xl md:text-4xl mb-12 tracking-wide relative z-10">
              The Institutions
            </h3>
            <ul className="space-y-8 relative z-10">
              {clients.map((item, i) => (
                <li key={i} className="flex items-center space-x-6 group/item">
                  <div className="w-10 h-[1px] bg-aura-red/40 group-hover/item:w-20 group-hover/item:bg-aura-red transition-all duration-700" />
                  <span className="text-xl md:text-2xl font-light tracking-wide text-white/90 group-hover/item:translate-x-2 transition-transform duration-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
