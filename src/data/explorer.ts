import { HeartPulse, BedDouble, Sparkles, Building2, Pill, Hotel, UtensilsCrossed, GraduationCap, Store, Lightbulb, Globe, LayoutTemplate, Smartphone, LucideIcon } from "lucide-react";

type Bilingual = { en: string; am: string };

export interface ExplorerOption {
  id: string;
  icon: LucideIcon;
  label: Bilingual;
  hint: Bilingual;
  // Either another question, or a solution from data/solutions.ts
  next?: ExplorerQuestion;
  solutionId?: string;
}

export interface ExplorerQuestion {
  question: Bilingual;
  options: ExplorerOption[];
}

// A short decision tree: two answers lead a visitor from "who are you" to one fitting system
export const explorerTree: ExplorerQuestion = {
  question: { en: "What kind of organization are you?", am: "ምን አይነት ድርጅት ነዎት?" },
  options: [
    {
      id: "health",
      icon: HeartPulse,
      label: { en: "Healthcare", am: "ጤና" },
      hint: { en: "Hospitals, clinics, pharmacies", am: "ሆስፒታሎች፣ ክሊኒኮች፣ ፋርማሲዎች" },
      next: {
        question: { en: "What should run smoothly first?", am: "መጀመሪያ በሥርዓት እንዲሰራ የሚፈልጉት?" },
        options: [
          {
            id: "health-hospital",
            icon: Building2,
            label: { en: "The whole hospital", am: "ሙሉ ሆስፒታሉ" },
            hint: { en: "Patients, doctors, lab, billing", am: "ታካሚዎች፣ ሐኪሞች፣ ላብ፣ ክፍያ" },
            solutionId: "hospital",
          },
          {
            id: "health-pharmacy",
            icon: Pill,
            label: { en: "The pharmacy", am: "ፋርማሲው" },
            hint: { en: "Stock, expiry dates, sales", am: "ክምችት፣ የማብቂያ ቀን፣ ሽያጭ" },
            solutionId: "pharmacy",
          },
        ],
      },
    },
    {
      id: "hospitality",
      icon: BedDouble,
      label: { en: "Hospitality", am: "መስተንግዶ" },
      hint: { en: "Hotels, restaurants, cafés", am: "ሆቴሎች፣ ሬስቶራንቶች፣ ካፌዎች" },
      next: {
        question: { en: "Where do you want to start?", am: "ከየት መጀመር ይፈልጋሉ?" },
        options: [
          {
            id: "hospitality-hotel",
            icon: Hotel,
            label: { en: "Rooms & front desk", am: "ክፍሎች እና የፊት ጠረጴዛ" },
            hint: { en: "Bookings, guests, housekeeping", am: "ቦታ ማስያዝ፣ እንግዶች፣ ፅዳት" },
            solutionId: "hotel",
          },
          {
            id: "hospitality-restaurant",
            icon: UtensilsCrossed,
            label: { en: "Restaurant & café", am: "ሬስቶራንት እና ካፌ" },
            hint: { en: "Menus, orders, kitchen", am: "ሜኑ፣ ትዕዛዝ፣ ወጥ ቤት" },
            solutionId: "restaurant",
          },
        ],
      },
    },
    {
      id: "web",
      icon: Globe,
      label: { en: "A website or app", am: "ድረገጽ ወይም መተግበሪያ" },
      hint: { en: "Company site, online store, app", am: "የኩባንያ ገጽ፣ የመስመር ላይ መደብር፣ መተግበሪያ" },
      next: {
        question: { en: "What should it do?", am: "ምን እንዲሰራ ይፈልጋሉ?" },
        options: [
          {
            id: "web-site",
            icon: LayoutTemplate,
            label: { en: "Win customers online", am: "በመስመር ላይ ደንበኞችን ማግኘት" },
            hint: { en: "Website, online store, bookings", am: "ድረገጽ፣ መደብር፣ ቦታ ማስያዝ" },
            solutionId: "website",
          },
          {
            id: "web-app",
            icon: Smartphone,
            label: { en: "Power a product or service", am: "ምርት ወይም አገልግሎት ማንቀሳቀስ" },
            hint: { en: "Web or mobile app, platform", am: "የዌብ ወይም የሞባይል መተግበሪያ" },
            solutionId: "custom",
          },
        ],
      },
    },
    {
      id: "other",
      icon: Sparkles,
      label: { en: "Something else", am: "ሌላ ነገር" },
      hint: { en: "Education, retail, a new idea", am: "ትምህርት፣ ንግድ፣ አዲስ ሀሳብ" },
      next: {
        question: { en: "Which is closest to you?", am: "ለእርስዎ የሚቀርበው የትኛው ነው?" },
        options: [
          {
            id: "other-school",
            icon: GraduationCap,
            label: { en: "School or university", am: "ትምህርት ቤት ወይም ዩኒቨርሲቲ" },
            hint: { en: "Students, grades, tuition", am: "ተማሪዎች፣ ውጤት፣ ክፍያ" },
            solutionId: "school",
          },
          {
            id: "other-erp",
            icon: Store,
            label: { en: "Shops, stock & branches", am: "ሱቆች፣ ክምችት እና ቅርንጫፎች" },
            hint: { en: "Inventory, sales, customers", am: "ክምችት፣ ሽያጭ፣ ደንበኞች" },
            solutionId: "erp",
          },
          {
            id: "other-custom",
            icon: Lightbulb,
            label: { en: "A completely new idea", am: "ፍጹም አዲስ ሀሳብ" },
            hint: { en: "Apps, platforms, products", am: "መተግበሪያዎች፣ መድረኮች፣ ምርቶች" },
            solutionId: "custom",
          },
        ],
      },
    },
  ],
};

// Handoff so "Request this system" can pre-select the form on the Solutions page
export const REQUEST_PREFILL_KEY = "beu_request_solution";
