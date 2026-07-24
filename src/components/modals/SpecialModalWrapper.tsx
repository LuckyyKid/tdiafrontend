
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface SpecialModalWrapperProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  compact?: boolean;
}

const SpecialModalWrapper: React.FC<SpecialModalWrapperProps> = ({
  title,
  onClose,
  children,
  compact = false
}) => {
  return (
    <DialogContent className={`${compact ? 'max-w-5xl w-[90vw] h-[80vh]' : 'max-w-6xl w-[90vw] h-[85vh]'} bg-[#0b1220] hairline text-white p-0 flex flex-col overflow-hidden`}>
      <div className={`${compact ? 'p-4 pb-2' : 'p-5 md:p-6'} flex-shrink-0 hairline-b`}>
        <DialogHeader>
          <div className="micro-label mb-2">Solution</div>
          <DialogTitle className={`tdia-h ${compact ? 'text-[22px] md:text-[26px]' : 'text-[26px] md:text-[32px]'} text-white`}>
            {title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Creative performance modal
          </DialogDescription>
        </DialogHeader>
      </div>
      
      <div className="flex-1 flex overflow-hidden min-h-0">
        {children}
      </div>
    </DialogContent>
  );
};

export default SpecialModalWrapper;
