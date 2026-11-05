import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, ShieldCheck, Terminal, Activity, Layers, MapPin } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { InteractiveEcosystem } from '../ui/InteractiveEcosystem';

export const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between overflow-hidden pt-4 pb-12">
      {/* Background Radial Glow Atmosphere */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Flagship Typography & Strategic Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-cyan-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{t.hero.eyebrow}</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.08] select-none text-balance"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                {t.hero.title1}
              </span>
              <span className="block text-cyan-400">
                {t.hero.title2}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                {t.hero.title3}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400">
                {t.hero.title4}
              </span>
            </motion.h1>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal"
            >
              {t.hero.description}
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>{t.hero.ctaExplore}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all"
              >
                <span>{t.hero.ctaProjects}</span>
              </Link>
            </motion.div>

            {/* Verified Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex items-center gap-6 text-xs text-slate-400"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>02462537947</span>
              </div>
              <span className="text-slate-700">·</span>
              <div>Hà Nội, Việt Nam</div>
              <span className="text-slate-700">·</span>
              <div className="font-mono text-cyan-400">Enterprise Ready</div>
            </motion.div>
          </div>

          {/* Right Column: Digital Engineering Interactive Sandbox Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <InteractiveEcosystem />
          </motion.div>
        </div>
      </div>

      {/* High-Contrast Technical KPI Strip (Engineering Benchmarks) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl">
          <div className="p-3 border-r border-slate-800/60 last:border-r-0">
            <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 tabular-nums">&lt; 0.5s</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Ingress Gate Scan (Ticket99)</div>
          </div>
          <div className="p-3 border-r border-slate-800/60 last:border-r-0">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">60 FPS</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Vector Tile GIS (izMap)</div>
          </div>
          <div className="p-3 border-r border-slate-800/60 last:border-r-0">
            <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 tabular-nums">10,000+</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Peak Queue Concurrency</div>
          </div>
          <div className="p-3">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">100%</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Full IP Codebase Handover</div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center pt-6">
          <a
            href="#what-we-do"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>{t.hero.scrollHint}</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
