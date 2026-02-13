
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  // Simulation State
  const [isSimulating, setIsSimulating] = useState(false);
  const simOverlayRef = useRef<HTMLDivElement>(null);
  const simPhoneRef = useRef<HTMLDivElement>(null);
  const simPromptRef = useRef<HTMLDivElement>(null);
  const simIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Reset for intro
    gsap.set([headlineRef.current, taglineRef.current, ctaRef.current], { opacity: 0, y: 30 });
    gsap.set(plateRef.current, { scale: 0.9, opacity: 0, filter: 'blur(20px)' });

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
    }, '-=0.6');

    // Floating animation
    gsap.to(plateRef.current, {
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  const handleSimulate = () => {
    setIsSimulating(true);
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.delayedCall(3, () => setIsSimulating(false));
      }
    });

    gsap.set(simOverlayRef.current, { opacity: 0 });
    gsap.set(simPhoneRef.current, { y: 200, scale: 0.8, rotateX: 20, opacity: 0 });
    gsap.set(simPromptRef.current, { y: 150, opacity: 0 });
    gsap.set(simIconRef.current, { scale: 0, opacity: 0 });

    tl.to(simOverlayRef.current, { opacity: 1, duration: 0.6 })
      .to(simPhoneRef.current, { y: 0, scale: 1, rotateX: 0, opacity: 1, duration: 1.2, ease: 'expo.out' }, '-=0.2')
      .to(simPromptRef.current, { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.5 })
      .to('.sim-tap', { scale: 0.9, backgroundColor: '#EE3C33', color: '#fff', duration: 0.2, delay: 0.6 })
      .to('.sim-tap', { scale: 1, duration: 0.2 })
      .to(simPromptRef.current, { y: 150, opacity: 0, duration: 0.5 })
      .to('.sim-web', { opacity: 0, duration: 0.8 })
      .to('.sim-home', { opacity: 1, duration: 0.8 }, '-=0.8')
      .fromTo(simIconRef.current, 
        { scale: 3, opacity: 0, y: -40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.5)' }
      )
      .to(simIconRef.current, { boxShadow: '0 0 50px rgba(238,60,51,0.6)', duration: 0.5, repeat: 1, yoyo: true });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-aura-offwhite overflow-hidden"
    >
      {/* Generative Aesthetic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-aura-red opacity-[0.04] blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-aura-mahogany opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* The Silk Editorial Plate */}
        <div 
          ref={plateRef}
          className="relative mx-auto bg-white/40 backdrop-blur-[100px] px-8 md:px-24 py-20 md:py-32 rounded-[6rem] border border-white/60 shadow-[0_60px_130px_-40px_rgba(32,19,18,0.1)] flex flex-col items-center"
        >
          {/* Brand Identity */}
          <div className="mb-14 flex items-center gap-4">
             <div className="w-14 h-14 bg-aura-red rounded-full flex items-center justify-center shadow-lg shadow-aura-red/20">
                <span className="text-white font-serif font-black text-2xl">A</span>
             </div>
             <div className="h-8 w-[1px] bg-aura-mahogany/10" />
             <span className="text-[10px] font-black uppercase tracking-[0.6em] text-aura-mahogany/40">Established 2024</span>
          </div>

          <h1 
            ref={headlineRef}
            className="text-[clamp(4rem,15vw,14rem)] font-serif font-bold text-aura-mahogany mb-10 tracking-tighter leading-none"
          >
            AuraCantik
          </h1>
          
          <p 
            ref={taglineRef}
            className="text-lg md:text-3xl font-light tracking-[0.2em] uppercase text-aura-mahogany/80 max-w-4xl text-center mb-20 leading-snug"
          >
            THE PREMIUM SANCTUARY FOR <br className="hidden md:block" />
            <span className="text-aura-red font-semibold italic">ARTISTRY</span> & COLLABORATION
          </p>

          <button 
            ref={ctaRef}
            onClick={handleSimulate}
            className="group relative inline-flex items-center gap-8 px-14 py-7 bg-aura-mahogany text-white rounded-full transition-all duration-700 hover:scale-105 shadow-[0_30px_60px_-15px_rgba(32,19,18,0.4)] hover:shadow-aura-red/30"
          >
            <div className="flex flex-col items-start">
               <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 mb-1">PWA TECHNOLOGY</span>
               <span className="text-sm font-bold uppercase tracking-[0.3em]">Add to homescreen now</span>
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-aura-red transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </div>
          </button>
        </div>
      </div>

      {/* High-Fidelity Simulation Overlay */}
      {isSimulating && (
        <div 
          ref={simOverlayRef}
          className="fixed inset-0 z-[100] bg-aura-mahogany/98 backdrop-blur-[60px] flex items-center justify-center p-6 perspective-[2000px]"
        >
          <button 
            onClick={() => setIsSimulating(false)}
            className="absolute top-12 right-12 text-white/30 hover:text-white transition-all scale-150"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth={1.5} /></svg>
          </button>

          <div 
            ref={simPhoneRef}
            className="w-[340px] h-[680px] bg-black rounded-[4.5rem] p-3.5 border-[8px] border-white/5 shadow-[0_80px_160px_-30px_rgba(0,0,0,1)] relative"
          >
            <div className="w-full h-full bg-white rounded-[3.5rem] overflow-hidden relative shadow-inner">
               {/* Browser View */}
               <div className="sim-web absolute inset-0 z-20 bg-aura-offwhite flex flex-col items-center pt-24">
                  <div className="w-16 h-16 bg-aura-red rounded-3xl flex items-center justify-center shadow-2xl mb-6">
                    <span className="text-white font-serif font-bold text-3xl">A</span>
                  </div>
                  <h2 className="text-aura-mahogany font-serif font-black text-2xl mb-1">AURA</h2>
                  <p className="text-[10px] text-aura-mahogany/40 uppercase tracking-widest mb-12">Project AuraCantik</p>
                  
                  <div className="w-full px-8 space-y-4 opacity-10">
                    <div className="h-40 bg-aura-mahogany rounded-3xl" />
                    <div className="h-4 bg-aura-mahogany rounded-full w-3/4 mx-auto" />
                    <div className="h-4 bg-aura-mahogany rounded-full w-1/2 mx-auto" />
                  </div>

                  {/* System Prompt */}
                  <div 
                    ref={simPromptRef}
                    className="absolute bottom-10 left-5 right-5 bg-white/90 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl border border-white/40 text-center flex flex-col items-center"
                  >
                    <div className="w-14 h-14 bg-aura-offwhite rounded-2xl flex items-center justify-center border border-aura-mahogany/5 mb-4">
                       <span className="text-aura-red font-serif font-bold text-2xl">A</span>
                    </div>
                    <h3 className="text-aura-mahogany font-bold mb-1">Add to Home?</h3>
                    <p className="text-[10px] text-aura-mahogany/40 mb-8 uppercase tracking-widest leading-relaxed">Seamlessly launch AuraCantik <br/> directly from your icons</p>
                    <button className="sim-tap w-full py-5 bg-aura-mahogany text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] transition-all border border-transparent">
                      Confirm
                    </button>
                  </div>
               </div>

               {/* Home Screen View */}
               <div className="sim-home absolute inset-0 z-10 bg-[#e0e0e0] p-8 opacity-0">
                  <div className="grid grid-cols-4 gap-6 pt-16">
                     {[...Array(11)].map((_, i) => (
                       <div key={i} className="flex flex-col items-center gap-2 opacity-20">
                         <div className="w-12 h-12 bg-white rounded-2xl" />
                         <div className="w-8 h-1 bg-black/10 rounded-full" />
                       </div>
                     ))}
                     
                     <div className="flex flex-col items-center gap-2">
                        <div 
                          ref={simIconRef}
                          className="w-12 h-12 bg-aura-mahogany rounded-2xl flex items-center justify-center shadow-xl border border-white/20"
                        >
                          <span className="text-aura-red font-serif font-bold text-xl">A</span>
                        </div>
                        <span className="text-[8px] font-black text-black/50 uppercase tracking-tighter">AuraCantik</span>
                     </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-6 right-6 h-16 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/20 flex items-center justify-around">
                     {[...Array(4)].map((_, i) => <div key={i} className="w-10 h-10 bg-white/60 rounded-xl" />)}
                  </div>
               </div>

               {/* Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-40" />
            </div>
          </div>
          
          <div className="absolute bottom-12 text-center">
            <p className="text-white/10 text-[11px] uppercase tracking-[1.2em] font-black">Refining Excellence</p>
          </div>
        </div>
      )}

      {/* Global Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
         <span className="text-[9px] font-black uppercase tracking-[1em] text-aura-mahogany">Discovery</span>
         <div className="relative w-[1px] h-20 bg-aura-mahogany/10 overflow-hidden">
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
