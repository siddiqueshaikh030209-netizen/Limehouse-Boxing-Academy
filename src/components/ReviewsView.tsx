import { REVIEWS } from "../data";
import { Star, MessageSquareCode, Award, Share2, ThumbsUp, HeartHandshake } from "lucide-react";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function ReviewsView() {
  return (
    <div id="reviews-view-page" className="space-y-24 py-12">
      
      {/* Hero Section */}
      <section id="reviews-intro-hero" className="relative py-20 bg-brand-black border-b border-zinc-900 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-glow pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase">
            // UNCOMPROMISED ACCREDITATION REGISTER
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            GOOGLE REVIEWS SHOWCASE
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Read from over 450+ verified East London residents about stance work, shadow-boxing intensity, youth values, and boxing transformation guides.
          </p>
        </div>
      </section>

      {/* 1. COMPREHENSIVE REVIEWS RATING STATUS STATS */}
      <section id="reviews-stats-row" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-900 flex flex-col justify-center items-center relative overflow-hidden group">
            <div className="w-12 h-12 rounded bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 flex items-center justify-center mb-4">
              <Star className="w-6 h-6 fill-yellow-500" />
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white shrink-0">
              5.0 / 5.0
            </div>
            <p className="font-display text-xs font-bold text-gray-400 tracking-wider uppercase mt-1 mb-1">
              AVERAGE GOOGLE PROFILE RATING
            </p>
            <p className="text-[10px] text-gray-500 font-mono">Prisinte record across E14 populace</p>
          </div>

          <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-900 flex flex-col justify-center items-center relative overflow-hidden group">
            <div className="w-12 h-12 rounded bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-4">
              <MessageSquareCode className="w-6 h-6" />
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white shrink-0">
              450+ VERIFIED
            </div>
            <p className="font-display text-xs font-bold text-gray-400 tracking-wider uppercase mt-1 mb-1">
              RECORDED USER RATINGS
            </p>
            <p className="text-[10px] text-gray-500 font-mono">Written by beginners, kids & competitors</p>
          </div>

          <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-900 flex flex-col justify-center items-center relative overflow-hidden group">
            <div className="w-12 h-12 rounded bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-green-500 shrink-0">
              100% SUCCESS
            </div>
            <p className="font-display text-xs font-bold text-gray-400 tracking-wider uppercase mt-1 mb-1">
              MEMBER SATISFACTION INDEX
            </p>
            <p className="text-[10px] text-gray-500 font-mono">Fighters retaining active athletic habits</p>
          </div>

        </div>
      </section>

      {/* 2. REVIEWS INDEX GRID */}
      <section id="google-reviews-cards-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
            // LIVE CITATIONS LISTING
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            RECENT VERIFIED USER FEEDBACK
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Limehouse Boxing Academy has built an active, high-converting gym footprint. Here's exactly what our active members say in our reviews stream.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-zinc-950 border border-zinc-900 p-6 rounded-lg flex flex-col justify-between group hover:border-[#8B0000]/30 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header author info */}
                <div className="flex items-center justify-between">
                  {/* User details */}
                  <div className="flex items-center gap-3">
                    {rev.authorImg ? (
                      <img
                        src={rev.authorImg}
                        alt={rev.author}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-full border border-brand-red/20 object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-white font-mono font-black flex items-center justify-center text-xs">
                        {rev.author[0]}
                      </div>
                    )}
                    <div>
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wide leading-none">
                        {rev.author}
                      </h4>
                      <span className="text-[9px] font-mono text-gray-500 block mt-1 uppercase">
                        {rev.date} &bull; Verified Visitor
                      </span>
                    </div>
                  </div>
                  
                  {/* Rating icons */}
                  <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 shrink-0" />
                    ))}
                  </div>
                </div>

                {/* Review Copy */}
                <blockquote className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans mt-2">
                  "{rev.text}"
                </blockquote>
              </div>

              {/* Source tag footer */}
              <div className="pt-4 border-t border-zinc-900/60 mt-4 flex items-center justify-between font-mono text-[9px] text-gray-500">
                <span className="uppercase text-brand-red font-semibold bg-brand-red/10 border border-brand-red/15 py-0.5 px-2 rounded">
                  {rev.source === "google" ? "Google Business Profile" : "Limehouse Academy Lead"}
                </span>
                
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3 text-brand-red animate-pulse" />
                  Helpful? (14)
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TESTIMONIALS SLIDER INSTANCE RE-EMBEDDED */}
      <section id="reviews-slider-subblock" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase block">
            // ROTATING METRIC SHOWCASE
          </span>
          <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
            MEMBER STATS ROUND-ROBIN
          </h3>
        </div>
        <TestimonialsCarousel />
      </section>

      {/* 4. LEAVE A REVIEW CTA */}
      <section id="reviews-submission-banner" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 p-8 sm:p-12 rounded-xl border border-zinc-900 text-center space-y-6 relative overflow-hidden">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 blur-glow pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-lg mx-auto">
            <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-full flex items-center justify-center text-yellow-500 mx-auto animate-pulse">
              <Share2 className="w-5 h-5" />
            </div>

            <h3 className="font-display font-extrabold text-xl sm:text-3xl text-white uppercase tracking-tight leading-none">
              ARE YOU AN ACTIVE BOXING MEMBER?
            </h3>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
              Help us expand the community and reach more local East London youth. Share your honest boxing transformation notes and stances ratings on our Google Maps profile!
            </p>

            <div className="pt-4">
              <a
                href="https://g.page/r/limehouse-boxing-academy/review" // Mock active local google maps review profile link
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-brand-red hover:bg-brand-red-light text-white font-display text-xs font-extrabold tracking-wider uppercase rounded shadow hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                LEAVE A 5-STAR SQUAD REVIEW NOW
              </a>
            </div>

            <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest pt-2">
              ★ THANK YOU • FROM COACH GALLAGHER & LIMEHOUSE STAFF
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
