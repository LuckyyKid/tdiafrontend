
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface OmniFlowWrapperProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const OmniFlowWrapper: React.FC<OmniFlowWrapperProps> = ({
  title,
  onClose,
  children
}) => {
  return (
    <DialogContent 
      className="max-w-6xl w-[90vw] h-[90vh] max-h-[90vh] bg-gradient-to-br from-[#10112b] to-[#0a0b1d] border border-blue-900/20 text-white p-0 flex flex-col overflow-hidden z-[90] translate-y-0 touch-auto scroll-smooth"
      style={{ 
        top: '5vh', 
        left: '50%', 
        transform: 'translate(-50%, 0)',
        position: 'fixed'
      }}
    >
      <div className="p-4 md:p-5 border-b border-blue-900/20 flex-shrink-0">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-white">
            {title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            OmniFlow modal content
          </DialogDescription>
        </DialogHeader>
      </div>
      
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden touch-auto scroll-smooth">
        {children}
      </div>
    </DialogContent>
  );
};

export default OmniFlowWrapper;
