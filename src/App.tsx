/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ProgramsView from "./components/ProgramsView";
import SuccessView from "./components/SuccessView";
import ReviewsView from "./components/ReviewsView";
import GalleryView from "./components/GalleryView";
import FaqView from "./components/FaqView";
import ContactView from "./components/ContactView";
import AdminDashboard from "./components/AdminDashboard";
import EnquiryModal from "./components/EnquiryModal";
import ExitIntentPopup from "./components/ExitIntentPopup";
import { MoveRight, Phone, MessageSquare, Calendar, ChevronRight } from "lucide-react";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [isTrialModalOpen, setIsTrialModalOpen] = useState<boolean>(false);
  const [modalGoal, setModalGoal] = useState<string>("Adult Conditioning");
  const [alertCount, setAlertCount] = useState<number>(1); // Defaults to 1 for the pre-populated pending lead

  // Active sync count of unattended leads
  const fetchUnreadAlerts = async () => {
    try {
      const res = await fetch("/api/enquiries");
      if (res.ok) {
        const data = await res.json();
        // Count registrations currently marked as 'new' status
        const pending = data.filter((l: any) => l.status === "new").length;
        setAlertCount(pending);
      }
    } catch (e) {
      console.log("Error loading alert badge in app head:", e);
    }
  };

  useEffect(() => {
    fetchUnreadAlerts();
    // Intermittent poll every 10 seconds to keep leads count fresh during demonstrations
    const interval = setInterval(fetchUnreadAlerts, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenTrialModal = (goal?: string) => {
    if (goal) {
      setModalGoal(goal);
    }
    setIsTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setIsTrialModalOpen(false);
  };

  // Render correct page content based on tab
  const renderTabContent = () => {
    switch (currentTab) {
      case "home":
        return <HomeView setTab={setCurrentTab} onOpenTrialModal={() => handleOpenTrialModal("Adult Conditioning")} />;
      case "about":
        return <AboutView />;
      case "programs":
        return <ProgramsView onOpenTrialModal={handleOpenTrialModal} />;
      case "success":
        return <SuccessView onOpenTrialModal={() => handleOpenTrialModal("Adult Conditioning")} />;
      case "reviews":
        return <ReviewsView />;
      case "gallery":
        return <GalleryView />;
      case "faq":
        return <FaqView />;
      case "contact":
        return <ContactView />;
      case "admin":
        return <AdminDashboard onMutationTrigger={fetchUnreadAlerts} />;
      default:
        return <HomeView setTab={setCurrentTab} onOpenTrialModal={() => handleOpenTrialModal("Adult Conditioning")} />;
    }
  };

  const whatsAppMessageUrl = "https://wa.me/447944857681?text=Hello%20Limehouse%20Boxing%20Academy%2C%20I%20would%20like%20to%20book%2520my%20free%20trial%20session%21";

  return (
    <div id="applet-viewport-root" className="min-h-screen bg-brand-black-dark text-zinc-900 flex flex-col relative">
      
      {/* 1. Global Sticky Header Navigation */}
      <Header
        currentTab={currentTab}
        setTab={setCurrentTab}
        onOpenTrialModal={() => handleOpenTrialModal("Adult Conditioning")}
        alertCount={alertCount}
      />

      {/* 2. Primary Page Router Layout transition */}
      <main id="primary-router-enclosure" className="flex-1 w-full relative z-10">
        <div key={currentTab} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          {renderTabContent()}
        </div>
      </main>

      {/* 3. Global Static Footer */}
      <Footer setTab={setCurrentTab} />

      {/* 4. Global Core Leads Popup Modal */}
      <EnquiryModal
        isOpen={isTrialModalOpen}
        onClose={handleCloseTrialModal}
        initialGoal={modalGoal}
      />

      {/* 5. Global exit intent tracker offer */}
      <ExitIntentPopup />

      {/* 6. CONVERSION ANCHOR: Floating Mobile Sticky buttons & Mobile Action Strip */}
      <div 
        id="mobile-bottom-conversion-bar" 
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 border-t border-brand-red/35 backdrop-blur shadow-2xl p-3 flex flex-col gap-2.5"
      >
        {/* Strip top banner: Start Boxing Today */}
        <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-gray-400 uppercase font-bold px-2">
          <span className="text-red-500 flex items-center gap-1">★ START BOXING TODAY</span>
          <span>CAPACITY: 8 SLOTS LEFT</span>
        </div>

        {/* Floating actions buttons list */}
        <div className="grid grid-cols-3 gap-2">
          
          {/* Action 1: Call Now */}
          <a
            href="tel:+447944857681"
            className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded p-2.5 flex flex-col items-center justify-center gap-1 text-[10px] font-mono tracking-wider font-bold transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4 text-brand-red animate-bounce" />
            CALL NOW
          </a>

          {/* Action 2: WhatsApp Chat */}
          <a
            href={whatsAppMessageUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#00e676]/10 hover:bg-[#00e676]/20 border border-[#00e676]/30 text-[#00e676] rounded p-2.5 flex flex-col items-center justify-center gap-1 text-[10px] font-mono tracking-wider font-bold transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#00e676]" />
            WHATSAPP
          </a>

          {/* Action 3: Book Trial */}
          <button
            onClick={() => handleOpenTrialModal("Adult Conditioning")}
            className="bg-brand-red hover:bg-brand-red-light text-white rounded p-2.5 flex flex-col items-center justify-center gap-1 text-[10px] font-display tracking-widest font-extrabold shadow uppercase shrink-0 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white" />
            BOOK TRIAL
          </button>

        </div>
      </div>

      {/* 7. Floating Desktop Direct Sticky Widget on Desktop margins */}
      <div 
        id="desktop-margin-sticky-group" 
        className="hidden sm:flex flex-col gap-3 fixed bottom-8 right-8 z-40"
      >
        {/* WhatsApp Floating badge */}
        <a
          href={whatsAppMessageUrl}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-[#00e676] rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
          title="Direct WhatsApp Booking Chat"
        >
          <MessageSquare className="w-5 h-5 fill-[#00e676]/10" />
        </a>

        {/* Quick Staging Booking bubble */}
        <button
          onClick={() => handleOpenTrialModal("Adult Conditioning")}
          className="bg-brand-red hover:bg-brand-red-light text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer animate-pulse border border-brand-red/30"
          title="Book Your Free Practice Trial"
        >
          <Calendar className="w-5 h-5 text-white" />
        </button>
      </div>

    </div>
  );
}
