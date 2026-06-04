import { useState, useEffect } from "react";
import { X, Sparkles, Flame, Percent } from "lucide-react";
import LeadForm from "./LeadForm";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownThisSession, setHasShownThisSession] = useState(false);

  useEffect(() => {
    // Check if the user has already seen this pop up during their browser session
    const shown = sessionStorage.getItem("exit_intent_shown");
    if (shown) {
      setHasShownThisSession(true);
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !hasShownThisSession && !shown) {
        setIsOpen(true);
        setHasShownThisSession(true);
        sessionStorage.setItem("exit_intent_shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShownThisSession]);

  if (!isOpen) return null;

  return (
    <div id="exit-intent-overlay-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        id="exit-intent-backdrop"
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-brand-black-dark/95 backdrop-blur-md cursor-pointer"
      />

      {/* Box */}
      <div 
        id="exit-intent-box"
        className="relative bg-zinc-950 border-2 border-brand-red w-full max-w-lg rounded-xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-300"
      >
        {/* Urgent header strip */}
        <div className="bg-brand-red text-white py-2 px-4 flex items-center justify-between text-xs font-mono font-bold tracking-widest uppercase">
          <span className="flex items-center gap-1.5 animate-pulse">
            <Flame className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
            LIMITED TIME VISITOR SQUAD SPECIAL
          </span>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white p-0.5 rounded cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex gap-2.5 items-center mb-2.5">
            <div className="w-10 h-10 bg-yellow-500/10 border border-yellow-500/30 rounded-full flex items-center justify-center text-yellow-500 shrink-0">
              <Sparkles className="w-5 h-5 animate-spin" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight">
                WAIT! DON'T LEAVE EMPTY HANDED
              </h2>
              <p className="text-gray-400 text-xs">
                We noticed you leaving. Lock in this bonus before surfing away!
              </p>
            </div>
          </div>

          <div className="bg-brand-red/5 border border-brand-red/20 py-3.5 px-4 rounded-md my-4 flex items-start gap-3">
            <Percent className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
            <div>
              <h4 className="font-sans font-bold text-sm text-white">
                FREE CUSTOM LIMEHOUSE HAND WRAPS
              </h4>
              <p className="text-gray-300 text-xs leading-relaxed mt-0.5">
                Register for your first free trial session right now and we'll gift you a pair of <strong className="text-brand-red">semi-elastic structural boxing hand wraps</strong> (Worth £12) absolutely free on your first session!
              </p>
            </div>
          </div>

          {/* Lead capture form inside */}
          <LeadForm
            initialGoal="Beginner Technical"
            sourceLabel="Exit Intent Offer"
            onSuccessSubmit={() => {
              // automatic dismiss after shortly
              setTimeout(() => setIsOpen(false), 3000);
            }}
          />

          <button
            onClick={() => setIsOpen(false)}
            className="w-full text-center text-xs font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest pt-4 block underline"
          >
            No thanks, I'd rather pay full price for gloves and wraps
          </button>
        </div>
      </div>
    </div>
  );
}
