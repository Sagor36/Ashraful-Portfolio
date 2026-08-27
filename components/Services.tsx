import React from 'react';

type Service = {
  title: string;
  desc: string;
  icon: string;
  poster: string;
  tag: string;
  accent: string;
};

const services: Service[] = [
  { title: 'YouTube Video SEO', desc: 'Keyword research, title optimization, descriptions, tags, audience targeting, analytics and ranking improvements built around discoverability.', icon: '▶', poster: '/service-posters/youtube-seo.png', tag: 'SEARCH • VIDEO', accent: 'from-cyan-400/20 to-violet-500/10' },
  { title: 'Google Ads', desc: 'High-intent search campaigns with structured keywords, compelling ads, smart budgets and continuous optimization for stronger ROI.', icon: '⌕', poster: '/service-posters/google-ads.png', tag: 'PAID • SEARCH', accent: 'from-violet-500/20 to-cyan-400/10' },
  { title: 'Meta Ads', desc: 'Conversion-focused Facebook and Instagram campaigns with audience research, creative testing, retargeting and performance optimization.', icon: '∞', poster: '/service-posters/meta-ads.png', tag: 'SOCIAL • ADS', accent: 'from-fuchsia-500/20 to-cyan-400/10' },
  { title: 'Website SEO', desc: 'Technical SEO, keyword mapping, on-page improvements, content opportunities and performance tracking to build long-term visibility.', icon: '⌘', poster: '/service-posters/website-seo.png', tag: 'ORGANIC • GROWTH', accent: 'from-cyan-400/20 to-blue-500/10' },
  { title: 'Social Media Mgmt', desc: 'Content planning, scheduling, profile optimization, engagement and analytics designed to turn consistency into audience growth.', icon: '◉', poster: '/service-posters/social-media.png', tag: 'CONTENT • SOCIAL', accent: 'from-violet-500/20 to-fuchsia-500/10' },
  { title: 'Content Strategy', desc: 'A data-driven roadmap covering audience research, content pillars, calendars, distribution and measurement so every post has a purpose.', icon: '✦', poster: '/service-posters/content-strategy.png', tag: 'PLAN • CREATE', accent: 'from-cyan-400/20 to-violet-500/10' },
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-14 md:mb-16 gap-7">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-4 text-cyan-300 font-black uppercase tracking-[0.4em] text-[10px]">
            <span className="w-8 h-px bg-cyan-300" /> SERVICE
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
            What I Do For <span className="text-gradient italic font-serif">Clients</span>
          </h3>
          <p className="mt-5 text-slate-400 max-w-2xl leading-relaxed text-sm md:text-base">
            Strategy-led digital marketing services presented as visual playbooks — each service has its own identity, workflow and growth focus.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((service, idx) => (
          <article
            key={service.title}
            className="service-card glass rounded-[2rem] overflow-hidden neon-border group reveal-up"
            style={{ animationDelay: `${idx * 90}ms` }}
          >
            <div className={`relative h-52 md:h-56 overflow-hidden bg-gradient-to-br ${service.accent}`}>
              <img
                src={service.poster}
                alt={`${service.title} service poster`}
                className="absolute inset-0 w-full h-full object-contain p-2 md:p-3 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b1a]/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#070b1a]/70 border border-white/10 backdrop-blur-md text-[9px] font-black tracking-[0.22em] text-cyan-200">
                {service.tag}
              </div>
              <div className="absolute bottom-4 right-4 w-11 h-11 rounded-2xl bg-[#070b1a]/75 border border-white/10 backdrop-blur-md flex items-center justify-center text-lg text-cyan-200 shadow-lg group-hover:rotate-6 transition-transform duration-500">
                {service.icon}
              </div>
            </div>

            <div className="p-7 md:p-8 flex flex-col min-h-[270px]">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[9px] font-black tracking-[0.25em] text-slate-500">0{idx + 1} / 06</span>
                  <h4 className="text-xl md:text-2xl font-black mt-1 group-hover:text-cyan-200 transition-colors duration-300">{service.title}</h4>
                </div>
              </div>
              <p className="text-slate-400 leading-7 text-sm mb-7">{service.desc}</p>
              <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-5">
                <span className="text-cyan-300 text-[10px] font-black uppercase tracking-[0.2em]">Explore Detail</span>
                <span className="w-9 h-9 rounded-full border border-cyan-300/20 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-300 group-hover:text-slate-950 group-hover:translate-x-1 transition-all duration-300">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Services;
