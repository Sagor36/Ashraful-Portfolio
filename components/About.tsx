import React from 'react';

const About: React.FC = () => {
  const details = [
    { label: 'Full Name', value: 'Ashraful Islam' },
    { label: 'Email Address', value: 'bdasrafulsm@gmail.com' },
    { label: 'WhatsApp / Phone', value: '01516557095' },
    { label: 'Instagram', value: '@bdasrafulsm' },
    { label: 'Facebook', value: '/bdasrafulsm' },
    { label: 'Professional Focus', value: 'Digital Marketing & Online Growth' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-5/12 relative group cursor-pointer">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-cyan-500/20 rounded-3xl -z-10 group-hover:-top-6 group-hover:-left-6 transition-all duration-500"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://blogger.googleusercontent.com/img/a/AVvXsEgoAEBHOPuxamg1X6ps2NJASZKyjk7HtqfxrMschZNTFw08zxIStS3hCp8anPvw0RCPFc4F9cpZg_5QNs7B0TLDezqQi0BMAlVlWhjuNUgeS5eEzsy6BhVHgbxLTpbn94D1AslnWnFcF-qJUocNKJCrnR6SLhTnItX7EMGbgQxL__F0lQDPRLVM94geBA" 
              alt="Ashraful Islam working" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl hidden md:block transition-all duration-500 group-hover:translate-y-[-10px] group-hover:translate-x-[10px]">
            <div className="text-cyan-300 text-3xl font-black">4+</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Years Exp.</div>
          </div>
        </div>

        <div className="w-full lg:w-7/12">
          <div className="mb-10">
            <h2 className="text-cyan-300 font-black uppercase tracking-[0.4em] text-xs mb-4">Discovery</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 italic underline decoration-cyan-500 decoration-2 underline-offset-[12px]">
              About Me!
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
              As a dedicated <span className="text-white font-medium">Professional Digital Marketer</span>, I specialize in maximizing brand impact through cutting-edge SEO and platform-specific advertising. With over 1,500 successful projects under my belt, I help businesses navigate the digital landscape with data-driven precision and creative strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
            {details.map((detail, idx) => (
              <div key={idx} className="flex flex-col border-b border-white/5 pb-4 group cursor-default">
                <span className="text-cyan-300 font-black text-[10px] uppercase tracking-[0.2em] mb-1 group-hover:translate-x-2 transition-transform duration-300">{detail.label}</span>
                <span className="text-white font-bold text-lg transition-colors group-hover:text-cyan-500/80">{detail.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-10 py-4 gold-gradient text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all uppercase text-xs tracking-widest shadow-xl">
              Hire Me Now
            </a>
            <button className="px-10 py-4 border border-white/10 text-white font-bold rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase text-xs tracking-widest glass">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
