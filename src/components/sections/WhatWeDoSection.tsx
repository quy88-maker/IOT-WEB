import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Sparkles, CheckCircle2, Terminal, Radio, ShieldCheck, Cpu } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const WhatWeDoSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeSide, setActiveSide] = useState<'tech' | 'creative'>('tech');

  return (
    <section id="what-we-do" className="py-24 relative overflow-hidden bg-[#080D18] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            {t.whatWeDo.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            {t.whatWeDo.title}
          </h2>
          <p className="text-base text-slate-300">
            {t.whatWeDo.subtitle}
          </p>
        </div>

        {/* Asymmetric Dual-Engine Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pillar 1: Digital Engineering Workbench (7 cols) */}
          <div
            onMouseEnter={() => setActiveSide('tech')}
            className={`lg:col-span-6 rounded-3xl p-6 sm:p-10 border transition-all duration-500 relative flex flex-col justify-between overflow-hidden group ${
              activeSide === 'tech'
                ? 'bg-slate-900/95 border-cyan-400 shadow-2xl shadow-cyan-500/10'
                : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 flex items-center justify-center shadow-inner">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-400">
                  PILLAR 01 · ENGINEERING
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {t.whatWeDo.pillar1Name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mt-2">
                  {t.whatWeDo.pillar1Desc}
                </p>
              </div>

              {/* Engineering Console Preview Box */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 border-b border-slate-800">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>iot-core-stack.config.ts</span>
                  </span>
                  <span>ES2022 · Strict</span>
                </div>
                <div className="text-slate-300 space-y-1 text-[11px]">
                  <div className="text-slate-500">// Distributed Microservices & Spatial Engine</div>
                  <div><span className="text-purple-400">export const</span> <span className="text-cyan-400">Architecture</span> = &#123;</div>
                  <div className="pl-4 text-slate-400">ticketing: <span className="text-emerald-400">'TOTP Rolling QR + Redis'</span>,</div>
                  <div className="pl-4 text-slate-400">geospatial: <span className="text-emerald-400">'PostGIS + Vector Tiles 60fps'</span>,</div>
                  <div className="pl-4 text-slate-400">concurrency: <span className="text-amber-400">10000</span>,</div>
                  <div>&#125;;</div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                {t.whatWeDo.pillar1Points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Modular Monolith / Cloud Native</span>
              <Link
                to="/services"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>{t.whatWeDo.explorePillar}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Creative & Communication Studio (6 cols) */}
          <div
            onMouseEnter={() => setActiveSide('creative')}
            className={`lg:col-span-6 rounded-3xl p-6 sm:p-10 border transition-all duration-500 relative flex flex-col justify-between overflow-hidden group ${
              activeSide === 'creative'
                ? 'bg-slate-900/95 border-amber-400 shadow-2xl shadow-amber-500/10'
                : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-800/80 text-amber-400 flex items-center justify-center shadow-inner">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-amber-400">
                  PILLAR 02 · CREATIVE
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                  {t.whatWeDo.pillar2Name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mt-2">
                  {t.whatWeDo.pillar2Desc}
                </p>
              </div>

              {/* Creative Production Stage Preview Box */}
              <div className="relative aspect-[16/8] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
                <img
                  src="/src/assets/images/creative_event_production_1793900285613.jpg"
                  alt="Keynote Stage Rigging"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
                    4K Spatial Curved LED
                  </span>
                  <span className="text-amber-400">Live Stage Direction</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                {t.whatWeDo.pillar2Points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">IMC Campaigns · 3D Visuals</span>
              <Link
                to="/services"
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>{t.whatWeDo.explorePillar}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
