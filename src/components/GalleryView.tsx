import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { X, Eye, Flame, Award, HelpCircle } from "lucide-react";
import { getImgUrl } from "./HomeView";

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const categories = [
    { key: "all", label: "SHOW ALL" },
    { key: "training", label: "MITTS & DRILLS" },
    { key: "classes", label: "SQUAD CLASSES" },
    { key: "coaches", label: "COACH LEADERS" },
    { key: "events", label: "GYM EVENTS" },
    { key: "competitions", label: "COMPETITIONS ABA" },
    { key: "community", label: "LOCAL SQUAD COMMUNITY" },
  ];

  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <div id="gallery-view-page" className="space-y-24 py-12">
      
      {/* Page Header text */}
      <section id="gallery-intro-banner" className="relative py-20 bg-brand-black border-b border-zinc-900 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-glow pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase">
            // UNCOMPROMISED PHOTOGRAPHIC EVIDENCE
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            ACADEMY PORTFOLIO
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Browse authentic pictures captured directly inside our E14 training stadium. Watch how youth groups, technical beginners, and elite amateurs drill.
          </p>
        </div>
      </section>

      {/* 1. INTERACTIVE FILTER BUTTONS */}
      <section id="gallery-filters" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-[10px] font-mono tracking-wider font-bold rounded uppercase cursor-pointer transition-all ${
                activeCategory === cat.key
                  ? "bg-brand-red text-white border-b-2 border-white/40 shadow-lg"
                  : "bg-zinc-950 border border-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-900/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. RESPONSIVE MASONRY IMAGES GRID */}
      <section id="gallery-masonry" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden aspect-[4/3] relative cursor-pointer group hover:border-[#8B0000]/30 transition-all duration-300"
            >
              <img
                src={getImgUrl(item.imgUrl)}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 filter saturate-[0.8] brightness-95"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop";
                }}
              />
              
              {/* Eye icon hover overlay */}
              <div className="absolute inset-0 bg-brand-black-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                <div className="w-8 h-8 rounded-full bg-brand-red/90 flex items-center justify-center text-white mb-3 shadow">
                  <Eye className="w-4 h-4" />
                </div>
                
                <h3 className="font-display font-extrabold text-sm sm:text-base text-white uppercase tracking-tight">
                  {item.title}
                </h3>
                
                <span className="font-mono text-[9px] text-brand-red uppercase tracking-wider mt-1">
                  // {item.category} Category
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HD LIGHTBOX MODAL */}
      {selectedItem && (
        <div
          id="gallery-lightbox-overlay"
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-brand-black-dark/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          {/* Close trigger button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 bg-zinc-900/80 hover:bg-zinc-800 text-gray-400 hover:text-white p-2.5 rounded-full transition-all cursor-pointer border border-zinc-800"
            aria-label="Close Lightbox Map"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Picture Box */}
          <div
            onClick={(e) => e.stopPropagation()} // block backdrop click dismissal
            className="relative bg-zinc-950 border border-zinc-900 rounded-lg max-w-4xl w-full p-3 sm:p-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="relative aspect-video rounded overflow-hidden shadow-inner bg-brand-black flex items-center justify-center">
              
              <img
                src={getImgUrl(selectedItem.imgUrl)}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              
              {/* Previous Photo Toggle */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/65 hover:bg-black p-2.5 rounded-full text-white cursor-pointer"
              >
                &lsaquo;
              </button>

              {/* Next Photo Toggle */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/65 hover:bg-black p-2.5 rounded-full text-white cursor-pointer"
              >
                &rsaquo;
              </button>
            </div>

            {/* Bottom descriptors info bar */}
            <div className="pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h3 className="font-display font-extrabold text-lg text-white uppercase tracking-tight">
                  {selectedItem.title}
                </h3>
                <p className="font-mono text-[9px] text-brand-red uppercase mt-0.5 tracking-widest">
                  // CATEGORY GROUP TIER NAME: {selectedItem.category}
                </p>
              </div>

              <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                PHOTO ID: {selectedItem.id} &bull; LIMEHOUSE RAW
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative Bottom summary */}
      <section id="gallery-footer-banner" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-zinc-950 p-6 rounded-lg border border-zinc-900 text-center flex items-center gap-3.5">
        <div className="w-8 h-8 rounded bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center shrink-0">
          <Award className="w-4 h-4 text-brand-red" />
        </div>
        <p className="text-xs text-gray-400 leading-normal text-left">
          <strong className="text-white">England Boxing Affiliation Guidelines:</strong> All photograhic items are sourced directly from active sparring sessions or public events, respecting GDPR. No competitive boxing spars are loaded without supervisor consent.
        </p>
      </section>

    </div>
  );
}
