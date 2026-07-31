import React from "react";
import { useTranslation } from "react-i18next";
import JobPageLayout from "../../components/JobPageLayout";

const BusinessAnalyst = () => {
  const { t } = useTranslation();
  const job = t('jobPages.businessAnalyst', { returnObjects: true }) as any;
  return <JobPageLayout job={job} />;
};

export default BusinessAnalyst;
