import React, { useState } from "react";
import { Check, Flame, ChevronRight, Loader2 } from "lucide-react";

interface LeadFormProps {
  initialGoal?: string;
  sourceLabel?: string;
  onSuccessSubmit?: () => void;
}

export default function LeadForm({ initialGoal = "General Fitness", sourceLabel = "Standard Form", onSuccessSubmit }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    experienceLevel: "Beginner",
    goal: initialGoal,
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.name || !formData.phone || !formData.email) {
      setError("Please complete all required fields (Name, Phone, Email)");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Form submission error. Please try again.");
      }

      setSuccess(true);
      if (onSuccessSubmit) {
        onSuccessSubmit();
      }
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Feel free to call us!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id={`lead-form-${sourceLabel.toLowerCase().replace(/\s+/g, '-')}`} className="bg-brand-black p-6 sm:p-8 rounded-lg border-2 border-brand-red/30 shadow-2xl relative">
      <div className="absolute -top-3.5 left-4 bg-brand-red text-white text-[9px] font-mono tracking-widest uppercase font-bold px-3 py-1 flex items-center gap-1 rounded shadow">
        <Flame className="w-3 h-3 animate-pulse text-yellow-300 fill-yellow-300" />
        LIVE LEADS ENQUIRY BOARD
      </div>

      {success ? (
        <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-brand-red/10 border-2 border-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-brand-red font-bold animate-bounce" />
          </div>
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
            SPOT RESERVED!
          </h3>
          <p className="text-gray-300 text-sm max-w-sm mx-auto leading-relaxed">
            Congratulations, <strong className="text-white">{formData.name}</strong>! Your free trial request is logged on our system and an alert has been dispatched to Head Coach Tony.
          </p>
          <div className="bg-brand-red/5 p-4 rounded-md border border-brand-red/20 mt-6 max-w-sm mx-auto text-left">
            <h4 className="font-mono text-xs font-semibold text-brand-red uppercase mb-1">✓ Instant Admin Notification triggered</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              We will call your number <strong className="text-white">{formData.phone}</strong> shortly to lock in your booking date. No gear needed!
            </p>
          </div>
          <button
            onClick={() => {
              setSuccess(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                experienceLevel: "Beginner",
                goal: initialGoal,
                message: ""
              });
            }}
            className="mt-6 text-xs font-mono text-gray-500 hover:text-brand-red underline uppercase tracking-widest block mx-auto py-1"
          >
            Submit another details form
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight">
              Reserve Your SPOT
            </h3>
            <p className="text-gray-400 text-xs">
              First session is 100% free. No obligations. No credit cards.
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-950/40 border border-brand-red rounded text-brand-red text-xs font-mono">
              ⚠ {error}
            </div>
          )}

          {/* Form Fields Grid */}
          <div className="space-y-3.5">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5 align-middle">
                Your Full Name <span className="text-brand-red font-bold">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Thomas Hearns"
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-red text-white text-sm rounded p-2.5 outline-none font-sans transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5">
                  Mobile Number <span className="text-brand-red font-bold">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +44 79XX XXXXXX"
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-red text-white text-sm rounded p-2.5 outline-none font-mono transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5">
                  Email Address <span className="text-brand-red font-bold">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. hearb@gmail.com"
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-red text-white text-sm rounded p-2.5 outline-none font-sans transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5">
                  Boxing Experience
                </label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-red-light text-white text-xs rounded p-2.5 outline-none cursor-pointer transition-all uppercase font-mono"
                >
                  <option value="Beginner">Beginner (No Training)</option>
                  <option value="Intermediate">Some Punching Habits</option>
                  <option value="Competitive">Active Competitor ABA</option>
                  <option value="KidTeen">Kid / Teen Signup</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5">
                  Desired Program
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-red-light text-white text-xs rounded p-2.5 outline-none cursor-pointer transition-all uppercase font-mono"
                >
                  <option value="Adult Conditioning">Adult Fit & Conditioning</option>
                  <option value="Beginner Technical">Beginner Basics</option>
                  <option value="Kids Boxing">Kids Boxing (6-11)</option>
                  <option value="Teen Boxing">Teen Boxing (12-17)</option>
                  <option value="Competitive Match">Competitive Amateur</option>
                  <option value="Personal Coaching">100% 1-To-1 Elite PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5">
                Goal / Special Requests (Optional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your goals with Head Coach Tony..."
                rows={2}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-red text-white text-sm rounded p-2.5 outline-none font-sans transition-all resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-brand-red hover:bg-brand-red-light text-white font-display font-black tracking-widest uppercase py-3.5 px-4 rounded shadow-lg hover:shadow-brand-red/20 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-1 duration-200"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                TRANSMITTING LEAD...
              </>
            ) : (
              <>
                RESERVE MY FREE SESSION NOW
                <ChevronRight className="w-5 h-5 text-red-100" />
              </>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-gray-500 pt-1">
            <span>✓ SECURED TRANSACTION</span>
            <span>✓ PRIVATE DATABASE</span>
            <span>✓ NO SPAM GUARANTEE</span>
          </div>
        </form>
      )}
    </div>
  );
}
