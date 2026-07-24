import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Play, TrendingUp, Eye, DollarSign, BarChart2 } from "lucide-react";
import { fadeInUp, staggerContainer, staggeredItem } from "@/lib/animations";
import { Dialog } from "@/components/ui/dialog";
import SpecialModalWrapper from "./modals/SpecialModalWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Creative {
  id: number;
  type: "image" | "video";
  thumbnail: string;
  videoUrl?: string;
  title: string;
  description: string;
  brandName?: string;
  metrics: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  format: string;
}

const CreativesPortfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedCreative, setSelectedCreative] = useState<Creative | null>(null);
  
  const creatives: Creative[] = [
    {
      id: 11,
      type: "video",
      videoUrl: "https://i.imgur.com/8GHSdYV.mp4",
      thumbnail: "",
      title: "UGC that Educates and Converts",
      brandName: "Ika",
      description: "A clear, authentic breakdown of Onyx's SaaS services — delivered by a creator users can trust.",
      metrics: [
        { label: "Hook Rate", value: "54%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "6.8x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "5.3%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "UGC"
    },
    {
      id: 12,
      type: "image",
      thumbnail: "https://i.imgur.com/hAZmSXa.jpeg",
      title: "Annick Levesque Creative Photoshoot",
      brandName: "Annick Levesque",
      description: "Professional photoshoot creative with strong visual storytelling and brand positioning.",
      metrics: [
        { label: "Hook Rate", value: "52%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "6.4x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "5.0%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    },
    {
      id: 13,
      type: "video",
      videoUrl: "https://i.imgur.com/JqQFYVC.mp4",
      thumbnail: "",
      title: "1001 Noix UGC Campaign",
      brandName: "1001 Noix",
      description: "Product-focused UGC showcasing natural ingredients and health benefits.",
      metrics: [
        { label: "Hook Rate", value: "52%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "6.5x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "5.1%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "UGC"
    },
    {
      id: 14,
      type: "video",
      videoUrl: "https://i.imgur.com/Mm5zEKX.mp4",
      thumbnail: "",
      title: "A Creator Story That Sells Without Selling",
      brandName: "Ika",
      description: "An authentic testimonial from a real user — highlighting IKA's freshness, confidence boost, and everyday impact, all in under 30 seconds.",
      metrics: [
        { label: "Hook Rate", value: "49%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.9x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "4.8%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "UGC"
    },
    {
      id: 15,
      type: "video",
      videoUrl: "https://i.imgur.com/sk7NXwR.mp4",
      thumbnail: "",
      title: "Showing the Product. Selling the Benefits",
      brandName: "Ika",
      description: "A clean, minimal demo that highlights Ika's key benefits to convert fast in a crowded market",
      metrics: [
        { label: "Hook Rate", value: "48%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.8x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "4.6%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Demo"
    },
    {
      id: 16,
      type: "video",
      videoUrl: "https://i.imgur.com/wgo7lcU.mp4",
      thumbnail: "",
      title: "Animated Elegance That Drives Attention",
      brandName: "Annick Levesque",
      description: "A high-end animated visual designed to elevate product perception and increase thumb-stopping power in-feed.",
      metrics: [
        { label: "Hook Rate", value: "50%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "6.1x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "4.9%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    },
    {
      id: 17,
      type: "video",
      videoUrl: "https://i.imgur.com/OYaPVGW.mp4",
      thumbnail: "",
      title: "From Mug to Message — UGC That Feels Like Home",
      brandName: "Thé du Nord",
      description: "A cozy, relatable UGC showing how Thé du Nord becomes part of a winter self-care ritual — built to inspire and convert.",
      metrics: [
        { label: "Hook Rate", value: "49%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.9x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "4.8%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "UGC"
    },
    {
      id: 18,
      type: "video",
      videoUrl: "https://i.imgur.com/bZgUnz9.mp4",
      thumbnail: "",
      title: "When Clean Eating Meets Scroll-Stopping UGC",
      brandName: "1001 Noix",
      description: "A smooth, sensory UGC experience showcasing the natural texture and wellness benefits of 1001 Noix",
      metrics: [
        { label: "Hook Rate", value: "51%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "6.2x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "5.0%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "UGC"
    },
    {
      id: 19,
      type: "video",
      videoUrl: "https://i.imgur.com/3IH2jx5.mp4",
      thumbnail: "",
      title: "Who's GoCoconut? Let This UGC Show You.",
      brandName: "GoCoconut",
      description: "A warm, relatable UGC that introduces GoCoconut and its multifunctional play furniture.",
      metrics: [
        { label: "Hook Rate", value: "47%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.5x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "4.7%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "UGC"
    },
    {
      id: 20,
      type: "video",
      videoUrl: "https://i.imgur.com/aKavNTy.mp4",
      thumbnail: "",
      title: "GSTHST Campaign Video",
      brandName: "GSTHST",
      description: "Strategic brand campaign focusing on market positioning and audience engagement.",
      metrics: [
        { label: "Hook Rate", value: "47%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.8x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "4.3%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "UGC"
    },
    {
      id: 21,
      type: "image",
      thumbnail: "https://i.imgur.com/1pUsbDs.png",
      title: "Designed to Spark Thirst & Foot Traffic",
      brandName: "Maison LeChêne",
      description: "A bold, flavor-forward creative crafted to drive in-store visits and spotlight the cocktail of the month with irresistible visual appeal.",
      metrics: [
        { label: "Hook Rate", value: "45%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.6x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "4.2%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    },
    {
      id: 22,
      type: "image",
      thumbnail: "https://i.imgur.com/5r9AapP.png",
      title: "When AI Meets Herbal Calm",
      brandName: "DASSA",
      description: "A visually striking AI-generated visual for DASSA's herbal tea — caffeine-free, theine-free, and tech-forward.",
      metrics: [
        { label: "Hook Rate", value: "46%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.7x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "4.4%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    },
    {
      id: 23,
      type: "image",
      thumbnail: "https://i.imgur.com/1RIiSQB.png",
      title: "Looks New. Costs Less",
      brandName: "GoCoconut",
      description: "This static creative highlights GoCoconut's reconditioned products — identical in quality and playfulness, but lighter on your wallet.",
      metrics: [
        { label: "Hook Rate", value: "44%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.3x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "4.0%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    },
    {
      id: 24,
      type: "image",
      thumbnail: "/lovable-uploads/1806c6e8-7988-4c4d-bc40-cb5f7496b192.png",
      title: "The North's Warmest Gift",
      brandName: "Thé du Nord",
      description: "This festive visual celebrates Thés du Nord's Fireweed Black Tea — organic, caffeine-free, and crafted to warm both hands and hearts this holiday season.",
      metrics: [
        { label: "Hook Rate", value: "43%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.2x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "3.9%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    },
    {
      id: 25,
      type: "image",
      thumbnail: "/lovable-uploads/d0c5e71a-a087-4703-8753-c46afc640f7c.png",
      title: "Pause. Sip. Reconnect.",
      brandName: "Thé du Nord",
      description: "Set against a backdrop of forest serenity, this creative highlights the purity and grounding effect of Thés du Nord's fireweed tea — a natural break in every sip.",
      metrics: [
        { label: "Hook Rate", value: "42%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.1x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "3.8%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    },
    {
      id: 26,
      type: "image",
      thumbnail: "/lovable-uploads/a69e6edd-f546-4087-b265-bb343d090ab6.png",
      title: "One Brand. Four Bold Infusions.",
      brandName: "Thé du Nord",
      description: "A festive showcase of four signature blends from Thés du Nord — playful, aromatic, and grounded in nature. Delivered to your door with exclusive holiday perks.",
      metrics: [
        { label: "Hook Rate", value: "41%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.0x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "3.7%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    },
    {
      id: 27,
      type: "image",
      thumbnail: "https://i.imgur.com/xoO2Gq5.png",
      title: "Obstacle Course to Cozy Couch — All in One.",
      brandName: "GoCoconut",
      description: "A playful and practical promo highlighting the multifunctional GoCoconut sofa — from fort to couch, now 30% off when reloved.",
      metrics: [
        { label: "Hook Rate", value: "40%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "4.9x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "3.6%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    },
    {
      id: 28,
      type: "image",
      thumbnail: "https://i.imgur.com/KBugpda.png",
      title: "The Secret Weapon of Sunday Brunch",
      brandName: "1001 Noix",
      description: "A delicious spotlight on 1001 Noix's Chai Maple pecan butter — the perfect finishing touch to elevate any weekend brunch.",
      metrics: [
        { label: "Hook Rate", value: "47%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.8x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "4.3%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    },
    {
      id: 29,
      type: "image",
      thumbnail: "https://i.imgur.com/DEw5Dgb.png",
      title: "The Deodorant That Does More With Less",
      brandName: "Ika",
      description: "A bold, minimalist visual that positions this natural deodorant as a clean yet powerful alternative — no compromises, just confidence.",
      metrics: [
        { label: "Hook Rate", value: "42%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "5.2x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "3.9%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    },
    {
      id: 30,
      type: "image",
      thumbnail: "https://i.imgur.com/mCaGiml.png",
      title: "Designed to Stand Out. Formulated to Fit In.",
      brandName: "Ika",
      description: "This bold static creative highlights the product's eco-design and skin-safe formula, using vibrant packaging to reinforce the brand's identity and values in one scroll-stopping visual.",
      metrics: [
        { label: "Hook Rate", value: "38%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "4.8x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "3.5%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    },
    {
      id: 31,
      type: "image",
      thumbnail: "https://i.imgur.com/Oe987xX.jpeg",
      title: "Pure Performance. Minimal Design.",
      brandName: "Ika",
      description: "This clean and minimalist static creative conveys trust and purity through clinical design, emphasizing the product's medical-grade, natural, and economical benefits — all in one scroll-stopping visual.",
      metrics: [
        { label: "Hook Rate", value: "44%", icon: <Eye className="h-4 w-4 text-purple-400" /> },
        { label: "ROAS", value: "6.3x", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
        { label: "CTR", value: "4.1%", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> }
      ],
      format: "Professional"
    }
  ];
  
  const shuffledCreatives = useMemo(() => {
    const ugcCreatives = creatives.filter(c => c.format === "UGC");
    const professionalCreatives = creatives.filter(c => c.format === "Professional");
    const demoCreatives = creatives.filter(c => c.format === "Demo");
    
    const mixed = [];
    const maxLength = Math.max(ugcCreatives.length, professionalCreatives.length, demoCreatives.length);
    
    for (let i = 0; i < maxLength; i++) {
      if (ugcCreatives[i]) mixed.push(ugcCreatives[i]);
      if (professionalCreatives[i]) mixed.push(professionalCreatives[i]);
      if (demoCreatives[i]) mixed.push(demoCreatives[i]);
    }
    
    return mixed;
  }, []);
  
  const formatTypes = ["all", ...new Set(creatives.map(item => item.format.toLowerCase()))];
  
  const filteredCreatives = useMemo(() => {
    if (activeFilter === "all") {
      return shuffledCreatives;
    }
    return shuffledCreatives.filter(item => item.format.toLowerCase() === activeFilter.toLowerCase());
  }, [activeFilter, shuffledCreatives]);

  const handleCreativeClick = (creative: Creative) => {
    setSelectedCreative(creative);
  };

  return (
    <section className="w-full py-24 md:py-32 halo-top relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.div variants={fadeInUp} className="pill-tdia mx-auto mb-6">Portfolio</motion.div>
          <motion.h2
            className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]"
            variants={fadeInUp}
          >
            <span>A portfolio of </span>
            <span className="serif">performance</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-base md:text-lg text-[#7c8aa5]"
            variants={fadeInUp}
          >
            A data-powered selection of ads that delivered growth, not just impressions.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 mt-8 justify-center"
            variants={fadeInUp}
          >
            {formatTypes.map((format) => (
              <button
                key={format}
                onClick={() => setActiveFilter(format)}
                className={`px-4 py-2 rounded-full text-xs transition-all font-mono-tdia uppercase tracking-[0.15em] hairline ${
                  activeFilter === format
                    ? "bg-[#4d9fff]/15 text-[#9ec8ff]"
                    : "bg-white/[0.02] text-[#7c8aa5] hover:bg-white/[0.04]"
                }`}
              >
                {format}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {filteredCreatives.length > 0 ? (
            filteredCreatives.map((creative) => (
              <motion.div
                key={creative.id}
                variants={staggeredItem}
                className="tdia-card overflow-hidden cursor-pointer"
                onClick={() => handleCreativeClick(creative)}
              >
                <div className="relative">
                  <AspectRatio ratio={9/16} className="bg-[#060910]">
                    {creative.type === "video" && creative.videoUrl ? (
                      <video
                        src={creative.videoUrl}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        key={creative.id}
                      />
                    ) : (
                      <img
                        src={creative.thumbnail}
                        alt={creative.title}
                        className="w-full h-full object-cover"
                        key={creative.id}
                      />
                    )}
                    {creative.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4d9fff] to-[#2f6bff] flex items-center justify-center shadow-[0_10px_30px_rgba(47,107,255,0.4)]">
                          <Play className="h-6 w-6 text-white" fill="white" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className="micro-label bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        {creative.format}
                      </span>
                    </div>
                  </AspectRatio>
                </div>

                <div className="p-5">
                  <h3 className="tdia-h text-[18px] text-white mb-2 line-clamp-2">{creative.title}</h3>
                  <p className="text-[#7c8aa5] text-sm mb-4 line-clamp-3">{creative.description}</p>

                  <div className="flex items-center gap-2 flex-wrap">
                    {creative.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.02] hairline">
                        <span className="text-[10px] text-[#7c8aa5] font-mono-tdia uppercase tracking-wider">{metric.label}</span>
                        <span className="text-xs font-mono-tdia text-[#9ec8ff]">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-[#7c8aa5]">No creatives found. <button onClick={() => setActiveFilter("all")} className="text-[#9ec8ff] hover:underline">View all</button></p>
            </div>
          )}
        </motion.div>
      </div>

      <Dialog open={selectedCreative !== null} onOpenChange={() => setSelectedCreative(null)}>
        {selectedCreative && (
          <SpecialModalWrapper 
            title={selectedCreative.title} 
            onClose={() => setSelectedCreative(null)}
            compact={true}
          >
            {/* Updated visual section with better proportions - 50% width */}
            <div className="w-1/2 h-full flex items-center justify-center bg-black/10 p-2">
              <div className="w-full max-w-xs h-full flex items-center justify-center">
                <div className="w-full bg-gray-900 rounded-lg overflow-hidden shadow-2xl group">
                  <AspectRatio ratio={9/16} className="h-full">
                    {selectedCreative.type === "video" && selectedCreative.videoUrl ? (
                      <video 
                        src={selectedCreative.videoUrl}
                        className="w-full h-full object-contain bg-gray-900 transition-transform duration-300 group-hover:scale-105"
                        controls
                        autoPlay
                        muted
                        playsInline
                      />
                    ) : (
                      <img 
                        src={selectedCreative.thumbnail} 
                        alt={selectedCreative.title} 
                        className="w-full h-full object-contain bg-gray-900 transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </AspectRatio>
                </div>
              </div>
            </div>

            {/* Updated text section with equal width - 50% */}
            <div className="w-1/2 h-full overflow-y-auto">
              <div className="p-3 space-y-3 h-full">
                {selectedCreative.brandName && (
                  <motion.p 
                    className="text-[#9ec8ff] font-semibold text-base"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {selectedCreative.brandName}
                  </motion.p>
                )}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{selectedCreative.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedCreative.description}</p>
                </motion.div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700/50"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-gradient-to-r from-transparent via-[#4d9fff]/30 to-transparent px-3">
                      <BarChart2 className="h-3 w-3 text-[#9ec8ff]" />
                    </div>
                  </div>
                </div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-base font-semibold text-white flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4d9fff] mr-2"></div>
                    Performance Metrics
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedCreative.metrics.map((metric, idx) => (
                      <motion.div 
                        key={idx} 
                        className="tdia-card p-2.5 hover:border-[#4d9fff]/30 transition-all duration-300 flex items-center group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="mr-2.5 group-hover:scale-110 transition-transform">
                          {metric.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-400">{metric.label}</div>
                          <div className="text-base font-bold text-white">{metric.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700/50"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-gradient-to-r from-transparent via-green-400/20 to-transparent px-3">
                      <TrendingUp className="h-3 w-3 text-green-400" />
                    </div>
                  </div>
                </div>

                <motion.div 
                  className="bg-gradient-to-br from-gray-800/30 via-gray-900/30 to-black/30 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#4d9fff]/10 rounded-full blur-xl"></div>
                  <h4 className="text-base font-semibold text-white mb-2 flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></div>
                    Campaign Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-xs">
                    This {selectedCreative.format.toLowerCase()} creative was designed to maximize engagement and conversion through 
                    authentic storytelling and data-driven optimization. The campaign achieved exceptional performance metrics 
                    across all key indicators, demonstrating the effectiveness of our creative strategy and execution.
                  </p>
                </motion.div>
              </div>
            </div>
          </SpecialModalWrapper>
        )}
      </Dialog>
    </section>
  );
};

export default CreativesPortfolio;
