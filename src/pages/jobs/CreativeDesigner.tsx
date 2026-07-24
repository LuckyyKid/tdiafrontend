import React from "react";
import { useTranslation } from "react-i18next";
import JobPageLayout from "../../components/JobPageLayout";

const CreativeDesigner = () => {
  const { t } = useTranslation();
  const job = t('jobPages.creativeDesigner', { returnObjects: true }) as any;
  return <JobPageLayout job={job} />;
};

export default CreativeDesigner;
