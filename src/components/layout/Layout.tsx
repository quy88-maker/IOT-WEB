import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#080D18] text-[#F8FAFC]">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
