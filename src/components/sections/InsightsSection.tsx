import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Clock, User } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { insightsData } from '../../data/insights';

export const InsightsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const featuredArticle = insightsData[0];
  const secondaryArticles = insightsData.slice(1, 3);

  return (
    <section className="py-24 relative overflow-hidden bg-[#080D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
              {t.insightsSection.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
              {t.insightsSection.title}
            </h2>
            <p className="text-base text-slate-300">
              {t.insightsSection.subtitle}
            </p>
          </div>

          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0"
          >
            <span>{t.insightsSection.viewAll}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Magazine Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Featured Article (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.titleVi}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-cyan-400 backdrop-blur-md">
                    {language === 'vi' ? featuredArticle.categoryVi : featuredArticle.categoryEn}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                {/* Zero-Pill Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>{featuredArticle.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  <Link to={`/insights/${featuredArticle.slug}`}>
                    {language === 'vi' ? featuredArticle.titleVi : featuredArticle.titleEn}
                  </Link>
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {language === 'vi' ? featuredArticle.summaryVi : featuredArticle.summaryEn}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-4">
              <span className="text-xs text-slate-400">
                {language === 'vi' ? featuredArticle.authorRoleVi : featuredArticle.authorRoleEn}
              </span>
              <Link
                to={`/insights/${featuredArticle.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>{t.insightsSection.readMore}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Secondary Column (5 cols, stacked) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {secondaryArticles.map((article) => (
              <div
                key={article.id}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="text-cyan-400">
                      {language === 'vi' ? article.categoryVi : article.categoryEn}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    <Link to={`/insights/${article.slug}`}>
                      {language === 'vi' ? article.titleVi : article.titleEn}
                    </Link>
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {language === 'vi' ? article.summaryVi : article.summaryEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{article.author}</span>
                  <Link
                    to={`/insights/${article.slug}`}
                    className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
                  >
                    <span>{t.insightsSection.readMore}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Note badge */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400">
              {t.insightsSection.sampleNotice}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
