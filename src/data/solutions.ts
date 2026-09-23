import {
  Hospital,
  Hotel,
  Globe,
  GraduationCap,
  UtensilsCrossed,
  Pill,
  Boxes,
  ShieldCheck,
  Lightbulb,
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  LucideIcon,
} from "lucide-react";

type Bilingual = { en: string; am: string };

export interface Solution {
  id: string;
  icon: LucideIcon;
  title: Bilingual;
  tagline: Bilingual;
  features: { en: string[]; am: string[] };
  // Shown first and largest: the systems most clients start with
  featured?: boolean;
  // Set for products Beu Tech already runs itself (not built per client)
  ownProduct?: boolean;
  externalUrl?: string;
}

// Every system Beu Tech builds on client request. Shared by the home
// showcase and the full Solutions page so both stay in sync.
export const solutions: Solution[] = [
  {
    id: "hospital",
    icon: Hospital,
    featured: true,
    title: { en: "Hospital Management", am: "የሆስፒታል አስተዳደር ስርዓት" },
    tagline: {
      en: "Patients, doctors, lab, pharmacy and billing in one system.",
      am: "ታካሚዎች፣ ሐኪሞች፣ ላብራቶሪ፣ ፋርማሲ እና ክፍያ በአንድ ስርዓት።",
    },
    features: {
      en: [
        "Patient registration & electronic medical records",
        "Appointments & doctor scheduling",
        "Lab results, pharmacy & billing",
        "Management reports & dashboards",
      ],
      am: [
        "የታካሚ ምዝገባ እና ዲጂታል የህክምና መዝገብ",
        "ቀጠሮ እና የሐኪሞች የስራ ሰሌዳ",
        "የላብራቶሪ ውጤት፣ ፋርማሲ እና ክፍያ",
        "ለአመራሩ ሪፖርቶች እና ዳሽቦርዶች",
      ],
    },
  },
  {
    id: "hotel",
    icon: Hotel,
    featured: true,
    title: { en: "Hotel Management", am: "የሆቴል አስተዳደር ስርዓት" },
    tagline: {
      en: "From front desk to housekeeping, fully digital.",
      am: "ከፊት ጠረጴዛ እስከ ፅዳት አገልግሎት ሙሉ በሙሉ ዲጂታል።",
    },
    features: {
      en: [
        "Room booking & front desk",
        "Guest check in, check out and profiles",
        "Housekeeping, restaurant & bar billing",
        "Occupancy and revenue reports",
      ],
      am: [
        "የክፍል ቦታ ማስያዝ እና የፊት ጠረጴዛ",
        "መግቢያ / መውጫ እና የእንግዳ መረጃ",
        "የፅዳት፣ የሬስቶራንት እና የባር ክፍያ",
        "የክፍል ይዞታ እና የገቢ ሪፖርቶች",
      ],
    },
  },
  {
    id: "website",
    icon: Globe,
    featured: true,
    title: { en: "Websites & Online Stores", am: "ድረገጾች እና የመስመር ላይ መደብሮች" },
    tagline: {
      en: "Fast, beautiful websites that bring you customers, on every screen.",
      am: "በሁሉም ስክሪን ላይ ደንበኞችን የሚያመጡ ፈጣን እና ውብ ድረገጾች።",
    },
    features: {
      en: [
        "Company & business websites",
        "Online stores with secure payments",
        "Booking & reservation pages",
        "Easy to update and ready for Google",
      ],
      am: [
        "የኩባንያ እና የንግድ ድረገጾች",
        "ደህንነቱ የተጠበቀ ክፍያ ያላቸው የመስመር ላይ መደብሮች",
        "የቦታ ማስያዣ ገጾች",
        "በቀላሉ የሚሻሻል፣ ለGoogle ዝግጁ",
      ],
    },
  },
  {
    id: "school",
    icon: GraduationCap,
    title: { en: "School & University Management", am: "የትምህርት ቤት እና ዩኒቨርሲቲ አስተዳደር" },
    tagline: {
      en: "Registration, grades, attendance and tuition in one place.",
      am: "ምዝገባ፣ ውጤት፣ ክትትል እና የትምህርት ክፍያ በአንድ ቦታ።",
    },
    features: {
      en: [
        "Student registration & records",
        "Grades, report cards & attendance",
        "Online tuition payments & receipts",
        "Parent SMS notifications",
      ],
      am: [
        "የተማሪዎች ምዝገባ እና መዝገብ",
        "ውጤት፣ የውጤት ካርድ እና የመገኘት ክትትል",
        "የመስመር ላይ የትምህርት ክፍያ እና ደረሰኝ",
        "ለወላጆች የSMS ማሳወቂያ",
      ],
    },
  },
  {
    id: "restaurant",
    icon: UtensilsCrossed,
    title: { en: "Restaurant & Café POS", am: "የሬስቶራንት እና ካፌ POS" },
    tagline: {
      en: "QR menus, table ordering and kitchen display.",
      am: "የQR ሜኑ፣ የጠረጴዛ ትዕዛዝ እና የወጥ ቤት ማሳያ።",
    },
    features: {
      en: [
        "Smart QR menu & table ordering",
        "Kitchen display & waiter app",
        "Ingredient stock tracking",
        "Daily sales analytics",
      ],
      am: [
        "ስማርት የQR ሜኑ እና የጠረጴዛ ትዕዛዝ",
        "የወጥ ቤት ማሳያ እና የአስተናጋጅ መተግበሪያ",
        "የግብአት ክምችት ክትትል",
        "የዕለት ሽያጭ ትንታኔ",
      ],
    },
  },
  {
    id: "pharmacy",
    icon: Pill,
    title: { en: "Pharmacy Management", am: "የፋርማሲ አስተዳደር ስርዓት" },
    tagline: {
      en: "Drug stock, expiry dates and sales under control.",
      am: "የመድሃኒት ክምችት፣ የማብቂያ ቀን እና ሽያጭ በቁጥጥር ስር።",
    },
    features: {
      en: [
        "Drug inventory with expiry alerts",
        "Prescriptions & point of sale",
        "Supplier purchase orders",
        "Low stock alerts",
      ],
      am: [
        "የመድሃኒት ክምችት ከማብቂያ ቀን ማሳወቂያ ጋር",
        "የሐኪም ትዕዛዝ እና ሽያጭ",
        "ከአቅራቢዎች የግዢ ትዕዛዝ",
        "የክምችት ማነስ ማሳወቂያ",
      ],
    },
  },
  {
    id: "erp",
    icon: Boxes,
    title: { en: "Inventory, ERP & CRM", am: "የዕቃ ክምችት፣ ERP እና CRM" },
    tagline: {
      en: "Run every branch, sale and customer from one dashboard.",
      am: "ሁሉንም ቅርንጫፍ፣ ሽያጭ እና ደንበኛ ከአንድ ዳሽቦርድ ያስተዳድሩ።",
    },
    features: {
      en: [
        "Inventory across every branch",
        "Sales, purchasing & accounting",
        "Customer & HR records",
        "Staff access by role",
      ],
      am: [
        "የባለብዙ ቅርንጫፍ ክምችት",
        "ሽያጭ፣ ግዢ እና ሂሳብ አያያዝ",
        "የደንበኞች እና የሰራተኞች መዝገብ",
        "በሚና ላይ የተመሰረተ የሰራተኛ ፈቃድ",
      ],
    },
  },
  {
    id: "verify",
    icon: ShieldCheck,
    title: { en: "Beu Verify", am: "ቤዩ ቬሪፋይ" },
    tagline: {
      en: "Our own payment verification product. Spots fake Telebirr and bank receipts instantly.",
      am: "የራሳችን ምርት። ሀሰተኛ የቴሌብር እና የባንክ ደረሰኞችን ወዲያውኑ ይለዩ።",
    },
    features: {
      en: [
        "Telebirr, CBE Birr, Abyssinia, Awash, Dashen and more",
        "Fake screenshot & duplicate detection",
        "Searchable transaction history",
        "From 99 ETB per month",
      ],
      am: [
        "ቴሌብር፣ ሲቢኢ ብር፣ አቢሲንያ፣ አዋሽ፣ ዳሸን እና ሌሎችም",
        "የሀሰት ስክሪንሾት እና የተደገመ ክፍያ መለየት",
        "በቀላሉ የሚፈለግ የግብይት ታሪክ",
        "በወር ከ 99 ብር ጀምሮ",
      ],
    },
    ownProduct: true,
    externalUrl: "https://beuverify.beutech.com.et/",
  },
  {
    id: "custom",
    icon: Lightbulb,
    title: { en: "Your Idea, Custom Built", am: "የእርስዎ ሀሳብ፣ በብጁ የሚሰራ" },
    tagline: {
      en: "If it runs on a screen, we can build it. Describe it and we'll take it from there.",
      am: "በስክሪን ላይ የሚሰራ ከሆነ፣ ልንገነባው እንችላለን። ይግለጹልን፣ ቀሪውን እኛ እንወስዳለን።",
    },
    features: {
      en: [
        "Web applications & websites",
        "Android & iOS mobile apps",
        "Payment, banking and system integrations",
        "MVPs for startups",
      ],
      am: [
        "የዌብ መተግበሪያዎች እና ድረገጾች",
        "የአንድሮይድ እና iOS የሞባይል መተግበሪያዎች",
        "የክፍያ፣ የባንክ እና የሌሎች ስርዓቶች ትስስር",
        "ለጀማሪ ድርጅቶች (Startups) MVP",
      ],
    },
  },
];

