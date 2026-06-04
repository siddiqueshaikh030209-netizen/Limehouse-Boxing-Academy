import { useState, useEffect } from "react";
import { REVIEWS } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // cycle reviews every 5s

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const current = REVIEWS[currentIndex];

  return (
    <div
      id="testimonials-carousel"
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative quote icon */}
      <div className="absolute top-0 left-0 -translate-x-4 -translate-y-6 text-brand-red/10 pointer-events-none">
        <Quote className="w-24 h-24 rotate-180" />
      </div>

      <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-8 sm:p-12 shadow-2xl relative z-10 overflow-hidden">
        
        {/* Progress horizontal line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-900">
          <div 
            className="h-full bg-brand-red transition-all duration-500" 
            style={{ width: `${((currentIndex + 1) / REVIEWS.length) * 100}%` }}
          />
        </div>

        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Rating STARS */}
          <div className="flex gap-1">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-gray-200 text-base sm:text-lg md:text-xl font-medium tracking-wide leading-relaxed italic max-w-2xl px-2">
            "{current.text}"
          </blockquote>

          {/* User Profile Info */}
          <div className="flex items-center gap-4 pt-4 border-t border-zinc-900/60 w-full max-w-md justify-center">
            {current.authorImg ? (
              <img
                src={current.authorImg}
                alt={current.author}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full border border-brand-red object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center font-bold text-white font-display">
                {current.author[0]}
              </div>
            )}
            <div className="text-left">
              <cite className="font-display font-extrabold text-sm text-white uppercase not-italic block tracking-wide">
                {current.author}
              </cite>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono text-[9px] text-gray-400 font-semibold uppercase bg-brand-red/15 text-brand-red px-1.5 py-0.5 rounded">
                  {current.source === "google" ? "Verified Google Review" : "Academy Member"}
                </span>
                <span className="text-gray-500 text-[10px]">&bull; {current.date}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Manual Navigation Anchors */}
        <div className="flex justify-between items-center mt-8 pt-4 border-t border-zinc-900/40">
          <div className="font-mono text-[10px] text-gray-500">
            SHOWCASE MATCH {currentIndex + 1} OF {REVIEWS.length}
          </div>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              id="carousel-prev"
              className="p-2.5 rounded-full border border-zinc-800 bg-brand-black hover:border-brand-red text-gray-400 hover:text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous reviews match"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              id="carousel-next"
              className="p-2.5 rounded-full border border-zinc-800 bg-brand-black hover:border-brand-red text-gray-400 hover:text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next reviews match"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
