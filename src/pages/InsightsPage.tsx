import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowUpRight, BookOpen, Clock, AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { insightsData } from '../data/insights';

export const InsightsPage: React.FC = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredArticles = insightsData.filter((art) => {
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    const matchesSearch =
      art.titleVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summaryVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summaryEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400">
            <span>{language === 'vi' ? 'GÓC NHÌN & NGHIÊN CỨU' : 'INSIGHTS & PUBLICATIONS'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
            {language === 'vi'
              ? 'Nghiên cứu kiến trúc & Xu hướng công nghệ'
              : 'Architectural Studies & Technology Trends'}
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            {language === 'vi'
              ? 'Các bài phân tích chuyên sâu từ đội ngũ kỹ sư và sáng tạo IOT về giải pháp bản đồ số GIS, khả năng chịu tải của hệ thống bán vé và công nghệ sân khấu tương tác.'
              : 'Technical briefs and architectural analyses on GIS spatial systems, high-concurrency event engineering, and interactive spatial stages.'}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', labelVi: 'Tất cả bài viết', labelEn: 'All Articles' },
              { id: 'tech-gis', labelVi: 'Bản đồ số GIS', labelEn: 'GIS & Maps' },
              { id: 'software-scale', labelVi: 'Kỹ thuật Phần mềm', labelEn: 'Software' },
              { id: 'creative-tech', labelVi: 'Sáng tạo & Sự kiện', labelEn: 'Creative Tech' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-400 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {language === 'vi' ? cat.labelVi : cat.labelEn}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'vi' ? 'Tìm bài viết...' : 'Search articles...'}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={article.coverImage}
                    alt={article.titleVi}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-cyan-400 backdrop-blur-md">
                      {language === 'vi' ? article.categoryVi : article.categoryEn}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span>{article.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    <Link to={`/insights/${article.slug}`}>
                      {language === 'vi' ? article.titleVi : article.titleEn}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {language === 'vi' ? article.summaryVi : article.summaryEn}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-slate-400">{article.author}</span>
                <Link
                  to={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{language === 'vi' ? 'Đọc bài' : 'Read'}</span>
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
