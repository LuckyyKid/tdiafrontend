import SEOHead from "@/components/SEOHead";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Mail, Globe } from "lucide-react";

const TermsOfService = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen text-foreground relative z-10">
      <SEOHead 
        title={t('termsOfService.seoTitle')}
        description={t('termsOfService.seoDescription')}
      />
      <StickyHeader />
      
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t('termsOfService.title')}</h1>
        <p className="text-muted-foreground text-center mb-12">{t('termsOfService.lastUpdated')}</p>
        
        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introduction */}
          <p className="text-lg">
            {t('termsOfService.intro')}{" "}
            <a href="https://tdiaagency.com" className="text-primary hover:underline">https://tdiaagency.com</a>{" "}
            {t('termsOfService.introEnd')}
          </p>
          
          <p>{t('termsOfService.agreement')}</p>

          {/* Table of Contents */}
          <div className="bg-card/50 border border-border rounded-lg p-6 my-8">
            <h2 className="text-xl font-semibold mb-4">{t('termsOfService.toc')}</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li><button onClick={() => scrollToSection('definitions')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.definitions.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('eligibility')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.eligibility.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('scope')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.scope.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('obligations')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.obligations.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('payments')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.payments.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('ip-rights')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.ipRights.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('confidentiality')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.confidentiality.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('disclaimer')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.disclaimer.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('liability')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.liability.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('indemnification')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.indemnification.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('termination')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.termination.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('governing-law')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.governingLaw.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('changes')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.changes.tocTitle')}</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors text-left">{t('termsOfService.sections.contact.tocTitle')}</button></li>
            </ol>
          </div>

          {/* Section 1 */}
          <section id="definitions">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.definitions.title')}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">"Services"</strong> {t('termsOfService.sections.definitions.services').replace('"Services" ', '')}</li>
              <li><strong className="text-foreground">"User," "you," or "your"</strong> {t('termsOfService.sections.definitions.user').replace('"User," "you," or "your" ', '').replace('« Utilisateur », « vous » ou « votre » ', '')}</li>
              <li><strong className="text-foreground">"Content"</strong> {t('termsOfService.sections.definitions.content').replace('"Content" ', '').replace('« Contenu » ', '')}</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section id="eligibility">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.eligibility.title')}</h2>
            <p className="mb-4">{t('termsOfService.sections.eligibility.intro')}</p>
            <p className="mb-2">{t('termsOfService.sections.eligibility.represent')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('termsOfService.sections.eligibility.capacity')}</li>
              <li>{t('termsOfService.sections.eligibility.notProhibited')}</li>
              <li>{t('termsOfService.sections.eligibility.accurate')}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="scope">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.scope.title')}</h2>
            <p className="mb-4">{t('termsOfService.sections.scope.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>{t('termsOfService.sections.scope.digitalMarketing')}</li>
              <li>{t('termsOfService.sections.scope.advertising')}</li>
              <li>{t('termsOfService.sections.scope.analytics')}</li>
              <li>{t('termsOfService.sections.scope.growth')}</li>
              <li>{t('termsOfService.sections.scope.automation')}</li>
            </ul>
            <p className="font-semibold">{t('termsOfService.sections.scope.bestEffort')}</p>
            <p className="text-muted-foreground">{t('termsOfService.sections.scope.noGuarantee')}</p>
          </section>

          {/* Section 4 */}
          <section id="obligations">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.obligations.title')}</h2>
            <p className="mb-4">{t('termsOfService.sections.obligations.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>{t('termsOfService.sections.obligations.unlawful')}</li>
              <li>{t('termsOfService.sections.obligations.misrepresent')}</li>
              <li>{t('termsOfService.sections.obligations.interfere')}</li>
              <li>{t('termsOfService.sections.obligations.malicious')}</li>
              <li>{t('termsOfService.sections.obligations.infringe')}</li>
            </ul>
            <p className="font-semibold text-destructive">{t('termsOfService.sections.obligations.violation')}</p>
          </section>

          {/* Section 5 */}
          <section id="payments">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.payments.title')}</h2>
            <p className="mb-4">{t('termsOfService.sections.payments.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>{t('termsOfService.sections.payments.nonRefundable')}</li>
              <li>{t('termsOfService.sections.payments.accordance')}</li>
              <li>{t('termsOfService.sections.payments.late')}</li>
              <li>{t('termsOfService.sections.payments.revise')}</li>
            </ul>
            <p className="font-semibold">{t('termsOfService.sections.payments.noRefunds')}</p>
          </section>

          {/* Section 6 */}
          <section id="ip-rights">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.ipRights.title')}</h2>
            <p className="mb-4">{t('termsOfService.sections.ipRights.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>{t('termsOfService.sections.ipRights.software')}</li>
              <li>{t('termsOfService.sections.ipRights.code')}</li>
              <li>{t('termsOfService.sections.ipRights.designs')}</li>
              <li>{t('termsOfService.sections.ipRights.frameworks')}</li>
              <li>{t('termsOfService.sections.ipRights.methodologies')}</li>
              <li>{t('termsOfService.sections.ipRights.content')}</li>
              <li>{t('termsOfService.sections.ipRights.trademarks')}</li>
            </ul>
            <p className="mb-4">{t('termsOfService.sections.ipRights.exclusive')}</p>
            <p className="mb-4">{t('termsOfService.sections.ipRights.license')}</p>
            <p className="font-semibold text-destructive">{t('termsOfService.sections.ipRights.unauthorized')}</p>
          </section>

          {/* Section 7 */}
          <section id="confidentiality">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.confidentiality.title')}</h2>
            <p className="mb-4">{t('termsOfService.sections.confidentiality.text')}</p>
            <p className="font-semibold">{t('termsOfService.sections.confidentiality.survives')}</p>
          </section>

          {/* Section 8 */}
          <section id="disclaimer">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.disclaimer.title')}</h2>
            <p className="mb-4 font-semibold">{t('termsOfService.sections.disclaimer.asIs')}</p>
            <p className="mb-4">{t('termsOfService.sections.disclaimer.disclaims')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>{t('termsOfService.sections.disclaimer.merchantability')}</li>
              <li>{t('termsOfService.sections.disclaimer.fitness')}</li>
              <li>{t('termsOfService.sections.disclaimer.accuracy')}</li>
            </ul>
            <p className="font-semibold">{t('termsOfService.sections.disclaimer.noGuarantee')}</p>
          </section>

          {/* Section 9 */}
          <section id="liability">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.liability.title')}</h2>
            <p className="mb-4">{t('termsOfService.sections.liability.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>{t('termsOfService.sections.liability.indirect')}</li>
              <li>{t('termsOfService.sections.liability.lossOfProfits')}</li>
              <li>{t('termsOfService.sections.liability.exceeding')}</li>
            </ul>
            <p className="font-semibold">{t('termsOfService.sections.liability.applies')}</p>
          </section>

          {/* Section 10 */}
          <section id="indemnification">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.indemnification.title')}</h2>
            <p className="mb-4">{t('termsOfService.sections.indemnification.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('termsOfService.sections.indemnification.misuse')}</li>
              <li>{t('termsOfService.sections.indemnification.violationTerms')}</li>
              <li>{t('termsOfService.sections.indemnification.violationLaw')}</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section id="termination">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.termination.title')}</h2>
            <p className="mb-4">{t('termsOfService.sections.termination.text')}</p>
            <p className="font-semibold">{t('termsOfService.sections.termination.survives')}</p>
          </section>

          {/* Section 12 */}
          <section id="governing-law">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.governingLaw.title')}</h2>
            <p className="mb-4">{t('termsOfService.sections.governingLaw.text')}</p>
            <p className="font-semibold">{t('termsOfService.sections.governingLaw.jurisdiction')}</p>
          </section>

          {/* Section 13 */}
          <section id="changes">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.changes.title')}</h2>
            <p className="mb-4">{t('termsOfService.sections.changes.text')}</p>
            <p className="font-semibold">{t('termsOfService.sections.changes.continued')}</p>
          </section>

          {/* Section 14 */}
          <section id="contact">
            <h2 className="text-2xl font-bold mb-4">{t('termsOfService.sections.contact.title')}</h2>
            <p className="mb-4">{t('termsOfService.sections.contact.intro')}</p>
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <p className="font-semibold text-lg mb-2">{t('termsOfService.sections.contact.agency')}</p>
              <p className="text-muted-foreground inline-flex items-center gap-2"><Mail className="h-4 w-4 text-[#9ec8ff]" strokeWidth={1.6} /> <a href="mailto:privacy@tdiaagency.com" className="text-primary hover:underline">privacy@tdiaagency.com</a></p>
              <p className="text-muted-foreground inline-flex items-center gap-2"><Globe className="h-4 w-4 text-[#9ec8ff]" strokeWidth={1.6} /> <a href="https://www.tdiaagency.com" className="text-primary hover:underline">https://www.tdiaagency.com</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
