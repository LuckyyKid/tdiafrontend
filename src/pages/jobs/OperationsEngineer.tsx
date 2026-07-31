import React from "react";
import { useTranslation } from "react-i18next";
import JobPageLayout from "../../components/JobPageLayout";

const OperationsEngineer = () => {
  const { t } = useTranslation();
  const job = t('jobPages.operationsEngineer', { returnObjects: true }) as any;
  return <JobPageLayout job={job} />;
};

export default OperationsEngineer;
