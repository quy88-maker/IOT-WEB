export type Language = 'vi' | 'en';

export interface VerifiedCompanyInfo {
  name: string;
  shortName: string;
  taglineVi: string;
  taglineEn: string;
  phone: string;
  email: string;
  address: string;
  addressEn: string;
  city: string;
  country: string;
  officeHoursVi: string;
  officeHoursEn: string;
}

export type PillarType = 'technology' | 'creative';

export interface ServiceItem {
  id: string;
  slug: string;
  pillar: PillarType;
  titleVi: string;
  titleEn: string;
  shortDescVi: string;
  shortDescEn: string;
  fullDescVi: string;
  fullDescEn: string;
  iconName: string;
  heroImage: string;
  targetAudienceVi: string[];
  targetAudienceEn: string[];
  challengesVi: string[];
  challengesEn: string[];
  solutionsVi: string[];
  solutionsEn: string[];
  processStepsVi: { step: string; title: string; desc: string }[];
  processStepsEn: { step: string; title: string; desc: string }[];
  keyFeaturesVi: string[];
  keyFeaturesEn: string[];
  deliverablesVi: string[];
  deliverablesEn: string[];
  faqsVi: { question: string; answer: string }[];
  faqsEn: { question: string; answer: string }[];
  relatedProjects: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  category: 'platforms' | 'software' | 'data_maps' | 'communication';
  categoryLabelVi: string;
  categoryLabelEn: string;
  shortDescriptionVi: string;
  shortDescriptionEn: string;
  fullDescriptionVi: string;
  fullDescriptionEn: string;
  coverImage: string;
  gallery: string[];
  capabilitiesVi: string[];
  capabilitiesEn: string[];
  technologies: string[];
  status: 'In Development' | 'Concept Prototype' | 'Enterprise Deployed' | 'Beta Live';
  externalUrl?: string;
  publicationApproved: boolean;
  isConceptDemo: boolean;
  verificationNoticeVi: string;
  verificationNoticeEn: string;
  problemStatementVi: string;
  problemStatementEn: string;
  approachVi: string;
  approachEn: string;
  keyFeaturesVi: string[];
  keyFeaturesEn: string[];
  expectedImpactVi: string;
  expectedImpactEn: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  titleVi: string;
  titleEn: string;
  category: string;
  categoryVi: string;
  categoryEn: string;
  publishedDate: string;
  readTime: string;
  author: string;
  authorRoleVi: string;
  authorRoleEn: string;
  summaryVi: string;
  summaryEn: string;
  coverImage: string;
  isEditorialSample: boolean;
  contentVi: {
    heading: string;
    paragraphs: string[];
  }[];
  contentEn: {
    heading: string;
    paragraphs: string[];
  }[];
  tags: string[];
}
