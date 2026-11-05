import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Compass, Terminal, ShieldAlert, HeartHandshake, CheckCircle2, ArrowRight, FileCode, Cpu, Layers } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const ProcessTimeline: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const stepsIcons = [Search, Compass, Terminal, ShieldAlert, HeartHandshake];

  const steps = t.howWeWork.steps.map((s, idx) => ({
    ...s,
    icon: stepsIcons[idx] || Search,
  }));

  const activeStep = steps[activeStepIndex];

  // Specific technical artifacts associated with each stage
  const stageArtifacts = [
    {
      code: 'SPEC-01-SCOPE',
      titleVi: 'Hồ sơ Yêu cầu & Ranh giới Nghiệp vụ',
      titleEn: 'Functional Requirements & Scope Boundary Book',
      itemsVi: ['User Journey Map', 'Sơ đồ luồng dữ liệu (DFD)', 'Đặc tả phi chức năng (NFR)'],
      itemsEn: ['User Journey Map', 'Data Flow Diagrams (DFD)', 'Non-functional Requirements (NFR)'],
    },
    {
      code: 'ARCH-02-BLUEPRINT',
      titleVi: 'Kiến trúc Hệ thống & API Schema',
      titleEn: 'System Architecture & API Specifications',
      itemsVi: ['Sơ đồ thực thể ERD', 'OpenAPI / Swagger 3.0 Specs', 'Mô hình phân quyền RBAC'],
      itemsEn: ['Entity Relationship Diagrams (ERD)', 'OpenAPI / Swagger 3.0 Specs', 'RBAC Security Policies'],
    },
    {
      code: 'BUILD-03-SPRINT',
      titleVi: 'Mã nguồn Agile & Kiểm thử Tự động',
      titleEn: 'Agile Codebase & Automated Unit Tests',
      itemsVi: ['Git Repository sạch', 'CI/CD Pipeline tự động', 'Độ phủ kiểm thử Unit Test >= 80%'],
      itemsEn: ['Versioned Clean Codebase', 'Automated CI/CD Workflows', 'Unit Test Code Coverage >= 80%'],
    },
    {
      code: 'HARDEN-04-STRESS',
      titleVi: 'Báo cáo Kiểm thử Tải & Quét Lỗ hổng WAF',
      titleEn: 'Load Simulation & Security Hardening Report',
      itemsVi: ['Stress Test 10,000+ VUsers', 'Rà quét lỗ hổng OWASP Top 10', 'Cấu hình Docker / Cloud Staging'],
      itemsEn: ['Stress Benchmarking 10,000+ VUsers', 'OWASP Top 10 Security Audit', 'Docker Staging Manifests'],
    },
    {
      code: 'SLA-05-OPERATIONS',
      titleVi: 'Hợp đồng Cam kết SLA & Bàn giao Toàn quyền',
      titleEn: 'Enterprise SLA & 100% IP Transfer',
      itemsVi: ['Giám sát Uptime 24/7', 'Tài liệu hướng dẫn vận hành', 'Chuyển giao 100% bản quyền sở hữu'],
      itemsEn: ['24/7 Telemetry Observability', 'Operations & Disaster Recovery Manual', '100% Intellectual Property Handover'],
    },
  ];

  const currentArtifact = stageArtifacts[activeStepIndex] || stageArtifacts[0];

  return (
    <div className="w-full">
      {/* Step Tabs Navigation */}
      <div className="relative mb-10 pb-4 border-b border-slate-800">
        <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          {steps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;

            return (
              <button
                key={step.num}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all whitespace-nowrap shrink-0 group ${
                  isActive
                    ? 'bg-slate-900 border border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                    : isCompleted
                    ? 'text-cyan-400 hover:text-cyan-300 hover:bg-slate-900/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs transition-colors ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : isCompleted
                      ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {step.num}
                </div>
                <span className="text-sm font-medium tracking-tight">
                  {step.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Progress Line */}
        <div
          className="absolute -bottom-px left-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 transition-all duration-500"
          style={{
            width: `${((activeStepIndex + 1) / steps.length) * 100}%`
          }}
        />
      </div>

      {/* Active Step Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.num}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="bg-gradient-to-br from-slate-900/95 to-[#0A101D] border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  STAGE {activeStep.num} OF 05
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {currentArtifact.code}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                {activeStep.name}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeStep.desc}
              </p>

              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {language === 'vi' ? 'Sản phẩm bàn giao trọng tâm:' : 'Core Milestone Deliverable:'}
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{activeStep.deliverable}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                {activeStepIndex > 0 && (
                  <button
                    onClick={() => setActiveStepIndex((prev) => prev - 1)}
                    className="px-4 py-2.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
                  >
                    {language === 'vi' ? '← Bước trước' : '← Previous Step'}
                  </button>
                )}
                {activeStepIndex < steps.length - 1 ? (
                  <button
                    onClick={() => setActiveStepIndex((prev) => prev + 1)}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                  >
                    <span>{language === 'vi' ? 'Bước tiếp theo' : 'Next Step'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{language === 'vi' ? 'Quy trình hoàn tất & Chuyển giao' : 'Lifecycle Completed & Handed Over'}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Visual / Technical Artifact Manifest */}
            <div className="lg:col-span-5 bg-slate-950/90 rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-white font-semibold">
                    {language === 'vi' ? 'Cấu phần bàn giao' : 'Deliverable Artifacts'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">STAGE_{activeStep.num}</span>
              </div>

              <div className="space-y-2.5 text-xs">
                {(language === 'vi' ? currentArtifact.itemsVi : currentArtifact.itemsEn).map((it, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{it}</span>
                  </div>
                ))}
              </div>

              <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span>Standardized Review Gate</span>
                <span className="text-emerald-400 font-semibold">Ready for Handover</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
