import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Play, TrendingUp, Eye, DollarSign, BarChart2 } from "lucide-react";
import { fadeInUp, staggerContainer, staggeredItem } from "@/lib/animations";
import { Dialog } from "@/components/ui/dialog";
import SpecialModalWrapper from "./modals/SpecialModalWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type MetricKey = "hookRate" | "roas" | "ctr";

interface CreativeMeta {
  id: number;
  type: "image" | "video";
  thumbnail: string;
  videoUrl?: string;
  brandName?: string;
  format: "UGC" | "Professional" | "Demo";
  metrics: Array<{ key: MetricKey; value: string }>;
}

interface Creative extends CreativeMeta {
  title: string;
  description: string;
}

const METRIC_ICONS: Record<MetricKey, React.ReactNode> = {
  hookRate: <Eye className="h-4 w-4 text-purple-400" />,
  roas: <DollarSign className="h-4 w-4 text-green-400" />,
  ctr: <TrendingUp className="h-4 w-4 text-blue-400" />,
};

// Static per-creative data (media + numeric metrics). Copy comes from i18n.
const CREATIVES_META: CreativeMeta[] = [
  { id: 11, type: "video", videoUrl: "https://i.imgur.com/8GHSdYV.mp4", thumbnail: "", brandName: "Ika", format: "UGC",
    metrics: [{ key: "hookRate", value: "54%" }, { key: "roas", value: "6.8x" }, { key: "ctr", value: "5.3%" }] },
  { id: 12, type: "image", thumbnail: "https://i.imgur.com/hAZmSXa.jpeg", brandName: "Annick Levesque", format: "Professional",
    metrics: [{ key: "hookRate", value: "52%" }, { key: "roas", value: "6.4x" }, { key: "ctr", value: "5.0%" }] },
  { id: 13, type: "video", videoUrl: "https://i.imgur.com/JqQFYVC.mp4", thumbnail: "", brandName: "1001 Noix", format: "UGC",
    metrics: [{ key: "hookRate", value: "52%" }, { key: "roas", value: "6.5x" }, { key: "ctr", value: "5.1%" }] },
  { id: 14, type: "video", videoUrl: "https://i.imgur.com/Mm5zEKX.mp4", thumbnail: "", brandName: "Ika", format: "UGC",
    metrics: [{ key: "hookRate", value: "49%" }, { key: "roas", value: "5.9x" }, { key: "ctr", value: "4.8%" }] },
  { id: 15, type: "video", videoUrl: "https://i.imgur.com/sk7NXwR.mp4", thumbnail: "", brandName: "Ika", format: "Demo",
    metrics: [{ key: "hookRate", value: "48%" }, { key: "roas", value: "5.8x" }, { key: "ctr", value: "4.6%" }] },
  { id: 16, type: "video", videoUrl: "https://i.imgur.com/wgo7lcU.mp4", thumbnail: "", brandName: "Annick Levesque", format: "Professional",
    metrics: [{ key: "hookRate", value: "50%" }, { key: "roas", value: "6.1x" }, { key: "ctr", value: "4.9%" }] },
  { id: 17, type: "video", videoUrl: "https://i.imgur.com/OYaPVGW.mp4", thumbnail: "", brandName: "Thé du Nord", format: "UGC",
    metrics: [{ key: "hookRate", value: "49%" }, { key: "roas", value: "5.9x" }, { key: "ctr", value: "4.8%" }] },
  { id: 18, type: "video", videoUrl: "https://i.imgur.com/bZgUnz9.mp4", thumbnail: "", brandName: "1001 Noix", format: "UGC",
    metrics: [{ key: "hookRate", value: "51%" }, { key: "roas", value: "6.2x" }, { key: "ctr", value: "5.0%" }] },
  { id: 19, type: "video", videoUrl: "https://i.imgur.com/3IH2jx5.mp4", thumbnail: "", brandName: "GoCoconut", format: "UGC",
    metrics: [{ key: "hookRate", value: "47%" }, { key: "roas", value: "5.5x" }, { key: "ctr", value: "4.7%" }] },
  { id: 20, type: "video", videoUrl: "https://i.imgur.com/aKavNTy.mp4", thumbnail: "", brandName: "GSTHST", format: "UGC",
    metrics: [{ key: "hookRate", value: "47%" }, { key: "roas", value: "5.8x" }, { key: "ctr", value: "4.3%" }] },
  { id: 21, type: "image", thumbnail: "https://i.imgur.com/1pUsbDs.png", brandName: "Maison LeChêne", format: "Professional",
    metrics: [{ key: "hookRate", value: "45%" }, { key: "roas", value: "5.6x" }, { key: "ctr", value: "4.2%" }] },
  { id: 22, type: "image", thumbnail: "https://i.imgur.com/5r9AapP.png", brandName: "DASSA", format: "Professional",
    metrics: [{ key: "hookRate", value: "46%" }, { key: "roas", value: "5.7x" }, { key: "ctr", value: "4.4%" }] },
  { id: 23, type: "image", thumbnail: "https://i.imgur.com/1RIiSQB.png", brandName: "GoCoconut", format: "Professional",
    metrics: [{ key: "hookRate", value: "44%" }, { key: "roas", value: "5.3x" }, { key: "ctr", value: "4.0%" }] },
  { id: 24, type: "image", thumbnail: "/lovable-uploads/1806c6e8-7988-4c4d-bc40-cb5f7496b192.png", brandName: "Thé du Nord", format: "Professional",
    metrics: [{ key: "hookRate", value: "43%" }, { key: "roas", value: "5.2x" }, { key: "ctr", value: "3.9%" }] },
  { id: 25, type: "image", thumbnail: "/lovable-uploads/d0c5e71a-a087-4703-8753-c46afc640f7c.png", brandName: "Thé du Nord", format: "Professional",
    metrics: [{ key: "hookRate", value: "42%" }, { key: "roas", value: "5.1x" }, { key: "ctr", value: "3.8%" }] },
  { id: 26, type: "image", thumbnail: "/lovable-uploads/a69e6edd-f546-4087-b265-bb343d090ab6.png", brandName: "Thé du Nord", format: "Professional",
    metrics: [{ key: "hookRate", value: "41%" }, { key: "roas", value: "5.0x" }, { key: "ctr", value: "3.7%" }] },
  { id: 27, type: "image", thumbnail: "https://i.imgur.com/xoO2Gq5.png", brandName: "GoCoconut", format: "Professional",
    metrics: [{ key: "hookRate", value: "40%" }, { key: "roas", value: "4.9x" }, { key: "ctr", value: "3.6%" }] },
  { id: 28, type: "image", thumbnail: "https://i.imgur.com/KBugpda.png", brandName: "1001 Noix", format: "Professional",
    metrics: [{ key: "hookRate", value: "47%" }, { key: "roas", value: "5.8x" }, { key: "ctr", value: "4.3%" }] },
  { id: 29, type: "image", thumbnail: "https://i.imgur.com/DEw5Dgb.png", brandName: "Ika", format: "Professional",
    metrics: [{ key: "hookRate", value: "42%" }, { key: "roas", value: "5.2x" }, { key: "ctr", value: "3.9%" }] },
  { id: 30, type: "image", thumbnail: "https://i.imgur.com/mCaGiml.png", brandName: "Ika", format: "Professional",
    metrics: [{ key: "hookRate", value: "38%" }, { key: "roas", value: "4.8x" }, { key: "ctr", value: "3.5%" }] },
  { id: 31, type: "image", thumbnail: "https://i.imgur.com/Oe987xX.jpeg", brandName: "Ika", format: "Professional",
    metrics: [{ key: "hookRate", value: "44%" }, { key: "roas", value: "6.3x" }, { key: "ctr", value: "4.1%" }] },
];

