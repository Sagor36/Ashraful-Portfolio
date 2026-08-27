import React from 'react';

type Skill = {
  name: string;
  level: number;
  tag: string;
  description: string;
  accent: string;
  icon: string;
};

const skills: Skill[] = [
  {
    name: 'YouTube Video Promotion',
    level: 100,
    tag: 'Growth',
    description: 'Audience targeting, campaign planning and organic growth strategies.',
    accent: '#22d3ee',
    icon: '▶',
  },
  {
    name: 'YouTube Video SEO',
    level: 99,
    tag: 'SEO',
    description: 'Search optimization, keywords, metadata and discoverability.',
    accent: '#a78bfa',
    icon: '⌕',
  },
  {
    name: 'Google Ads',
    level: 92,
    tag: 'Paid Ads',
    description: 'Conversion-focused search campaigns with smart budget control.',
    accent: '#f472b6',
    icon: 'G',
  },
  {
    name: 'Meta Ads',
    level: 88,
    tag: 'Social Ads',
    description: 'Creative testing, audience segmentation and performance scaling.',
    accent: '#fb923c',
    icon: 'f',
  },
];

const Skills: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden text-white">
      <style>{`
        .skills-grid-bg {
          background-image: linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: radial-gradient(circle at center, black 20%, transparent 78%);
        }
        .skill-orb { animation: skillOrb 7s ease-in-out infinite; }
        @keyframes skillOrb { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(0,-12px,0) scale(1.035); } }
        .skill-card { transform: translateY(0); transition: transform .45s cubic-bezier(.2,.8,.2,1), border-color .45s ease, box-shadow .45s ease; }
        .skill-card:hover { transform: translateY(-10px) rotateX(1deg); border-color: rgba(103,232,249,.32); box-shadow: 0 25px 70px rgba(0,0,0,.32), 0 0 40px rgba(34,211,238,.07); }
        .skill-card:hover .skill-fill { animation: skillShimmer 1.4s ease-in-out infinite; }
        @keyframes skillShimmer { 0% { filter: brightness(1); background-position: 0% 50%; } 50% { filter: brightness(1.3); background-position: 100% 50%; } 100% { filter: brightness(1); background-position: 0% 50%; } }
        .skill-ring { transform: rotate(-90deg); transform-origin: 50% 50%; }
        .skill-ring-progress { stroke-dasharray: 283; stroke-linecap: round; animation: ringIn 1.6s cubic-bezier(.2,.8,.2,1) both; }
        @keyframes ringIn { from { stroke-dashoffset: 283; } }
        .skill-dot { animation: dotFloat 4s ease-in-out infinite; }
        @keyframes dotFloat { 0%,100% { transform: translateY(0); opacity: .45; } 50% { transform: translateY(-9px); opacity: 1; } }
        .skill-number { text-shadow: 0 0 24px rgba(103,232,249,.18); }
      `}</style>

      <div className="absolute inset-0 skills-grid-bg pointer-events-none" />
      <div className="absolute left-[8%] top-24 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl skill-orb pointer-events-none" />
      <div className="absolute right-[8%] bottom-12 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl skill-orb pointer-events-none" style={{ animationDelay: '1.2s' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 reveal-up">
              <span className="h-px w-12 bg-gradient-to-r from-cyan-300 to-violet-400" />
              <span className="text-[10px] font-black uppercase tracking-[.42em] text-cyan-300">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[.95] reveal-up">
              MY <span className="text-gradient">SKILLS</span><span className="text-white/30">.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm md:text-base leading-7 text-slate-400 reveal-up">
              A performance-focused toolkit built around visibility, audience growth and measurable digital marketing results.
            </p>
          </div>

          <div className="glass neon-border rounded-2xl px-5 py-4 reveal-up md:min-w-[210px]">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-[9px] uppercase tracking-[.25em] text-slate-500">Core focus</p>
                <p className="mt-1 text-sm font-bold text-white">Growth + Performance</p>
              </div>
              <span className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.9)] pulse-ring" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-5 glass neon-border rounded-[2rem] p-7 md:p-9 relative overflow-hidden skill-orb">
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-cyan-300/10 blur-2xl" />
            <div className="absolute -left-20 bottom-0 w-44 h-44 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative flex items-center justify-between mb-8">
              <div>
                <p className="text-[9px] uppercase tracking-[.3em] text-cyan-300">Performance snapshot</p>
                <h3 className="mt-2 text-2xl font-black">Digital Marketing</h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-slate-400">2026</span>
            </div>

            <div className="relative mx-auto w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-8 rounded-full border border-cyan-300/10 animate-spin [animation-duration:16s]" />
              <div className="absolute inset-14 rounded-full border border-violet-400/10 animate-spin [animation-duration:11s] [animation-direction:reverse]" />
              <div className="absolute inset-20 rounded-full bg-gradient-to-br from-cyan-300/15 via-violet-400/10 to-pink-400/10 blur-xl" />
              <div className="relative w-36 h-36 rounded-full bg-[#09081b]/90 border border-white/10 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(34,211,238,.1)]">
                <span className="text-5xl font-black text-gradient skill-number">95%</span>
                <span className="mt-1 text-[8px] uppercase tracking-[.3em] text-slate-500">Avg. Skill</span>
              </div>
              <span className="absolute top-5 left-1/2 w-2 h-2 rounded-full bg-cyan-300 skill-dot" />
              <span className="absolute right-8 bottom-12 w-1.5 h-1.5 rounded-full bg-pink-300 skill-dot" style={{ animationDelay: '.8s' }} />
              <span className="absolute left-8 bottom-16 w-1.5 h-1.5 rounded-full bg-orange-300 skill-dot" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ['04', 'Core Skills'],
                ['95%', 'Avg. Level'],
                ['100%', 'Top Skill'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/5 bg-white/[.025] p-3 text-center">
                  <p className="text-lg font-black text-white">{value}</p>
                  <p className="mt-1 text-[8px] uppercase tracking-widest text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {skills.map((skill, index) => {
              const circumference = 2 * Math.PI * 45;
              const dashOffset = circumference - (skill.level / 100) * circumference;
              return (
                <article key={skill.name} className="skill-card glass neon-border rounded-[1.75rem] p-6 relative overflow-hidden" style={{ animationDelay: `${index * 120}ms` }}>
                  <div className="absolute -right-12 -top-12 w-28 h-28 rounded-full blur-2xl opacity-20" style={{ background: skill.accent }} />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-lg border border-white/10 bg-white/[.04]" style={{ color: skill.accent, boxShadow: `0 0 25px ${skill.accent}18` }}>
                        {skill.icon}
                      </div>
                      <div>
                        <span className="text-[8px] uppercase tracking-[.25em] text-slate-500">{skill.tag}</span>
                        <h3 className="mt-1 text-sm font-extrabold leading-5 text-white">{skill.name}</h3>
                      </div>
                    </div>

                    <div className="relative w-16 h-16 flex-shrink-0">
                      <svg viewBox="0 0 100 100" className="w-full h-full skill-ring">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="7" />
                        <circle cx="50" cy="50" r="45" fill="none" stroke={skill.accent} strokeWidth="7" className="skill-ring-progress" style={{ strokeDashoffset: dashOffset }} />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-black">{skill.level}%</span>
                    </div>
                  </div>

                  <p className="relative mt-5 text-[11px] leading-5 text-slate-500">{skill.description}</p>

                  <div className="relative mt-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[8px] uppercase tracking-[.22em] text-slate-600">Proficiency</span>
                      <span className="text-[8px] font-bold" style={{ color: skill.accent }}>Level {skill.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[.05] overflow-hidden">
                      <div
                        className="skill-fill h-full rounded-full bg-[length:200%_100%] transition-all duration-1000"
                        style={{ width: `${skill.level}%`, backgroundImage: `linear-gradient(90deg, ${skill.accent}, #8b5cf6, #f472b6)` }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
