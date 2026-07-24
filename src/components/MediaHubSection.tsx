
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Youtube, FileImage, FileText, Download, ExternalLink, Podcast } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Input } from "@/components/ui/input";
import Card3D from './Card3D';
import ParallaxDots from './ParallaxDots';

// Media content items
const mediaContent = [
  {
    platform: "YouTube",
    icon: Youtube,
    title: "How We Helped Runak Hit 7x ROAS",
    image: "/lovable-uploads/c8b3e4cb-8979-4685-b500-0e7c71f5182b.png",
    url: "https://youtube.com",
    color: "from-red-600 to-red-700"
  },
  {
    platform: "Spotify",
    icon: Podcast,
    title: "Les Brutes d'Acquisition",
    image: "/lovable-uploads/80b100b9-0baf-4646-93e7-d1229bef68cd.png",
    url: "https://spotify.com",
    color: "from-green-600 to-green-700"
  },
  {
    platform: "Article",
    icon: FileText,
    title: "The Promise of Attribution Models",
    image: "/lovable-uploads/c9e81737-3181-455f-bd43-4066e3a4564d.png",
    url: "/blog/attribution-models",
    color: "from-orange-500 to-orange-600"
  },
];

// Free resources items
const resources = [
  {
    title: "Top Performing Ads of 2025 (Ecom Edition)",
    description: "Learn what's actually converting across Meta, TikTok, and Google.",
    icon: FileImage,
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "TDIA Creative Testing Calendar",
    description: "Plug-and-play weekly schedule to avoid fatigue and launch winning ads fast.",
    icon: FileText,
    color: "from-green-500 to-blue-600",
  },
  {
    title: "Scaling Blueprint: From $30k to $300k/mo",
    description: "Breakdown of our exact frameworks with examples and steps.",
    icon: FileText, 
    color: "from-orange-500 to-red-600",
  },
];

interface LeadFormProps {
  resourceTitle: string;
  onSubmit: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ resourceTitle, onSubmit }) => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // In a real app, you'd send this to your backend
      console.log(`Email submitted for ${resourceTitle}:`, email);
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-2">
      <p className="text-sm text-muted-foreground">
        Enter your email to get instant access to this resource
      </p>
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-muted/80"
      />
      <Button type="submit" className="w-full">
        <Download className="mr-2 h-4 w-4" />
        Download Now
      </Button>
    </form>
  );
};

const MediaHubSection: React.FC = () => {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);

  const handleResourceClick = (title: string) => {
    setSelectedResource(title);
    setIsThankYouVisible(false);
  };

  const handleLeadFormSubmit = () => {
    setIsThankYouVisible(true);
  };

  const handleCloseDialog = () => {
    setSelectedResource(null);
    setIsThankYouVisible(false);
  };

  return (
    <section className="w-full pt-20 pb-20 font-sans relative overflow-hidden" style={{ background: '#000000', color: 'white' }}>
      {/* ParallaxDots background like in VideoSection */}
      <ParallaxDots 
        count={40} 
        colors={['#006fff', '#3944bc', '#8bfa7b', '#ffffff']} 
        minSize={2} 
        maxSize={7} 
        className="z-0 opacity-70"
      />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Scale Smarter: Insights, Playbooks & Tools for Ecom Founders
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Watch. Download. Apply. No fluff — just proven strategies to scale predictably without wasting ad spend.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* LEFT COLUMN - Learn from Us */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center text-white">
              Learn from Us
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {mediaContent.map((item, i) => (
                <motion.div 
                  key={i} 
                  className="group"
                >
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card3D 
                      glowColor="rgba(0, 111, 255, 0.2)" 
                      className="overflow-hidden"
                    >
                      <Card className="overflow-hidden glass-morphism-dark border-white/5 h-full">
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-4">
                            <div className="flex items-start gap-3">
                              <div className={`bg-gradient-to-br ${item.color} p-2 rounded-full`}>
                                <item.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-xs font-medium text-[#006fff]">{item.platform}</div>
                                <h3 className="text-white font-medium">{item.title}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Card3D>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Steal Our Best Resources */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center text-white">
              Steal Our Best Resources
            </h3>
            
            <div className="grid grid-cols-1 gap-5">
              {resources.map((resource, i) => (
                <motion.div 
                  key={i} 
                  onClick={() => handleResourceClick(resource.title)}
                >
                  <Card3D 
                    glowColor="rgba(0, 111, 255, 0.15)"
                    className="cursor-pointer"
                  >
                    <Card className="backdrop-blur-md bg-white/5 border-white/5">
                      <div className="p-5 flex items-center gap-4">
                        <div className={`rounded-lg p-3 bg-gradient-to-br ${resource.color} shadow-lg`}>
                          <resource.icon className="w-5 h-5 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-1">{resource.title}</h3>
                          <p className="text-sm text-white/70">{resource.description}</p>
                        </div>
                        
                        <Button variant="outline" size="sm" className="shrink-0 hover:bg-white/10 border-white/20 text-white">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </Card>
                  </Card3D>
                </motion.div>
              ))}
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4 mt-6">
              <p className="text-sm text-center text-white/70">
                <span className="font-medium text-white">Used by 1,200+ brands</span> to scale profitably without wasting ad spend.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Secondary CTA */}
        <div className="flex justify-center mt-16">
          <Button 
            className="bg-[#006fff] hover:bg-[#006fff]/80 text-black p-4 rounded-full transform transition-all duration-500 hover:scale-110"
            size="lg"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Explore All Resources
          </Button>
        </div>
      </div>

      {/* Lead form dialog */}
      <Dialog open={selectedResource !== null} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-md bg-[#1A1F2C] border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>{isThankYouVisible ? "Thank You!" : selectedResource}</DialogTitle>
          </DialogHeader>
          {isThankYouVisible ? (
            <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="rounded-full bg-green-500/10 p-3">
                <div className="rounded-full bg-green-500/20 p-2">
                  <Download className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <h3 className="font-medium text-lg">Your download is ready!</h3>
              <p className="text-white/70 text-sm">
                We've sent the resource to your email address. Check your inbox!
              </p>
              <Button onClick={handleCloseDialog} className="bg-white/10 hover:bg-white/20 text-white">
                Close
              </Button>
            </div>
          ) : (
            <LeadForm 
              resourceTitle={selectedResource || ""} 
              onSubmit={handleLeadFormSubmit} 
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MediaHubSection;
