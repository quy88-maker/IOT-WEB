import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, ArrowUpRight, Code2, Sparkles, Terminal } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { servicesData } from '../../data/services';

export const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setMobileSolutionsOpen(false);
  }, [location.pathname]);

  const techServices = servicesData.filter((s) => s.pillar === 'technology');
  const creativeServices = servicesData.filter((s) => s.pillar === 'creative');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080D18]/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-base font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-cyan-400 p-0.5 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-shadow">
              <div className="w-full h-full bg-[#080D18] rounded-[6px] flex items-center justify-center">
                <span className="font-mono text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  IOT
                </span>
              </div>
            </div>
            <span className="font-heading font-extrabold text-white text-base tracking-tight">
              IOT Communication
            </span>
          </Link>

          {/* Zone 2: Desktop Navigation Links (with Mega Menu on Solutions) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <Link
              to="/"
              className={`hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 ${
                location.pathname === '/' ? 'text-cyan-400 font-semibold' : ''
              }`}
            >
              {t.nav.home}
            </Link>

            <Link
              to="/about"
              className={`hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 ${
                location.pathname === '/about' ? 'text-cyan-400 font-semibold' : ''
              }`}
            >
              {t.nav.about}
            </Link>

            {/* Solutions with Mega Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1 ${
                  location.pathname.startsWith('/services') ? 'text-cyan-400 font-semibold' : ''
                }`}
              >
                <span>{t.nav.solutions}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </Link>

              {/* Mega Menu Dropdown */}
              {megaMenuOpen && (
                <div className="absolute top-full -left-20 w-[580px] pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#0B1222] border border-slate-700/80 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl grid grid-cols-2 gap-5">
                    {/* Pillar 1: Technology */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                        <Code2 className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-semibold text-white tracking-wide uppercase">
                          {t.nav.pillarTechTitle}
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {techServices.map((srv) => (
                          <Link
                            key={srv.id}
                            to={`/services/${srv.slug}`}
                            className="block p-2 rounded-lg hover:bg-slate-800/80 transition-colors group"
                          >
                            <div className="text-xs font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                              {language === 'vi' ? srv.titleVi : srv.titleEn}
                            </div>
                            <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                              {language === 'vi' ? srv.shortDescVi : srv.shortDescEn}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Pillar 2: Creative */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-semibold text-white tracking-wide uppercase">
                          {t.nav.pillarCreativeTitle}
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {creativeServices.map((srv) => (
                          <Link
                            key={srv.id}
                            to={`/services/${srv.slug}`}
                            className="block p-2 rounded-lg hover:bg-slate-800/80 transition-colors group"
                          >
                            <div className="text-xs font-medium text-slate-200 group-hover:text-amber-400 transition-colors">
                              {language === 'vi' ? srv.titleVi : srv.titleEn}
                            </div>
                            <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                              {language === 'vi' ? srv.shortDescVi : srv.shortDescEn}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <Link
                        to="/services"
                        className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                      >
                        <span>{t.nav.allSolutions}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[11px] text-slate-400">
                        {language === 'vi' ? 'Hai trụ cột năng lực số' : 'Two strategic capability pillars'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/projects"
              className={`hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 ${
                location.pathname.startsWith('/projects') ? 'text-cyan-400 font-semibold' : ''
              }`}
            >
              {t.nav.projects}
            </Link>

            <Link
              to="/insights"
              className={`hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 ${
                location.pathname.startsWith('/insights') ? 'text-cyan-400 font-semibold' : ''
              }`}
            >
              {t.nav.insights}
            </Link>

            <Link
              to="/contact"
              className={`hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 ${
                location.pathname === '/contact' ? 'text-cyan-400 font-semibold' : ''
              }`}
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Zone 3: Language Toggle + 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900/90 border border-slate-700/80 rounded-lg p-0.5 text-xs font-mono">
              <button
                onClick={() => setLanguage('vi')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  language === 'vi'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Tiếng Việt"
              >
                VI
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Primary Action Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg shadow-md shadow-cyan-500/20 transition-all whitespace-nowrap shrink-0"
            >
              <span>{t.nav.ctaQuote}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={t.nav.menuToggle}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080D18]/98 border-b border-slate-800 px-4 pt-3 pb-8 space-y-3 backdrop-blur-2xl animate-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            className={`block py-3 text-base font-medium border-b border-slate-800/60 ${
              location.pathname === '/' ? 'text-cyan-400 font-bold' : 'text-slate-200'
            }`}
          >
            {t.nav.home}
          </Link>
          <Link
            to="/about"
            className={`block py-3 text-base font-medium border-b border-slate-800/60 ${
              location.pathname === '/about' ? 'text-cyan-400 font-bold' : 'text-slate-200'
            }`}
          >
            {t.nav.about}
          </Link>

          {/* Solutions Accordion on Mobile */}
          <div className="border-b border-slate-800/60 py-2">
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-medium text-slate-200"
            >
              <span>{t.nav.solutions}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>
            {mobileSolutionsOpen && (
              <div className="pl-3 py-2 space-y-2 border-l border-slate-800 mt-1">
                <Link to="/services" className="block text-xs font-semibold text-cyan-400 py-1">
                  {t.nav.allSolutions} →
                </Link>
                {servicesData.map((s) => (
                  <Link
                    key={s.id}
                    to={`/services/${s.slug}`}
                    className="block text-xs text-slate-300 hover:text-white py-1"
                  >
                    {language === 'vi' ? s.titleVi : s.titleEn}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/projects"
            className={`block py-3 text-base font-medium border-b border-slate-800/60 ${
              location.pathname.startsWith('/projects') ? 'text-cyan-400 font-bold' : 'text-slate-200'
            }`}
          >
            {t.nav.projects}
          </Link>
          <Link
            to="/insights"
            className={`block py-3 text-base font-medium border-b border-slate-800/60 ${
              location.pathname.startsWith('/insights') ? 'text-cyan-400 font-bold' : 'text-slate-200'
            }`}
          >
            {t.nav.insights}
          </Link>
          <Link
            to="/contact"
            className={`block py-3 text-base font-medium border-b border-slate-800/60 ${
              location.pathname === '/contact' ? 'text-cyan-400 font-bold' : 'text-slate-200'
            }`}
          >
            {t.nav.contact}
          </Link>

          <div className="pt-4">
            <Link
              to="/contact"
              className="w-full text-center py-3.5 px-4 block text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/20"
            >
              {t.nav.ctaQuote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
