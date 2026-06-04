import { Instagram, Phone, MapPin, Mail, Award, Clock } from "lucide-react";
import { SEO_SCHEMA } from "../data";
import CrownLogo from "./CrownLogo";

interface FooterProps {
  setTab: (tab: string) => void;
}

export default function Footer({ setTab }: FooterProps) {
  
  const handlePageLink = (tab: string) => {
    setTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-app-footer" className="bg-brand-black-dark border-t border-zinc-900 pt-16 pb-8 relative overflow-hidden">
      
      {/* JSON-LD Local Business Schema Markup for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SEO_SCHEMA) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Section 1: Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 overflow-hidden rounded-md shadow bg-white p-0.5">
                <CrownLogo variant="solid-red" className="w-full h-full" />
              </div>
              <span className="font-display font-extrabold text-lg tracking-wider text-white">LIMEHOUSE</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Serving the East London community from our fully-equipped studio. We train everyone from total beginners seeking fitness and stress relief to card-carrying competitive amateur boxers. Let's step into the ring together.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/limehouseboxingacademy"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-zinc-800 bg-brand-black flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:+447944857681"
                className="w-10 h-10 rounded-full border border-zinc-800 bg-brand-black flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="font-display font-bold text-sm tracking-widest text-white uppercase mb-6 border-l-2 border-brand-red pl-3">
              ACADEMY ROUTES
            </h3>
            <ul className="space-y-3">
              {[
                { key: "home", label: "Front Page" },
                { key: "about", label: "Academy Story" },
                { key: "programs", label: "Boxing Programs" },
                { key: "success", label: "Transformations" },
                { key: "reviews", label: "Google Reviews" },
                { key: "gallery", label: "Photo Gallery" },
                { key: "faq", label: "Help & FAQ" },
                { key: "contact", label: "Contact & Location" },
              ].map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => handlePageLink(item.key)}
                    className="text-gray-400 hover:text-brand-red text-sm transition-colors duration-200 cursor-pointer uppercase font-mono text-xs tracking-wider"
                  >
                    // {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Training Hours */}
          <div>
            <h3 className="font-display font-bold text-sm tracking-widest text-white uppercase mb-6 border-l-2 border-brand-red pl-3">
              OPENING TIMES
            </h3>
            <div className="space-y-3 font-mono text-xs text-gray-400">
              <div className="flex justify-between items-center py-1 border-b border-zinc-900/50">
                <span>MON - FRI</span>
                <span className="text-white">06:30 - 21:30</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-zinc-900/50">
                <span>SATURDAY</span>
                <span className="text-white">08:00 - 14:00</span>
              </div>
              <div className="flex justify-between items-center py-1 text-brand-red">
                <span>SUNDAY</span>
                <span>CLOSED - SPAR CLEAN</span>
              </div>
              <div className="flex items-start gap-2 mt-4 text-[10px] italic leading-tight text-yellow-500 bg-yellow-500/5 p-2 rounded border border-yellow-500/10">
                <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Competitors squad schedules may differ. Check with Coach Tony.</span>
              </div>
            </div>
          </div>

          {/* Section 4: Get In Touch */}
          <div>
            <h3 className="font-display font-bold text-sm tracking-widest text-white uppercase mb-6 border-l-2 border-brand-red pl-3">
              THE CLUBHQ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-gray-400 text-sm">
                  30 Hay Currie St, Poplar, London E14 6GN, UK
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <a href="tel:+447944857681" className="text-gray-400 hover:text-white text-sm">
                  +44 7944 857681
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-gray-400 text-sm">
                  admin@limehouseboxing.co.uk
                </span>
              </li>
              <li className="flex items-center gap-3 border-t border-zinc-900 pt-4 mt-2">
                <Award className="w-5 h-5 text-yellow-500 shrink-0" />
                <span className="font-mono text-[10px] tracking-wider text-gray-400 uppercase">
                  England Boxing Affiliated Club
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Grid Margin */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Limehouse Boxing Academy. All Rights Reserved. Coached in London.</p>
          <div className="flex gap-4 mt-4 sm:mt-0 font-mono text-[10px] tracking-widest uppercase">
            <span>✓ ALL SKILL LEVELS</span>
            <span>✓ ADULT & JUNIOR CLASSES</span>
            <span>✓ PRO SPORTS BRANDING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
