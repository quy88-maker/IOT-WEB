import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, ShieldCheck, Compass } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { companyConfig } from '../data/company';

export const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = t.contactSection.validationName;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = t.contactSection.validationEmail;
    }
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      errs.phone = t.contactSection.validationPhone;
    }
    if (!formData.service) {
      errs.service = t.contactSection.validationService;
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = t.contactSection.validationMessage;
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
    }
  };

  return (
    <div className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400">
            <span>{language === 'vi' ? 'KẾT NỐI VỚI IOT' : 'START A PROJECT'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
            {language === 'vi'
              ? 'Khởi tạo dự án công nghệ & truyền thông của bạn'
              : 'Initiate Your Engineering & Strategic Campaign'}
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            {language === 'vi'
              ? 'Đội ngũ chuyên gia IOT luôn sẵn sàng lắng nghe, phân tích bài toán và đề xuất giải pháp kỹ thuật tối ưu nhất.'
              : 'Our technical architects and creative strategists are prepared to analyze your scope and engineer viable solutions.'}
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Card & Office Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>{language === 'vi' ? 'Thông tin liên hệ xác minh' : 'Verified Contact Details'}</span>
              </h2>

              <div className="space-y-4 text-xs text-slate-300">
                <a
                  href={`tel:${companyConfig.phone}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Điện thoại / Hotline</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{companyConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${companyConfig.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Hòm thư điện tử</div>
                    <div className="text-sm font-semibold text-white truncate mt-0.5">{companyConfig.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Trụ sở làm việc</div>
                    <div className="text-xs text-slate-200 leading-relaxed mt-0.5">
                      {language === 'vi' ? companyConfig.address : companyConfig.addressEn}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Thời gian tiếp khách</div>
                    <div className="text-xs text-slate-200 mt-0.5">
                      {language === 'vi' ? companyConfig.officeHoursVi : companyConfig.officeHoursEn}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Guidance */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="font-semibold text-slate-300 flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>{language === 'vi' ? 'Chỉ dẫn địa điểm văn phòng' : 'Office Location Guide'}</span>
              </div>
              <p className="leading-relaxed">
                {language === 'vi'
                  ? 'Tòa nhà 25T2 nằm tại khu đô thị Đông Nam Trần Duy Hưng (lô N05), giao thông thuận tiện từ các trục đường Hoàng Đạo Thúy, Khuất Duy Tiến và Vành Đai 3.'
                  : 'Located at 25T2 Building, Lot N05, Tran Duy Hung, Yen Hoa, easily accessible from Hoang Dao Thuy and Ring Road 3 corridors in Hanoi.'}
              </p>
            </div>
          </div>

          {/* Right Column: Full Consultation Request Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t.contactSection.formSuccessTitle}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t.contactSection.formSuccessDesc}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                  >
                    {language === 'vi' ? 'Gửi yêu cầu mới' : 'Submit Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-4 mb-4">
                  <h3 className="text-base font-bold text-white">
                    {language === 'vi' ? 'Biểu mẫu tiếp nhận yêu cầu' : 'Consultation Request Form'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {language === 'vi'
                      ? 'Điền thông tin bên dưới để các chuyên viên IOT chuẩn bị tài liệu tư vấn tương ứng.'
                      : 'Please provide project requirements so our solution architects can formulate targeted advisory.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contactSection.formName} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contactSection.formNamePlaceholder}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none ${
                        errors.name ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contactSection.formEmail} *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contactSection.formEmailPlaceholder}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contactSection.formPhone} *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contactSection.formPhonePlaceholder}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none ${
                        errors.phone ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contactSection.formService} *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white focus:outline-none ${
                        errors.service ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    >
                      <option value="">{t.contactSection.formServiceSelect}</option>
                      <option value="software">Phát triển phần mềm theo yêu cầu</option>
                      <option value="platforms">Nền tảng số & Bán vé điện tử (Ticket99)</option>
                      <option value="gis">Bản đồ số & GIS thông minh (izMap)</option>
                      <option value="communication">Chiến lược truyền thông tổng thể</option>
                      <option value="marketing">Digital Marketing & Tăng trưởng</option>
                      <option value="events">Sản xuất sự kiện & Sân khấu tương tác</option>
                    </select>
                    {errors.service && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contactSection.formMessage} *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contactSection.formMessagePlaceholder}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none ${
                      errors.message ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{t.contactSection.formDemoNotice}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-semibold text-xs tracking-wide uppercase transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>{t.contactSection.formSubmitting}</span>
                  ) : (
                    <>
                      <span>{t.contactSection.ctaSubmit}</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
