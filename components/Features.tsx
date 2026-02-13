
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 60, scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1,
          stagger: 0.2, duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          }
        }
      );
    }
  }, []);

  const featureData = [
    {
      title: "Canvas Call Feed",
      tag: "REAL-TIME MARKETPLACE",
      desc: "Malaysia's heartbeat for artistry. A specialized feed where elite casting calls meet the country's most talented professionals for instant booking.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      mockup: (
        <div className="relative h-full w-full bg-aura-offwhite p-6 flex flex-col justify-center overflow-hidden">
           <div className="absolute top-4 left-6 right-6 flex justify-between items-center opacity-30">
              <div className="h-1 w-12 bg-aura-mahogany rounded-full" />
              <div className="h-4 w-4 rounded-full border border-aura-mahogany" />
           </div>
           
           <div className="space-y-4">
              <div className="bg-white rounded-3xl p-5 shadow-xl shadow-aura-mahogany/5 border border-aura-mahogany/5 translate-x-[-15%] animate-[bounce_4s_infinite]">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-aura-red/10 flex items-center justify-center text-aura-red font-serif font-bold">V</div>
                    <div>
                       <div className="h-2 w-20 bg-aura-mahogany/20 rounded-full mb-1" />
                       <div className="h-1.5 w-12 bg-aura-mahogany/10 rounded-full" />
                    </div>
                 </div>
                 <div className="h-10 bg-aura-mahogany rounded-2xl flex items-center justify-center text-[9px] font-black text-white uppercase tracking-widest">Confirm Call</div>
              </div>
              
              <div className="bg-white/40 backdrop-blur-md rounded-3xl p-5 border border-white/60 translate-x-[15%]">
                 <div className="h-2 w-3/4 bg-aura-mahogany/10 rounded-full mb-3" />
                 <div className="h-2 w-1/2 bg-aura-mahogany/5 rounded-full" />
              </div>
           </div>
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-aura-red opacity-[0.05] blur-[50px] rounded-full" />
        </div>
      )
    },
    {
      title: "Precision Maps",
      tag: "GEOSPATIAL DISCOVERY",
      desc: "Locate artistry with surgical precision. Navigate studio locations, independent artist hubs, and premium fashion spaces across the Klang Valley.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" />
        </svg>
      ),
      mockup: (
        <div className="relative h-full w-full bg-[#111111] overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-48 bg-aura-red/10 rounded-full animate-ping" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative">
                    <div className="w-12 h-12 bg-aura-red rounded-full shadow-[0_0_40px_rgba(238,60,51,0.6)] flex items-center justify-center">
                       <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                    <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-2xl">
                       <span className="text-[8px] font-black text-aura-mahogany whitespace-nowrap tracking-wider">PREMIUM ARTIST FOUND</span>
                    </div>
                 </div>
              </div>
           </div>
           {/* Radar Sweep */}
           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-aura-red/5 to-transparent rotate-45 animate-[spin_5s_linear_infinite]" />
        </div>
      )
    },
    {
      title: "Verified Identity",
      tag: "PREMIUM PORTFOLIOS",
      desc: "Your artistry, authenticated. A high-fidelity digital portfolio system that showcases your craft through verified galleries and client endorsements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      mockup: (
        <div className="relative h-full w-full p-8 flex flex-col bg-white">
           <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-aura-mahogany border border-white/20 shadow-xl flex items-center justify-center">
                 <span className="text-aura-red font-serif font-bold text-3xl">A</span>
              </div>
              <div>
                 <div className="h-3 w-24 bg-aura-mahogany rounded-full mb-2" />
                 <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-2 bg-aura-red rounded-full" />)}
                 </div>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-3 flex-grow">
              <div className="bg-aura-offwhite rounded-2xl border border-aura-mahogany/5 overflow-hidden relative group/img">
                 <div className="absolute inset-0 bg-aura-red opacity-0 group-hover/img:opacity-20 transition-opacity" />
              </div>
              <div className="bg-aura-offwhite rounded-2xl border border-aura-mahogany/5" />
              <div className="bg-aura-offwhite rounded-2xl border border-aura-mahogany/5 col-span-2" />
           </div>
        </div>
      )
    },
    {
      title: "Direct Collaboration",
      tag: "SECURE MESSAGING",
      desc: "Communication at the speed of fashion. A professional, encrypted messaging hub for discussing creative concepts and securing agreements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      mockup: (
        <div className="relative h-full w-full p-6 flex flex-col justify-end gap-3 bg-white">
           <div className="absolute top-0 left-0 right-0 h-16 border-b border-aura-mahogany/5 flex items-center px-6">
              <div className="h-1.5 w-1/3 bg-aura-mahogany/10 rounded-full" />
           </div>
           
           <div className="self-start max-w-[85%] bg-aura-offwhite p-4 rounded-[1.5rem] rounded-bl-none text-[10px] text-aura-mahogany/60 leading-relaxed animate-[pulse_3s_infinite]">
              I've seen your portfolio. Your style is perfect for our upcoming fashion campaign. 
           </div>
           <div className="self-end max-w-[85%] bg-aura-mahogany p-4 rounded-[1.5rem] rounded-br-none text-[10px] text-white">
              Thank you. I'm available. Let's discuss the moodboard details!
           </div>
           
           <div className="mt-4 flex gap-3">
              <div className="flex-grow h-10 bg-aura-offwhite border border-aura-mahogany/5 rounded-full px-4 flex items-center">
                 <div className="h-1.5 w-12 bg-aura-mahogany/10 rounded-full animate-pulse" />
              </div>
              <div className="w-10 h-10 bg-aura-red rounded-full flex items-center justify-center text-white shadow-lg">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
              </div>
           </div>
        </div>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-40 px-6 bg-white border-t border-aura-mahogany/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-40">
          <span className="text-aura-red text-[11px] font-black uppercase tracking-[0.8em] mb-10 inline-block">Core Capabilities</span>
          <h2 className="text-[clamp(2.5rem,8vw,10rem)] font-serif font-bold text-aura-mahogany leading-[0.85] tracking-tighter mb-12">
            Engineered for <br/> <span className="italic">Excellence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-aura-mahogany/40 text-[10px] md:text-sm uppercase tracking-[0.3em] font-black">
            EVERY TOOL YOU NEED TO DOMINATE THE VISUAL LANDSCAPE
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-10 md:gap-20">
          {featureData.map((feature, idx) => (
            <div key={idx} className="group relative bg-aura-offwhite rounded-[4.5rem] p-12 md:p-16 border border-transparent transition-all duration-1000 hover:bg-white hover:border-aura-mahogany/5 hover:shadow-[0_100px_160px_-40px_rgba(32,19,18,0.1)]">
              <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1 order-2 lg:order-1">
                  <div className="flex items-center gap-5 mb-10">
                    <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center shadow-lg text-aura-red group-hover:bg-aura-red group-hover:text-white transition-all duration-700">
                      {feature.icon}
                    </div>
                    <span className="text-[10px] font-black tracking-[0.5em] text-aura-red/60">{feature.tag}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-aura-mahogany mb-6 leading-[1.1]">{feature.title}</h3>
                  <p className="text-aura-mahogany/50 text-xl font-light leading-relaxed mb-10">{feature.desc}</p>
                  
                  <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-aura-mahogany hover:text-aura-red transition-all group/btn">
                    Details 
                    <div className="w-8 h-[1px] bg-aura-mahogany/20 group-hover/btn:w-16 group-hover/btn:bg-aura-red transition-all duration-700" />
                  </button>
                </div>

                <div className="flex-1 order-1 lg:order-2 aspect-square rounded-[3.5rem] bg-white border border-aura-mahogany/5 shadow-inner overflow-hidden flex items-center justify-center transform group-hover:scale-[1.03] transition-transform duration-1000">
                  {feature.mockup}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
