import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen text-white flex flex-col relative z-10">
      <StickyHeader />
      <section className="flex-1 flex items-center justify-center px-4 py-32 halo-top relative">
        <div className="text-center max-w-xl relative z-10">
          <div className="micro-label mb-4">404</div>
          <h1 className="tdia-h text-[48px] md:text-[72px] mb-4">
            <span className="serif">Lost</span>
            <span> in orbit</span>
          </h1>
          <p className="text-[#7c8aa5] text-base md:text-lg mb-8">
            {t('pages.notFound.description')}
          </p>
          <Link to="/" className="btn-tdia">
            {t('pages.notFound.backHome')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
