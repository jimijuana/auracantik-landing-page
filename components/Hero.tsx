
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set([headlineRef.current, taglineRef.current, ctaRef.current, statsRef.current], { opacity: 0, y: 30 });
    gsap.set(plateRef.current, { scale: 0.95, opacity: 0, filter: 'blur(20px)' });

    tl.to(plateRef.current, {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 2,
      ease: 'expo.out',
      delay: 0.2
    })
      .to(headlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'expo.out'
      }, '-=1.4')
      .to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=1.0')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      }, '-=0.6')
      .to(statsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4');

    // Subtle float
    gsap.to(plateRef.current, {
      y: -8,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  const scrollToWaitlist = () => {
    const el = document.getElementById('get-app');
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
  };

  const stats = [
    { value: '500+', label: 'Artists Joined' },
    { value: '120+', label: 'Verified Studios' },
    { value: 'Q3 2026', label: 'Launch Target' },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-aura-offwhite overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-8%] w-[55%] h-[55%] bg-aura-red opacity-[0.04] blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-15%] left-[-8%] w-[45%] h-[45%] bg-aura-mahogany opacity-[0.03] blur-[140px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-aura-red opacity-[0.02] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Glassmorphic Plate */}
        <div
          ref={plateRef}
          className="relative mx-auto bg-white/50 backdrop-blur-[80px] px-8 md:px-20 py-16 md:py-28 rounded-[5rem] border border-white/70 shadow-[0_40px_100px_-30px_rgba(32,19,18,0.08)] flex flex-col items-center"
        >
          {/* Brand Identity Row */}
          <div className="mb-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-aura-red rounded-full flex items-center justify-center shadow-lg shadow-aura-red/25">
              <span className="text-white font-serif font-black text-xl">A</span>
            </div>
            <div className="h-6 w-[1px] bg-aura-mahogany/10" />
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-aura-mahogany/35">Malaysia's Premier</span>
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-aura-mahogany/35">Beauty & Fashion Network</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-[clamp(3.5rem,12vw,11rem)] font-serif font-bold text-aura-mahogany mb-6 tracking-tighter leading-none text-center"
          >
            AuraCantik
          </h1>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="text-base md:text-xl font-light tracking-[0.18em] uppercase text-aura-mahogany/60 max-w-3xl text-center mb-4 leading-relaxed"
          >
            THE PREMIUM SANCTUARY FOR{' '}
            <span className="text-aura-red font-semibold italic not-italic">ARTISTRY</span>{' '}
            &amp; COLLABORATION
          </p>
          <p className="text-sm md:text-base font-light text-aura-mahogany/40 text-center max-w-xl mb-14 leading-relaxed">
            Connecting Malaysia's top makeup artists, models, photographers, and fashion brands on one exclusive platform.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-14">
            <button
              onClick={scrollToWaitlist}
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-aura-mahogany text-white rounded-full transition-all duration-500 hover:scale-105 hover:bg-aura-red shadow-[0_20px_60px_-15px_rgba(32,19,18,0.35)] hover:shadow-aura-red/25"
            >
              <div className="flex flex-col items-start">
                <span className="text-[8px] uppercase tracking-[0.4em] opacity-50 mb-0.5">Early Access</span>
                <span className="text-sm font-black uppercase tracking-[0.25em]">Join the Waitlist</span>
              </div>
              <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('about');
                if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-aura-mahogany/15 text-aura-mahogany text-sm font-semibold rounded-full hover:border-aura-mahogany/40 transition-all duration-300 hover:bg-white/60"
            >
              Discover More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Social Proof Stats */}
          <div ref={statsRef} className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-10 border-t border-aura-mahogany/8 w-full max-w-xl">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-serif font-bold text-aura-mahogany tracking-tight">{stat.value}</span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-aura-mahogany/40 font-bold mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 hover:opacity-80 transition-opacity cursor-pointer group" onClick={scrollToWaitlist}>
        <span className="text-[8px] font-black uppercase tracking-[0.9em] text-aura-mahogany">Scroll</span>
        <div className="relative w-[1px] h-14 bg-aura-mahogany/15 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-aura-red animate-[scroll-anim_2s_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-anim {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
