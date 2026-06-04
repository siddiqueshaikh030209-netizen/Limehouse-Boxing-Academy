import { X, Trophy, HeartHandshake } from "lucide-react";
import LeadForm from "./LeadForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGoal?: string;
}

export default function EnquiryModal({ isOpen, onClose, initialGoal = "Adult Conditioning" }: EnquiryModalProps) {
  if (!isOpen) return null;

  return (
    <div id="enquiry-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Frosted dark backdrop click to dismiss */}
      <div 
        id="enquiry-modal-backdrop"
        onClick={onClose}
        className="absolute inset-0 bg-brand-black-dark/90 backdrop-blur-sm cursor-pointer"
      />
      
      {/* Content wrapper with red top glow border */}
      <div 
        id="enquiry-modal-box"
        className="relative bg-zinc-950 border-t-4 border-brand-red w-full max-w-lg rounded-lg shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        <button
          id="enquiry-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 sm:p-6 pb-2">
          <div className="flex gap-2 items-center text-brand-red text-xs font-mono font-bold tracking-widest uppercase mb-1">
            <HeartHandshake className="w-4 h-4 text-brand-red" />
            LIMEHOUSE ACADEMY BLUEPRINT
          </div>
          <h2 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight">
            CLAIM YOUR 1-DAY PASS
          </h2>
          <p className="text-gray-400 text-xs mt-1">
            Fill in your details below and Coach Tony will get in touch with you to schedule your slot. Hands wrapper & glove hire are included.
          </p>
        </div>

        <div className="p-4 sm:p-6 pt-0">
          <LeadForm
            initialGoal={initialGoal}
            sourceLabel="Popup Modal"
            onSuccessSubmit={() => {
              // we can keep the popup or let LeadForm render inside
            }}
          />
        </div>

        <div className="bg-brand-black p-4 border-t border-zinc-900/50 flex items-center justify-center gap-2">
          <Trophy className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">
            No long-term obligations • London East Gym Community
          </span>
        </div>
      </div>
    </div>
  );
}
