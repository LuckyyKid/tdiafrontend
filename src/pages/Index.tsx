import React from 'react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import StatsGlimpseSection from '../components/StatsGlimpseSection';
import VideoSection from '../components/VideoSection';
import GrowthDrivingSection from '../components/GrowthDrivingSection';
import CaseStudySection from '../components/CaseStudySection';
import SectionTransition from '../components/SectionTransition';
import UGCGallerySection from '../components/UGCGallerySection';
import ROICalculatorSection from '../components/ROICalculatorSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TDIAGuaranteeSection from '../components/TDIAGuaranteeSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import StickyHeader from '../components/StickyHeader';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative z-10">
      <SEOHead />
      <StickyHeader />
      <HeroSection />
      <StatsGlimpseSection />
      <VideoSection />
      <GrowthDrivingSection />
      <CaseStudySection />
      <SectionTransition />
      <UGCGallerySection />
      <ROICalculatorSection />
      <TestimonialsSection />
      <TDIAGuaranteeSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
