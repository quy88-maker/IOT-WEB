import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Terminal, Layers, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectsData } from '../data/projects';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'vi' ? 'Quay lại danh mục sản phẩm' : 'Back to Projects'}</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-cyan-400">
              {language === 'vi' ? project.categoryLabelVi : project.categoryLabelEn}
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-amber-950/60 border border-amber-800 text-amber-400">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
            {project.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {language === 'vi' ? project.shortDescriptionVi : project.shortDescriptionEn}
          </p>
        </div>

        {/* Big Hero Showcase Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-slate-300">
            <span>Prototype Interface Evaluation</span>
            <span>IOT Digital Lab</span>
          </div>
        </div>

        {/* Candidate Project Transparency Banner */}
        <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-900/40 text-xs text-amber-200/90 flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-semibold text-amber-300">
              {language === 'vi' ? 'Dự án ứng viên — Trạng thái kiểm duyệt' : 'Candidate Project — Review Status'}
            </div>
            <p className="leading-relaxed">
              {language === 'vi' ? project.verificationNoticeVi : project.verificationNoticeEn}
            </p>
          </div>
        </div>

        {/* Overview & Problem & Approach Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Problem & Approach */}
          <div className="lg:col-span-8 space-y-8">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                {language === 'vi' ? 'Tổng quan giải pháp' : 'Executive Overview'}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'vi' ? project.fullDescriptionVi : project.fullDescriptionEn}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem */}
              <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span>{language === 'vi' ? 'Bài toán cần giải quyết' : 'The Problem'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {language === 'vi' ? project.problemStatementVi : project.problemStatementEn}
                </p>
              </div>

              {/* Approach */}
              <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>{language === 'vi' ? 'Phương pháp tiếp cận' : 'Our Approach'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {language === 'vi' ? project.approachVi : project.approachEn}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight">
                {language === 'vi' ? 'Các chức năng & năng lực nổi bật' : 'Key Architecture Capabilities'}
              </h3>
              <div className="space-y-3">
                {(language === 'vi' ? project.keyFeaturesVi : project.keyFeaturesEn).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tech Specifications & Metadata */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  {language === 'vi' ? 'Công nghệ kiến trúc' : 'Tech Stack'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 text-cyan-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {language === 'vi' ? 'Kỳ vọng tác động' : 'Expected Impact'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'vi' ? project.expectedImpactVi : project.expectedImpactEn}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <Link
                  to="/contact"
                  className="w-full py-3 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs text-center block transition-colors"
                >
                  {language === 'vi' ? 'Trao đổi về dự án này' : 'Discuss This Architecture'}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        {project.gallery.length > 1 && (
          <div className="space-y-4 pt-6 border-t border-slate-800">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {language === 'vi' ? 'Hình ảnh mô hình giao diện' : 'Prototype Screen Gallery'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                  <img
                    src={img}
                    alt={`${project.name} gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Projects */}
        <div className="space-y-6 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {language === 'vi' ? 'Các sản phẩm khác' : 'Other Systems in Lab'}
            </h3>
            <Link to="/projects" className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              <span>{language === 'vi' ? 'Xem tất cả' : 'View all'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((p) => (
              <div key={p.id} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] text-cyan-400">
                    {language === 'vi' ? p.categoryLabelVi : p.categoryLabelEn}
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    {p.name}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                    {language === 'vi' ? p.shortDescriptionVi : p.shortDescriptionEn}
                  </p>
                </div>
                <Link
                  to={`/projects/${p.slug}`}
                  className="px-3.5 py-2 text-xs font-semibold text-cyan-400 hover:text-white bg-slate-800 rounded-lg whitespace-nowrap shrink-0 transition-colors"
                >
                  {language === 'vi' ? 'Chi tiết' : 'Details'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
