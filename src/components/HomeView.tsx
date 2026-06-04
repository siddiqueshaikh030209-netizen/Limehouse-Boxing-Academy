import { Play, Flame, CheckCircle2, ChevronRight, Phone, Instagram, ShieldCheck, MapPin, Trophy, Sparkles } from "lucide-react";
import SuccessCounters from "./SuccessCounters";
import Transformations from "./Transformations";
import TestimonialsCarousel from "./TestimonialsCarousel";
import LeadForm from "./LeadForm";
import { PROGRAMS } from "../data";

interface HomeViewProps {
  setTab: (tab: string) => void;
  onOpenTrialModal: () => void;
}

export const imageMap: { [key: string]: string } = {
  "kids_boxing": "/src/assets/images/kids_boxing_1780565910379.png",
  "adult_boxing": "/src/assets/images/adult_boxing_1780565893704.png",
  "hero_boxing": "/src/assets/images/hero_boxing_1780565876909.png"
};

export function getImgUrl(url: string): string {
  if (imageMap[url]) {
    return imageMap[url];
  }
  return url;
}

export default function HomeView({ setTab, onOpenTrialModal }: HomeViewProps) {
  const handleProgramClick = (progId: string) => {
    setTab("programs");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const instagramPosts = [
    { id: 1, url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=400&auto=format&fit=crop", likes: "142", comments: "18" },
    { id: 2, url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400&auto=format&fit=crop", likes: "289", comments: "41" },
    { id: 3, url: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400&auto=format&fit=crop", likes: "318", comments: "51" },
    { id: 4, url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop", likes: "177", comments: "12" },
  ];

  return (
    <div id="home-view-page" className="space-y-24">
      
      {/* 1. HERO SECTION (Full-Screen action photography + micro forms) */}
      <section id="hero-cover-block" className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Image with custom overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={getImgUrl("hero_boxing")}
            alt="Fighter training on heavy bag at Limehouse Boxing Academy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter saturate-[1.25]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1600&auto=format&fit=crop";
            }}
          />
          {/* Heavy gradient overlays from deep black to red tints to keep typography highly readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black-dark via-brand-black/90 to-brand-black-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black-dark/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Title & Copy (Left Column) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-brand-red rounded-full">
                <Flame className="w-4 h-4 text-brand-red-light animate-pulse text-red-500 fill-red-500" />
                <span className="text-[10px] sm:text-xs font-mono font-bold text-white tracking-widest uppercase">
                  POPULAR, LONDON E14 • ENGLAND BOXING MEMBER
                </span>
              </div>
              
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none">
                TRAIN LIKE A <span className="text-brand-red font-black">FIGHTER.</span> <br />
                <span className="text-white">BECOME STRONGER</span> <br />
                EVERY SINGLE DAY.
              </h1>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                Join one of London's most dedicated boxing academies and build functional physical fitness, unshakeable confidence, boxing stance science, and real-ring skills. All skill levels welcome.
              </p>

              {/* Trust badges checklist */}
              <div className="grid grid-cols-2 gap-y-3 sm:gap-x-6 pt-4 max-w-md">
                {[
                  "All Skill Levels Welcomed",
                  "Junior & Adult Class Divisions",
                  "Licensed England Boxing Coaches",
                  "True Ego-Free Committment",
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">{badge}</span>
                  </div>
                ))}
              </div>

              {/* Primary call vectors */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <button
                  onClick={onOpenTrialModal}
                  className="px-7 py-4 bg-brand-red hover:bg-brand-red-light text-white font-display text-sm font-extrabold tracking-widest uppercase rounded shadow-xl hover:shadow-brand-red/10 cursor-pointer transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5"
                >
                  BOOK FREE TRIAL NOW
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                <a
                  href="tel:+447944857681"
                  className="px-6 py-3.5 bg-brand-black/80 hover:bg-zinc-900 text-white border border-zinc-800 rounded font-display text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-brand-red animate-bounce" />
                  CALL HOTLINE
                </a>
              </div>
            </div>

            {/* Quick Hero Registration Lead Form Widget (Right Column) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute inset-0 bg-brand-red/10 rounded-lg blur-2xl pointer-events-none" />
              <LeadForm 
                initialGoal="Beginner Technical"
                sourceLabel="Hero Section Form"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE ACADEMY CARDS */}
      <section id="why-choose-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase">
            // ELITE METRICS OF PRESTIGE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            WHY LIMEHOUSE STANDS OUT
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            We are built on raw boxing heritage. No gym-bro filler, no pseudo-training routines. Just hard-nose, high-energy coaching inside Poplar, E14.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Expert Boxing Coaches",
              desc: "Train directly under England Boxing certified head coach Tony Gallagher and an active local match instruction team.",
              idx: "01"
            },
            {
              title: "Inclusive Ring Community",
              desc: "Workout alongside motivated professionals, local youth, high-speed enthusiasts, and competitive amateur boxers in London.",
              idx: "02"
            },
            {
              title: "Genuine Olympic Skills",
              desc: "Learn real head movement, lateral weight transition footwork, hand-wrap science, and proper bag punch combinations.",
              idx: "03"
            },
            {
              title: "Durable Core Results",
              desc: "Our members don't just build chest or shoulder muscle; they shed fat, manage work anxiety, find deep focus, and self-belief.",
              idx: "04"
            }
          ].map((card, i) => (
            <div
              key={i}
              className="bg-zinc-950 border border-zinc-900 rounded-lg p-6 relative hover:border-brand-red/30 hover:bg-zinc-900/40 transition-all duration-300 group"
            >
              <div className="font-mono text-xs text-brand-red/40 font-bold mb-4 group-hover:text-brand-red transition-colors">
                {card.idx} //
              </div>
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight mb-2">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MEMBERSHIP GROWTH (More than a gym) */}
      <section id="more-than-gym-block" className="bg-brand-black-dark py-20 border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Benefits Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-brand-red uppercase block mb-1">
                  // THE FITNESS RECONSTRUCTION
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
                  MORE THAN A GYM. <br />
                  A WARRIOR REBUILD.
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4">
                  Boxing conditioning is recognized as the ultimate full-body workout. You work every fast-twitch muscle fibre in your legs, wrap your shoulders in functional kinetic speed, and burn maximum calories.
                </p>
              </div>

              {/* Grid of benefits icons */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Functional Strength & Stamina", text: "Target every muscle fiber." },
                  { title: "Enhanced Confidence", text: "Stand tall under pressure." },
                  { title: "Cardio Health & Weight Loss", text: "Burn up to 800+ kcal." },
                  { title: "Aggressive Stress Relief", text: "Take it out on heavy bags." },
                  { title: "Honest Self-Discipline", text: "Arrive, sweat, and conquer." },
                  { title: "Real Life Defense Skills", text: "Defensive stance coverage." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-left">
                <button
                  onClick={onOpenTrialModal}
                  className="px-6 py-3.5 bg-brand-red hover:bg-brand-red-light text-white font-display text-xs font-bold tracking-widest uppercase rounded shadow transition-all cursor-pointer"
                >
                  STEP INSIDE THE ACADEMY
                </button>
              </div>
            </div>

            {/* Gritty Image layout */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Red decorative border card wrapper */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-red z-10" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brand-red z-10" />
                
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
                  alt="Adult conditioning punch drills"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded shadow-2xl filter brightness-95 contrast-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CLINIC SQUAD PROGRAMS PREVIEW */}
      <section id="programs-preview-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
            // SPECIALIZED CLASS COHORTS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            OUR TRAINING PROGRAMS
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            From youth fundamentals to intense adult fight preparation. Choose your tier, select our free physical trial session, and schedule today.
          </p>
        </div>

        {/* 3 Active preview cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.slice(0, 3).map((prog) => (
            <div
              key={prog.id}
              id={`prog-card-${prog.id}`}
              className="bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden flex flex-col group hover:border-brand-red/30 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={getImgUrl(prog.imgUrl)}
                  alt={prog.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                
                {/* Age division badge */}
                <span className="absolute top-4 left-4 bg-brand-red text-white font-mono text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded shadow">
                  ★ NEW POPULAR
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight">
                    {prog.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {prog.focus.map((f, i) => (
                      <span key={i} className="font-mono text-[9px] text-gray-400 border border-zinc-800 bg-brand-black px-2 py-0.5 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-900 mt-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-brand-red uppercase tracking-wider">
                    {prog.schedule}
                  </span>
                  
                  <button
                    onClick={() => handleProgramClick(prog.id)}
                    className="text-white hover:text-brand-red text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                  >
                    READ PROGRAM
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setTab("programs")}
            className="px-6 py-3.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-white font-display text-xs font-bold tracking-widest uppercase rounded shadow cursor-pointer transition-all hover:border-brand-red/30"
          >
            VIEW ALL SQUAD PROGRAMS ({PROGRAMS.length})
          </button>
        </div>
      </section>

      {/* 5. INTERACTIVE BEFORE/AFTER SLIDER PREVIEW */}
      <section id="results-slider-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Transformations />
      </section>

      {/* 6. SUCCESS COUNTER SQUAD STATS */}
      <section id="metrics-counters-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-zinc-50 py-12 rounded-xl border border-zinc-900 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-glow pointer-events-none" />
        <SuccessCounters />
      </section>

      {/* 7. VIDEO TRAINING INTERACTION (See the Academy in Action) */}
      <section id="academy-video-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
            // LIVE ACTION SPARK
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            SEE OUR GYM IN ACTION
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Step directly onto the mats. Watch how Head Coach Tony pushes technical speed, pad coordination, and extreme athletic conditioning at the E14 studio.
          </p>
        </div>

        {/* Video Frame */}
        <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-zinc-900 group">
          <img
            src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop"
            alt="YouTube Boxing Cover Placehold"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 filter brightness-90 saturate-[1.1]"
          />
          {/* Frosted Play button overlay */}
          <div className="absolute inset-0 bg-brand-black-dark/40 flex items-center justify-center transition-opacity duration-300">
            <button
              onClick={onOpenTrialModal}
              id="play-academy-video-btn"
              className="w-20 h-20 bg-brand-red hover:bg-brand-red-light text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand-red/20 hover:scale-110 transition-transform active:scale-95 cursor-pointer z-10"
              aria-label="Play documentary video template"
            >
              <Play className="w-8 h-8 text-white fill-white ml-1.5" />
            </button>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-gray-400 bg-brand-black/80 px-4 py-2.5 rounded backdrop-blur border border-zinc-900">
            <span>📹 LIMEHOUSE SQUAD DOCUMENTARY (PLAYING PREVIEW)</span>
            <span className="text-brand-red font-bold">1:45 SEC • HD</span>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS REVIEW SLIDER */}
      <section id="carousel-testimonials-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="rotating-carousel-header" className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
            // UNFILTERED SQUAD REPUTATION
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            WHAT OUR MEMBERS SAY
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            We hold a pristine 5.0 Rating on Google. Read authentic, unfiltered experiences from first-time beginners to registered active fighters.
          </p>
        </div>

        <TestimonialsCarousel />
      </section>

      {/* 9. INSTAGRAM INTEGRATED FEED MOCKED */}
      <section id="instagram-feed-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
              // INSTANT DIALLER UPDATES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
              FOLLOW @LIMEHOUSEBOXINGACADEMY
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Check out our daily training drills, mitt combinations, sparring sessions, and active promotions.
            </p>
          </div>

          <a
            href="https://www.instagram.com/limehouseboxingacademy"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-brand-red hover:bg-brand-red-light text-white font-display text-xs font-extrabold tracking-wider uppercase rounded shadow transition-all duration-300 flex items-center gap-2 cursor-pointer text-center"
          >
            <Instagram className="w-4 h-4 shrink-0" />
            FOLLOW US ON INSTAGRAM
          </a>
        </div>

        {/* Gallery feed layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/limehouseboxingacademy"
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square rounded overflow-hidden group border border-zinc-900 bg-brand-black cursor-pointer"
            >
              <img
                src={post.url}
                alt="Instagram gym post placeholder"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-95"
              />
              {/* Instagram Hover state */}
              <div className="absolute inset-0 bg-brand-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white text-xs font-mono">
                <span className="flex items-center gap-1.5 font-bold">❤️ {post.likes}</span>
                <span className="flex items-center gap-1.5 font-bold">💬 {post.comments}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 10. SCARCITY-BASED LIMITED TRIAL OFFER */}
      <section id="scarcity-urgency-block" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-black-dark to-zinc-950 p-8 sm:p-12 rounded-xl border-2 border-brand-red relative overflow-hidden text-center">
          
          {/* Glow lights */}
          <div className="absolute -top-12 right-0 w-44 h-44 bg-brand-red/10 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            <div className="w-16 h-16 bg-brand-red/10 rounded-full border border-brand-red/30 flex items-center justify-center text-brand-red mx-auto text-xl font-bold animate-pulse">
              🚨
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
                // CLASS CAPACITY WARNING: POPULAR E14
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
                CLAIM YOUR FREE TRIAL SESSION
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-lg mx-auto">
                Due to high coach-to-fighter ratios and glove capacity constraints, we can only welcome <strong className="text-brand-red">8 new beginner trials</strong> per week. Reserve your slot today.
              </p>
            </div>

            {/* Trial capture lead form */}
            <div className="max-w-md mx-auto text-left pt-4">
              <LeadForm
                initialGoal="Adult Conditioning"
                sourceLabel="Scarcity Limited Offer Section"
              />
            </div>
            
            <div className="flex items-center justify-center gap-5 text-[10px] font-mono text-gray-500 pt-2 font-semibold">
              <span>★ NO EXPERIENCE REQUIRED</span>
              <span>★ ALL WRAPS PROVIDED</span>
              <span>★ 5.0 RATINGS ON GOOGLE</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
