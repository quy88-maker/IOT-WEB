import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, AlertCircle, Terminal, Layers, MapPin, Sparkles, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { projectsData } from '../../data/projects';

export const SelectedWorkSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'platforms' | 'software' | 'data_maps' | 'communication'>('all');

  const ticket99 = projectsData.find((p) => p.id === 'ticket99') || projectsData[0];
  const izmap = projectsData.find((p) => p.id === 'izmap-icaobang') || projectsData[1];
  const cms99 = projectsData.find((p) => p.id === 'cms99') || projectsData[2];
  const km99 = projectsData.find((p) => p.id === 'km99') || projectsData[3];
  const otherProjects = projectsData.filter((p) => !['ticket99', 'izmap-icaobang', 'cms99', 'km99'].includes(p.id));

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 relative overflow-hidden bg-[#070C16] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
              {t.selectedWork.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
              {t.selectedWork.title}
            </h2>
            <p className="text-base text-slate-300">
              {t.selectedWork.subtitle}
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.selectedWork.filterAll}
            </button>
            <button
              onClick={() => setActiveFilter('platforms')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'platforms'
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.selectedWork.filterPlatforms}
            </button>
            <button
              onClick={() => setActiveFilter('software')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'software'
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.selectedWork.filterSoftware}
            </button>
            <button
              onClick={() => setActiveFilter('data_maps')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'data_maps'
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.selectedWork.filterDataMaps}
            </button>
            <button
              onClick={() => setActiveFilter('communication')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'communication'
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.selectedWork.filterCommunication}
            </button>
          </div>
        </div>

        {/* Candidate Projects Disclaimer */}
        <div className="mb-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <span>{t.selectedWork.candidateNotice}</span>
        </div>

        {/* Editorial Layout: If 'all' is selected, display curated flagship layout */}
        {activeFilter === 'all' ? (
          <div className="space-y-16">
            {/* 1. Flagship Marquee Project: Ticket99 (Cinematic Split Showcase) */}
            <div className="bg-gradient-to-br from-slate-900/90 to-[#0A1220] border border-slate-800 rounded-3xl p-6 lg:p-10 shadow-2xl relative overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                      FLAGSHIP PLATFORM
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      TOTP Dynamic QR · Offline Mesh
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                    {ticket99.name}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {language === 'vi' ? ticket99.fullDescriptionVi : ticket99.fullDescriptionEn}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {(language === 'vi' ? ticket99.keyFeaturesVi : ticket99.keyFeaturesEn).slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to={`/projects/${ticket99.slug}`}
                      className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs inline-flex items-center gap-1.5 transition-colors shadow-lg shadow-cyan-500/20"
                    >
                      <span>{t.selectedWork.viewCaseStudy}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <span className="text-xs font-mono text-slate-400">
                      React · Node.js · Redis Queue
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl">
                  <img
                    src={ticket99.coverImage}
                    alt={ticket99.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
                      Sub-0.5s Check-in Benchmark
                    </span>
                    <span className="text-cyan-400">Prototype Tested</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Panoramic Project: izMap / iCaoBang (GIS Intelligence) */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 lg:p-10 shadow-2xl space-y-6 group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block mb-1">
                    GEOSPATIAL INTELLIGENCE · PROVINCIAL GIS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                    {izmap.name}
                  </h3>
                </div>
                <Link
                  to={`/projects/${izmap.slug}`}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>{t.selectedWork.viewCaseStudy}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl">
                <img
                  src={izmap.coverImage}
                  alt={izmap.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="bg-slate-950/80 px-3 py-1 rounded border border-slate-800">
                    Vector Tiles 60fps · 3D Contours · Heritage POIs
                  </span>
                  <span className="text-emerald-400">PostGIS / MapLibre Engine</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
                {language === 'vi' ? izmap.shortDescriptionVi : izmap.shortDescriptionEn}
              </p>
            </div>

            {/* 3. Duet Bento: CMS99 & KM99 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CMS99 */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between group hover:border-slate-700 transition-colors">
                <div className="space-y-4">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                    <img
                      src={cms99.coverImage}
                      alt={cms99.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <span className="absolute top-3 left-3 font-mono text-xs px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-cyan-400">
                      HEADLESS CMS
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {cms99.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {language === 'vi' ? cms99.shortDescriptionVi : cms99.shortDescriptionEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">GraphQL · REST · RBAC</span>
                  <Link
                    to={`/projects/${cms99.slug}`}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                  >
                    <span>{t.selectedWork.viewCaseStudy}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* KM99 */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between group hover:border-slate-700 transition-colors">
                <div className="space-y-4">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                    <img
                      src={km99.coverImage}
                      alt={km99.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <span className="absolute top-3 left-3 font-mono text-xs px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-amber-400">
                      MARKETING AUTOMATION
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                    {km99.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {language === 'vi' ? km99.shortDescriptionVi : km99.shortDescriptionEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Zalo ZNS · Loyalty Engine</span>
                  <Link
                    to={`/projects/${km99.slug}`}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                  >
                    <span>{t.selectedWork.viewCaseStudy}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Filtered Tab List */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                    <img
                      src={p.coverImage}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-mono text-cyan-400 block uppercase">
                      {language === 'vi' ? p.categoryLabelVi : p.categoryLabelEn}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                      {language === 'vi' ? p.shortDescriptionVi : p.shortDescriptionEn}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">Prototype</span>
                  <Link
                    to={`/projects/${p.slug}`}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                  >
                    <span>{t.selectedWork.viewCaseStudy}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA to all projects */}
        <div className="mt-14 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-xl transition-all"
          >
            <span>{t.selectedWork.viewAllProjects}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
