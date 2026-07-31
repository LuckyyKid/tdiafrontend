import React from "react";
import { useTranslation } from "react-i18next";
import JobPageLayout from "../../components/JobPageLayout";

const MediaBuyer = () => {
  const { t } = useTranslation();
  const job = t('jobPages.mediaBuyer', { returnObjects: true }) as any;
  return <JobPageLayout job={job} />;
};

export default MediaBuyer;
