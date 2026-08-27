import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative mb-12 group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300 to-orange-600 rounded-full blur-md opacity-30 group-hover:opacity-60 transition duration-1000"></div>
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#0a0a0a] shadow-2xl bg-[#111]">
          <img 
            src="https://blogger.googleusercontent.com/img/a/AVvXsEj7921krTdhyr_1_cARDAmkByJr8BbzlH-ZzvqjVg14kCblU1RyIHbEF6xit_NIps7oP50ezCYRFqpfwsKvAiWHSWTX4W3TN7BVO6Kc8KYgjo0qcuOebf9kxwGzIKVUNtTIJ6DW8wMR6hss_88srfjDiqg0gFhQTn86V0HtGq3bogngz9FmIs7IKZ3xLw" 
            alt="Ashraful Islam" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        {/* Status indicator */}
        <div className="absolute bottom-6 right-6 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-950 animate-pulse"></div>
      </div>

      <div className="max-w-4xl text-center relative z-10">
        <span className="inline-block py-1 px-4 mb-6 rounded-full border border-cyan-500/30 text-cyan-300 text-[10px] font-bold uppercase tracking-[0.4em] glass transition-all hover:bg-cyan-300/10 cursor-default">
          Professional Digital Marketer
        </span>
        
        <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
          Hello, I'm <span className="text-gradient italic font-serif">Ashraful Islam</span>, 
          <br className="hidden md:block" /> a professional digital marketer.
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Empowering brands with precision-targeted Meta Ads, Google Ads, and 
          strategic SEO that drives high-quality growth and sustainable results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#portfolio"
            className="px-10 py-4 gold-gradient text-black font-extrabold rounded-full hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all transform hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
          >
            Explore Portfolio
          </a>
          <a 
            href="#contact"
            className="px-10 py-4 border border-white/10 hover:border-cyan-300 text-white hover:text-cyan-300 font-bold rounded-full transition-all glass transform hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
