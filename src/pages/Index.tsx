import React from 'react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import InfiniteLogoBanner from '../components/InfiniteLogoBanner';
import TwoDoorsSection from '../components/TwoDoorsSection';
import VideoSection from '../components/VideoSection';
import TeamSection from '../components/TeamSection';
import CaseStudySection from '../components/CaseStudySection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import StickyHeader from '../components/StickyHeader';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative z-10">
      <SEOHead />
      <StickyHeader />
      <HeroSection />
      <InfiniteLogoBanner />
      <TwoDoorsSection />
      <VideoSection />
      <CaseStudySection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
