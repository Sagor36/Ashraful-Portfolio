import React from 'react';

const reviews = [
  {
    name: 'Daniel Carter',
    role: 'YouTube Creator',
    rating: 5,
    review: 'The campaign was structured clearly, communication was fast, and the optimization work made a noticeable difference to my content reach.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    fallback: '/avatars/client-1.svg',
  },
  {
    name: 'Sofia Khan',
    role: 'Small Business Owner',
    rating: 4,
    review: 'I liked the practical SEO recommendations and the reporting. Everything was explained in a way that was easy to act on.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    fallback: '/avatars/client-2.svg',
  },
  {
    name: 'Ryan Mitchell',
    role: 'Content Creator',
    rating: 5,
    review: 'Very responsive and focused on the right audience. The promotion strategy was much more organized than what I had before.',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    fallback: '/avatars/client-3.svg',
  },
  {
    name: 'Maya Wilson',
    role: 'Online Store Owner',
    rating: 4,
    review: 'The optimization process was clear and well documented. I especially appreciated the regular updates and actionable ideas.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    fallback: '/avatars/client-4.svg',
  },
  {
    name: 'Noah Bennett',
    role: 'Video Producer',
    rating: 5,
    review: 'Strong attention to detail. The keyword research and optimization recommendations were useful and easy to implement.',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    fallback: '/avatars/client-5.svg',
  },
  {
    name: 'Ava Morgan',
    role: 'Personal Brand',
    rating: 4,
    review: 'Professional workflow and clear explanations. I always knew what was being tested, why it mattered, and what came next.',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    fallback: '/avatars/client-6.svg',
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-transparent text-white overflow-hidden relative">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 reveal-up">
          <p className="text-cyan-300 font-black uppercase tracking-[0.4em] text-[10px] mb-3">CLIENT FEEDBACK</p>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase italic tracking-tighter">
            CLIENT <span className="text-gradient">REVIEWS...</span>
          </h2>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl mx-auto leading-7">
            A showcase of the kind of feedback and outcomes this portfolio is built to represent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((item, idx) => (
            <article
              key={item.name}
              className="review-card group rounded-[1.6rem] border border-white/10 bg-white/[0.045] backdrop-blur-xl p-6 md:p-7 hover:border-cyan-300/40 hover:bg-white/[0.07] transition-all duration-500 reveal-up"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative shrink-0">
                    <img
                      src={item.avatar}
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = item.fallback;
                      }}
                      alt={`${item.name} profile`}
                      className="w-14 h-14 rounded-full object-cover border-2 border-cyan-300/30 ring-4 ring-cyan-300/5 group-hover:ring-cyan-300/15 transition-all duration-500"
                    />
                    <span className="absolute -right-1 -bottom-1 w-5 h-5 rounded-full bg-slate-950 border border-cyan-300/40 flex items-center justify-center text-[9px] text-cyan-300">✓</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-white truncate">{item.name}</h3>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 truncate mt-1">{item.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 shrink-0" aria-label={`${item.rating} out of 5 stars`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={`text-base leading-none ${star <= item.rating ? 'text-cyan-300' : 'text-slate-700'}`}>★</span>
                  ))}
                </div>
              </div>

              <div className="mb-5 text-cyan-300/40 text-3xl leading-none">“</div>
              <p className="text-sm leading-7 text-slate-300 -mt-2">{item.review}</p>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Portfolio sample</span>
                <span className="h-px w-12 bg-gradient-to-r from-cyan-300/60 to-violet-400/60" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
