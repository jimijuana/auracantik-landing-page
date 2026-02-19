
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CoreProposition: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo(titleRef.current,
      { clipPath: 'polygon(0 0, 0 100%, 0 100%, 0 0)' },
      { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2, ease: 'power3.inOut' }
    )
      .fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(metricsRef.current?.children ? Array.from(metricsRef.current.children) : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
        '-=0.4'
      );
  }, []);

  const metrics = [
    { value: '500+', label: 'Verified Creators', icon: '✦' },
    { value: '50+', label: 'Partner Brands', icon: '◆' },
    { value: 'RM 2M+', label: 'Est. Booking Value', icon: '▲' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-36 px-6 bg-aura-offwhite"
    >
      <div className="max-w-[1100px] mx-auto text-center">

        {/* Section Label */}
        <span className="inline-block text-[9px] font-black uppercase tracking-[0.7em] text-aura-red mb-8">Our Mission</span>

        <h2
          ref={titleRef}
          className="text-3xl md:text-5xl font-serif italic text-aura-mahogany mb-8 reveal-text leading-tight"
        >
          Redefining Beauty Collaboration
        </h2>

        <div ref={contentRef} className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed font-light text-aura-mahogany/70 mb-6">
            AuraCantik is the digital sanctuary where professional artistry meets premium opportunity.
            We are building a specialized talent hub specifically designed for the nuances of Malaysia's
            vibrant beauty and fashion landscape.
          </p>
          <div className="w-20 h-[1px] bg-aura-red mx-auto mt-8 mb-8" />
          <p className="font-serif text-2xl md:text-3xl text-aura-red italic">
            "Where the Canvas meets the Artist"
          </p>

          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('features');
              if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 mt-10 text-[10px] font-black uppercase tracking-[0.35em] text-aura-mahogany/50 hover:text-aura-red transition-colors group"
          >
            Explore Features
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Trust Metrics */}
        <div
          ref={metricsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 max-w-3xl mx-auto"
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              className="group flex flex-col items-center py-10 px-8 bg-white rounded-3xl border border-aura-mahogany/6 shadow-sm hover:shadow-lg hover:shadow-aura-mahogany/5 transition-all duration-500 hover:-translate-y-1"
            >
              <span className="text-aura-red text-sm mb-3 opacity-40 group-hover:opacity-100 transition-opacity">{m.icon}</span>
              <span className="text-3xl md:text-4xl font-serif font-bold text-aura-mahogany tracking-tight">{m.value}</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-aura-mahogany/40 font-bold mt-2">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreProposition;
