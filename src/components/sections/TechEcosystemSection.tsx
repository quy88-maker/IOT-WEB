import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { TechArchitectureDiagram } from '../ui/TechArchitectureDiagram';
import { Info } from 'lucide-react';

export const TechEcosystemSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0F1D] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            {t.techEcosystem.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            {t.techEcosystem.title}
          </h2>
          <p className="text-base text-slate-300">
            {t.techEcosystem.subtitle}
          </p>
        </div>

        {/* Interactive 5-Layer System Architecture */}
        <TechArchitectureDiagram />

        {/* Technical Disclaimer */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <span>{t.techEcosystem.disclaimer}</span>
        </div>
      </div>
    </section>
  );
};
