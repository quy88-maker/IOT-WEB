import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Layers } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const NotFoundPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="py-24 sm:py-36 relative text-center">
      <div className="max-w-xl mx-auto px-4 space-y-6">
        <div className="font-mono text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 inline-block">
          ERROR 404
        </div>

        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          {language === 'vi' ? 'Không tìm thấy trang yêu cầu' : 'Page Not Found'}
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed">
          {language === 'vi'
            ? 'Đường dẫn bạn truy cập có thể đã được thay đổi hoặc chưa khả dụng trong phiên bản hiện tại.'
            : 'The requested route may have been reorganized or is not available in the current preview.'}
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>{language === 'vi' ? 'Về trang chủ' : 'Return Home'}</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold transition-colors"
          >
            <Layers className="w-4 h-4" />
            <span>{language === 'vi' ? 'Xem giải pháp' : 'View Solutions'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
