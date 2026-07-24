
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';
import type { TeamMember } from './TeamSection';

interface TeamMemberModalProps {
  member: TeamMember;
  prevMember: TeamMember | null;
  nextMember: TeamMember | null;
  onClose: () => void;
  onNavigate: (member: TeamMember | null) => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({
  member,
  prevMember,
  nextMember,
  onClose,
  onNavigate
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  // Start playing the video when modal opens
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video playback error:", error);
      });
    }
    
    // Add escape key listener
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [member, onClose]);


  const handleCTAClick = () => {
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  return (
    <Dialog open={!!member} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl p-0 rounded-2xl bg-[#0b1220] hairline overflow-hidden">
        <div className="relative">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#060910]/80 hairline flex items-center justify-center text-white hover:bg-[#060910] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
          
          {/* Content layout - flex for desktop, column for mobile */}
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} min-h-[60vh]`}>
            {/* Left side - Video section */}
            <div className={`${isMobile ? 'w-full' : 'w-1/2'} relative bg-[#060910] overflow-hidden`}>
              {member.videoFull ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={member.videoFull}
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-[#060910]">
                  <img 
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            
            {/* Right side - Bio section */}
            <div className={`${isMobile ? 'w-full' : 'w-1/2'} p-6 md:p-8`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={member.id}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <div className="micro-label mb-2">Team</div>
                  <h2 className="tdia-h text-[28px] md:text-[32px] text-white mb-1">
                    <span className="serif">{member.name}</span>
                  </h2>
                  <p className="text-[#9ec8ff] font-mono-tdia text-xs uppercase tracking-wider">{member.role}</p>
                </div>

                <div className="max-w-none mb-8">
                  <p className="text-[#7c8aa5] leading-relaxed">{member.bio}</p>
                </div>
                
                {/* Style badges */}
                <div className="mb-8">
                  <div className="micro-label mb-3">{member.name}{t('teamModal.style')}</div>
                  <div className="flex flex-wrap gap-2">
                    {member.style.map((trait, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.02] hairline text-white/90 text-xs"
                      >
                        <span className="text-sm">{trait.icon}</span>
                        {trait.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <button
                    className="btn-tdia w-full justify-center"
                    onClick={handleCTAClick}
                  >
                    {t('teamModal.chooseStrategist')} {member.name.split(' ')[0]} {t('teamModal.chooseStrategistEnd')}
                  </button>

                  <div className="flex justify-between gap-2">
                    <button
                      className="btn-tdia-ghost flex-1 justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                      onClick={() => onNavigate(prevMember)}
                      disabled={!prevMember}
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      {prevMember ? `${t('teamModal.meet')} ${prevMember.name.split(' ')[0]}` : t('teamModal.previous')}
                    </button>

                    <button
                      className="btn-tdia-ghost flex-1 justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                      onClick={() => onNavigate(nextMember)}
                      disabled={!nextMember}
                    >
                      {nextMember ? `${t('teamModal.meet')} ${nextMember.name.split(' ')[0]}` : t('teamModal.next')}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberModal;
