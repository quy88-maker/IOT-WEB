import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, Check, User, ArrowUpRight, BookOpen, Bookmark } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { insightsData } from '../data/insights';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedArticles = insightsData.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="py-12 sm:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'vi' ? 'Quay lại danh mục góc nhìn' : 'Back to Insights'}</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
            <span>{language === 'vi' ? article.categoryVi : article.categoryEn}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.15] text-balance">
            {language === 'vi' ? article.titleVi : article.titleEn}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed italic border-l-2 border-cyan-400 pl-4 py-1">
            {language === 'vi' ? article.summaryVi : article.summaryEn}
          </p>

          {/* Author and Share Meta */}
          <div className="pt-4 border-t border-b border-slate-800 py-4 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                <User className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-white">{article.author}</div>
                <div className="text-slate-400">
                  {language === 'vi' ? article.authorRoleVi : article.authorRoleEn}
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-[11px]">{language === 'vi' ? 'Đã sao chép liên kết!' : 'Copied Link!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{language === 'vi' ? 'Chia sẻ bài viết' : 'Share Article'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Featured Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
          <img
            src={article.coverImage}
            alt={article.titleVi}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Article Body Content */}
        <div className="space-y-10 text-slate-200 leading-relaxed">
          {(language === 'vi' ? article.contentVi : article.contentEn).map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-2">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Article Tags */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-2">
            {language === 'vi' ? 'Chủ đề liên quan:' : 'Related Tags:'}
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Articles */}
        <div className="pt-10 border-t border-slate-800 space-y-6">
          <h3 className="text-xl font-bold text-white">
            {language === 'vi' ? 'Bài viết liên quan khác' : 'Related Perspectives'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div key={rel.id} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-cyan-400">
                  {language === 'vi' ? rel.categoryVi : rel.categoryEn}
                </span>
                <h4 className="text-base font-bold text-white line-clamp-2">
                  <Link to={`/insights/${rel.slug}`} className="hover:text-cyan-400 transition-colors">
                    {language === 'vi' ? rel.titleVi : rel.titleEn}
                  </Link>
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {language === 'vi' ? rel.summaryVi : rel.summaryEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
