import { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown, HelpCircle, Mail, MapPin, Award } from "lucide-react";

export default function FaqView() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // open first as default

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div id="faqs-view-page" className="space-y-24 py-12">
      
      {/* Hero Header */}
      <section id="faq-intro-block" className="relative py-20 bg-brand-black border-b border-zinc-900 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-glow pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase">
            // SOLUTIONS CENTER • SQUAD HELP
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about stepping into the ring for the first time. Read our stance and training guidelines.
          </p>
        </div>
      </section>

      {/* Accordions Block */}
      <section id="faqs-accordion-list" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-left">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                id={`accordion-slot-${faq.id}`}
                className="bg-zinc-950 border border-zinc-950 rounded-lg overflow-hidden transition-all duration-300"
              >
                {/* Accordion header wrapper */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className={`w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer transition-colors ${
                    isOpen 
                      ? "bg-brand-red text-white" 
                      : "bg-zinc-950 text-gray-300 hover:text-white hover:bg-zinc-900/40"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-4 items-center pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? "text-white" : "text-brand-red"}`} />
                    <span className="font-display font-bold text-sm sm:text-base tracking-tight select-none">
                      {faq.question}
                    </span>
                  </div>
                  
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : "text-gray-500"}`} />
                </button>

                {/* Question body text wrapper with slide effect */}
                {isOpen && (
                  <div className="p-6 bg-zinc-100 border-x border-b border-zinc-900 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-sans">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Live Support Help banner */}
      <section id="faq-live-banner" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-zinc-950 p-8 rounded-xl border border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 blur-glow pointer-events-none" />
        
        <div className="relative z-10 space-y-4 max-w-lg mx-auto">
          <Mail className="w-10 h-10 text-brand-red animate-pulse mx-auto" />
          <h3 className="font-display font-extrabold text-lg text-white uppercase tracking-tight">
            STILL HAVE SPECIAL UNCHECKED INQUIRIES?
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Our admin team and head coaching corner is always happy to outline directions, custom youth schedules, or medical sparring parameters.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs text-gray-400">
            <span className="flex items-center gap-1.5"><PhoneIcon /> +44 7944 857681</span>
            <span className="hidden sm:inline text-gray-600">&bull;</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-brand-red" /> 30 Hay Currie St, London</span>
          </div>
        </div>
      </section>

    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
