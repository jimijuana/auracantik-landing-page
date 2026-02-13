
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CoreProposition: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 bg-aura-offwhite"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-5xl font-serif italic text-aura-mahogany mb-12 reveal-text"
        >
          Redefining Beauty Collaboration
        </h2>
        
        <div 
          ref={contentRef}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl leading-relaxed font-light text-aura-mahogany/80 mb-6">
            AuraCantik is the digital sanctuary where professional artistry meets premium opportunity. 
            We are building a specialized talent hub specifically designed for the nuances of Malaysia's 
            vibrant beauty and fashion landscape.
          </p>
          <div className="w-24 h-[1px] bg-aura-red mx-auto mt-12" />
          <p className="mt-12 font-serif text-3xl text-aura-red">
            "Where the Canvas meets the Artist"
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreProposition;
