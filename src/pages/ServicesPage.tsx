import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { servicesData } from '../data/services';

export const ServicesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activePillarTab, setActivePillarTab] = useState<'all' | 'technology' | 'creative'>('all');

  const filteredServices = activePillarTab === 'all'
    ? servicesData
    : servicesData.filter((s) => s.pillar === activePillarTab);

  return (
    <div className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400">
            <span>{language === 'vi' ? 'HỆ THỐNG GIẢI PHÁP' : 'SOLUTIONS PORTFOLIO'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
            {language === 'vi'
              ? 'Hai thế mạnh vững chắc. Một hệ sinh thái toàn diện.'
              : 'Two Strategic Pillars. One Cohesive Ecosystem.'}
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            {language === 'vi'
              ? 'IOT cung cấp năng lực toàn trình từ kiến trúc phần mềm, nền tảng số, GIS bản đồ số đến chiến lược truyền thông và sản xuất sự kiện công nghệ.'
              : 'IOT delivers full-lifecycle capabilities across core software engineering, digital platforms, spatial GIS maps, and integrated creative communication.'}
          </p>

          {/* Pillar Selector Tabs */}
          <div className="pt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActivePillarTab('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activePillarTab === 'all'
                  ? 'bg-cyan-400 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {language === 'vi' ? 'Tất cả giải pháp (06)' : 'All Solutions (06)'}
            </button>
            <button
              onClick={() => setActivePillarTab('technology')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activePillarTab === 'technology'
                  ? 'bg-cyan-400 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{language === 'vi' ? 'Công nghệ & Nền tảng số' : 'Technology & Platforms'}</span>
            </button>
            <button
              onClick={() => setActivePillarTab('creative')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activePillarTab === 'creative'
                  ? 'bg-cyan-400 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'vi' ? 'Truyền thông & Sáng tạo' : 'Communication & Creative'}</span>
            </button>
          </div>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={service.heroImage}
                    alt={service.titleVi}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-cyan-400 backdrop-blur-md">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[11px] font-mono text-cyan-400 block uppercase">
                    {service.pillar === 'technology' ? 'Technology Pillar' : 'Creative Pillar'}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    <Link to={`/services/${service.slug}`}>
                      {language === 'vi' ? service.titleVi : service.titleEn}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {language === 'vi' ? service.shortDescVi : service.shortDescEn}
                  </p>

                  <div className="pt-2 space-y-2">
                    {(language === 'vi' ? service.keyFeaturesVi : service.keyFeaturesEn).slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Quy trình 5 bước</span>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{language === 'vi' ? 'Xem chi tiết' : 'Explore Details'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