// Three widening rings: where clients start, where they grow, and no limits
export const featuredSolutions = solutions.filter((s) => s.featured);
export const extendedSolutions = solutions.filter((s) => !s.featured && !s.ownProduct && s.id !== "custom");
export const customSolution = solutions.find((s) => s.id === "custom")!;
export const ownProduct = solutions.find((s) => s.ownProduct)!;

export interface ProcessStep {
  icon: LucideIcon;
  title: Bilingual;
  desc: Bilingual;
}

// How a client request turns into delivered software
export const processSteps: ProcessStep[] = [
  {
    icon: MessageSquare,
    title: { en: "Tell Us What You Need", am: "የሚፈልጉትን ይንገሩን" },
    desc: {
      en: "A free call to understand how your organization works today, wherever you are.",
      am: "ድርጅትዎ አሁን እንዴት እንደሚሰራ ለመረዳት ነጻ ምክክር፣ ያሉበት ቦታ ምንም ይሁን።",
    },
  },
  {
    icon: PenTool,
    title: { en: "We Scope & Design", am: "እቅድ እና ዲዛይን" },
    desc: {
      en: "Clear requirements, a clickable prototype and a transparent quote.",
      am: "ግልጽ መስፈርቶች፣ ሊሞከር የሚችል ፕሮቶታይፕ እና ቋሚ ዋጋ።",
    },
  },
  {
    icon: Code2,
    title: { en: "We Build & Test", am: "እንገነባለን፣ እንፈትሻለን" },
    desc: {
      en: "Short sprints with a working demo for you every week.",
      am: "በየሳምንቱ የሚሰራ ማሳያ የሚያዩበት አጭር የስራ ዙሮች።",
    },
  },
  {
    icon: Rocket,
    title: { en: "Launch, Train & Support", am: "ማስጀመር፣ ስልጠና እና ድጋፍ" },
    desc: {
      en: "We deploy, train your staff and stay on for maintenance.",
      am: "ስርዓቱን እናስጀምራለን፣ ሰራተኞችዎን እናሰለጥናለን፣ ጥገናም እንሰጣለን።",
    },
  },
];
