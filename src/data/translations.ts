export interface Translation {
  // Navigation
  home: string;
  subsidiaries: string;
  about: string;
  contact: string;
  workWithUs: string;
  langToggle: string;
  exploreCompanies: string;
  startProject: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  scrollIndicator: string;

  // Beu Verify
  verifyTitle: string;
  verifyTagline: string;
  verifyDesc: string;
  verifyFeature1Title: string;
  verifyFeature1Desc: string;
  verifyFeature2Title: string;
  verifyFeature2Desc: string;
  verifyFeature3Title: string;
  verifyFeature3Desc: string;
  verifyFeature4Title: string;
  verifyFeature4Desc: string;
  verifyCta: string;

  // Beu Digital
  digitalTitle: string;
  digitalTagline: string;
  digitalDesc: string;
  digitalCta: string;
  productColName: string;
  productColDesc: string;
  pmsTitle: string;
  pmsDesc: string;
  foodTitle: string;
  foodDesc: string;
  qrTitle: string;
  qrDesc: string;
  koksTitle: string;
  koksDesc: string;
  customTitle: string;
  customDesc: string;

  // Beu Finance
  financeTitle: string;
  financeTagline: string;
  financeDesc: string;
  financeCta: string;
  financeFocus1Title: string;
  financeFocus1Desc: string;
  financeFocus2Title: string;
  financeFocus2Desc: string;
  financeFocus3Title: string;
  financeFocus3Desc: string;
  financeFocus4Title: string;
  financeFocus4Desc: string;
  financeFocus5Title: string;
  financeFocus5Desc: string;
  financeFocus6Title: string;
  financeFocus6Desc: string;

  // Beu Develop
  developTitle: string;
  developTagline: string;
  developDesc: string;
  developCta: string;

  // Beu Education
  educationTitle: string;
  educationTagline: string;
  educationDesc: string;
  educationCta: string;
  devService1Title: string;
  devService1Desc: string;
  devService2Title: string;
  devService2Desc: string;
  devService3Title: string;
  devService3Desc: string;
  devService4Title: string;
  devService4Desc: string;
  devService5Title: string;
  devService5Desc: string;
  devService6Title: string;
  devService6Desc: string;
  devService7Title: string;
  devService7Desc: string;
  techStackTitle: string;

  // Why Choose Us
  whyTitle: string;
  whyCard1Title: string;
  whyCard1Desc: string;
  whyCard2Title: string;
  whyCard2Desc: string;
  whyCard3Title: string;
  whyCard3Desc: string;
  whyCard4Title: string;
  whyCard4Desc: string;

  // Stats
  stat1Label: string;
  stat2Label: string;
  stat3Label: string;
  stat4Label: string;

  // Testimonials
  testimonialsTitle: string;
  test1Text: string;
  test1Author: string;
  test2Text: string;
  test2Author: string;
  test3Text: string;
  test3Author: string;

  // Contact / CTA Section
  contactSectionTitle: string;
  contactSectionSubtitle: string;
  contactOption1Title: string;
  contactOption1Cta: string;
  contactOption2Title: string;
  contactOption2Cta: string;
  contactFormTitle: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormMessage: string;
  contactFormSend: string;
  contactSuccessMessage: string;
  contactInfoTitle: string;
  contactTelegram: string;
  contactEmail: string;
  contactLocation: string;

  // About Page
  aboutStoryTitle: string;
  aboutStoryText1: string;
  aboutStoryText2: string;
  aboutMissionTitle: string;
  aboutMissionText: string;
  aboutVisionTitle: string;
  aboutVisionText: string;
  aboutValuesTitle: string;
  aboutValue1Title: string;
  aboutValue1Desc: string;
  aboutValue2Title: string;
  aboutValue2Desc: string;
  aboutValue3Title: string;
  aboutValue3Desc: string;
  aboutValue4Title: string;
  aboutValue4Desc: string;
  aboutTeamTitle: string;
  aboutTeamSubtitle: string;

  // Footer & General
  footerDesc: string;
  footerColCompany: string;
  footerColSubsidiaries: string;
  footerColServices: string;
  footerColConnect: string;
  footerCopyright: string;
  allRightsReserved: string;
  madeWith: string;
  inEthiopia: string;
  viewDetails: string;
}

