import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { WhatWeDoSection } from '../components/sections/WhatWeDoSection';
import { SolutionsShowcase } from '../components/sections/SolutionsShowcase';
import { SelectedWorkSection } from '../components/sections/SelectedWorkSection';
import { HowWeWorkSection } from '../components/sections/HowWeWorkSection';
import { TechEcosystemSection } from '../components/sections/TechEcosystemSection';
import { InsightsSection } from '../components/sections/InsightsSection';
import { ContactCTASection } from '../components/sections/ContactCTASection';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <SolutionsShowcase />
      <SelectedWorkSection />
      <HowWeWorkSection />
      <TechEcosystemSection />
      <InsightsSection />
      <ContactCTASection />
    </>
  );
};
