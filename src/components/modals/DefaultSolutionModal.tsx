import React from 'react';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Check, ArrowRight } from 'lucide-react';

interface DefaultSolutionModalProps {
  title: string;
  description: string;
  steps: string[];
  onClose: () => void;
}

const DefaultSolutionModal: React.FC<DefaultSolutionModalProps> = ({
  title,
  description,
  steps,
  onClose,
}) => {
  return (
    <DialogContent className="max-w-4xl md:max-w-5xl w-11/12 max-h-[90vh] bg-[#0b1220] hairline text-white overflow-hidden p-0">
      <DialogClose className="absolute right-4 top-4 z-50" onClick={onClose}>
        <X className="h-4 w-4 text-[#7c8aa5] hover:text-white transition-colors" />
        <span className="sr-only">Close</span>
      </DialogClose>

      <ScrollArea className="max-h-[90vh]">
        <div className="p-6 md:p-10">
          <div className="mb-8">
            <div className="micro-label mb-3">Solution</div>
            <DialogHeader>
              <DialogTitle className="tdia-h text-[28px] md:text-[38px] text-white">
                {title}
              </DialogTitle>
              <DialogDescription className="text-base md:text-lg text-[#7c8aa5] mt-4 leading-relaxed">
                {description}
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="mb-8">
            <h3 className="tdia-h text-[22px] md:text-[26px] text-white mb-6">
              <span>How we </span>
              <span className="serif">solve</span>
              <span> this</span>
            </h3>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="tdia-card p-6 flex items-start gap-5"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#4d9fff]/15 flex items-center justify-center">
                      <span className="font-mono-tdia text-[#9ec8ff] text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-base md:text-lg text-white/90 leading-relaxed">{step}</p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center">
                      <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tdia-card halo-cta p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <div className="micro-label mb-2">Next step</div>
              <h4 className="tdia-h text-[20px] md:text-[24px] text-white">
                <span>Ready to solve this </span>
                <span className="serif">problem?</span>
              </h4>
            </div>
            <button onClick={onClose} className="btn-tdia">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  );
};

export default DefaultSolutionModal;
