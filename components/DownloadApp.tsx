
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DownloadApp: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
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
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    gsap.fromTo(formRef.current,
      { scale: 1 },
      { scale: 0.98, duration: 0.1, yoyo: true, repeat: 1 }
    );
  };

  const benefits = [
    { icon: '✦', text: 'Priority access at launch' },
    { icon: '◆', text: 'Exclusive founding member status' },
    { icon: '▲', text: 'Free premium tier for 3 months' },
  ];

  return (
    <section
      ref={sectionRef}
      id="get-app"
      className="py-28 md:py-40 px-6 bg-aura-offwhite border-t border-aura-mahogany/5 overflow-hidden relative"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-aura-red opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div ref={contentRef} className="max-w-[840px] mx-auto text-center relative z-10">

        {/* Label */}
        <span className="inline-block text-[9px] font-black uppercase tracking-[0.7em] text-aura-red mb-6">Early Access</span>

        <h2 className="text-4xl md:text-6xl font-serif font-bold text-aura-mahogany mb-6 leading-tight tracking-tighter">
          Be the First to Experience <br />
          <span className="text-aura-red italic">AuraCantik.</span>
        </h2>

        <p className="text-lg font-light text-aura-mahogany/60 mb-5 max-w-xl mx-auto leading-relaxed">
          Join our waitlist and get exclusive early access to Malaysia's premier beauty and fashion professional network.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-aura-mahogany/8 shadow-sm">
              <span className="text-aura-red text-[10px]">{b.icon}</span>
              <span className="text-[11px] font-semibold text-aura-mahogany/70 tracking-wide">{b.text}</span>
            </div>
          ))}
        </div>

        {/* Email Form */}
        {!submitted ? (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="relative flex-grow">
              <input
                id="waitlist-email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="your@email.com"
                className="w-full px-6 py-4 bg-white border border-aura-mahogany/12 rounded-full text-sm text-aura-mahogany placeholder-aura-mahogany/30 focus:outline-none focus:border-aura-red/40 focus:ring-2 focus:ring-aura-red/10 transition-all shadow-sm"
              />
              {error && (
                <p className="absolute -bottom-6 left-4 text-[10px] text-aura-red font-semibold">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-aura-mahogany text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-aura-red transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-aura-mahogany/20 whitespace-nowrap"
            >
              Join Waitlist
              <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-4 py-8 px-12 bg-white rounded-3xl border border-aura-mahogany/8 shadow-sm max-w-md mx-auto animate-[fadeIn_0.5s_ease]">
            <div className="w-14 h-14 bg-aura-red rounded-full flex items-center justify-center shadow-lg shadow-aura-red/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-aura-mahogany">You're on the list!</h3>
            <p className="text-sm font-light text-aura-mahogany/50 text-center leading-relaxed">
              We'll notify you as soon as AuraCantik launches. Welcome to the network.
            </p>
          </div>
        )}

        <p className="mt-5 text-[10px] uppercase tracking-widest text-aura-mahogany/30 font-bold">
          No spam &nbsp;·&nbsp; Unsubscribe any time &nbsp;·&nbsp; Progressive Web App
        </p>

        {/* PWA info */}
        <div className="mt-20 flex items-center justify-center gap-3 text-aura-mahogany/20">
          <div className="h-[1px] w-16 bg-aura-mahogany/10" />
          <span className="text-[9px] font-black uppercase tracking-[0.6em]">No App Store Required</span>
          <div className="h-[1px] w-16 bg-aura-mahogany/10" />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </section>
  );
};

export default DownloadApp;
