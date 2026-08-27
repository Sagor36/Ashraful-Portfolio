import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Reviews from './components/Reviews';
import ClientVideo from './components/ClientVideo';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="site-shell min-h-screen text-white overflow-x-hidden selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl float-slow" />
        <div className="absolute -right-28 top-[38%] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl float-slow" style={{ animationDelay: '1.4s' }} />
        <div className="absolute left-[42%] bottom-0 h-64 w-64 rounded-full bg-fuchsia-500/5 blur-3xl float-slow" style={{ animationDelay: '2.2s' }} />
      </div>
      <Navbar />
      <main>
        {/* Home Section */}
        <section id="home">
          <Hero />
          <Stats />
        </section>

        {/* About - Padding komano hoyeche */}
        <section id="about" className="py-10">
          <About />
        </section>

        {/* Resume - Background color match kora hoyeche jate dag na thake */}
        <section id="resume" className="py-12 bg-transparent section-glow">
          <Resume />
        </section>

        {/* Service */}
        <section id="service" className="py-10">
          <Services />
        </section>

        {/* Client Reviews - added in the highlighted area */}
        <section id="reviews" className="py-2 bg-transparent">
          <Reviews />
        </section>

        {/* Client review video */}
        <section id="client-video" className="py-2 bg-transparent">
          <ClientVideo />
        </section>

        {/* Skills - py-20 muche py-6 kora hoyeche ebong bg color match kora hoyeche */}
        <section id="skills" className="py-12 bg-transparent">
          <Skills />
        </section>

        {/* Portfolio - Upore padding ekdom zero kora hoyeche */}
        <section id="portfolio" className="pt-0 pb-10">
          <Portfolio />
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-12 bg-transparent section-glow">
          <Pricing />
        </section>

        {/* Contact */}
        <section id="contact" className="py-10">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
