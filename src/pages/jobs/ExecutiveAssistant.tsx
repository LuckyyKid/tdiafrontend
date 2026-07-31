import React from "react";
import { useTranslation } from "react-i18next";
import JobPageLayout from "../../components/JobPageLayout";

const ExecutiveAssistant = () => {
  const { t } = useTranslation();
  const job = t('jobPages.executiveAssistant', { returnObjects: true }) as any;
  return <JobPageLayout job={job} />;
};

export default ExecutiveAssistant;
