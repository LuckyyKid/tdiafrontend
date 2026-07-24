import React from "react";
import StickyHeader from "../components/StickyHeader";
import Footer from "../components/Footer";
import ProcessSection from "../components/ProcessSection";
import CreativesPortfolio from "../components/CreativesPortfolio";

const OurWork = () => {
  return (
    <div className="min-h-screen w-full text-white relative z-10">
      <StickyHeader />
      <div className="pt-24 md:pt-28">
        <CreativesPortfolio />
        <ProcessSection />
      </div>
      <Footer />
    </div>
  );
};

export default OurWork;
