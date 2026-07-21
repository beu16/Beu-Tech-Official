import { useApp } from "./AppContext";
import { Zap, Mail, Send, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const { t, navigateTo, language } = useApp();

  const handleLinkClick = (route: any) => {
    navigateTo(route);
  };

  return (
    <footer className="relative border-t border-white/[0.05] bg-black pt-16 pb-28 md:pb-36 px-4 sm:px-6 lg:px-8" id="footer-section">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-12" id="footer-grid">
          
          {/* Col 1: Brand (4 cols on large screen) */}
          <div className="col-span-2 lg:col-span-4 space-y-6" id="footer-col-brand">
            <div 
              onClick={() => handleLinkClick("/")} 
              className="flex cursor-pointer items-center space-x-2 group w-max"
            >
              <div className="text-[#FFD700]">
                <Zap className="h-5 w-5 fill-current animate-pulse" />
              </div>
              <span className="font-sans text-lg font-bold tracking-tight text-white group-hover:text-[#FFD700] transition-colors">
                Beu <span className="text-[#FFD700]">Tech</span>
              </span>
            </div>
            
            <p className="font-sans text-xs md:text-sm leading-relaxed text-gray-400 max-w-sm">
              {t("footerDesc")}
            </p>

            <div className="flex items-center space-x-3.5 pt-2" id="footer-socials">
              <a href="https://t.me/Beutechsupport" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:border-[#FFD700]/30 hover:text-[#FFD700] hover:bg-[#FFD700]/5 transition-all">
                <Send className="h-4 w-4" />
              </a>
              <a href="mailto:info@beutech.cloud" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:border-[#FFD700]/30 hover:text-[#FFD700] hover:bg-[#FFD700]/5 transition-all">
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:border-[#FFD700]/30 hover:text-[#FFD700] hover:bg-[#FFD700]/5 transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:border-[#FFD700]/30 hover:text-[#FFD700] hover:bg-[#FFD700]/5 transition-all">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Company (2 cols) */}
          <div className="col-span-1 lg:col-span-2 space-y-4" id="footer-col-company">
            <h4 className="font-sans text-xs font-bold tracking-wider text-[#FFD700] uppercase">
              {t("footerColCompany")}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm text-gray-400">
              <li>
                <button onClick={() => handleLinkClick("/about")} className="hover:text-white transition-colors">
                  {t("about")}
                </button>
              </li>
              <li>
                <span className="text-gray-600 block cursor-not-allowed">
                  {language === "en" ? "Careers" : "ስራዎች"} (Hiring)
                </span>
              </li>
              <li>
                <span className="text-gray-600 block cursor-not-allowed">
                  {language === "en" ? "Blog" : "ብሎግ"}
                </span>
              </li>
              <li>
                <span className="text-gray-600 block cursor-not-allowed">
                  {language === "en" ? "Privacy Policy" : "የግላዊነት ፖሊሲ"}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Subsidiaries (2 cols) */}
          <div className="col-span-1 lg:col-span-2 space-y-4" id="footer-col-subs">
            <h4 className="font-sans text-xs font-bold tracking-wider text-[#FFD700] uppercase">
              {t("footerColSubsidiaries")}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm text-gray-400">
              <li>
                <button onClick={() => handleLinkClick("/beu-verify")} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Beu Verify</span>
                  <Zap className="h-3 w-3 text-[#FFD700] fill-[#FFD700]" />
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/beu-digital")} className="hover:text-white transition-colors">
                  Beu Digital
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/beu-finance")} className="hover:text-white transition-colors">
                  Beu Finance
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/beu-develop")} className="hover:text-white transition-colors">
                  Beu Develop
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services (2 cols) */}
          <div className="col-span-1 lg:col-span-2 space-y-4" id="footer-col-services">
            <h4 className="font-sans text-xs font-bold tracking-wider text-[#FFD700] uppercase">
              {t("footerColServices")}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm text-gray-400">
              <li>
                <button onClick={() => handleLinkClick("/beu-develop")} className="hover:text-white transition-colors">
                  Web Development
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/beu-develop")} className="hover:text-white transition-colors">
                  App Development
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/beu-develop")} className="hover:text-white transition-colors">
                  Software Dev
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/beu-develop")} className="hover:text-white transition-colors">
                  UI/UX Design
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect (2 cols) */}
          <div className="col-span-1 lg:col-span-2 space-y-4" id="footer-col-connect">
            <h4 className="font-sans text-xs font-bold tracking-wider text-[#FFD700] uppercase">
              {t("footerColConnect")}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm text-gray-400">
              <li>
                <a href="https://t.me/Beutechsupport" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="mailto:info@beutech.cloud" className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center" id="footer-bottom-bar">
          <p className="font-sans text-xs text-gray-500">
            {t("footerCopyright")} {t("allRightsReserved")}
          </p>
          <p className="font-sans text-xs text-gray-500 flex items-center space-x-1.5 justify-center">
            <span>{t("madeWith")}</span>
            <Zap className="h-3 w-3 text-[#FFD700] fill-[#FFD700] animate-bounce" />
            <span>{t("inEthiopia")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
