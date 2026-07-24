
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import Card3D from './Card3D';
import { useTranslation } from 'react-i18next';

// Définition du type pour les membres de l'équipe
interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const FounderSection: React.FC = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  // Liste de tous les membres de l'équipe
  const teamMembers: TeamMember[] = [
    {
      name: "Isaac Mikola",
      role: t('teamRoles.founder'),
      photo: "/lovable-uploads/4285838e-319b-4162-9522-23ff393a6e1d.png"
    },
    {
      name: "Mahdi Almi",
      role: t('teamRoles.headCreatives'),
      photo: "/lovable-uploads/b3c497cb-c8cf-4cec-aa09-7e64cbe5ea55.png"
    },
    {
      name: "Bafing Keita",
      role: t('teamRoles.headData'),
      photo: "/lovable-uploads/664cb3fb-6045-474b-a673-d32ac9eb4897.png"
    },
  ];

  return (
    <div className="w-full bg-[#0a0a0a] overflow-hidden">
      {/* Team Section */}
      <div className="w-full py-20 font-sans relative">
        <div className="container mx-auto max-w-6xl px-4 z-10 relative">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="text-white border-white/20 px-4 py-1 text-sm rounded-full">
              {t('team.badge')}
            </Badge>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-10">
            {t('team.title')} <span className="italic font-normal">{t('team.titleItalic')}</span>
          </h2>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-white/80 text-lg text-center leading-relaxed">
              {t('team.description')}
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <Button className="text-white font-thin text-lg">
              {t('team.cta')} <ArrowRight className="ml-2" />
            </Button>
          </div>
          
          {/* Team Members - Desktop View */}
          {!isMobile && (
            <div className="hidden md:grid grid-cols-3 gap-6 mb-16">
              {teamMembers.map((member, index) => (
                <Card3D key={index} className="bg-transparent">
                  <Card key={index} className="bg-black/20 backdrop-blur-sm border border-white/10 overflow-hidden">
                    <div className="relative aspect-[3/4]">
                      <img 
                        src={member.photo} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                        <p className="text-white/70">{member.role}</p>
                      </div>
                    </div>
                  </Card>
                </Card3D>
              ))}
            </div>
          )}
          
          {/* Team Members - Mobile View (Carousel) */}
          {isMobile && (
            <div className="md:hidden relative mb-16">
              <Carousel className="w-full" opts={{
                align: "start",
                containScroll: "trimSnaps",
                dragFree: true
              }}>
                <CarouselContent>
                  {teamMembers.map((member, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="bg-black/20 backdrop-blur-sm border border-white/10 overflow-hidden">
                        <div className="relative aspect-[3/4]">
                          <img 
                            src={member.photo} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                            <p className="text-white/70">{member.role}</p>
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-4">
                  <CarouselPrevious className="static transform-none bg-black/50 border-white/20 text-white hover:bg-black/80" />
                  <CarouselNext className="static transform-none bg-black/50 border-white/20 text-white hover:bg-black/80" />
                </div>
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
