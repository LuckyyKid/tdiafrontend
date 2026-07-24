import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, X as XIcon } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { trackCTAClick, trackNavClick, trackOutboundClick } from '@/lib/analytics';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const handleCTAClick = () => {
    trackCTAClick('Contact Us', 'footer');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  return (
    <footer className="w-full text-white relative overflow-hidden hairline-t">
      <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex">
              <img src="/favicon.png" alt="TDIA" className="h-12 md:h-16 w-auto" />
            </Link>
            <p className="mt-6 text-[#7c8aa5] max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <button
              onClick={handleCTAClick}
              className="btn-tdia mt-8"
            >
              {t('footer.contact')}
            </button>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="micro-label mb-4">{t('footer.overview')}</div>
              <ul className="space-y-3">
                <li><Link to="/" onClick={() => trackNavClick(t('footer.home'), 'footer', '/')} className="text-sm text-[#e6ecf7] hover:text-[#9ec8ff] transition-colors">{t('footer.home')}</Link></li>
                <li><Link to="/case-studies" onClick={() => trackNavClick(t('footer.caseStudies'), 'footer', '/case-studies')} className="text-sm text-[#e6ecf7] hover:text-[#9ec8ff] transition-colors">{t('footer.caseStudies')}</Link></li>
                <li><Link to="/explore/our-work" onClick={() => trackNavClick(t('footer.ourWork'), 'footer', '/explore/our-work')} className="text-sm text-[#e6ecf7] hover:text-[#9ec8ff] transition-colors">{t('footer.ourWork')}</Link></li>
              </ul>
            </div>

            <div>
              <div className="micro-label mb-4">{t('footer.services')}</div>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-sm text-[#e6ecf7] hover:text-[#9ec8ff] transition-colors">{t('footer.allServices')}</Link></li>
                <li><Link to="/services/gestion-campagnes" className="text-sm text-[#e6ecf7] hover:text-[#9ec8ff] transition-colors">{t('footer.campaignManagement')}</Link></li>
                <li><Link to="/services/creatives-optimisees" className="text-sm text-[#e6ecf7] hover:text-[#9ec8ff] transition-colors">{t('footer.optimizedCreatives')}</Link></li>
                <li><Link to="/services/implementation-data" className="text-sm text-[#e6ecf7] hover:text-[#9ec8ff] transition-colors">{t('footer.dataImplementation')}</Link></li>
              </ul>
            </div>

            <div>
              <div className="micro-label mb-4">{t('footer.tdiaFamily')}</div>
              <ul className="space-y-3">
                <li><Link to="/our-team" className="text-sm text-[#e6ecf7] hover:text-[#9ec8ff] transition-colors">{t('footer.ourTeam')}</Link></li>
                <li><Link to="/explore/career" className="text-sm text-[#e6ecf7] hover:text-[#9ec8ff] transition-colors">{t('footer.careers')}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider + socials + legal */}
        <div className="mt-16 pt-8 hairline-t flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-xs text-[#7c8aa5] font-mono-tdia tracking-wider">
            © {new Date().getFullYear()} TDIA — {t('footer.allRightsReserved')}
          </div>

          <div className="flex items-center gap-6 text-xs">
            <Link to="/privacy-policy" className="text-[#7c8aa5] hover:text-white transition-colors">{t('footer.privacyPolicy')}</Link>
            <Link to="/terms" className="text-[#7c8aa5] hover:text-white transition-colors">{t('footer.termsOfService')}</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundClick('https://www.linkedin.com', 'LinkedIn')} className="text-[#7c8aa5] hover:text-[#9ec8ff] transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundClick('https://www.instagram.com', 'Instagram')} className="text-[#7c8aa5] hover:text-[#9ec8ff] transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundClick('https://www.facebook.com', 'Facebook')} className="text-[#7c8aa5] hover:text-[#9ec8ff] transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundClick('https://twitter.com', 'X/Twitter')} className="text-[#7c8aa5] hover:text-[#9ec8ff] transition-colors">
              <XIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