const FORMAT_FILTER_KEYS: Record<string, "ugc" | "professional" | "demo"> = {
  UGC: "ugc",
  Professional: "professional",
  Demo: "demo",
};

const CreativesPortfolio: React.FC = () => {
  const { t, ready } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedCreative, setSelectedCreative] = useState<Creative | null>(null);

  const creativeCopy = t("pages.ourWork.portfolio.creatives", {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;

  const metricLabels = t("pages.ourWork.portfolio.metrics", {
    returnObjects: true,
  }) as Record<MetricKey, string>;

  const filterLabels = t("pages.ourWork.portfolio.filters", {
    returnObjects: true,
  }) as Record<string, string>;

  const creatives: Creative[] = useMemo(() => {
    if (!ready || !Array.isArray(creativeCopy)) return [];
    return CREATIVES_META.map((meta, i) => ({
      ...meta,
      title: creativeCopy[i]?.title ?? "",
      description: creativeCopy[i]?.description ?? "",
    }));
  }, [creativeCopy, ready]);

  const shuffledCreatives = useMemo(() => {
    const ugc = creatives.filter((c) => c.format === "UGC");
    const pro = creatives.filter((c) => c.format === "Professional");
    const demo = creatives.filter((c) => c.format === "Demo");
    const mixed: Creative[] = [];
    const maxLen = Math.max(ugc.length, pro.length, demo.length);
    for (let i = 0; i < maxLen; i++) {
      if (ugc[i]) mixed.push(ugc[i]);
      if (pro[i]) mixed.push(pro[i]);
      if (demo[i]) mixed.push(demo[i]);
    }
    return mixed;
  }, [creatives]);

  const filterTypes = useMemo(
    () => ["all", ...Array.from(new Set(CREATIVES_META.map((c) => FORMAT_FILTER_KEYS[c.format])))],
    []
  );

  const filteredCreatives = useMemo(() => {
    if (activeFilter === "all") return shuffledCreatives;
    return shuffledCreatives.filter(
      (c) => FORMAT_FILTER_KEYS[c.format] === activeFilter
    );
  }, [activeFilter, shuffledCreatives]);

  if (!ready) return null;

  const formatDisplayLabel = (creativeFormat: Creative["format"]) =>
    filterLabels[FORMAT_FILTER_KEYS[creativeFormat]] ?? creativeFormat;

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
          <motion.div variants={fadeInUp} className="pill-tdia mx-auto mb-6">
            {t("pages.ourWork.portfolio.eyebrow")}
          </motion.div>
          <motion.h2
            className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]"
            variants={fadeInUp}
          >
            <span>{t("pages.ourWork.portfolio.heading")} </span>
            <span className="serif">{t("pages.ourWork.portfolio.headingSerif")}</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-base md:text-lg text-[#7c8aa5]"
            variants={fadeInUp}
          >
            {t("pages.ourWork.portfolio.subtitle")}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 mt-8 justify-center"
            variants={fadeInUp}
          >
            {filterTypes.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs transition-all font-mono-tdia uppercase tracking-[0.15em] hairline ${
                  activeFilter === filter
                    ? "bg-[#4d9fff]/15 text-[#9ec8ff]"
                    : "bg-white/[0.02] text-[#7c8aa5] hover:bg-white/[0.04]"
                }`}
              >
                {filterLabels[filter] ?? filter}
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
                onClick={() => setSelectedCreative(creative)}
              >
                <div className="relative">
                  <AspectRatio ratio={9 / 16} className="bg-[#060910]">
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
                        {formatDisplayLabel(creative.format)}
                      </span>
                    </div>
                  </AspectRatio>
                </div>

                <div className="p-5">
                  <h3 className="tdia-h text-[18px] text-white mb-2 line-clamp-2">
                    {creative.title}
                  </h3>
                  <p className="text-[#7c8aa5] text-sm mb-4 line-clamp-3">
                    {creative.description}
                  </p>

                  <div className="flex items-center gap-2 flex-wrap">
                    {creative.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.02] hairline"
                      >
                        <span className="text-[10px] text-[#7c8aa5] font-mono-tdia uppercase tracking-wider">
                          {metricLabels[metric.key]}
                        </span>
                        <span className="text-xs font-mono-tdia text-[#9ec8ff]">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-[#7c8aa5]">
                {t("pages.ourWork.portfolio.emptyState")}{" "}
                <button
                  onClick={() => setActiveFilter("all")}
                  className="text-[#9ec8ff] hover:underline"
                >
                  {t("pages.ourWork.portfolio.viewAll")}
                </button>
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <Dialog
        open={selectedCreative !== null}
        onOpenChange={() => setSelectedCreative(null)}
      >
        {selectedCreative && (
          <SpecialModalWrapper
            title={selectedCreative.title}
            onClose={() => setSelectedCreative(null)}
            compact={true}
          >
            <div className="w-1/2 h-full flex items-center justify-center bg-black/10 p-2">
              <div className="w-full max-w-xs h-full flex items-center justify-center">
                <div className="w-full bg-gray-900 rounded-lg overflow-hidden shadow-2xl group">
                  <AspectRatio ratio={9 / 16} className="h-full">
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
                  <h3 className="text-lg font-bold text-white mb-2">
                    {selectedCreative.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {selectedCreative.description}
                  </p>
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
                    {t("pages.ourWork.portfolio.modal.performanceMetrics")}
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
                          {METRIC_ICONS[metric.key]}
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-400">
                            {metricLabels[metric.key]}
                          </div>
                          <div className="text-base font-bold text-white">
                            {metric.value}
                          </div>
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
                    {t("pages.ourWork.portfolio.modal.campaignOverview")}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-xs">
                    {t("pages.ourWork.portfolio.modal.campaignDescription", {
                      format: formatDisplayLabel(selectedCreative.format).toLowerCase(),
                    })}
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
