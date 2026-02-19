
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreProposition from './components/CoreProposition';
import Audience from './components/Audience';
import Mission from './components/Mission';
import Features from './components/Features';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="font-sans text-aura-mahogany">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <CoreProposition />
        </section>
        <section id="audience">
          <Audience />
        </section>
        <section id="mission">
          <Mission />
        </section>
        <section id="features">
          <Features />
        </section>
        {/* DownloadApp renders id="get-app" internally */}
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
};

export default App;
