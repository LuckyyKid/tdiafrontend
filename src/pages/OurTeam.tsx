import React from 'react';
import StickyHeader from '../components/StickyHeader';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

const OurTeam = () => {
  return (
    <div className="min-h-screen w-full relative z-10">
      <StickyHeader />
      <div className="pt-24 md:pt-28">
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;
