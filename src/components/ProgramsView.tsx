import { PROGRAMS } from "../data";
import { Check, Calendar, Trophy, ChevronRight } from "lucide-react";
import { getImgUrl } from "./HomeView";

interface ProgramsViewProps {
  onOpenTrialModal: (goal?: string) => void;
}

export default function ProgramsView({ onOpenTrialModal }: ProgramsViewProps) {
  return (
    <div id="programs-view-page" className="space-y-24 py-12">
      
      {/* Banner Intro */}
      <section id="programs-intro-banner" className="relative py-20 bg-brand-black border-b border-zinc-900 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-glow pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase">
            // SCIENTIFIC STRUCTURAL PATHS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            ACADEMY PROGRAMS
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            No matter your age, stamina levels, or physical capabilities, we have a meticulously structured coaching division tailored to launch your evolution.
          </p>
        </div>
      </section>

      {/* Program Slots Sections: alternating visual layout (image right, image left) */}
      <section id="individual-programs-listing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {PROGRAMS.map((prog, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={prog.id}
              id={`section-prog-${prog.id}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left"
            >
              
              {/* IMAGE FRAME - placed left or right based on parity */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-2 border-zinc-900 group">
                  
                  {/* Glowing border outline */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-brand-red/15 rounded-bl-full border-t border-r border-brand-red/20 group-hover:bg-brand-red/30 transition-all pointer-events-none" />
                  
                  <img
                    src={getImgUrl(prog.imgUrl)}
                    alt={prog.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 filter brightness-95 contrast-[1.02]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  
                  {/* Experience guidance watermark tag */}
                  <div className="absolute bottom-4 left-4 bg-brand-black/90 p-3 rounded border border-zinc-800 backdrop-blur font-mono text-[9px] tracking-wider text-gray-400 uppercase">
                    📁 TIER CLASS • {idx + 1} OF {PROGRAMS.length}
                  </div>
                </div>
              </div>

              {/* COPY CONTENT FRAME - placed left or right based on parity */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"} space-y-6`}>
                
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold text-brand-red uppercase block">
                    // CLASS GROUP PATHWAY
                  </span>
                  
                  <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
                    {prog.title}
                  </h2>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                {/* Focus metrics tag list */}
                <div className="space-y-2">
                  <h4 className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase font-bold">
                    CORE COHORT DYNAMICS:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {prog.focus.map((f, i) => (
                      <span key={i} className="font-mono text-[10px] text-brand-red border border-brand-red/20 bg-brand-red/5 px-2.5 py-1 rounded">
                        ★ {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bulleted Benefits */}
                <div className="space-y-2">
                  <h4 className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase font-bold">
                    STRUCTURAL CLASS PAYOFFS:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {prog.benefits.map((b, i) => (
                      <li key={i} className="text-xs text-gray-400 leading-normal flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule and Action Row */}
                <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                    <Calendar className="w-4 h-4 text-brand-red shrink-0" />
                    <span>TIMETBL: <strong className="text-white uppercase">{prog.schedule}</strong></span>
                  </div>

                  <button
                    onClick={() => onOpenTrialModal(prog.title)}
                    className="px-5 py-3 bg-brand-red hover:bg-brand-red-light text-white font-display text-xs font-bold uppercase tracking-wider rounded shadow transition-all duration-300 flex items-center gap-1 cursor-pointer hover:scale-105 active:scale-95"
                  >
                    BOOK FREE SESSION
                    <ChevronRight className="w-4 h-4 text-red-100" />
                  </button>
                </div>

              </div>

            </div>
          );
        })}
      </section>

      {/* Interactive trust bottom banner */}
      <section id="programs-cta-bottom" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-zinc-950 p-8 rounded-xl border border-zinc-900 relative overflow-hidden text-center">
        <div className="relative z-10 max-w-lg mx-auto space-y-4">
          <Trophy className="w-10 h-10 text-yellow-500 fill-yellow-500 mx-auto animate-bounce" />
          <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-tight">
            NOT SURE WHICH PROGRAM FITS?
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Register for our Beginner Stance Staging Session. We will assess your natural punch extension, hand preference, and metabolic levels to customize your training track.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenTrialModal("Beginner Technical")}
              className="px-6 py-3 bg-white text-black hover:bg-brand-red hover:text-white font-display text-xs font-black tracking-widest uppercase rounded shadow transition-all cursor-pointer"
            >
              SCHEDULE A COMPREHENSIVE ASSESSMENT
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
