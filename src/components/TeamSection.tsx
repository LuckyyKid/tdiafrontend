import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import TeamMemberModal from './TeamMemberModal';
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from 'react-i18next';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  videoPreview?: string;
  videoFull?: string;
  bio: string;
  style: { label: string; icon: string; }[];
}

const TeamSection: React.FC = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState<boolean>(false);

  const teamMembers: TeamMember[] = [
    {
      id: "isaac",
      name: "Isaac Mikola",
      role: t('teamRoles.founder'),
      photo: "/lovable-uploads/4285838e-319b-4162-9522-23ff393a6e1d.png",
      videoPreview: "https://example.com/isaac-preview.mp4",
      videoFull: "https://example.com/isaac-full.mp4",
      bio: t('team.founderBio'),
      style: [{ label: t('teamStyles.strategic'), icon: "" }, { label: t('teamStyles.dataDriven'), icon: "" }, { label: t('teamStyles.innovative'), icon: "" }]
    },
    {
      id: "mahdi",
      name: "Mahdi Almi",
      role: t('teamRoles.headCreatives'),
      photo: "/lovable-uploads/b3c497cb-c8cf-4cec-aa09-7e64cbe5ea55.png",
      videoPreview: "https://example.com/mahdi-preview.mp4",
      videoFull: "https://example.com/mahdi-full.mp4",
      bio: t('team.creativeBio'),
      style: [{ label: t('teamStyles.creative'), icon: "" }, { label: t('teamStyles.detailOriented'), icon: "" }, { label: t('teamStyles.collaborative'), icon: "" }]
    },
    {
      id: "bafing",
      name: "Bafing Keita",
      role: t('teamRoles.headData'),
      photo: "/lovable-uploads/664cb3fb-6045-474b-a673-d32ac9eb4897.png",
      videoPreview: "https://example.com/bafing-preview.mp4",
      videoFull: "https://example.com/bafing-full.mp4",
      bio: t('team.dataBio'),
      style: [{ label: t('teamStyles.analytical'), icon: "" }, { label: t('teamStyles.proactive'), icon: "" }, { label: t('teamStyles.methodical'), icon: "" }]
    },
  ];

  const currentIndex = selectedMember ? teamMembers.findIndex(m => m.id === selectedMember.id) : -1;
  const prevMember = currentIndex > 0 ? teamMembers[currentIndex - 1] : null;
  const nextMember = currentIndex < teamMembers.length - 1 ? teamMembers[currentIndex + 1] : null;

  const handleMouseEnter = (id: string) => {
    if (!isMobile) { setHoveredMember(id); setIsPreviewPlaying(true); }
  };
  const handleMouseLeave = () => {
    if (!isMobile) { setHoveredMember(null); setIsPreviewPlaying(false); }
  };

  return (
    <section className="w-full py-24 md:py-32 relative halo-top">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="pill-tdia mx-auto mb-6">{t('team.ourTeam')}</div>
          <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]">
            <span>{t('team.experts')} </span>
            <span className="serif">{t('team.expertsItalic')}</span>{' '}
            <span>{t('team.expertsSubtitle')}</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#7c8aa5]">
            {t('team.expertsDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              isDesktopActive={!isMobile && hoveredMember === member.id && isPreviewPlaying}
              isMobile={isMobile}
              onMouseEnter={() => handleMouseEnter(member.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          prevMember={prevMember}
          nextMember={nextMember}
          onClose={() => setSelectedMember(null)}
          onNavigate={(m) => m && setSelectedMember(m)}
        />
      )}
    </section>
  );
};

interface TeamCardProps {
  member: TeamMember;
  isDesktopActive: boolean;
  isMobile: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({
  member,
  isDesktopActive,
  isMobile,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const inView = useInView(cardRef, { amount: 0.6 });
  const isActive = isMobile ? inView : isDesktopActive;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isActive) {
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [isActive]);

  return (
    <motion.div
      ref={cardRef}
      className="tdia-card relative aspect-[3/4] overflow-hidden cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={member.photo}
        alt={member.name}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isActive ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {member.videoPreview && (
        <video
          ref={videoRef}
          src={member.videoPreview}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#060910] via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="tdia-h text-[22px] text-white">{member.name}</h3>
        <p className="text-[#9ec8ff] text-sm">{member.role}</p>
      </div>
    </motion.div>
  );
};

export default TeamSection;
