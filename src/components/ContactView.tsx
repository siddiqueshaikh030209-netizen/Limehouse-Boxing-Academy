import { MapPin, Phone, Instagram, Clock, Mail, ExternalLink, Map, Award, Compass } from "lucide-react";
import LeadForm from "./LeadForm";
import CrownLogo from "./CrownLogo";

export default function ContactView() {
  const hours = [
    { day: "MONDAY", time: "06:30 - 21:30", type: "Heavy Conditioning Classes" },
    { day: "TUESDAY", time: "06:30 - 21:30", type: "Beginners Technical Hours" },
    { day: "WEDNESDAY", time: "06:30 - 21:30", type: "Youth Class & Adults Spars" },
    { day: "THURSDAY", time: "06:30 - 21:30", type: "Cardio Bag Intensity Slots" },
    { day: "FRIDAY", time: "06:30 - 21:30", type: "Advance competitive sparring" },
    { day: "SATURDAY", time: "08:00 - 14:00", type: "Open Ring & Pad Work" },
    { day: "SUNDAY", time: "CLOSED", type: "Ring Rest & Spar Cleaning", closed: true },
  ];

  const mapNavigationUrl = "https://www.google.com/maps/dir/?api=1&destination=30+Hay+Currie+St,+London+E14+6GN";

  return (
    <div id="contact-us-view" className="space-y-24 py-12">
      
      {/* Intro section */}
      <section id="contact-banner" className="relative py-20 bg-brand-black border-b border-zinc-900 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-glow pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase">
            // STEP INTO THE STADIUM
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            CONTACT & LOCATION
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Limehouse Boxing Academy is located in the heart of East London. Arrive by foot, bus, or DLR. No sparring gear needed for your first day.
          </p>
        </div>
      </section>

      {/* Grid of details contact card + form */}
      <section id="contact-details-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Information Column (Left Side) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-brand-red uppercase">
                // SQUAD CLUB DETAILS
              </span>
              <h2 className="font-display font-extrabold text-3xl text-white uppercase tracking-tight leading-none animate-pulse">
                THE LIMEHOUSE MAIN HQ
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Our boxing gym is fully customized with a heavy competition ring, speed mitt stations, and multiple weight condition accessories.
              </p>
            </div>

            {/* Structured Card Grid list */}
            <div className="space-y-4">
              
              <div className="bg-zinc-950 p-4 rounded border border-zinc-900 flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center rounded shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wide">PHYSICAL LOCATION</h4>
                  <a 
                    href={mapNavigationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 text-xs sm:text-sm hover:text-white block mt-0.5"
                  >
                    30 Hay Currie St, Poplar, London E14 6GN, United Kingdom
                  </a>
                </div>
              </div>

              <div className="bg-zinc-950 p-4 rounded border border-zinc-900 flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center rounded shrink-0">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wide">TELEPHONE LINE</h4>
                  <a href="tel:+447944857681" className="text-gray-400 text-xs sm:text-sm hover:text-white block mt-0.5">
                    +44 7944 857681
                  </a>
                </div>
              </div>

              <div className="bg-zinc-950 p-4 rounded border border-zinc-900 flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center rounded shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wide">INSTAGRAM ACCOUNT</h4>
                  <a 
                    href="https://www.instagram.com/limehouseboxingacademy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 text-xs sm:text-sm hover:text-white block mt-0.5"
                  >
                    @limehouseboxingacademy
                  </a>
                </div>
              </div>

            </div>

            {/* Travel Directions list */}
            <div className="p-5 bg-brand-black border border-zinc-900 rounded text-xs gap-3">
              <h3 className="font-display font-extrabold text-sm text-white uppercase tracking-wide mb-3 flex items-center gap-1">
                <Compass className="w-4 h-4 text-brand-red" />
                DLR & TRANSIT CHANNELS
              </h3>
              <ul className="space-y-2.5 text-gray-400 leading-normal">
                <li>🚇 <strong className="text-white">DLR Train Line:</strong> We are just a short <strong className="text-brand-red">4-minute walk</strong> from the <strong className="text-white">Devons Road DLR Station</strong>, or 7-minute walk from Langdon Park DLR.</li>
                <li>🚌 <strong className="text-white">Bus Connections:</strong> Take Bus Route 309, D8, or 108 stopping directly on Campbell Road.</li>
                <li>🚗 <strong className="text-white">Local Car Parking:</strong> Ringo road-side parking slots exist surrounding Hay Currie St.</li>
              </ul>
            </div>

          </div>

          {/* Form Block (Right Side) */}
          <div className="lg:col-span-6 relative">
            <LeadForm 
              initialGoal="Adult Conditioning"
              sourceLabel="Contact View Page"
            />
          </div>

        </div>
      </section>

      {/* 2. BUSINESS HOURS TABULATOR LIST */}
      <section id="contact-hours-table" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-6 sm:p-10 relative overflow-hidden">
          
          <div className="flex items-center gap-3.5 mb-8 text-left">
            <div className="w-10 h-10 rounded bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-white uppercase tracking-tight">
                DETAILED WEEKLY TIMETABLES
              </h3>
              <p className="text-gray-400 text-xs">
                Weekly opening schedules. Spar sweeps and gym locks execute promptly at 21:30.
              </p>
            </div>
          </div>

          <div className="space-y-3.5 text-left font-mono">
            {hours.map((h, i) => (
              <div 
                key={i} 
                className={`flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-zinc-900/60 pb-3 gap-1 ${
                  h.closed ? "text-brand-red font-bold" : "text-gray-300"
                }`}
              >
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">{h.day}</span>
                <div className="flex flex-col sm:items-end text-left sm:text-right">
                  <span className="text-xs text-white font-bold tracking-tight">{h.time}</span>
                  <span className="text-[10px] text-gray-500 font-sans tracking-wide mt-0.5 uppercase">{h.type}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE MOCKED GOOGLE MAP WITH NAVIGATION */}
      <section id="google-map-interactive-mock" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
            // MAP COORDINATES OVERLAY
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            INTERACTIVE MAP VIEW
          </h2>
        </div>

        {/* Mocked vector styled gorgeous canvas map */}
        <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border-2 border-zinc-900 bg-brand-black mesh-bg flex items-center justify-center group">
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* SVG representation of custom Limehouse map roads */}
          <svg className="absolute inset-0 w-full h-full opacity-40 select-nonepointer-events-none" viewBox="0 0 800 400">
            {/* Roads */}
            <path d="M 0,200 L 800,200" stroke="#222" strokeWidth="8" />
            <path d="M 0,200 L 800,200" stroke="#8B0000" strokeWidth="1" strokeDasharray="5" opacity="0.3" />
            <path d="M 400,0 L 400,400" stroke="#222" strokeWidth="8" />
            <path d="M 150,0 Q 250,150 400,200" stroke="#151515" strokeWidth="4" />
            <path d="M 650,400 Q 550,250 400,200" stroke="#151515" strokeWidth="4" />
            <circle cx="400" cy="200" r="120" stroke="#333" strokeWidth="2" fill="none" strokeDasharray="4" />
            {/* Neighborhood labels */}
            <text x="120" y="80" fill="#444" fontSize="12" fontFamily="monospace">LIMEHOUSE BASIN</text>
            <text x="640" y="320" fill="#444" fontSize="12" fontFamily="monospace">POPLAR PARK</text>
            <text x="650" y="80" fill="#444" fontSize="12" fontFamily="monospace">DEVONS ROAD DLR</text>
          </svg>

          {/* Glowing central target pin pin */}
          <div className="relative z-10 text-center space-y-4">
            
            <div className="relative w-16 h-16 overflow-hidden rounded-md shadow-2xl border-2 border-brand-red mx-auto animate-bounce">
              <CrownLogo variant="solid-red" className="w-full h-full" />
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-brand-red rounded-full animate-ping" />
            </div>

            <div>
              <h4 className="font-display font-extrabold text-sm sm:text-base text-white tracking-wide uppercase">
                LIMEHOUSE BOXING ACADEMY
              </h4>
              <p className="font-mono text-[9px] sm:text-xs text-brand-red uppercase font-semibold">
                ★ 30 Hay Currie St, London E14 6GN
              </p>
            </div>

            <div className="pt-2">
              <a
                href={mapNavigationUrl}
                target="_blank"
                rel="noreferrer"
                id="link-google-maps-external"
                className="px-4 py-2 bg-brand-red hover:bg-brand-red-light text-white font-display text-[10px] font-bold tracking-widest uppercase rounded shadow transition-all duration-300 inline-flex items-center gap-1 cursor-pointer"
              >
                OPEN DIRECTIONS ON GOOGLE MAPS
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[9px] text-gray-500 bg-brand-black/95 px-4 py-2 border border-zinc-900 rounded">
            <span>🗺️ LAT: 51.516102 • LNG: -0.019183 • LIMEHOUSE MAP</span>
            <span className="text-brand-red font-bold animate-pulse">&bull; LIVE HQ PIN</span>
          </div>

        </div>
      </section>

    </div>
  );
}
