import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Code2, Sparkles, ShieldCheck, ArrowRight, CheckCircle2, Layers, Compass, Terminal, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { companyConfig, brandManifesto } from '../data/company';

export const AboutPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Hero Typography Section */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400">
            <span>{language === 'vi' ? 'VỀ CHÚNG TÔI' : 'ABOUT IOT'}</span>
            <span aria-hidden="true">·</span>
            <span>Technology. Creativity. Impact.</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            {language === 'vi' ? (
              <>
                Kết hợp <span className="text-cyan-400">công nghệ phần mềm</span> với{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">
                  tư duy truyền thông sáng tạo
                </span>.
              </>
            ) : (
              <>
                Bridging <span className="text-cyan-400">software engineering</span> with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">
                  creative brand resonance
                </span>.
              </>
            )}
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            {language === 'vi' ? brandManifesto.missionVi : brandManifesto.missionEn}
          </p>
        </div>

        {/* Brand Narrative Card with Hero Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {language === 'vi' ? 'Định vị thương hiệu IOT' : 'The IOT Strategic Mandate'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {language === 'vi'
                ? 'Không dừng lại ở vai trò một đơn vị truyền thông đơn thuần hay một công ty gia công phần mềm độc lập, IOT được kiến tạo để trở thành mắt xích liên kết giữa sản phẩm công nghệ cao và trải nghiệm người dùng thực tiễn. Chúng tôi tin rằng công nghệ chỉ thực sự phát huy tối đa sức mạnh khi được công chúng thấu hiểu và đón nhận.'
                : 'Moving beyond isolated traditional marketing or disconnected outsource software factories, IOT stands as the strategic link between robust digital engineering and human experience. We believe high-grade technology achieves true impact only when embraced by genuine human adoption.'}
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {language === 'vi'
                ? 'Từ hệ thống bán vé chịu tải hàng nghìn giao dịch mỗi giây như Ticket99, đến bản đồ số GIS quy hoạch thông minh như izMap/iCaoBang hay các sân khấu đại hội công nghệ quy mô lớn, tôn chỉ của chúng tôi là minh bạch, chuẩn mực và mang lại hiệu quả đo lường được.'
                : 'From high-concurrency ticket management in Ticket99, to smart GIS regional cartography in izMap/iCaoBang and arena-scale keynotes, our governing principle is architectural discipline, complete transparency, and measurable return.'}
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Trụ sở chính thức: Hà Nội</span>
              </div>
              <span className="text-slate-700">·</span>
              <div>Hotline: 02462537947</div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950">
            <img
              src="/src/assets/images/hero_digital_ecosystem_1793900282776.jpg"
              alt="IOT Engineering Philosophy"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-mono text-cyan-400 block mb-1">IOT DNA</span>
              <span className="text-sm font-semibold text-white">Kiến tạo công nghệ. Kết nối giá trị.</span>
            </div>
          </div>
        </div>

        {/* Two Core Strategic Pillars */}
        <div className="space-y-8">
          <div className="max-w-xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {language === 'vi' ? 'Hai trụ cột năng lực cốt lõi' : 'Two Core Capability Pillars'}
            </h2>
            <p className="text-sm text-slate-400">
              {language === 'vi'
                ? 'Mô hình song hành đảm bảo sản phẩm số được hoàn thiện cả về cấu trúc backend lẫn trải nghiệm tiếp cận thị trường.'
                : 'A dual-engine model ensuring products excel in back-end engineering and market reception.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800/80 text-cyan-400 flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {language === 'vi' ? 'Trụ cột 1 — Công nghệ & Nền tảng số' : 'Pillar 1 — Technology & Platforms'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'vi'
                  ? 'Tập trung vào phát triển phần mềm theo yêu cầu, hệ thống API phân tán, nền tảng số bán vé điện tử, giải pháp bản đồ số GIS không gian và tư vấn chuyển đổi số.'
                  : 'Full-stack software development, distributed APIs, high-concurrency ticketing engines, geospatial GIS intelligence, and digital transformation architecture.'}
              </p>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5"
                >
                  <span>{language === 'vi' ? 'Xem các giải pháp công nghệ' : 'Explore Technology Solutions'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-800/80 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {language === 'vi' ? 'Trụ cột 2 — Truyền thông & Sáng tạo' : 'Pillar 2 — Communication & Creative'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'vi'
                  ? 'Hoạch định chiến lược truyền thông tích hợp (IMC), Digital Marketing theo hiệu suất, sản xuất sự kiện công nghệ và thiết kế nội dung visual 3D sân khấu.'
                  : 'Integrated marketing communications (IMC), performance digital growth, turnkey tech keynote production, and spatial visual stage engineering.'}
              </p>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5"
                >
                  <span>{language === 'vi' ? 'Xem các dịch vụ truyền thông' : 'Explore Communication Services'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Values */}
        <div className="space-y-8">
          <div className="max-w-xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {language === 'vi' ? 'Giá trị định hướng' : 'Governing Values'}
            </h2>
            <p className="text-sm text-slate-400">
              {language === 'vi' ? 'Các nguyên tắc chuẩn mực dẫn dắt mọi sản phẩm chúng tôi xây dựng.' : 'Core engineering and creative values anchoring every deliverable.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brandManifesto.values.map((v, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 space-y-3">
                <div className="font-mono text-xs text-cyan-400">0{idx + 1}</div>
                <h3 className="text-base font-bold text-white">
                  {language === 'vi' ? v.titleVi : v.titleEn}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'vi' ? v.descVi : v.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-10 rounded-3xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">
              {language === 'vi' ? 'Sẵn sàng hợp tác cùng IOT?' : 'Ready to Collaborate with IOT?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {language === 'vi'
                ? 'Hãy trao đổi với các giám đốc kỹ thuật và sáng tạo của chúng tôi về dự án tiếp theo.'
                : 'Connect directly with our engineering and creative leads to evaluate your project scope.'}
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-lg shadow-cyan-500/20"
          >
            {language === 'vi' ? 'Liên hệ IOT ngay' : 'Contact IOT Now'}
          </Link>
        </div>
      </div>
    </div>
  );
};
