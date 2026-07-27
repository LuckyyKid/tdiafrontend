import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      i18n.changeLanguage(savedLang);
      setCurrentLang(savedLang);
    }
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="text-sm text-[#e6ecf7] hover:text-white transition-colors px-2 py-1 uppercase font-mono-tdia tracking-widest"
          aria-label="Switch language"
        >
          {currentLang}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#0a0e18] hairline rounded-xl">
        <DropdownMenuItem
          onClick={() => changeLanguage('en')}
          className={`cursor-pointer text-sm ${currentLang === 'en' ? 'text-white bg-white/[0.03]' : 'text-[#7c8aa5] hover:text-white hover:bg-white/[0.03]'}`}
        >
          EN · English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage('fr')}
          className={`cursor-pointer text-sm ${currentLang === 'fr' ? 'text-white bg-white/[0.03]' : 'text-[#7c8aa5] hover:text-white hover:bg-white/[0.03]'}`}
        >
          FR · Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
