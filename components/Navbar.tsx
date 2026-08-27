import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
        { name: 'Service', href: '#service' },
    { name: 'Client Video', href: '#client-video' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMenuOpen ? 'glass py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold tracking-tighter text-gradient relative z-50 transition-transform hover:scale-105 active:scale-95">
          Asraful Islam<span className="text-white">.</span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-cyan-300 transition-all hover:translate-y-[-2px] active:scale-95 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="hidden md:block px-6 py-2 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-300 hover:text-black transition-all hover:scale-105 active:scale-95 rounded-full text-xs font-bold uppercase tracking-widest"
        >
          Hire Me
        </a>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none transition-transform active:scale-90"
        >
          <span className={`w-6 h-0.5 bg-cyan-300 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-cyan-300 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-cyan-300 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile menu overlay */}
        <div className={`fixed inset-0 bg-transparent flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold hover:text-cyan-300 transition-all hover:scale-110 active:scale-95 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="px-10 py-3 bg-cyan-300 text-black font-bold rounded-full uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
