import { useState } from "react";
import { useApp } from "./AppContext";
import { Zap, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const { language, setLanguage, currentRoute, navigateTo, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t("home"), route: "/" as const },
    { name: t("subsidiaries"), route: "/subsidiaries" as const },
    { name: t("about"), route: "/about" as const },
    { name: t("contact"), route: "/contact" as const },
  ];

  const handleLanguageToggle = () => {
    setLanguage(language === "en" ? "am" : "en");
  };

  const handleNavClick = (route: any) => {
    navigateTo(route);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div 
            onClick={() => handleNavClick("/")} 
            className="flex cursor-pointer items-center space-x-2 group"
            id="nav-logo-container"
          >
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                filter: ["drop-shadow(0 0 2px rgba(255,215,0,0.3))", "drop-shadow(0 0 10px rgba(255,215,0,0.8))", "drop-shadow(0 0 2px rgba(255,215,0,0.3))"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[#FFD700]"
              id="navbar-logo-icon"
            >
              <svg className="h-6 w-6 text-[#FFD700]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" stroke="currentColor" strokeWidth="8" strokeLinejoin="round"/>
                <polygon points="50,27 70,38 70,62 50,73 30,62 30,38" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" opacity="0.6"/>
                <circle cx="50" cy="50" r="10" fill="currentColor"/>
              </svg>
            </motion.div>
            <span className="font-sans text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#FFD700]">
              Beu <span className="text-[#FFD700]">Tech</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8" id="nav-desktop-links">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`relative font-sans text-sm font-medium transition-colors duration-300 hover:text-white ${
                    isActive ? "text-[#FFD700]" : "text-gray-400"
                  }`}
                  id={`nav-link-${link.route.replace("/", "") || "home"}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FFD700]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Actions: Lang + CTA */}
          <div className="hidden md:flex items-center space-x-4" id="nav-desktop-actions">
            {/* Language Selector */}
            <button
              onClick={handleLanguageToggle}
              className="flex items-center space-x-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-gray-300 hover:bg-white/5 transition-colors duration-300"
              id="lang-toggle-desktop"
            >
              <Globe className="h-3.5 w-3.5 text-gray-400" />
              <span>{language === "en" ? "አማርኛ" : "English"}</span>
            </button>

            {/* Glowing CTA */}
            <button
              onClick={() => handleNavClick("/contact")}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FFC400] px-5 py-2 text-sm font-semibold text-black shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] active:scale-[0.98]"
              id="nav-cta-desktop"
            >
              <span className="relative flex items-center space-x-1">
                <span>{t("workWithUs")}</span>
                <Zap className="h-3.5 w-3.5 fill-current" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3" id="nav-mobile-container">
            {/* Lang Toggle on Mobile header */}
            <button
              onClick={handleLanguageToggle}
              className="flex items-center space-x-1 rounded-full border border-white/10 px-2.5 py-1 text-xs text-gray-300 hover:bg-white/5 transition-colors"
              id="lang-toggle-mobile-header"
            >
              <Globe className="h-3 w-3 text-gray-400" />
              <span className="text-[10px]">{language === "en" ? "አማ" : "EN"}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none"
              id="hamburger-btn"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-white/[0.08] bg-black/95 md:hidden"
            id="mobile-drawer"
          >
            <div className="space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleNavClick(link.route)}
                    className={`block w-full text-left py-3 px-4 rounded-lg font-sans text-base font-semibold transition-all duration-200 ${
                      isActive 
                        ? "bg-white/5 text-[#FFD700] border-l-2 border-[#FFD700]" 
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                    id={`mobile-nav-link-${link.route.replace("/", "") || "home"}`}
                  >
                    {link.name}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-white/5 px-4" id="mobile-drawer-cta-container">
                <button
                  onClick={() => handleNavClick("/contact")}
                  className="flex w-full items-center justify-center space-x-2 rounded-lg bg-[#FFD700] py-3 text-center text-sm font-bold text-black shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                  id="mobile-nav-cta"
                >
                  <span>{t("workWithUs")}</span>
                  <Zap className="h-4 w-4 fill-current" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
