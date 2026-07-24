import React from "react";
import { useTranslation } from "react-i18next";
import JobPageLayout from "../../components/JobPageLayout";

const SeniorMediaBuyer = () => {
  const { t } = useTranslation();
  const job = t('jobPages.seniorMediaBuyer', { returnObjects: true }) as any;
  return <JobPageLayout job={job} />;
};

export default SeniorMediaBuyer;
