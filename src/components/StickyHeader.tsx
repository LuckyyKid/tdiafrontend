import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { trackCTAClick, trackNavClick, trackOutboundClick } from '@/lib/analytics';

const StickyHeader: React.FC = () => {
  const { t, ready } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isDrawerOpen) return;
    const mql = window.matchMedia('(min-width: 768px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsDrawerOpen(false);
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [isDrawerOpen]);

  if (!ready) return null;

  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'header');
    trackOutboundClick('https://calendly.com/tdiaagency/30min?month=2025-06', 'Book Your Strategy Call - Header');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const handleMenuItemClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isSticky
          ? "bg-[#060910]/85 backdrop-blur-xl hairline-b py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center select-none">
          <img
            src="/favicon.png"
            alt="TDIA"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[#e6ecf7] hover:text-white data-[state=open]:text-white text-sm font-normal px-3 py-2 hover:bg-white/[0.03]">
                  {t('header.services')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="bg-[#0a0e18] p-2 w-72 hairline rounded-xl">
                    <ListItem
                      title={t('header.servicesAcquisition')}
                      subtitle={t('header.servicesAcquisitionSubtitle')}
                      href="/acquisition"
                    />
                    <ListItem
                      title={t('header.servicesOperations')}
                      subtitle={t('header.servicesOperationsSubtitle')}
                      href="/operations"
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/case-studies"
            onClick={() => trackNavClick(t('header.caseStudies'), 'header', '/case-studies')}
            className="text-sm text-[#e6ecf7] hover:text-white transition-colors px-3 py-2"
          >
            {t('header.caseStudies')}
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[#e6ecf7] hover:text-white data-[state=open]:text-white text-sm font-normal px-3 py-2 hover:bg-white/[0.03]">
                  {t('header.explore')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="bg-[#0a0e18] p-2 w-56 hairline rounded-xl">
                    <ListItem title={t('header.ourWork')} href="/explore/our-work" />
                    <ListItem title={t('header.ecommerceProblems')} href="/ecommerce-problems" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/our-team"
            className="text-sm text-[#e6ecf7] hover:text-white transition-colors px-3 py-2"
          >
            {t('header.ourTeam')}
          </Link>

          <Link
            to="/methodologie"
            onClick={() => trackNavClick(t('header.ourProcess'), 'header', '/methodologie')}
            className="text-sm text-[#e6ecf7] hover:text-white transition-colors px-3 py-2"
          >
            {t('header.ourProcess')}
          </Link>

          <div className="mx-2 h-4 w-px bg-white/10" />

          <LanguageSwitcher />

          <button
            onClick={handleCTAClick}
            className="btn-tdia ml-2 text-sm py-2 px-5"
          >
            {t('header.getStarted')}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button
                className="p-2 rounded-full text-white hairline hover:bg-white/[0.04] transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-[#060910] border-t border-[color:var(--tdia-hairline)] max-h-[92svh] flex flex-col">
              <DrawerHeader className="hairline-b flex-shrink-0 py-3">
                <div className="flex justify-between items-center">
                  <DrawerTitle>
                    <img src="/favicon.png" alt="TDIA" className="h-7 w-auto" />
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <button className="p-2 text-white hover:bg-white/[0.04] rounded-full" aria-label="Close">
                      <X className="h-5 w-5" />
                    </button>
                  </DrawerClose>
                </div>
              </DrawerHeader>

              <div className="relative flex-1 min-h-0">
                <div
                  className="h-full overflow-y-auto overscroll-contain px-4 pb-8"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <div className="py-3 space-y-0.5">
                    <Link to="/" onClick={handleMenuItemClick} className="block py-2.5 text-[#e6ecf7] hairline-b hover:text-white">
                      {t('header.home')}
                    </Link>
                    <Link to="/case-studies" onClick={handleMenuItemClick} className="block py-2.5 text-[#e6ecf7] hairline-b hover:text-white">
                      {t('header.caseStudies')}
                    </Link>
                    <div className="py-2.5 hairline-b">
                      <div className="text-white text-sm mb-1.5">{t('header.services')}</div>
                      <div className="pl-2 space-y-1.5">
                        <Link to="/acquisition" onClick={handleMenuItemClick} className="block py-1">
                          <div className="text-sm text-[#e6ecf7] hover:text-white">{t('header.servicesAcquisition')}</div>
                          <div className="text-xs text-[#7c8aa5]">{t('header.servicesAcquisitionSubtitle')}</div>
                        </Link>
                        <Link to="/operations" onClick={handleMenuItemClick} className="block py-1">
                          <div className="text-sm text-[#e6ecf7] hover:text-white">{t('header.servicesOperations')}</div>
                          <div className="text-xs text-[#7c8aa5]">{t('header.servicesOperationsSubtitle')}</div>
                        </Link>
                      </div>
                    </div>
                    <div className="py-2.5 hairline-b">
                      <div className="text-white text-sm mb-1.5">{t('header.explore')}</div>
                      <div className="pl-2 space-y-1">
                        <Link to="/explore/our-work" onClick={handleMenuItemClick} className="block py-1 text-sm text-[#7c8aa5] hover:text-[#9ec8ff]">
                          {t('header.ourWork')}
                        </Link>
                        <Link to="/ecommerce-problems" onClick={handleMenuItemClick} className="block py-1 text-sm text-[#7c8aa5] hover:text-[#9ec8ff]">
                          {t('header.ecommerceProblems')}
                        </Link>
                        <Link to="/explore/career" onClick={handleMenuItemClick} className="block py-1 text-sm text-[#7c8aa5] hover:text-[#9ec8ff]">
                          {t('header.career')}
                        </Link>
                      </div>
                    </div>
                    <Link to="/our-team" onClick={handleMenuItemClick} className="block py-2.5 text-[#e6ecf7] hairline-b hover:text-white">
                      {t('header.ourTeam')}
                    </Link>
                    <Link to="/methodologie" onClick={handleMenuItemClick} className="block py-2.5 text-[#e6ecf7] hover:text-white">
                      {t('header.ourProcess')}
                    </Link>
                  </div>
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#060910] to-transparent" />
              </div>

              <div className="p-4 hairline-t flex-shrink-0">
                <button
                  onClick={() => { handleCTAClick(); handleMenuItemClick(); }}
                  className="btn-tdia w-full"
                >
                  {t('header.getStarted')}
                </button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({
  className,
  title,
  subtitle,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { title: string; subtitle?: string }) => (
  <li className="mb-1 last:mb-0">
    <NavigationMenuLink asChild>
      <Link
        to={href || "#"}
        onClick={() => trackNavClick(title, 'header', href || "#")}
        className={cn(
          "block select-none rounded-lg p-2 text-left text-[#e6ecf7] no-underline outline-none transition-colors hover:bg-white/[0.03] hover:text-white text-sm",
          className
        )}
        {...props}
      >
        <div>{title}</div>
        {subtitle && (
          <div className="text-xs text-[#7c8aa5] mt-0.5">{subtitle}</div>
        )}
      </Link>
    </NavigationMenuLink>
  </li>
);

ListItem.displayName = "ListItem";

export default StickyHeader;
