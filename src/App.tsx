import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import ParallaxDots from "./components/ParallaxDots";
import { trackPageView, trackMetaPageView } from "./lib/analytics";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudies from "./pages/CaseStudies";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";
import GestionCampagnes from "./pages/GestionCampagnes";
import CreativesOptimisees from "./pages/CreativesOptimisees";
import ImplementationData from "./pages/ImplementationData";
import OurWork from "./pages/OurWork";
import Career from "./pages/Career";
import EcommerceProblems from "./pages/EcommerceProblems";
import CaseStudyDetail from "./components/CaseStudyDetail";
import AIPerformanceMarketing from "./pages/blog/AIPerformanceMarketing";
import PrivacyFirstMarketing from "./pages/blog/PrivacyFirstMarketing";
import VideoContentDominance from "./pages/blog/VideoContentDominance";
import AttributionModeling from "./pages/blog/AttributionModeling";
import SeniorMediaBuyer from "./pages/jobs/SeniorMediaBuyer";
import DataAnalyst from "./pages/jobs/DataAnalyst";
import CreativeDesigner from "./pages/jobs/CreativeDesigner";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Methodologie from "./pages/Methodologie";
import Acquisition from "./pages/Acquisition";
import Operations from "./pages/Operations";
import OperationsCaseStudies from "./pages/OperationsCaseStudies";

const queryClient = new QueryClient();

// Component to track route changes
const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view on route change for GA4
    trackPageView(location.pathname, document.title);
    
    // Track page view on route change for Meta Pixel (SPA navigation)
    trackMetaPageView();
  }, [location]);
  
  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <RouteTracker />
            <ScrollToTop />
            <ParallaxDots
              count={50}
              colors={["#4d9fff", "#2f6bff", "#9ec8ff", "#ffffff"]}
              minSize={1.5}
              maxSize={4}
              minOpacity={0.15}
              maxOpacity={0.45}
              className="!fixed inset-0 z-0"
            />
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/acquisition" element={<Acquisition />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/operations/case-studies" element={<OperationsCaseStudies />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:caseId" element={<CaseStudyDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/gestion-campagnes" element={<GestionCampagnes />} />
            <Route path="/services/creatives-optimisees" element={<CreativesOptimisees />} />
            <Route path="/services/implementation-data" element={<ImplementationData />} />
            <Route path="/explore/our-work" element={<OurWork />} />
            {/* <Route path="/explore/career" element={<Career />} />
            <Route path="/explore/career/senior-media-buyer" element={<SeniorMediaBuyer />} />
            <Route path="/explore/career/data-analyst" element={<DataAnalyst />} />
            <Route path="/explore/career/creative-designer" element={<CreativeDesigner />} /> */}
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/ecommerce-problems" element={<EcommerceProblems />} />
            <Route path="/blog/ai-performance-marketing" element={<AIPerformanceMarketing />} />
            <Route path="/blog/privacy-first-marketing" element={<PrivacyFirstMarketing />} />
            <Route path="/blog/video-content-dominance" element={<VideoContentDominance />} />
            <Route path="/blog/attribution-modeling" element={<AttributionModeling />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/methodologie" element={<Methodologie />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
