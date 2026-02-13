
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Mission: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const statements = statementsRef.current?.children;
    if (!statements) return;

    // Fade and slide up each purpose statement as it enters view
    Array.from(statements).forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 100, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  const missionItems = [
    { title: "Bridge the Talent Gap", sub: "CONNECTING EXCELLENCE" },
    { title: "Foster Professional Verification", sub: "ENSURING CREDIBILITY" },
    { title: "Enable Seamless Collaboration", sub: "STREAMLINING SUCCESS" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-60 px-6 bg-[#1a0f0e] relative overflow-hidden"
    >
      {/* Background Texture & Lighting */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-full bg-[radial-gradient(circle_at_center,rgba(238,60,51,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto text-center z-10 relative">
        <div className="mb-40">
          <span className="text-aura-red/50 text-[10px] md:text-[12px] font-black uppercase tracking-[1.2em] inline-block">
            Our Purpose
          </span>
        </div>
        
        <div ref={statementsRef} className="space-y-48 md:space-y-64">
          {missionItems.map((item, index) => (
            <div key={index} className="group cursor-default flex flex-col items-center">
              <h3 className="text-[clamp(2.5rem,6vw,8rem)] font-serif text-aura-offwhite transition-all duration-1000 group-hover:scale-[1.01] tracking-tight leading-none mb-10">
                {item.title}
              </h3>
              <div className="flex flex-col items-center">
                 <span className="text-aura-red/60 text-[10px] md:text-[13px] font-bold uppercase tracking-[0.8em] transition-all duration-700 group-hover:tracking-[1.2em] group-hover:text-aura-red">
                    {item.sub}
                 </span>
                 <div className="w-12 h-[1px] bg-white/5 mt-8 group-hover:w-32 group-hover:bg-aura-red/40 transition-all duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Aesthetic Side Decoration */}
      <div className="absolute top-1/4 -left-20 opacity-[0.01] pointer-events-none">
        <span className="text-[40rem] font-serif font-black text-white select-none rotate-90">AURA</span>
      </div>
    </section>
  );
};

export default Mission;
