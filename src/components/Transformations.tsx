import React, { useState } from "react";
import { TRANSFORMATIONS } from "../data";
import { Quote, Sparkles, MoveRight, ArrowLeftRight } from "lucide-react";

export default function Transformations() {
  const [activeStory, setActiveStory] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const current = TRANSFORMATIONS[activeStory];

  return (
    <div id="transformations-container" className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Absolute glow circles */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-glow animate-pulse pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-glow animate-pulse pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10 items-center">
        
        {/* Story Selector & Description (Left Column) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase block mb-1">
              // PHYSICAL & MENTAL EVOLUTION
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight leading-none">
              REAL RESULTS
            </h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              We don't do quick fixes. We train your stance, your punches, and your mindset. These achievements are born from sweat, discipline, and expert London coaching.
            </p>
          </div>

          {/* Tab buttons to select story */}
          <div className="flex gap-3">
            {TRANSFORMATIONS.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => {
                  setActiveStory(idx);
                  setSliderPosition(50);
                }}
                className={`flex-1 py-3 px-4 font-display text-xs font-bold uppercase rounded tracking-wider transition-all cursor-pointer ${
                  activeStory === idx
                    ? "bg-brand-red text-white shadow-lg shadow-brand-red/10"
                    : "bg-brand-black hover:bg-zinc-900 text-gray-400 hover:text-white border border-zinc-900"
                }`}
              >
                {story.name}
              </button>
            ))}
          </div>

          {/* Active Story Details */}
          <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 rounded px-3 py-1">
              <Sparkles className="w-4 h-4 text-brand-red animate-pulse" />
              <span className="font-mono text-xs font-bold text-white uppercase">
                {current.statValue}
              </span>
            </div>

            <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-tight">
              {current.achievement}
            </h3>

            <div className="p-4 bg-brand-black/90 border-l-2 border-brand-red rounded-r relative">
              <Quote className="absolute top-2 right-2 w-8 h-8 text-brand-red/10 pointer-events-none" />
              <p className="text-gray-300 text-sm italic leading-relaxed">
                "{current.quote}"
              </p>
            </div>
            
            <p className="text-xs text-gray-400 font-mono">
              ★ Active training with Coach Tony • Member since 2024
            </p>
          </div>
        </div>

        {/* Interactive Image Comparisons Selector Slider (Right Column) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Interactive Drag Widget Container */}
          <div 
            id="slider-view-wrapper" 
            className="relative w-full max-w-[480px] aspect-[4/5] rounded-lg overflow-hidden shadow-2xl border-2 border-zinc-900 select-none"
          >
            {/* After Image (Full background) */}
            <img
              src={current.afterImg}
              alt="Trainer After Phase"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* After text marker (Bottom right) */}
            <div className="absolute bottom-4 right-4 bg-brand-red/90 text-white font-mono text-[9px] font-bold tracking-widest px-2.5 py-1 rounded z-20">
              AFTER (TRAINED)
            </div>

            {/* Before Image (Cropped wrapper) */}
            <div 
              style={{ width: `${sliderPosition}%` }}
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-brand-red z-10"
            >
              <img
                src={current.beforeImg}
                alt="Trainer Before Phase"
                referrerPolicy="no-referrer"
                className="absolute inset-y-0 left-0 w-[476px] h-full object-cover max-w-none"
                style={{ width: "476px" }}
              />
              
              {/* Before text marker (Bottom left) */}
              <div className="absolute bottom-4 left-4 bg-zinc-900/90 text-white font-mono text-[9px] font-bold tracking-widest px-2.5 py-1 rounded">
                BEFORE (START)
              </div>
            </div>

            {/* Simulated Slider Handle */}
            <div 
              style={{ left: `${sliderPosition}%` }}
              className="absolute inset-y-0 w-0.5 bg-brand-red z-20 pointer-events-none"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-red border-2 border-white flex items-center justify-center text-white shadow-xl">
                <ArrowLeftRight className="w-4 h-4 text-white hover:scale-110 active:scale-95 transition-all" />
              </div>
            </div>

            {/* Invisible Range Slider Element on top */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Before and After Slider comparison drag tool"
            />
          </div>

          <p className="text-xs font-mono text-gray-500 mt-4 flex items-center gap-1.5 uppercase">
            <MoveRight className="w-3.5 h-3.5 text-brand-red animate-pulse" />
            Drag or slide across the image to evaluate muscle & conditioning changes
          </p>

        </div>

      </div>
    </div>
  );
}
