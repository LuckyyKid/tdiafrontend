import React from "react";
import { useTranslation } from "react-i18next";
import JobPageLayout from "../../components/JobPageLayout";

const DataAnalyst = () => {
  const { t } = useTranslation();
  const job = t('jobPages.dataAnalyst', { returnObjects: true }) as any;
  return <JobPageLayout job={job} />;
};

export default DataAnalyst;
