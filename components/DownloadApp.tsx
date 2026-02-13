
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DownloadApp: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial content entry
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0,
        duration: 1.2, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    // Phone Animation Sequence
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
      scrollTrigger: {
        trigger: phoneRef.current,
        start: 'top 80%',
      }
    });

    // Reset state
    tl.set(promptRef.current, { opacity: 0, y: 20, scale: 0.9 })
      .set(iconRef.current, { opacity: 0, scale: 0, x: 0, y: 0 })
      .set('.browser-ui', { opacity: 1 })
      .set('.home-screen-ui', { opacity: 0 });

    // 1. Show 'Add to Home Screen' prompt
    tl.to(promptRef.current, { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      duration: 0.8, 
      ease: 'back.out(1.7)',
      delay: 0.5 
    })
    // 2. Click Simulation (Pulse)
    .to('.add-btn-mock', { 
      scale: 0.9, 
      backgroundColor: '#EE3C33', 
      color: 'white', 
      duration: 0.2 
    }, '+=0.5')
    .to('.add-btn-mock', { 
      scale: 1, 
      duration: 0.2 
    })
    // 3. Transition: Browser fades, Home Screen appears
    .to(promptRef.current, { opacity: 0, scale: 1.1, duration: 0.4 })
    .to('.browser-ui', { opacity: 0, duration: 0.5 }, '-=0.2')
    .to('.home-screen-ui', { opacity: 1, duration: 0.5 }, '-=0.5')
    // 4. Icon flies to home screen position
    .fromTo(iconRef.current, 
      { opacity: 0, scale: 3, y: -50 }, 
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'expo.out' }, 
      '-=0.3'
    )
    // 5. Success highlight
    .to(iconRef.current, { 
      boxShadow: '0 0 30px rgba(238, 60, 51, 0.4)', 
      duration: 0.5 
    })
    .to(iconRef.current, { 
      boxShadow: '0 0 0px rgba(238, 60, 51, 0)', 
      duration: 1 
    });

  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-40 px-6 bg-white border-t border-aura-mahogany/5 overflow-hidden"
    >
      <div ref={contentRef} className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
          Ready to Elevate Your Craft? <br/>
          <span className="text-aura-red italic">Experience AuraCantik Mobile.</span>
        </h2>
        <p className="text-xl font-light text-aura-mahogany/70 mb-16 max-w-2xl mx-auto">
          Skip the app store. Access Malaysia's most exclusive network of beauty and fashion professionals with one simple tap.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 mb-24">
          <button 
            className="group relative flex items-center justify-center space-x-6 px-12 py-6 bg-aura-mahogany text-white rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-aura-mahogany/30"
          >
            <div className="w-10 h-10 bg-aura-red rounded-full flex items-center justify-center shadow-lg shadow-aura-red/20 transition-transform group-hover:rotate-12">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
               </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-1">Instant Access</p>
              <p className="text-xl font-serif font-bold tracking-tight">Add to homescreen now</p>
            </div>
          </button>
          
          <p className="text-[10px] uppercase tracking-widest text-aura-mahogany/40 font-bold">
            NO DOWNLOAD REQUIRED • PROGRESSIVE WEB APP
          </p>
        </div>

        <div className="relative inline-block">
            {/* High-Fidelity Phone Frame */}
            <div 
              ref={phoneRef}
              className="w-[300px] h-[600px] bg-aura-mahogany rounded-[3.5rem] p-[10px] shadow-[0_50px_100px_-20px_rgba(32,19,18,0.3)] relative z-10 mx-auto"
            >
               <div 
                 ref={screenRef}
                 className="w-full h-full bg-aura-offwhite rounded-[2.8rem] relative overflow-hidden flex flex-col"
               >
                  {/* BROWSER UI STATE */}
                  <div className="browser-ui absolute inset-0 z-20 flex flex-col p-6">
                    <div className="flex items-center justify-between mb-8 opacity-40">
                      <div className="w-8 h-1 bg-aura-mahogany rounded-full" />
                      <div className="w-20 h-4 bg-aura-mahogany/10 rounded-full" />
                      <div className="w-4 h-4 bg-aura-mahogany/10 rounded-full" />
                    </div>
                    
                    <div className="text-aura-red text-4xl font-serif font-bold mb-4 text-center">A</div>
                    <div className="w-32 h-1 bg-aura-mahogany/10 rounded-full mb-8 mx-auto" />
                    
                    <div className="space-y-4">
                       <div className="h-2 bg-aura-mahogany/5 rounded-full w-3/4 mx-auto" />
                       <div className="h-2 bg-aura-mahogany/5 rounded-full w-1/2 mx-auto" />
                       <div className="h-40 bg-white border border-aura-mahogany/5 rounded-2xl w-full shadow-sm" />
                       <div className="h-24 bg-white border border-aura-mahogany/5 rounded-2xl w-full shadow-sm" />
                    </div>

                    {/* ADD TO HOME PROMPT */}
                    <div 
                      ref={promptRef}
                      className="absolute bottom-8 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex flex-col items-center text-center z-30"
                    >
                      <div className="w-12 h-12 bg-aura-offwhite rounded-2xl flex items-center justify-center mb-4 border border-gray-50">
                        <span className="text-aura-red font-serif font-bold text-xl">A</span>
                      </div>
                      <h4 className="text-sm font-bold text-aura-mahogany mb-1">Install AuraCantik</h4>
                      <p className="text-[10px] text-gray-400 mb-6">Add this app to your home screen for the full professional experience.</p>
                      <button className="add-btn-mock w-full bg-aura-mahogany text-white py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all">
                        Add to Home Screen
                      </button>
                    </div>
                  </div>

                  {/* HOME SCREEN STATE */}
                  <div className="home-screen-ui absolute inset-0 z-10 bg-[#E2E8F0] p-6">
                    {/* Background Wallpaper Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-aura-offwhite via-white to-gray-200" />
                    
                    <div className="relative grid grid-cols-4 gap-4 pt-12">
                      {[...Array(11)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center space-y-1 opacity-20">
                          <div className="w-12 h-12 bg-white rounded-2xl" />
                          <div className="w-8 h-1 bg-aura-mahogany/10 rounded-full" />
                        </div>
                      ))}
                      
                      {/* AuraCantik App Icon */}
                      <div className="flex flex-col items-center space-y-1">
                        <div 
                          ref={iconRef}
                          className="w-12 h-12 bg-aura-mahogany rounded-2xl flex items-center justify-center shadow-xl border border-white/20"
                        >
                          <span className="text-aura-red font-serif font-bold text-xl">A</span>
                        </div>
                        <div className="w-10 h-1 bg-aura-mahogany/40 rounded-full" />
                      </div>
                    </div>

                    {/* Dock */}
                    <div className="absolute bottom-4 left-4 right-4 h-16 bg-white/40 backdrop-blur-md rounded-[2rem] flex items-center justify-around px-2 border border-white/20">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-10 h-10 bg-white/60 rounded-xl" />
                      ))}
                    </div>
                  </div>
               </div>

               {/* Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-aura-mahogany rounded-b-3xl z-40 flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/10 rounded-full" />
               </div>
               
               {/* Side Buttons */}
               <div className="absolute -left-1 top-24 w-1 h-12 bg-aura-mahogany rounded-l-md" />
               <div className="absolute -left-1 top-40 w-1 h-20 bg-aura-mahogany rounded-l-md" />
               <div className="absolute -right-1 top-32 w-1 h-24 bg-aura-mahogany rounded-r-md" />
            </div>

            {/* Background Aesthetic Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] bg-aura-red opacity-[0.04] rounded-full blur-[120px]" />
            <div className="absolute -top-20 -right-20 w-64 h-64 border border-aura-red/10 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 border border-aura-mahogany/5 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
