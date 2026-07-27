
import { useState } from 'react';

export const useSolutionModals = () => {
  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  // Add solution modals data
  const solutionModalsData: Record<number, {
    title: string;
    description: string;
    steps: string[];
  }> = {
    1: {
      title: "Struggling to Stand Out from Competition",
      description: "Special modal for standing out from competition",
      steps: []
    },
    2: {
      title: "Marketing Without a Clear Strategy",
      description: "Develop a structured marketing plan with clear goals and measurable KPIs.",
      steps: [
        "Define your target audience and create detailed buyer personas",
        "Set SMART marketing objectives (Specific, Measurable, Achievable, Relevant, Time-bound)",
        "Select appropriate marketing channels based on where your audience spends time",
        "Create a content calendar and plan consistent messaging",
        "Implement tracking and analytics to measure performance"
      ]
    },
    3: {
      title: "If Meta goes down, so does my business.",
      description: "Special modal for multi-channel growth strategy",
      steps: []
    },
    4: {
      title: "We've hit a plateau, and nothing we try seems to move the needle",
      description: "Special modal for scaling plateau and Growth OS™",
      steps: []
    },
    5: {
      title: "Inefficient Inventory Management",
      description: "Special modal for inventory management and scaling with profit protection",
      steps: []
    },
    6: {
      title: "The ad looks great, but my page kills the vibe",
      description: "Special modal for offer-to-ad sync framework",
      steps: []
    },
    7: {
      title: "\"I throw creatives out randomly\"",
      description: "Special modal for creative testing methodology",
      steps: []
    },
    8: {
      title: "\"I'm spending money but have no idea where it's going\"",
      description: "Special modal for marketing spend tracking",
      steps: []
    },
    9: {
      title: "\"My creatives die after 10 days\"",
      description: "Special modal for creative fatigue management",
      steps: []
    },
    10: {
      title: "\"I'm doing everything, but nothing's working\"",
      description: "Special modal for streamlining marketing efforts",
      steps: []
    },
    11: {
      title: "TDIA's Creative Scoring OS™",
      description: "Solves: \"I throw creatives out randomly and hope for the best.\"",
      steps: []
    }
  };

  return { openModalId, openModal, closeModal, solutionModalsData };
};
