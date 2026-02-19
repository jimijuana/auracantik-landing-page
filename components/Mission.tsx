
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Mission: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' }
        }
      );
    }

    const statements = statementsRef.current?.children;
    if (!statements) return;

    Array.from(statements).forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 60, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
          }
        }
      );
    });
  }, []);

  const missionItems = [
    {
      num: '01',
      title: 'Bridge the Talent Gap',
      sub: 'CONNECTING EXCELLENCE',
      desc: 'Directly pairing Malaysia\'s most skilled artisans with the premium opportunities they deserve.'
    },
    {
      num: '02',
      title: 'Foster Professional Verification',
      sub: 'ENSURING CREDIBILITY',
      desc: 'A trusted ecosystem where every portfolio is authenticated and every endorsement is earned.'
    },
    {
      num: '03',
      title: 'Enable Seamless Collaboration',
      sub: 'STREAMLINING SUCCESS',
      desc: 'From first contact to final delivery — every tool needed to close the deal, in one place.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-44 px-6 bg-[#190f0e] relative overflow-hidden"
    >
      {/* Background Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-[radial-gradient(circle_at_center,rgba(238,60,51,0.07)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto text-center z-10 relative">

        {/* Section Header */}
        <div ref={headerRef} className="mb-20 md:mb-24">
          <span className="text-aura-red/50 text-[9px] md:text-[11px] font-black uppercase tracking-[1.1em] mb-6 inline-block">
            Our Purpose
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-aura-offwhite tracking-tighter leading-tight">
            What We Stand For
          </h2>
          <p className="mt-5 text-white/30 text-sm font-light max-w-md mx-auto leading-relaxed">
            Three commitments that guide every decision we make building this platform.
          </p>
        </div>

        {/* Mission Items */}
        <div ref={statementsRef} className="space-y-0 divide-y divide-white/5">
          {missionItems.map((item, index) => (
            <div
              key={index}
              className="group cursor-default flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 py-14 md:py-16 text-left"
            >
              {/* Number */}
              <span className="text-[3rem] md:text-[3.5rem] font-serif font-bold text-white/5 group-hover:text-aura-red/20 transition-colors duration-700 shrink-0 leading-none pt-1">
                {item.num}
              </span>

              <div className="flex-grow text-center md:text-left">
                <h3 className="text-[clamp(1.8rem,4.5vw,4.5rem)] font-serif text-aura-offwhite transition-all duration-700 group-hover:text-white tracking-tight leading-none mb-4">
                  {item.title}
                </h3>
                <p className="text-white/30 text-sm font-light leading-relaxed max-w-lg">
                  {item.desc}
                </p>
              </div>

              <div className="shrink-0 text-right self-start pt-2">
                <span className="text-aura-red/40 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.7em] group-hover:text-aura-red transition-colors duration-500">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
