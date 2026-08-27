import React, { useEffect, useRef, useState } from 'react';

const ClientVideo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => undefined);
    }
  }, [isOpen]);

  return (
    <section className="py-20 md:py-28 bg-transparent text-white overflow-hidden relative">
      <div className="absolute -left-24 top-10 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 bottom-0 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14 reveal-up">
          <p className="text-cyan-300 font-black uppercase tracking-[0.4em] text-[10px] mb-3">CLIENT REVIEW VIDEO</p>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase italic tracking-tighter">
            CLIENT <span className="text-gradient">FEEDBACK...</span>
          </h2>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl mx-auto leading-7">
            Watch this short client review directly from the portfolio.
          </p>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden border border-cyan-300/20 bg-white/[0.045] backdrop-blur-xl shadow-2xl shadow-cyan-950/20 group">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label="Open client review video"
          >
            <video
              className="w-full aspect-video object-cover bg-slate-950 pointer-events-none"
              src="/videos/client-review.mp4"
              preload="metadata"
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-slate-950/35 group-hover:bg-slate-950/20 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cyan-300 text-slate-950 flex items-center justify-center shadow-[0_0_50px_rgba(103,232,249,0.35)] group-hover:scale-110 transition-transform duration-500">
                <svg className="w-9 h-9 md:w-10 md:h-10 ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l9.1-6.86a1.05 1.05 0 0 0 0-1.68l-9.1-6.86A1 1 0 0 0 8 5.14Z" />
                </svg>
              </span>
            </div>
            <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-200">Featured Testimonial</p>
                <p className="text-white font-bold mt-1">Client Review — Watch Video</p>
              </div>
              <span className="hidden sm:inline-flex px-4 py-2 rounded-full border border-white/15 bg-black/30 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-white">
                Open Video
              </span>
            </div>
          </button>
        </div>

        <p className="text-center text-slate-500 text-xs mt-5">Click the video to open it in a larger player. Fullscreen controls are available.</p>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Client review video player"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 md:top-8 md:right-8 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-cyan-300 hover:text-slate-950 transition-all"
            aria-label="Close video"
          >
            <span className="text-2xl leading-none">×</span>
          </button>

          <div className="w-full max-w-6xl">
            <video
              ref={videoRef}
              className="w-full max-h-[85vh] rounded-2xl border border-white/10 bg-black shadow-2xl"
              src="/videos/client-review.mp4"
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ClientVideo;
