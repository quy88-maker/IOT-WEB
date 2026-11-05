import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, AlertCircle, ArrowUpRight, Terminal, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectsData } from '../data/projects';

export const ProjectsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = projectsData.filter((proj) => {
    const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
    const matchesSearch =
      proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.shortDescriptionVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.shortDescriptionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400">
            <span>{language === 'vi' ? 'SẢN PHẨM & NỀN TẢNG SỐ' : 'PRODUCTS & PROTOTYPES'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
            {language === 'vi'
              ? 'Hệ sinh thái sản phẩm và dự án ứng viên'
              : 'Digital Platforms & Candidate Project Portfolio'}
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            {language === 'vi'
              ? 'Tập hợp các giải pháp công nghệ, nền tảng phân phối vé, GIS không gian và phần mềm đang trong quá trình phát triển, kiểm thử hoặc hoàn thiện hồ sơ kỹ thuật.'
              : 'A curated inventory of high-concurrency systems, GIS spatial intelligence, and software frameworks undergoing development, testing, or review.'}
          </p>
        </div>

        {/* Candidate Projects Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-slate-300">
              {language === 'vi' ? 'Thông báo kiểm duyệt nội dung: ' : 'Content Review Notice: '}
            </span>
            {language === 'vi'
              ? 'Các dự án dưới đây là danh sách ứng viên nội dung để phục vụ đánh giá giao diện và kiến trúc kỹ thuật. Không mặc định tất cả đều đã thương mại hóa hoặc được công bố chính thức trước khi có phê duyệt từ IOT.'
              : 'The projects displayed below represent candidate submissions for architectural evaluation. They are explicitly marked as prototypes/proposals pending formal commercial sign-off.'}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', labelVi: 'Tất cả (06)', labelEn: 'All (06)' },
              { id: 'platforms', labelVi: 'Nền tảng số', labelEn: 'Platforms' },
              { id: 'software', labelVi: 'Phần mềm', labelEn: 'Software' },
              { id: 'data_maps', labelVi: 'Dữ liệu & Bản đồ GIS', labelEn: 'GIS & Maps' },
              { id: 'communication', labelVi: 'Truyền thông', labelEn: 'Marketing' },
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

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'vi' ? 'Tìm theo tên, công nghệ...' : 'Search by name, tech...'}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-cyan-400 backdrop-blur-md">
                      {language === 'vi' ? project.categoryLabelVi : project.categoryLabelEn}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      <Link to={`/projects/${project.slug}`}>
                        {project.name}
                      </Link>
                    </h3>
                    <span className="text-[11px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-900/60">
                      Prototype
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {language === 'vi' ? project.shortDescriptionVi : project.shortDescriptionEn}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Case Study</span>
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{language === 'vi' ? 'Xem chi tiết' : 'View Details'}</span>
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
