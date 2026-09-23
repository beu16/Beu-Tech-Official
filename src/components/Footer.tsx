import { useApp } from "./AppContext";
import { Mail, Send, MapPin, Zap } from "lucide-react";
import { Route } from "../types";
import Logo from "./Logo";
import { SUPPORT_EMAIL } from "../lib/sendMessage";

export default function Footer() {
  const { t, navigateTo, language } = useApp();

  const linkClass = "block py-1.5 hover:text-white transition-colors text-left";

  const columns: { title: string; links: { label: string; route: Route }[] }[] = [
    {
      title: t("footerColCompany"),
      links: [
        { label: t("about"), route: "/about" },
        { label: t("solutions"), route: "/solutions" },
        { label: t("contact"), route: "/contact" },
      ],
    },
    {
      title: t("footerColSolutions"),
      links: [
        { label: language === "en" ? "Hospital Management" : "የሆስፒታል አስተዳደር", route: "/solutions" },
        { label: language === "en" ? "Hotel Management" : "የሆቴል አስተዳደር", route: "/solutions" },
        { label: language === "en" ? "School Management" : "የትምህርት ቤት አስተዳደር", route: "/solutions" },
        { label: "Beu Verify", route: "/beu-verify" },
      ],
    },
    {
      title: t("footerColServices"),
      links: [
        { label: language === "en" ? "Web Applications" : "የዌብ መተግበሪያዎች", route: "/solutions" },
        { label: language === "en" ? "Mobile Apps" : "የሞባይል መተግበሪያዎች", route: "/solutions" },
        { label: language === "en" ? "Custom Software" : "ብጁ ሶፍትዌር", route: "/solutions" },
        { label: language === "en" ? "UI/UX Design" : "UI/UX ዲዛይን", route: "/solutions" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-black pt-14 sm:pt-16 pb-10 px-4 sm:px-6 lg:px-8" id="footer-section">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10" id="footer-grid">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-4" id="footer-col-brand">
            <Logo onClick={() => navigateTo("/")} />
            <p className="font-sans text-sm font-semibold text-[#FFD700]">{t("footerDesc")}</p>
            <p className="font-sans text-sm leading-relaxed text-gray-400 max-w-xs">
              {language === "en"
                ? "A software startup from Addis Ababa, building custom systems for organizations of every size."
                : "ለማንኛውም መጠን ላላቸው ድርጅቶች ብጁ ስርዓቶችን የሚገነባ ከአዲስ አበባ የመጣ የሶፍትዌር ጀማሪ ድርጅት።"}
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="col-span-1 lg:col-span-2 space-y-4">
              <h4 className="font-sans text-xs font-bold tracking-wider text-white uppercase">{col.title}</h4>
              <ul className="space-y-1 font-sans text-sm text-gray-400">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button onClick={() => navigateTo(link.route)} className={linkClass}>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect */}
          <div className="col-span-1 lg:col-span-2 space-y-4" id="footer-col-connect">
            <h4 className="font-sans text-xs font-bold tracking-wider text-white uppercase">{t("footerColConnect")}</h4>
            <ul className="space-y-1 font-sans text-sm text-gray-400">
              <li>
                <a href="https://t.me/Beutechsupport" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 py-1.5 hover:text-white transition-colors">
                  <Send className="h-3.5 w-3.5 text-[#FFD700]" />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-flex items-center space-x-2 py-1.5 hover:text-white transition-colors">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#FFD700]" />
                  <span className="break-all">{SUPPORT_EMAIL}</span>
                </a>
              </li>
              <li className="inline-flex items-center space-x-2 py-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#FFD700]" />
                <span>{language === "en" ? "Addis Ababa" : "አዲስ አበባ"}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-center" id="footer-bottom-bar">
          <p className="font-sans text-xs text-gray-500">{t("footerCopyright")}</p>
          <p className="font-sans text-xs text-gray-500 flex items-center space-x-1.5">
            <span>{t("madeWith")}</span>
            <Zap className="h-3 w-3 text-[#FFD700] fill-[#FFD700]" />
            <span>{t("inEthiopia")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
