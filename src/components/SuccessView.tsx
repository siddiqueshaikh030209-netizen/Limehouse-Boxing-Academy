import Transformations from "./Transformations";
import { Check, Star, Trophy, Sparkles, Flame, Play, ShieldAlert } from "lucide-react";

interface SuccessViewProps {
  onOpenTrialModal: () => void;
}

export default function SuccessView({ onOpenTrialModal }: SuccessViewProps) {
  const resultStats = [
    {
      title: "FAT LOSS SUMS",
      metric: "4,600+ KG LARD SHED",
      desc: "Cumulative chest fat & waistline weight loss calculated across E14 popualce since academy inception."
    },
    {
      title: "CARDIO ENDURANCE",
      metric: "2.4x VO2 MAX ASCENT",
      desc: "Measured athletic oxygen efficiency improvement after active twelve-week bag drilling intervals."
    },
    {
      title: "AMATEUR SQUAD CARD",
      metric: "18+ SQUAD COMPETITORS",
      desc: "Registered active card amateurs competing under London ABA tournament guidelines."
    },
    {
      title: "ANXIETY COGNITION",
      metric: "94% STRESS ALLEVIATION",
      desc: "Independent polling feedback indicating deep metabolic stress relief after technical sparring workouts."
    }
  ];

  const beforeAfterCards = [
    {
      name: "Marcus Sterling (34, Banker)",
      stat: "Lost 14kg in 4 Months",
      achievement: "Elite Sparring Qualification",
      text: "Between desk hours and stress, my stamina had zero levels. Boxing taught me pivoting stances, slipped angles, and explosive shadow boxing. Tony coaches with direct technical focus. Highly recommend Beginner hours!",
      img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Olivia Vance (28, Architect)",
      stat: "2x Core Strength Elevation",
      achievement: "Charity Fight Night Medalist",
      text: "The metabolic combinations on bags burn more calories than high-speed treadmills. Learning real mitt defense slip movements built an unshakeable sense of daily focus in boardroom negotiations.",
      img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=300&auto=format&fit=crop"
    }
  ];

  return (
    <div id="success-stories-view" className="space-y-24 py-12">
      
      {/* Intro section */}
      <section id="success-stories-intro" className="relative py-20 bg-brand-black border-b border-zinc-900 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-glow pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase">
            // UNFILTERED SQUAD TRANSFORMATIONS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            SUCCESS STORIES
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Proof is in the sweat. Read detailed transformations, athletic conditioning multipliers, and reviews documenting how we rebuild metabolic endurance.
          </p>
        </div>
      </section>

      {/* 1. FRONT MASTER COMPARATOR SLIDER */}
      <section id="master-comparison-slider" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Transformations />
      </section>

      {/* 2. SYSTEM RESULTS NUMERIC STATS */}
      <section id="academy-results-section" className="bg-zinc-50 py-20 border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
              // MATHEMATICAL PERFORMANCE METRICS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              PROVEN METABOLIC MILESTONES
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
              We gather statistical benchmarks on physical endurance, muscular fat loss, and sparring progression to ensure our curriculum stays elite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {resultStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 p-6 border-l-2 border-brand-red rounded shadow group hover:border-brand-red-light transition-all"
              >
                <div className="font-mono text-[9px] text-gray-500 font-bold tracking-widest">
                  {stat.title}
                </div>
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-white mt-1.5 mb-2 shrink-0">
                  {stat.metric}
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. ADDITIONAL TRANSFORMATION DETAIL CARDS */}
      <section id="member-transformation-journeys" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
            // BRIEF DOSSIERS OF EFFORT
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            MEMBER SPOTLIGHT CARDS
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            How busy professionals, local residents, and youth step through our E14 studio doors and design their athletic bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {beforeAfterCards.map((card, i) => (
            <div
              key={i}
              className="bg-zinc-950 border border-zinc-900 rounded-lg p-6 flex flex-col sm:flex-row gap-6 hover:border-zinc-800 transition-all"
            >
              <div className="relative w-full sm:w-44 aspect-square rounded overflow-hidden shrink-0 bg-brand-black border border-zinc-900">
                <img
                  src={card.img}
                  alt={card.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter saturate-75 brightness-95"
                />
              </div>

              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-[9px] text-brand-red font-bold uppercase bg-brand-red/10 px-2 py-0.5 rounded border border-brand-red/15">
                      {card.stat}
                    </span>
                    <span className="text-gray-500 text-[10px]">&bull; Verified Member</span>
                  </div>

                  <h3 className="font-display font-black text-lg text-white uppercase tracking-tight">
                    {card.name}
                  </h3>

                  <p className="font-mono text-[10px] text-gray-400 italic">
                    ★ Primary Achievement: <span className="text-white">{card.achievement}</span>
                  </p>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-3">
                    "{card.text}"
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono text-yellow-500 font-bold border-t border-zinc-900 pt-3">
                  <Star className="w-3.5 h-3.5 fill-yellow-500 shrink-0" />
                  <Star className="w-3.5 h-3.5 fill-yellow-500 shrink-0" />
                  <Star className="w-3.5 h-3.5 fill-yellow-500 shrink-0" />
                  <Star className="w-3.5 h-3.5 fill-yellow-500 shrink-0" />
                  <Star className="w-3.5 h-3.5 fill-yellow-500 shrink-0" />
                  <span>5.0 RATED</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VIDEO TESTIMONIAL PANEL */}
      <section id="video-testimonials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-zinc-950 p-8 sm:p-12 rounded-xl border border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 blur-glow pointer-events-none" />
        
        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-red uppercase">
            // SPARK VIDEO RECORDINGS
          </span>
          <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
            VIDEO DIALECT ENQUIRIES
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg mx-auto">
            Click to watch local Poplar boxers and working adult members talk about stamina, weight changes, stance balance, and why they choose Limehouse Boxing in East London!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto pt-4">
            {[1, 2].map((id) => (
              <div
                key={id}
                onClick={onOpenTrialModal}
                className="relative aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-100 cursor-pointer hover:border-brand-red group"
              >
                <img
                  src={id === 1 ? "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400&auto=format&fit=crop" : "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=400&auto=format&fit=crop"}
                  alt="Video feedback thumbnail"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-75 group-hover:scale-102 transition-transform"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-brand-red/90 group-hover:bg-brand-red text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 active:scale-95 transition-all">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-brand-black/90 p-1.5 rounded border border-zinc-900 font-mono text-[8px] text-gray-400 text-left">
                  🎬 PLAY RECORDING {id} • LIMEHOUSE VERIFIED
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUCCESS STORIES CTA SICK BANNER */}
      <section id="scarcity-success-call" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-red-dark via-brand-red to-brand-red-dark text-white p-8 sm:p-12 rounded-xl text-center relative overflow-hidden shadow-2xl border border-brand-red/20 shadow-brand-red/10">
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-red-200 uppercase block">
              // DESIGN YOUR OWN PHYSICAL TIMELINE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight leading-none">
              READY TO BECOME THE NEXT SUCCESS STORY?
            </h2>
            <p className="text-red-100 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
              Our coaching curriculum, heavy-bag intervals, and support community are waiting. Take your first free step with no cost or gear commitments today.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenTrialModal}
                className="px-7 py-4 bg-white text-brand-red hover:bg-brand-black hover:text-white font-display text-sm font-extrabold tracking-widest uppercase rounded shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1"
              >
                BOOK YOUR FREE TRAINING SQUAD SLOT
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-[9px] font-mono text-red-200 uppercase">
              <span>★ NO CONTRACTS</span>
              <span>★ NO SETUP PENALTIES</span>
              <span>★ England Boxing Heritage</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
