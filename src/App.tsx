import { AppContextProvider, useApp } from "./components/AppContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Subsidiaries from "./components/Subsidiaries";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AboutPage from "./components/AboutPage";
import SubsidiariesPage from "./components/SubsidiariesPage";
import BeuVerifyPage from "./components/BeuVerifyPage";
import BeuDigitalPage from "./components/BeuDigitalPage";
import BeuFinancePage from "./components/BeuFinancePage";
import BeuDevelopPage from "./components/BeuDevelopPage";
import BeuEducationPage from "./components/BeuEducationPage";
import { motion, AnimatePresence } from "motion/react";

function AppContent() {
  const { currentRoute } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white selection:bg-[#FFD700] selection:text-black scroll-smooth relative overflow-x-hidden">
      {/* Elegant Dark Subtle Ambient radial glow from the theme */}
      <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #FFD7000e 0%, transparent 70%)" }}></div>
      
      {/* Decorative top right lightning vector from the theme */}
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none overflow-hidden">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="0.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>

      {/* Navigation */}
      <Navbar />
      
      {/* Pages Router View with Fade Animate transitions */}
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {currentRoute === "/" && (
              <>
                <Hero />
                <Subsidiaries />
                <WhyChooseUs />
                <Stats />
                <Testimonials />
                <Contact />
              </>
            )}
            {currentRoute === "/about" && <AboutPage />}
            {currentRoute === "/subsidiaries" && <SubsidiariesPage />}
            {currentRoute === "/beu-verify" && <BeuVerifyPage />}
            {currentRoute === "/beu-digital" && <BeuDigitalPage />}
            {currentRoute === "/beu-finance" && <BeuFinancePage />}
            {currentRoute === "/beu-develop" && <BeuDevelopPage />}
            {currentRoute === "/beu-education" && <BeuEducationPage />}
            {currentRoute === "/contact" && (
              <div className="py-8 bg-black">
                <Contact />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}
