import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Route, AppContextType } from "../types";
import { translations, Translation } from "../data/translations";

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("beu_tech_lang");
    if (saved === "en" || saved === "am") return saved;
    return "en";
  });

  const [currentRoute, setCurrentRoute] = useState<Route>(() => {
    const hash = window.location.hash;
    if (!hash || hash === "#" || hash === "#/") return "/";
    const path = hash.replace("#", "") as Route;
    const validRoutes: Route[] = [
      "/",
      "/about",
      "/subsidiaries",
      "/beu-verify",
      "/beu-digital",
      "/beu-finance",
      "/beu-develop",
      "/contact"
    ];
    return validRoutes.includes(path) ? path : "/";
  });

  // Handle browser back/forward and direct hash entry
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === "#" || hash === "#/") {
        setCurrentRoute("/");
        return;
      }
      const path = hash.replace("#", "") as Route;
      const validRoutes: Route[] = [
        "/",
        "/about",
        "/subsidiaries",
        "/beu-verify",
        "/beu-digital",
        "/beu-finance",
        "/beu-develop",
        "/contact"
      ];
      if (validRoutes.includes(path)) {
        setCurrentRoute(path);
      } else {
        setCurrentRoute("/");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (route: Route) => {
    if (route === "/beu-verify") {
      window.open("https://beuverify.beutech.com.et/", "_blank", "noopener,noreferrer");
    }
    window.location.hash = route === "/" ? "#/" : `#${route}`;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("beu_tech_lang", lang);
  };

  const t = (key: string): string => {
    const dict = translations[language] as any;
    if (dict && dict[key] !== undefined) {
      return dict[key];
    }
    // Fallback to English
    const fallbackDict = translations["en"] as any;
    if (fallbackDict && fallbackDict[key] !== undefined) {
      return fallbackDict[key];
    }
    return key;
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, currentRoute, navigateTo, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppContextProvider");
  }
  return context;
}
