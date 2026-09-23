import { ReactNode } from "react";

export type Language = "en" | "am";

export type Route =
  | "/"
  | "/about"
  | "/solutions"
  | "/beu-verify"
  | "/contact";

export interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentRoute: Route;
  navigateTo: (route: Route) => void;
  t: (key: string) => string;
}

export interface SubsidiaryInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  color: string;
  icon: ReactNode;
}
