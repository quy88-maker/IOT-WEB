import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { companyConfig } from '../../data/company';

export const ContactCTASection: React.FC = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
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
      // Simulate verified submission handling
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0A0F1D] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Narrative and Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
              {t.contactSection.eyebrow}
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
              {t.contactSection.title}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              {t.contactSection.subtitle}
            </p>

            {/* Direct Verified Contacts Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>{language === 'vi' ? 'Thông tin liên hệ chính thức' : 'Official Contact Channels'}</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <a
                  href={`tel:${companyConfig.phone}`}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Hotline</div>
                    <div className="font-semibold text-white">{companyConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${companyConfig.email}`}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Email</div>
                    <div className="font-semibold text-white truncate">{companyConfig.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Trụ sở</div>
                    <div className="leading-snug">
                      {language === 'vi' ? companyConfig.address : companyConfig.addressEn}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-slate-400">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Giờ làm việc</div>
                    <div>{language === 'vi' ? companyConfig.officeHoursVi : companyConfig.officeHoursEn}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Validated Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t.contactSection.formSuccessTitle}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  {t.contactSection.formSuccessDesc}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                  >
                    {language === 'vi' ? 'Gửi yêu cầu khác' : 'Submit Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contactSection.formName} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contactSection.formNamePlaceholder}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contactSection.formEmail} *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contactSection.formEmailPlaceholder}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
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
                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contactSection.formPhone} *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contactSection.formPhonePlaceholder}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Service selection */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contactSection.formService} *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white focus:outline-none focus:ring-1 ${
                        errors.service
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
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

                {/* Message field */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contactSection.formMessage} *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contactSection.formMessagePlaceholder}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Form Notice */}
                <div className="text-[11px] text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{t.contactSection.formDemoNotice}</span>
                </div>

                {/* Submit button */}
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
    </section>
  );
};
