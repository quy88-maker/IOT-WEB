import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { ProcessTimeline } from '../ui/ProcessTimeline';

export const HowWeWorkSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-[#080D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            {t.howWeWork.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            {t.howWeWork.title}
          </h2>
          <p className="text-base text-slate-300">
            {t.howWeWork.subtitle}
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <ProcessTimeline />
      </div>
    </section>
  );
};