export const translations: Record<"en" | "am", Translation> = {
  en: {
    home: "Home",
    subsidiaries: "Subsidiaries",
    about: "About",
    contact: "Contact",
    workWithUs: "Work With Us",
    langToggle: "አማርኛ",
    exploreCompanies: "Explore Our Companies",
    startProject: "Start a Project",

    heroTitle: "",
    heroSubtitle: "Let's make your company ahead of others.",
    scrollIndicator: "Scroll Down",

    educationTitle: "Beu Education",
    educationTagline: "Smart Management Systems for Modern Learning Institutions.",
    educationDesc: "Beu Education designs and develops state-of-the-art management systems for universities, colleges, and schools in Ethiopia. We offer everything from grade reporting portals and digital registration systems to complete institutional enterprise resource planning (ERP) suites.",
    educationCta: "Explore Beu Education →",

    verifyTitle: "Beu Verify",
    verifyTagline: "Stop Fake Payments. Start Verifying.",
    verifyDesc: "Beu Verify is Ethiopia's leading transaction verification platform. We help businesses instantly verify Telebirr payments, detect fake screenshots, and eliminate duplicate transactions. From small bakeries to large wholesalers, protect your revenue with real-time verification.",
    verifyFeature1Title: "Instant Verification",
    verifyFeature1Desc: "Verify any payment screenshot or reference in under 2 seconds.",
    verifyFeature2Title: "Fraud Detection",
    verifyFeature2Desc: "Advanced filters to detect photo alterations and duplicate submissions.",
    verifyFeature3Title: "Transaction History",
    verifyFeature3Desc: "A complete searchable cloud log of all your business receipts.",
    verifyFeature4Title: "Affordable Pricing",
    verifyFeature4Desc: "Protect your enterprise starting from just 99 ETB per month.",
    verifyCta: "Try Beu Verify →",

    digitalTitle: "Beu Digital",
    digitalTagline: "Digitizing Ethiopian Business, One System at a Time.",
    digitalDesc: "Beu Digital builds smart digital solutions for the hospitality and retail industry. We transform traditional businesses with cutting-edge technology designed specifically for Ethiopian markets.",
    digitalCta: "Explore Beu Digital →",
    productColName: "Product",
    productColDesc: "Description",
    pmsTitle: "Hotel Management System",
    pmsDesc: "Complete PMS including front desk, room booking, billing, housekeeping, and guest management.",
    foodTitle: "Food Ordering System",
    foodDesc: "Digital ordering for restaurants with kitchen display, waiter app, and online orders.",
    qrTitle: "Smart QR Menu",
    qrDesc: "Contactless QR code menus. Scan, browse, and order without any physical menu needed.",
    koksTitle: "KOKS System",
    koksDesc: "All-in-one cafe and restaurant POS for orders, inventory, staff management, and analytics.",
    customTitle: "Custom Digital Solutions",
    customDesc: "Tailored systems built for your specific business operations.",

    financeTitle: "Beu Finance",
    financeTagline: "Smart Financial Technology for Modern Ethiopia.",
    financeDesc: "Beu Finance builds technology solutions at the intersection of finance and innovation. We empower businesses and individuals with tools to manage, track, and grow their finances in the digital age.",
    financeCta: "Discover Beu Finance →",
    financeFocus1Title: "Financial Analytics",
    financeFocus1Desc: "Interactive dashboards offering real-time business financial tracking.",
    financeFocus2Title: "Payment Integration",
    financeFocus2Desc: "Multi-platform payment gateways connecting Telebirr, CBE Birr, and cards.",
    financeFocus3Title: "Investment Tracking",
    financeFocus3Desc: "A portfolio management suite designed for the emerging Ethiopian capital markets.",
    financeFocus4Title: "Microfinance Tech",
    financeFocus4Desc: "Custom digital lending, saving, and transaction platforms for microfinance institutions.",
    financeFocus5Title: "Automated Accounting",
    financeFocus5Desc: "Smart, automated bookkeeping and tax estimation tools tailored for local SMEs.",
    financeFocus6Title: "Fraud Prevention Systems",
    financeFocus6Desc: "AI-powered, automated transaction monitoring systems that flag suspicious activities.",

    developTitle: "Beu Develop",
    developTagline: "Custom Software. Built for You.",
    developDesc: "Beu Develop is our custom software development arm. From websites to mobile apps and enterprise software, we build exactly what our clients need. No templates. No shortcuts. Just tailored technology solutions built with robust industry-standard stacks.",
    developCta: "Start Your Project →",
    devService1Title: "Website Development",
    devService1Desc: "High-performance business sites, e-commerce portals, custom landing pages.",
    devService2Title: "Mobile App Development",
    devService2Desc: "High-performance iOS & Android apps built natively or cross-platform.",
    devService3Title: "Software Development",
    devService3Desc: "Custom ERP, CRM, inventory systems, and complex business management software.",
    devService4Title: "UI/UX Design",
    devService4Desc: "User-centered visual designs with rich prototype maps and detailed assets.",
    devService5Title: "API & Integration",
    devService5Desc: "Secure, reliable microservices connecting your applications seamlessly.",
    devService6Title: "MVP Development",
    devService6Desc: "Fast, lean product building designed to validate startup concepts quickly.",
    devService7Title: "Maintenance & Support",
    devService7Desc: "Ongoing technical support, bug fixing, and regular cloud deployments.",
    techStackTitle: "Tech Stack We Use",

    whyTitle: "Why Ethiopia's Top Businesses Choose Beu Tech",
    whyCard1Title: "Ethiopian-First",
    whyCard1Desc: "Built specifically for Ethiopian markets, local business regulations, and unique offline conditions.",
    whyCard2Title: "Fast & Modern",
    whyCard2Desc: "Leveraging the absolute latest industry stacks and blazing fast local cloud servers.",
    whyCard3Title: "Secure & Reliable",
    whyCard3Desc: "Enterprise-grade safety, double-encryption protocols, and redundant automatic backups.",
    whyCard4Title: "Local Support",
    whyCard4Desc: "Amharic & English speaking customer support team, active 24/7 via phone and Telegram.",

    stat1Label: "Subsidiaries",
    stat2Label: "Businesses Served",
    stat3Label: "Transactions Verified",
    stat4Label: "Support Availability",

    testimonialsTitle: "What Our Clients Say",
    test1Text: "\"Beu Verify saved my supermarket from fake Telebirr payments. I've caught 12 fake transactions this month alone!\"",
    test1Author: "— Abebe K., Supermarket Owner, Addis Ababa",
    test2Text: "\"The QR menu system from Beu Digital transformed our restaurant. Customers love it, and orders are faster.\"",
    test2Author: "— Sara M., Restaurant Manager, Bole",
    test3Text: "\"Beu Develop built our entire inventory system from scratch. Professional, fast, and exactly what we needed.\"",
    test3Author: "— Dawit T., Wholesale Distributor",

    contactSectionTitle: "Ready to Build Something Great?",
    contactSectionSubtitle: "Whether you need payment verification, digital systems, financial tools, or custom software, we are here to support your growth.",
    contactOption1Title: "Explore Beu Verify",
    contactOption1Cta: "Try Beu Verify Free",
    contactOption2Title: "Work With Us",
    contactOption2Cta: "Contact Beu Tech",
    contactFormTitle: "Send Us a Message",
    contactFormName: "Your Name",
    contactFormEmail: "Email Address",
    contactFormMessage: "How can we help you?",
    contactFormSend: "Send Message",
    contactSuccessMessage: "Thank you for reaching out! Our team will contact you within 24 hours.",
    contactInfoTitle: "Contact Info",
    contactTelegram: "Telegram: @Beutechsupport",
    contactEmail: "Email: info@beutech.cloud",
    contactLocation: "Location: Addis Ababa, Ethiopia",

    aboutStoryTitle: "Our Story",
    aboutStoryText1: "Beu Tech was founded with a singular, clear mission: to accelerate Ethiopia's digital transformation. As a progressive technology holding company, we identify critical infrastructural and commercial challenges within the local economy and build specialized, focused subsidiaries to solve them.",
    aboutStoryText2: "By bringing together top-tier local talent, modern software engineering methodologies, and deep local market understanding, we create technology that empowers businesses, protects revenues, and bridges the digital gap. From micro-merchants in Merkato to large-scale hotel chains in Addis Ababa, our systems are built to be robust, secure, and incredibly fast.",
    aboutMissionTitle: "Our Mission",
    aboutMissionText: "To build reliable, scalable, and beautifully designed digital infrastructure that accelerates growth for businesses across East Africa.",
    aboutVisionTitle: "Our Vision",
    aboutVisionText: "To be the leading technological engine powering Ethiopia's digital economy, making transaction security, digital operations, and smart software accessible to all.",
    aboutValuesTitle: "Our Core Values",
    aboutValue1Title: "Innovation with Purpose",
    aboutValue1Desc: "We don't build tech for tech's sake. Every line of code must solve a real-world Ethiopian business challenge.",
    aboutValue2Title: "Absolute Integrity",
    aboutValue2Desc: "Trust is our primary product. From transaction verification to financial records, security is our paramount promise.",
    aboutValue3Title: "Ethiopian-Centric Design",
    aboutValue3Desc: "Our systems are built ground-up to accommodate low internet connectivity, Amharic language requirements, and local payment patterns.",
    aboutValue4Title: "Uncompromising Excellence",
    aboutValue4Desc: "We believe African tech should meet or exceed international engineering standards. We never compromise on quality.",
    aboutTeamTitle: "Our Leadership Team",
    aboutTeamSubtitle: "A team of dedicated engineers, designers, and business operators committed to shaping the future of African technology.",

    footerDesc: "Welcome to The New Age",
    footerColCompany: "Company",
    footerColSubsidiaries: "Subsidiaries",
    footerColServices: "Services",
    footerColConnect: "Connect",
    footerCopyright: "© 2026 Beu Tech. All rights reserved.",
    allRightsReserved: "All rights reserved.",
    madeWith: "Made with",
    inEthiopia: "in Ethiopia",
    viewDetails: "View Details →"
  },
  am: {
    home: "ዋና ገጽ",
    subsidiaries: "ቅርንጫፍ ኩባንያዎች",
    about: "ስለ እኛ",
    contact: "እውቂያ",
    workWithUs: "አብረን እንስራ",
    langToggle: "English",
    exploreCompanies: "ኩባንያዎቻችንን ያስሱ",
    startProject: "ፕሮጀክት ይጀምሩ",

    heroTitle: "",
    heroSubtitle: "ድርጅትዎን ከሌሎች ቀዳሚ እናደርጋለን።",
    scrollIndicator: "ወደ ታች ይሸብልሉ",

    educationTitle: "ቤዩ ኤጁኬሽን (Beu Education)",
    educationTagline: "ለዘመናዊ የትምህርት ተቋማት ዘመናዊ የማስተዳደሪያ ስርዓቶች።",
    educationDesc: "ቤዩ ኤጁኬሽን በኢትዮጵያ ውስጥ ላሉ ዩኒቨርሲቲዎች፣ ኮሌጆች እና ትምህርት ቤቶች ዘመናዊ የአስተዳደር ስርዓቶችን ይነድፋል እንዲሁም ይገነባል። የክፍል ውጤት ማሳያ (grade reporting portals)፣ የዲጂታል ምዝገባ ስርዓቶችን እና የተሟላ የዩኒቨርሲቲ ERP አስተዳደር መፍትሄዎችን እናቀርባለን።",
    educationCta: "ቤዩ ኤጁኬሽንን ያስሱ →",

    verifyTitle: "ቤዩ ቬሪፋይ (Beu Verify)",
    verifyTagline: "የሀሰት ክፍያዎችን ያስቁሙ። ማረጋገጥ ይጀምሩ።",
    verifyDesc: "ቤዩ ቬሪፋይ የኢትዮጵያ ቀዳሚ የክፍያ ማረጋገጫ መድረክ ነው። ንግዶች የቴሌብር ክፍያዎችን ወዲያውኑ እንዲያረጋግጡ፣ የሀሰት ስክሪንሾቶችን እንዲለዩ እና የተደገሙ ግብይቶችን እንዲያስወግዱ እንረዳለን። ከትንንሽ ዳቦ ቤቶች እስከ ትላልቅ ጅምላ አከፋፋዮች፣ ገቢዎን በቅጽበት ማረጋገጫ ይጠብቁ።",
    verifyFeature1Title: "ፈጣን ማረጋገጫ",
    verifyFeature1Desc: "ማንኛውንም የክፍያ ስክሪንሾት ወይም ማጣቀሻ ከ 2 ሰከንድ ባነሰ ጊዜ ውስጥ ያረጋግጡ።",
    verifyFeature2Title: "የማጭበርበር መከላከል",
    verifyFeature2Desc: "በፎቶዎች ላይ የተደረጉ ለውጦችን እና የተደገሙ ክፍያዎችን ለመለየት የሚያስችል የላቀ ቴክኖሎጂ።",
    verifyFeature3Title: "የግብይት ታሪክ",
    verifyFeature3Desc: "ለእርስዎ የንግድ ደረሰኞች በሙሉ የተሟላ እና በቀላሉ የሚፈለግ የደመና (Cloud) መዝገብ።",
    verifyFeature4Title: "ተመጣጣኝ ዋጋ",
    verifyFeature4Desc: "በወር ከ 99 ብር ጀምሮ ንግድዎን ከአደጋዎች ይጠብቁ።",
    verifyCta: "ቤዩ ቬሪፋይን ይሞክሩ →",

    digitalTitle: "ቤዩ ዲጂታል (Beu Digital)",
    digitalTagline: "የኢትዮጵያን ንግዶች በዲጂታል ማስተካከል፣ አንድ በአንድ።",
    digitalDesc: "ቤዩ ዲጂታል ለእንግዳ ተቀባይነት (Hospitality) እና ለችርቻሮ ንግድ ዘርፍ ዘመናዊ የዲጂታል መፍትሄዎችን ይገነባል። ለኢትዮጵያ ገበያ ተብሎ በተዘጋጀ ዘመናዊ ቴክኖሎጂ ባህላዊ ንግዶችን እናስተካክላለን።",
    digitalCta: "ቤዩ ዲጂታልን ያስሱ →",
    productColName: "ምርት",
    productColDesc: "መግለጫ",
    pmsTitle: "የሆቴል አስተዳደር ስርዓት (PMS)",
    pmsDesc: "ሙሉ የሆቴል አስተዳደር የፊት ጠረጴዛ፣ የክፍል ቦታ ማስያዝ፣ ክፍያ፣ የፅዳት አገልግሎት እና የእንግዳ አስተዳደርን ያካትታል።",
    foodTitle: "የምግብ ማዘዣ ስርዓት",
    foodDesc: "ለሬስቶራንቶች ዲጂታል ማዘዣ የወጥ ቤት ማሳያ፣ የአስተናጋጅ መተግበሪያ እና የመስመር ላይ ትዕዛዞችን ያካተተ ነው።",
    qrTitle: "ስማርት የQR ሜኑ",
    qrDesc: "ንክኪ አልባ የQR ኮድ ሜኑዎች በመጠቀም ስካን ያድርጉ፣ ይመልከቱ፣ ያዝዙ ያለ አካላዊ ሜኑ ሳያስፈልግ።",
    koksTitle: "የKOKS ስርዓት",
    koksDesc: "ሁሉንም በአንድ የያዘ የካፌ እና ሬስቶራንት POS በትዕዛዞች፣ ክምችት፣ ሰራተኞች አስተዳደር እና ትንታኔዎች።",
    customTitle: "ብጁ የዲጂታል መፍትሄዎች",
    customDesc: "ለእርስዎ ልዩ የንግድ ስራዎች ተብሎ የተሰራ ብጁ ዲጂታል መተግበሪያዎች።",

    financeTitle: "ቤዩ ፋይናንስ (Beu Finance)",
    financeTagline: "ለዘመናዊቷ ኢትዮጵያ አስተማማኝ የፋይናንስ ቴክኖሎጂ።",
    financeDesc: "ቤዩ ፋይናንስ በፋይናንስ እና በቴክኖሎጂ መገናኛ ላይ መፍትሄዎችን ይገነባል። ንግዶች እና ግለሰቦች በዲጂታል ዘመን ፋይናንሳቸውን እንዲያስተዳድሩ፣ እንዲከታተሉ እና እንዲያሳድጉ እናበረታታለን።",
    financeCta: "ቤዩ ፋይናንስን ያግኙ →",
    financeFocus1Title: "የፋይናንስ ትንታኔ",
    financeFocus1Desc: "የንግድዎን የፋይናንስ ሁኔታ በቅጽበት ለመከታተል የሚያስችሉ በይነተገናኝ ዳሽቦርዶች።",
    financeFocus2Title: "የክፍያ ትስስር",
    financeFocus2Desc: "ቴሌብርን፣ ሲቢኢ ብርን እና ካርዶችን የሚያገናኙ ባለብዙ-መድረክ የክፍያ መንገዶች።",
    financeFocus3Title: "የኢንቨስትመንት ክትትል",
    financeFocus3Desc: "ለታዳጊው የኢትዮጵያ ካፒታል ገበያ የተነደፈ የኢንቨስትመንት ማስተዳደሪያ ስብስብ።",
    financeFocus4Title: "የማይክሮፋይናንስ ቴክኖሎጂ",
    financeFocus4Desc: "ለማይክሮፋይናንስ ተቋማት የተሰሩ ዲጂታል ብድር፣ ቁጠባ እና የግብይት መድረኮች።",
    financeFocus5Title: "አውቶማቲክ የሂሳብ አያያዝ",
    financeFocus5Desc: "ለአገር ውስጥ አነስተኛ እና መካከለኛ ኢንተርፕራይዞች የተዘጋጀ ዘመናዊ አውቶማቲክ የሂሳብ አያያዝ።",
    financeFocus6Title: "የማጭበርበር መከላከያ ዘዴዎች",
    financeFocus6Desc: "አጠራጣሪ እንቅስቃሴዎችን ፈጥኖ የሚለይ በአርቴፊሻል ኢንተለጀንስ (AI) የሚመራ የግብይት ክትትል።",

    developTitle: "ቤዩ ዴቨሎፕ (Beu Develop)",
    developTagline: "ብጁ ሶፍትዌር። ለእርስዎ የተሰራ።",
    developDesc: "ቤዩ ዴቨሎፕ የእኛ ብጁ ሶፍትዌር ልማት ቅርንጫፍ ነው። ከድረ-ገጾች እስከ ሞባይል መተግበሪያዎች እና እስከ ኢንተርፕራይዝ ሶፍትዌሮች፣ ደንበኞቻችን የሚፈልጉትን በትክክል እንገነባለን። ዝግጁ የሆኑ አብነቶችን አንጠቀምም። አቋራጭ አንሄድም። ለንግድዎ ተስማሚ የሆኑ የቴክኖሎጂ መፍትሄዎችን ብቻ በጠንካራ መሠረት እንገነባለን።",
    developCta: "ፕሮጀክትዎን ይጀምሩ →",
    devService1Title: "የድረ-ገጽ ልማት (Web Development)",
    devService1Desc: "ከፍተኛ ብቃት ያላቸው የንግድ ድረ-ገጾች፣ የኢ-ኮሜርስ መድረኮች እና ማረፊያ ገጾች።",
    devService2Title: "የሞባይል መተግበሪያ ልማት (App Development)",
    devService2Desc: "ለiOS እና አንድሮይድ የሚሆኑ ፈጣን መተግበሪያዎችን በኔቲቭ ወይም በክሮስ-ፕላትፎርም መገንባት።",
    devService3Title: "የሶፍትዌር ልማት (Software Development)",
    devService3Desc: "ብጁ የERP፣ CRM፣ የዕቃ ክምችት (Inventory) ቁጥጥር እና ውስብስብ የንግድ ማስተዳደሪያ ሶፍትዌሮች።",
    devService4Title: "የUI/UX ዲዛይን",
    devService4Desc: "በተጠቃሚዎች ላይ ያተኮሩ ውብ ምስላዊ ዲዛይኖች እና ዝርዝር የፕሮቶታይፕ ካርታዎች።",
    devService5Title: "የAPI እና የስርዓት ትስስር",
    devService5Desc: "መተግበሪያዎችዎን ያለምንም እንከን የሚያገናኙ አስተማማኝ እና ደህንነታቸው የተጠበቀ ማይክሮ ሰርቪሶች።",
    devService6Title: "የMVP ልማት",
    devService6Desc: "የጀማሪ ስራዎችን (Startup) ሃሳቦች በፍጥነት ለመሞከር የሚረዱ ቀላል ግን ሙሉ ምርቶችን መገንባት።",
    devService7Title: "ጥገና እና ቴክኒካዊ ድጋፍ",
    devService7Desc: "ቀጣይነት ያለው የቴክኒክ ድጋፍ፣ የስህተት ማስተካከያዎች እና መደበኛ የደመና ላይ ዝርጋታዎች።",
    techStackTitle: "የምንጠቀምባቸው ቴክኖሎጂዎች",

    whyTitle: "የኢትዮጵያ ግንባር ቀደም ንግዶች ቤዩ ቴክን የሚመርጡበት ምክንያት",
    whyCard1Title: "ለኢትዮጵያ ቅድሚያ",
    whyCard1Desc: "ለኢትዮጵያ ገበያ፣ ለአገር ውስጥ ህጎች እና ለኢንተርኔት መቆራረጥ ተብሎ የተሰራ።",
    whyCard2Title: "ፈጣን እና ዘመናዊ",
    whyCard2Desc: "በጣም ዘመናዊ የሆኑ ቴክኖሎጂዎችን እና እጅግ ፈጣን የአገር ውስጥ የደመና ሰርቨሮችን መጠቀም።",
    whyCard3Title: "ደህንነቱ የተጠበቀ እና አስተማማኝ",
    whyCard3Desc: "የኢንተርፕራይዝ ደረጃ ደህንነት ጥበቃ፣ ጠንካራ ምስጠራ እና የውሂብ ምትኬ (Backup)።",
    whyCard4Title: "የአገር ውስጥ ድጋፍ",
    whyCard4Desc: "በአማርኛ እና በባለሙያዎች የተደገፈ የደንበኞች አገልግሎት ቡድን በስልክ እና በቴሌግራም 24/7 ዝግጁ።",

    stat1Label: "ቅርንጫፍ ኩባንያዎች",
    stat2Label: "የተገለገሉ ንግዶች",
    stat3Label: "የተረጋገጡ ክፍያዎች",
    stat4Label: "የቴክኒክ ድጋፍ ዝግጁነት",

    testimonialsTitle: "የደንበኞቻችን ምስክርነት",
    test1Text: "\"ቤዩ ቬሪፋይ ሱፐርማርኬቴን ከሀሰተኛ የቴሌብር ክፍያዎች አድኖታል። በዚህ ወር ብቻ 12 የሀሰት ክፍያዎችን ይዣለሁ!\"",
    test1Author: "— አበበ ከ.፣ የሱፐርማርኬት ባለቤት፣ አዲስ አበባ",
    test2Text: "\"ከቤዩ ዲጂታል ያገኘነው የQR ሜኑ ስርዓት ሬስቶራንታችንን ቀይሮታል። ደንበኞች ይወዱታል፣ ማዘዝም በጣም ፈጣን ሆኗል።\"",
    test2Author: "— ሳራ መ.፣ የሬስቶራንት ስራ አስኪያጅ፣ ቦሌ",
    test3Text: "\"ቤዩ ዴቨሎፕ የእቃ ክምችት መቆጣጠሪያ ስርዓታችንን ከመሠረቱ ገንብቶልናል። በጣም ፕሮፌሽናል፣ ፈጣን እና ልክ እንደምንፈልገው ነው።\"",
    test3Author: "— ዳዊት ተ.፣ የጅምላ አከፋፋይ",

    contactSectionTitle: "ትልቅ ነገር ለመገንባት ዝግጁ ነዎት?",
    contactSectionSubtitle: "የክፍያ ማረጋገጫ፣ የዲጂታል ስርዓቶች፣ የፋይናንስ መሳሪያዎች ወይም ብጁ ሶፍትዌር ቢፈልጉ፣ እኛ ለእርስዎ ዝግጁ ነን።",
    contactOption1Title: "ቤዩ ቬሪፋይን ያስሱ",
    contactOption1Cta: "ቤዩ ቬሪፋይን በነጻ ይሞክሩ",
    contactOption2Title: "ከእኛ ጋር ይስሩ",
    contactOption2Cta: "ቤዩ ቴክን ያግኙ",
    contactFormTitle: "መልዕክት ይላኩልን",
    contactFormName: "የእርስዎ ስም",
    contactFormEmail: "የኢሜይል አድራሻ",
    contactFormMessage: "እንዴት ልንረዳዎ እንችላለን?",
    contactFormSend: "መልዕክት ላክ",
    contactSuccessMessage: "ስላነጋገሩን እናመሰግናለን! የኛ ቡድን በ 24 ሰአት ውስጥ ያነጋግርዎታል።",
    contactInfoTitle: "የእውቂያ መረጃ",
    contactTelegram: "ቴሌግራም: @Beutechsupport",
    contactEmail: "ኢሜይል: info@beutech.cloud",
    contactLocation: "አድራሻ: አዲስ አበባ, ኢትዮጵያ",

    aboutStoryTitle: "የእኛ ታሪክ",
    aboutStoryText1: "ቤዩ ቴክ የተመሰረተው በአንድ ግልጽ ዓላማ ነው፡ የኢትዮጵያን ዲጂታል ሽግግር ማፋጠን። እንደ ተራማጅ የቴክኖሎጂ ኩባንያ፣ በአገር ውስጥ ኢኮኖሚ ውስጥ ያሉ ቁልፍ የመሰረተ-ልማት እና የንግድ ፈተናዎችን ለይተን በመመልከት፣ እነሱን ለመፍታት ልዩ ትኩረት የሚሰጡ ቅርንጫፍ ኩባንያዎችን እንገነባለን።",
    aboutStoryText2: "ከፍተኛ የአገር ውስጥ ባለሙያዎችን፣ ዘመናዊ የሶፍትዌር ምህንድስና ዘዴዎችን እና ጥልቅ የአገር ውስጥ ገበያ ግንዛቤን በማጣመር ንግዶችን የሚያበረታታ፣ ገቢን የሚጠብቅ እና የዲጂታል ክፍተቱን የሚደፍን ቴክኖሎጂ እንፈጥራለን። ከመረካቶ ትናንሽ ነጋዴዎች ጀምሮ በአዲስ አበባ እስከሚገኙ ትላልቅ የሆቴል ሰንሰለቶች ድረስ ስርዓቶቻችን ጠንካራ፣ ደህንነታቸው የተጠበቀ እና እጅግ ፈጣን እንዲሆኑ ተደርገው የተገነቡ ናቸው።",
    aboutMissionTitle: "የእኛ ተልዕኮ",
    aboutMissionText: "በምስራቅ አፍሪካ ላሉ ንግዶች እድገትን የሚያፋጥኑ አስተማማኝ፣ ሊለኩ የሚችሉ እና በጥንቃቄ የተነደፉ ዲጂታል መሰረተ-ልማቶችን መገንባት።",
    aboutVisionTitle: "የእኛ ራዕይ",
    aboutVisionText: "የግብይት ደህንነትን፣ ዲጂታል አሰራርን እና ብልጥ ሶፍትዌሮችን ለሁሉም ተደራሽ በማድረግ የኢትዮጵያን ዲጂታል ኢኮኖሚ የሚመራ ቀዳሚው የቴክኖሎጂ ሞተር መሆን።",
    aboutValuesTitle: "የእኛ እሴቶች",
    aboutValue1Title: "ዓላማ ያለው ፈጠራ",
    aboutValue1Desc: "ለቴክኖሎጂ ሲባል ብቻ ቴክኖሎጂን አንገነባም። እያንዳንዱ የኮድ መስመር እውነተኛ የኢትዮጵያን ንግድ ፈተና መፍታት አለበት።",
    aboutValue2Title: "ፍጹም ታማኝነት",
    aboutValue2Desc: "እምነት የእኛ ቀዳሚ ምርት ነው። ከክፍያ ማረጋገጫ እስከ ፋይናንስ መዛግብት፣ ደህንነት የእኛ ዋነኛ ቃል ኪዳን ነው።",
    aboutValue3Title: "በኢትዮጵያ ላይ ያተኮረ ዲዛይን",
    aboutValue3Desc: "ስርዓቶቻችን አነስተኛ የኢንተርኔት ግንኙነትን፣ የአማርኛ ቋንቋ ፍላጎቶችን እና የአገር ውስጥ የክፍያ ዘይቤዎችን ከግምት ውስጥ ያስገቡ ናቸው።",
    aboutValue4Title: "ያለድርድር ጥራት",
    aboutValue4Desc: "የአፍሪካ ቴክኖሎጂ ዓለም አቀፍ የምህንድስና ደረጃዎችን ማሟላት ወይም ማለፍ አለበት ብለን እናምናለን። በጥራት ላይ መቼም አንደራደርም።",
    aboutTeamTitle: "የስራ አመራር ቡድናችን",
    aboutTeamSubtitle: "የአፍሪካ ቴክኖሎጂን የወደፊት እጣ ፈንታ ለመቅረጽ ቁርጠኛ የሆኑ መሐንዲሶች፣ ዲዛይነሮች እና የንግድ ባለሙያዎች ቡድን።",

    footerDesc: "እንኳን ወደ አዲሱ ዘመን በደህና መጡ",
    footerColCompany: "ኩባንያ",
    footerColSubsidiaries: "ቅርንጫፎች",
    footerColServices: "አገልግሎቶች",
    footerColConnect: "ትስስር",
    footerCopyright: "© 2026 ቤዩ ቴክ። መብቱ በህግ የተጠበቀ ነው።",
    allRightsReserved: "መብቱ በህግ የተጠበቀ ነው።",
    madeWith: "በፍቅር እና በ",
    inEthiopia: "በኢትዮጵያ የተሰራ",
    viewDetails: "ዝርዝር ይመልከቱ →"
  }
};
