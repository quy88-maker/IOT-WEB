import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, HelpCircle, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related projects
  const relatedProjectsList = projectsData.filter((p) =>
    service.relatedProjects.includes(p.id)
  );

  return (
    <div className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'vi' ? 'Quay lại danh mục giải pháp' : 'Back to All Solutions'}</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400">
              <span>{service.pillar === 'technology' ? 'Technology & Digital Platforms' : 'Communication & Creative'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.15]">
              {language === 'vi' ? service.titleVi : service.titleEn}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {language === 'vi' ? service.fullDescVi : service.fullDescEn}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-lg shadow-cyan-500/20"
              >
                {language === 'vi' ? 'Tư vấn giải pháp này' : 'Request Consultation'}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
            <img
              src={service.heroImage}
              alt={service.titleVi}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </div>
        </div>

        {/* Target Audience & Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Target Audience */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{language === 'vi' ? 'Đối tượng khách hàng phù hợp' : 'Target Audience'}</span>
            </h3>
            <div className="space-y-3">
              {(language === 'vi' ? service.targetAudienceVi : service.targetAudienceEn).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges Addressed */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{language === 'vi' ? 'Những bài toán cần giải quyết' : 'Challenges Solved'}</span>
            </h3>
            <div className="space-y-3">
              {(language === 'vi' ? service.challengesVi : service.challengesEn).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proposed IOT Solutions */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {language === 'vi' ? 'Giải pháp đề xuất từ IOT' : 'Proposed IOT Approach & Solutions'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(language === 'vi' ? service.solutionsVi : service.solutionsEn).map((sol, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
                <div className="font-mono text-xs text-cyan-400">0{idx + 1}</div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {sol}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {language === 'vi' ? 'Quy trình triển khai' : 'Implementation Process'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {(language === 'vi' ? service.processStepsVi : service.processStepsEn).map((step, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  {step.step}
                </span>
                <h4 className="text-sm font-semibold text-white pt-1">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {language === 'vi' ? 'Tính năng & Năng lực kỹ thuật' : 'Key Features & Capabilities'}
            </h3>
            <div className="space-y-2.5">
              {(language === 'vi' ? service.keyFeaturesVi : service.keyFeaturesEn).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {language === 'vi' ? 'Sản phẩm bàn giao (Deliverables)' : 'Milestone Deliverables'}
            </h3>
            <div className="space-y-2.5">
              {(language === 'vi' ? service.deliverablesVi : service.deliverablesEn).map((deliv, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Projects if available */}
        {relatedProjectsList.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {language === 'vi' ? 'Sản phẩm & Dự án liên quan' : 'Related Projects & Systems'}
              </h2>
              <Link to="/projects" className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                <span>{language === 'vi' ? 'Xem tất cả' : 'View all'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjectsList.map((proj) => (
                <div key={proj.id} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[11px] text-cyan-400">
                      {language === 'vi' ? proj.categoryLabelVi : proj.categoryLabelEn}
                    </span>
                    <h4 className="text-base font-bold text-white mt-0.5">
                      {proj.name}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                      {language === 'vi' ? proj.shortDescriptionVi : proj.shortDescriptionEn}
                    </p>
                  </div>
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="px-3.5 py-2 text-xs font-semibold text-cyan-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg whitespace-nowrap shrink-0 transition-colors"
                  >
                    {language === 'vi' ? 'Chi tiết' : 'Details'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        <div className="space-y-6 pt-6 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-400" />
            <span>{language === 'vi' ? 'Câu hỏi thường gặp' : 'Frequently Asked Questions'}</span>
          </h2>
          <div className="space-y-4">
            {(language === 'vi' ? service.faqsVi : service.faqsEn).map((faq, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
                <h4 className="text-sm font-semibold text-white">
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">
              {language === 'vi' ? 'Bạn đang tìm kiếm giải pháp này?' : 'Need to implement this solution?'}
            </h3>
            <p className="text-xs text-slate-400">
              {language === 'vi' ? 'Liên hệ với đội ngũ kỹ thuật của IOT để nhận tư vấn chuyên sâu.' : 'Talk with our engineering team for a dedicated feasibility review.'}
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            {language === 'vi' ? 'Gửi yêu cầu tư vấn' : 'Submit Inquiry'}
          </Link>
        </div>
      </div>
    </div>
  );
};
