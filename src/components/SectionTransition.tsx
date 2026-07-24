import React from "react";
import { useTranslation } from "react-i18next";

const SectionTransition: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#060910] py-10 md:py-12 relative">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="h-px w-16 md:w-24 bg-[color:var(--tdia-hairline)]" />
        <div className="mx-4 micro-label">
          {t("sectionTransition.tagline")}
        </div>
        <div className="h-px w-16 md:w-24 bg-[color:var(--tdia-hairline)]" />
      </div>
    </div>
  );
};

export default SectionTransition;
