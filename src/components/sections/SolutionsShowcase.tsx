import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { servicesData } from '../../data/services';

export const SolutionsShowcase: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(0);

  const selectedService = servicesData[selectedServiceIndex] || servicesData[0];

  return (
    <section className="py-24 relative overflow-hidden bg-[#080D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            {t.solutionsSection.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            {t.solutionsSection.title}
          </h2>
          <p className="text-base text-slate-300">
            {t.solutionsSection.subtitle}
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Service List */}
          <div className="lg:col-span-5 space-y-2">
            {servicesData.map((service, index) => {
              const isSelected = index === selectedServiceIndex;
              const numStr = (index + 1).toString().padStart(2, '0');

              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceIndex(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all duration-300 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500/30'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs px-2 py-1 rounded transition-colors ${
                        isSelected
                          ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                          : 'bg-slate-800/80 text-slate-400'
                      }`}
                    >
                      {numStr}
                    </span>

                    <div>
                      <h3
                        className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}
                      >
                        {language === 'vi' ? service.titleVi : service.titleEn}
                      </h3>
                      <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {service.pillar === 'technology' ? 'Technology & Platforms' : 'Communication & Creative'}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Animated Deep-Dive Showcase Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl"
              >
                {/* Hero Showcase Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  <img
                    src={selectedService.heroImage}
                    alt={language === 'vi' ? selectedService.titleVi : selectedService.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/80 text-cyan-400 backdrop-blur-md">
                      {selectedService.pillar === 'technology' ? 'Technology Pillar' : 'Creative Pillar'}
                    </span>
                    <span className="font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                      SOLUTION 0{(selectedServiceIndex + 1)}
                    </span>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                      {language === 'vi' ? selectedService.titleVi : selectedService.titleEn}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {language === 'vi' ? selectedService.fullDescVi : selectedService.fullDescEn}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      {language === 'vi' ? 'Năng lực then chốt' : 'Key Capabilities'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(language === 'vi' ? selectedService.keyFeaturesVi : selectedService.keyFeaturesEn)
                        .slice(0, 4)
                        .map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* CTA link to dedicated service detail page */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      {language === 'vi' ? 'Quy trình 5 bước · Chuyển giao toàn diện' : '5-Step Process · Full IP Handover'}
                    </div>

                    <Link
                      to={`/services/${selectedService.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                    >
                      <span>{t.solutionsSection.viewDetails}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
