import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { companyConfig } from '../../data/company';
import { servicesData } from '../../data/services';
import { projectsData } from '../../data/projects';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#050811] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Verified Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-white font-heading font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#050811] rounded-[6px] flex items-center justify-center">
                  <span className="font-mono text-xs font-black text-cyan-400">IOT</span>
                </div>
              </div>
              <span>IOT Communication</span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{t.footer.verifiedBadge}</span>
            </div>

            {/* Candidate Disclaimer Note */}
            <div className="text-[11px] text-slate-400 border-l border-slate-700/80 pl-3 py-0.5">
              {t.footer.candidateDisclaimer}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              {t.footer.colSolutions}
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {language === 'vi' ? srv.titleVi : srv.titleEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products & Work */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              {t.footer.colProjects}
            </h4>
            <ul className="space-y-2 text-xs">
              {projectsData.slice(0, 5).map((proj) => (
                <li key={proj.id}>
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {proj.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              {t.footer.colContact}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={`tel:${companyConfig.phone}`}
                className="flex items-start gap-2.5 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{companyConfig.phone}</span>
              </a>

              <a
                href={`mailto:${companyConfig.email}`}
                className="flex items-start gap-2.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="break-all">{companyConfig.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {language === 'vi' ? companyConfig.address : companyConfig.addressEn}
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  {language === 'vi' ? companyConfig.officeHoursVi : companyConfig.officeHoursEn}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Clean Links */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {t.footer.allRights}
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              {t.footer.aboutUs}
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              {t.nav.contact}
            </Link>
            <span className="text-slate-700">|</span>
            <span>{language === 'vi' ? companyConfig.taglineVi : companyConfig.taglineEn}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
