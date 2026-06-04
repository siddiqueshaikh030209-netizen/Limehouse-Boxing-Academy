import { useState, useEffect } from "react";
import { Menu, X, Phone, Trophy, ShieldAlert, Award } from "lucide-react";
import CrownLogo from "./CrownLogo";

interface HeaderProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onOpenTrialModal: () => void;
  alertCount: number;
}

export default function Header({ currentTab, setTab, onOpenTrialModal, alertCount }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scrolling to add frosted-glass effect for the sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "programs", label: "Programs" },
    { key: "success", label: "Success Stories" },
    { key: "reviews", label: "Reviews" },
    { key: "gallery", label: "Gallery" },
    { key: "faq", label: "FAQ" },
    { key: "contact", label: "Contact" },
  ];

  const handleNavClick = (key: string) => {
    setTab(key);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-red/20 shadow-lg py-3"
          : "bg-gradient-to-b from-brand-black/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div 
            id="logo-brand-container"
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <div className="relative w-12 h-12 overflow-hidden rounded-md shadow-md transition-transform duration-300 group-hover:scale-105">
              <CrownLogo variant="solid-red" className="w-full h-full" />
            </div>
            <div>
              <span className="font-display font-bold text-xl sm:text-2xl text-zinc-900 tracking-tight uppercase block leading-none">
                LIMEHOUSE
              </span>
              <span className="text-[10px] font-mono font-semibold tracking-[0.25em] text-brand-red block mt-0.5">
                BOXING ACADEMY
              </span>
            </div>
          </div>

          {/* Desktop Navigation Link Menu */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                id={`nav-${item.key}`}
                onClick={() => handleNavClick(item.key)}
                className={`px-3 py-2 font-display text-sm tracking-wide font-medium rounded-md uppercase transition-colors duration-200 cursor-pointer ${
                  currentTab === item.key
                    ? "text-brand-red bg-brand-red/5 border-b-2 border-brand-red"
                    : "text-zinc-700 hover:text-brand-red hover:bg-zinc-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Menu Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Private CRM Dashboard Link */}
            <button
              id="admin-dashboard-access-btn"
              onClick={() => handleNavClick("admin")}
              className={`relative p-2 rounded-full cursor-pointer hover:bg-brand-red/10 text-zinc-600 hover:text-brand-red transition-all ${
                currentTab === "admin" ? "text-brand-red bg-brand-red/10" : ""
              }`}
              title="Academy Lead CRM Board"
            >
              <Trophy className="w-5 h-5" />
              {alertCount > 0 && (
                <span className="absolute -top-1 -right-0.5 bg-brand-red-light animate-pulse text-white text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {alertCount}
                </span>
              )}
            </button>

            {/* Click-to-Call Hotline */}
            <a
              id="phone-hotline-header-link"
              href="tel:+447944857681"
              className="flex items-center gap-2 text-sm font-mono text-zinc-700 hover:text-brand-red transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-brand-red animate-bounce" />
              <span>+44 7944 857681</span>
            </a>

            {/* Core Funnel Trial CTA */}
            <button
              id="header-cta-trial-btn"
              onClick={onOpenTrialModal}
              className="relative px-5 py-2.5 bg-brand-red hover:bg-brand-red-light text-white font-display text-xs font-bold tracking-wider uppercase rounded overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Book Free Trial</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-brand-red-light opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-2">
            {/* CRM Icon for simple audit/viewing on mobile */}
            <button
              id="admin-dashboard-mobile-btn"
              onClick={() => handleNavClick("admin")}
              className="relative p-2 text-gray-400 hover:text-brand-red cursor-pointer"
            >
              <Trophy className="w-5 h-5" />
              {alertCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-brand-red rounded-full"></span>
              )}
            </button>

            {/* Mobile Call CTA */}
            <a
              id="mobile-call-action-header"
              href="tel:+447944857681"
              className="p-2 text-zinc-700 hover:text-brand-red cursor-pointer"
            >
              <Phone className="w-5 h-5 animate-pulse" />
            </a>

            {/* Navigation Hamburger Toggle */}
            <button
              id="mobile-navigation-hamburger-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-brand-red cursor-pointer focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay Panel */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-overlay-panel" className="lg:hidden absolute top-[100%] left-0 right-0 bg-brand-black border-b border-brand-red/30 py-4 px-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                id={`mobile-nav-${item.key}`}
                onClick={() => handleNavClick(item.key)}
                className={`py-3 px-4 font-display text-sm font-semibold tracking-wider text-left rounded-md uppercase transition-all ${
                  currentTab === item.key
                    ? "text-brand-red bg-brand-red/10 border-l-4 border-brand-red"
                    : "text-zinc-700 hover:text-brand-red hover:bg-zinc-100"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <button
                id="mobile-drawer-cta-trial-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full py-3 bg-brand-red hover:bg-brand-red-light text-white font-display text-center font-bold tracking-wider uppercase rounded shadow-lg transition-all"
              >
                Book Your Free Practice Trial
              </button>
              <div className="flex justify-between items-center text-xs font-mono text-gray-500 px-4">
                <span>Call Us Now:</span>
                <a href="tel:+447944857681" className="text-zinc-900 font-bold hover:text-brand-red">+44 7944 857681</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
