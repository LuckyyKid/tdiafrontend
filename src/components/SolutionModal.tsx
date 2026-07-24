
import React from 'react';
import { Dialog } from "@/components/ui/dialog";
import CreativeModalContent from './CreativeModalContent';
import MarketingSpendModalContent from './MarketingSpendModalContent';
import MarketingStrategyModalContent from './MarketingStrategyModalContent';
import CreativeFatigueModalContent from './CreativeFatigueModalContent';
import EverythingButNothingModalContent from './EverythingButNothingModalContent';
import CreativeScoringModalContent from './CreativeScoringModalContent';
import StandOutModalContent from './StandOutModalContent';
import OmniFlowModalContent from './OmniFlowModalContent';
import InventoryManagementModalContent from './InventoryManagementModalContent';
import ScalingPlateauModalContent from './ScalingPlateauModalContent';
import OfferToAdSyncModalContent from './OfferToAdSyncModalContent';
import DefaultSolutionModal from './modals/DefaultSolutionModal';
import SpecialModalWrapper from './modals/SpecialModalWrapper';
import OmniFlowWrapper from './modals/OmniFlowWrapper';

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  steps: string[];
  modalId?: number;
}

const SolutionModal: React.FC<SolutionModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  steps,
  modalId
}) => {
  // Helper function to render the appropriate modal content based on modal ID
  const renderModalContent = () => {
    // Special case modals
    switch (modalId) {
      case 1: // Stand out from competition
        return (
          <SpecialModalWrapper title={title} onClose={onClose}>
            <StandOutModalContent onClose={onClose} />
          </SpecialModalWrapper>
        );
      case 2: // Marketing without clear strategy
        return (
          <SpecialModalWrapper title={title} onClose={onClose}>
            <MarketingStrategyModalContent onClose={onClose} />
          </SpecialModalWrapper>
        );
      case 3: // If Meta goes down, so does my business - USE SPECIALIZED WRAPPER
        return (
          <OmniFlowWrapper title={title} onClose={onClose}>
            <OmniFlowModalContent onClose={onClose} />
          </OmniFlowWrapper>
        );
      case 4: // Scaling plateau
        return (
          <SpecialModalWrapper title={title} onClose={onClose}>
            <ScalingPlateauModalContent onClose={onClose} />
          </SpecialModalWrapper>
        );
      case 5: // Inefficient inventory management
        return (
          <SpecialModalWrapper title={title} onClose={onClose}>
            <InventoryManagementModalContent onClose={onClose} />
          </SpecialModalWrapper>
        );
      case 6: // Offer-to-Ad Sync
        return (
          <SpecialModalWrapper title={title} onClose={onClose}>
            <OfferToAdSyncModalContent onClose={onClose} />
          </SpecialModalWrapper>
        );
      case 7: // Creative chaos
        return (
          <SpecialModalWrapper title={title} onClose={onClose}>
            <CreativeModalContent onClose={onClose} />
          </SpecialModalWrapper>
        );
      case 8: // Marketing spend
        return (
          <SpecialModalWrapper title={title} onClose={onClose}>
            <MarketingSpendModalContent onClose={onClose} />
          </SpecialModalWrapper>
        );
      case 9: // Creative fatigue
        return (
          <SpecialModalWrapper title={title} onClose={onClose}>
            <CreativeFatigueModalContent onClose={onClose} />
          </SpecialModalWrapper>
        );
      case 10: // Everything but nothing works
        return (
          <SpecialModalWrapper title={title} onClose={onClose}>
            <EverythingButNothingModalContent onClose={onClose} />
          </SpecialModalWrapper>
        );
      case 11: // Creative Scoring OS
        return (
          <SpecialModalWrapper title={title} onClose={onClose}>
            <CreativeScoringModalContent onClose={onClose} />
          </SpecialModalWrapper>
        );
      default:
        // Default modal for other problems
        return <DefaultSolutionModal title={title} description={description} steps={steps} onClose={onClose} />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      {renderModalContent()}
    </Dialog>
  );
};

export default SolutionModal;
