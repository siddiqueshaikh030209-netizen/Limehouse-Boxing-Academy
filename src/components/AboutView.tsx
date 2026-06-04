import { Clock, ShieldAlert, Award, Star, Trophy, Users, HeartHandshake } from "lucide-react";
import { COACHES } from "../data";

export default function AboutView() {
  const timelineEvents = [
    {
      year: "2012",
      title: "The Rough Beginnings",
      text: "Head Coach Tony Gallagher returns to East London after finishing active competition and begins coaching youth from a small, dilapidated community hall in Poplar."
    },
    {
      year: "2016",
      title: "Founding Limehouse Academy",
      text: "Limehouse Boxing Academy is officially registered and gains affiliation under England Boxing rules, expanding training arrays with state-of-the-art heavy bags."
    },
    {
      year: "2020",
      title: "Creating Youth Pathways",
      text: "Launches the youth and teen technical development program to keep local kids engaged in respectful sport discipline, gaining local borough sport awards."
    },
    {
      year: "2024",
      title: "Elite Ring Legacy",
      text: "Moves to our modern, premium fitness workspace at Hay Currie St, catering to hundreds of first-time beginners and active competitive amateur fighters."
    }
  ];

  const stayReasons = [
    {
      title: "Zero-Ego Environment",
      desc: "Our gym is friendly and welcoming. Champions train side-by-side with beginners in high-speed, collaborative pad drills with zero arrogance."
    },
    {
      title: "Professional Pedigree",
      desc: "No corporate workouts. Our classes are run by actual England Boxing certified match instructors with real ring experience."
    },
    {
      title: "Comprehensive Progression",
      desc: "We don't teach punch-box routines. We focus on boxing footwork pivoting, lateral guard defensive stance blocks, and combination mechanics."
    },
    {
      title: "Durable Body Transformations",
      desc: "The high kinetic workouts shred body-fat and sculpt shoulders with real-world sports skills that build lifelong focus."
    },
    {
      title: "Strong Local Affiliation",
      desc: "Registered under England Boxing guidelines, unlocking verified pathways into regional matches and amateur boxing cards."
    }
  ];

  return (
    <div id="about-us-page-view" className="space-y-24 py-12">
      
      {/* Page Header banner */}
      <section id="about-hero-block" className="relative py-20 bg-brand-black border-b border-zinc-900 overflow-hidden text-center">
        {/* Glow backdrop circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-glow pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase">
            // OUR BOXING FAMILY TRADITION
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            THE LIMEHOUSE LEGACY
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Founded on the values of uncompromised discipline, technical precision, and team community, we train first-timers to unlock athletic confidence.
          </p>
        </div>
      </section>

      {/* 1. OUR STORY & TIMELINE */}
      <section id="academy-story-timeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Story copy */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="font-mono text-xs font-bold text-brand-red uppercase">
              // HOW WE WERE FORGED
            </span>
            <h2 className="font-display font-extrabold text-3xl text-white uppercase tracking-tight leading-none">
              A STORY SPUN FROM SWEAT & SACRIFICE
            </h2>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Limehouse Boxing Academy was not built by branding agencies of suits. It was built cell by cell on East London stone, initialized by former competitor Coach Tony Gallagher. Tony believed that standard gym training isolated people on treadmills, missing the team camaraderie and discipline of boxing.
            </p>
            
            <div className="p-4 bg-brand-black border-l-2 border-brand-red rounded-r">
              <p className="text-gray-400 text-xs leading-relaxed italic">
                "Boxing is the ultimate equalizer. Once you step through those ropes, your bank account, your accent, or your errors don't count. All that counts is the sweat on your wrap and your heart."
              </p>
              <cite className="font-mono text-[9px] text-zinc-300 block mt-2 text-right">
                — Head Trainer Tony Gallagher
              </cite>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed">
              Today, our Poplar studio is a hub for community change. We train corporate practitioners seeking metabolic fitness alongside teenage students who find active discipline on our heavy-bags. We are proud and dedicated.
            </p>
          </div>

          {/* Timeline component */}
          <div className="lg:col-span-7 relative border-l border-zinc-800 pl-6 sm:pl-10 ml-4 space-y-12">
            {timelineEvents.map((ev, i) => (
              <div key={i} className="relative group text-left">
                {/* Red pinpoint dot on the timeline lines */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-[5px] w-4 h-4 bg-zinc-950 border-2 border-brand-red rounded-full group-hover:bg-brand-red transition-all" />
                
                <span className="font-display font-extrabold text-xl text-brand-red tracking-wider block mb-1">
                  {ev.year}
                </span>
                
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                  {ev.title}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-1">
                  {ev.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. THE BLUEPRINT MISSION */}
      <section id="academy-mission-cards" className="bg-zinc-50 py-20 border-y border-zinc-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-3 mb-16">
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
              // MOTORS OF OUR ACTION
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              OUR SQUAD BLUEPRINTS
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
              We focus on five pillars of athletic and mental development to guarantee structural progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "HONEST DISCIPLINE", text: "Discipline is doing what needs to be done, even when you hate it. We push consistency.", icon: StopwatchIcon },
              { title: "SHIELD CONFIDENCE", text: "Unlocking physical confidence that carries directly from sparring to client meetings.", icon: MedalIcon },
              { title: "ATHLETIC FITNESS", text: "Target core conditioning, fat loss, cardiac stamina, and explosive functional kinetic agility.", icon: FlashIcon },
              { title: "SOLID SYSTEM COHORT", text: "We do not believe in isolation. Clean team camaraderie and community accountability.", icon: TeamIcon },
              { title: "TECHNICAL SPECIALTY", text: "Scientific stance, slip defense geometry, leverage weight transfer, and pad science.", icon: TargetIcon }
            ].map((p, i) => (
              <div
                key={i}
                className="bg-zinc-950 border border-zinc-900 rounded p-6 text-center hover:border-brand-red/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-brand-red mx-auto mb-4 font-mono font-bold text-sm">
                  {`0${i + 1}`}
                </div>
                <h4 className="font-display font-extrabold text-xs sm:text-sm text-white uppercase tracking-tight mb-2">
                  {p.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MEET THE COACHING TEAM */}
      <section id="meet-our-coaches" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
            // MASTER SQUAD INSTRUCTORS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            MEET THE CORNER-SQUAD
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Our trainers are licensed, experienced, and dedicated. No shortcuts. True London boxing heritage right here in Limehouse Poplar.
          </p>
        </div>

        {/* Coach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              className="bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden flex flex-col hover:border-brand-red/25 transition-all duration-300"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 bg-brand-black">
                <img
                  src={coach.photo}
                  alt={coach.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter brightness-95"
                />
                
                {/* Visual role tag list */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-black-dark/95 border border-zinc-800 p-3 rounded">
                  <div className="font-display font-bold text-sm text-white uppercase tracking-wide">
                    {coach.name}
                  </div>
                  <div className="font-mono text-[9px] text-brand-red font-bold uppercase tracking-wider mt-0.5">
                    {coach.role}
                  </div>
                </div>
              </div>

              {/* Bio & Specialties panel */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-left">
                    {coach.bio}
                  </p>

                  <div className="space-y-2 text-left font-sans">
                    <div className="text-xs text-gray-500 font-mono">
                      <strong className="text-zinc-300 uppercase">EXPERIENCE:</strong> {coach.experience}
                    </div>
                  </div>

                  {/* Specialties List */}
                  <div className="space-y-2 text-left">
                    <h4 className="font-display font-bold text-xs text-brand-red uppercase tracking-wide">
                      SPECIALTIES:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {coach.specialties.map((spec, i) => (
                        <span key={i} className="text-[10px] font-semibold text-gray-300 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-900">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Achievements block */}
                <div className="border-t border-zinc-900 pt-4 text-left">
                  <h4 className="font-display font-bold text-xs text-zinc-300 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    ACHIEVEMENTS:
                  </h4>
                  <ul className="space-y-1">
                    {coach.achievements.map((ach, i) => (
                      <li key={i} className="text-[10px] text-gray-400 leading-normal flex items-start gap-1">
                        <span className="text-brand-red shrink-0">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY MEMBERS STAY GRID LAYOUT */}
      <section id="why-members-stay-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
            // UNBREAKABLE SQUAD ATTRACTION
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            WHY MEMBERS STAY INSIDE LIMEHOUSE
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Joining is easy. Staying is natural. Experience a truly structured training curriculum that provides actual athletic returns.
          </p>
        </div>

        {/* Stay Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {stayReasons.map((reason, i) => (
            <div
              key={i}
              className="bg-brand-black border border-zinc-900 rounded-lg p-6 relative hover:border-brand-red/30 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center font-mono font-black text-xs mb-4">
                {`x${i+1}`}
              </div>
              <h3 className="font-display font-bold text-base text-white uppercase tracking-wider mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// Inline fallback visual icons representing core values in About pillars
function StopwatchIcon() {
  return <Clock className="w-5 h-5 text-brand-red" />;
}
function MedalIcon() {
  return <Award className="w-5 h-5 text-brand-red" />;
}
function FlashIcon() {
  return <Star className="w-5 h-5 text-brand-red" />;
}
function TeamIcon() {
  return <Users className="w-5 h-5 text-brand-red" />;
}
function TargetIcon() {
  return <Trophy className="w-5 h-5 text-brand-red" />;
}
