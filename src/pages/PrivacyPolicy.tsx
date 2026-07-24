import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import StickyHeader from '@/components/StickyHeader';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const isFrench = i18n.language === 'fr';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SEOHead
        title={isFrench ? "Politique de Confidentialité | TDIA" : "Privacy Policy | TDIA"}
        description={isFrench ? "Politique de confidentialité de TDIA" : "TDIA Privacy Policy"}
      />
      <StickyHeader />
      <main className="min-h-screen pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {isFrench ? "POLITIQUE DE CONFIDENTIALITÉ" : "PRIVACY POLICY"}
          </h1>
          
          <p className="text-muted-foreground mb-8">
            {isFrench 
              ? "Dernière mise à jour : 1er janvier 2026" 
              : "Last updated January 01, 2026"}
          </p>

          <div className="mb-8 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {isFrench 
                ? "Cet avis de confidentialité pour TDIA Agency (« nous », « notre » ou « nos ») décrit comment et pourquoi nous pouvons accéder, collecter, stocker, utiliser et/ou partager (« traiter ») vos informations personnelles lorsque vous utilisez nos services (« Services »), notamment lorsque vous :"
                : "This Privacy Notice for TDIA Agency ('we', 'us', or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you:"}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-4 ml-4">
              <li>
                {isFrench 
                  ? "Visitez notre site web à tdiaagency.com ou tout autre site web de notre entreprise qui renvoie à cet avis de confidentialité"
                  : "Visit our website at tdiaagency.com or any website of ours that links to this Privacy Notice"}
              </li>
              <li>
                {isFrench 
                  ? "Utilisez TDIA – Services de marketing de performance et de stratégie de croissance. TDIA fournit des services de marketing numérique axés sur les données et de stratégie de croissance pour les entreprises cherchant à se développer efficacement. Nous aidons les entreprises à optimiser l'acquisition de clients, améliorer les taux de conversion et comprendre le comportement des consommateurs grâce à des analyses avancées, des technologies publicitaires et des outils de suivi des performances. Nos services comprennent le développement de stratégies marketing, l'optimisation publicitaire (Meta, Google Ads), l'analyse d'audience et la mesure des performances pour soutenir la croissance commerciale à long terme et la prise de décisions éclairées."
                  : "Use TDIA – Performance Marketing & Growth Strategy Services. TDIA provides data-driven digital marketing and growth strategy services for businesses looking to scale efficiently. We help companies optimize customer acquisition, improve conversion rates, and understand consumer behavior through advanced analytics, advertising technologies, and performance tracking tools. Our services include marketing strategy development, advertising optimization (Meta, Google Ads), audience analysis, and performance measurement to support long-term business growth and informed decision-making."}
              </li>
              <li>
                {isFrench 
                  ? "Interagissez avec nous de toute autre manière, y compris lors d'événements marketing"
                  : "Engage with us in other related ways, including any marketing or events"}
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">
                {isFrench ? "Des questions ou des préoccupations ?" : "Questions or concerns?"}
              </span>{" "}
              {isFrench 
                ? "La lecture de cet avis de confidentialité vous aidera à comprendre vos droits et choix en matière de confidentialité. Nous sommes responsables des décisions concernant le traitement de vos informations personnelles. Si vous n'êtes pas d'accord avec nos politiques et pratiques, veuillez ne pas utiliser nos Services. Si vous avez encore des questions ou des préoccupations, veuillez nous contacter à "
                : "Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at "}
              <a href="mailto:privacy@tdiaagency.com" className="text-primary hover:underline">
                privacy@tdiaagency.com
              </a>.
            </p>
          </div>

          <div className="border-t border-border my-8" />

          {/* Summary of Key Points */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {isFrench ? "RÉSUMÉ DES POINTS CLÉS" : "SUMMARY OF KEY POINTS"}
            </h2>
            <p className="text-muted-foreground italic mb-6 leading-relaxed">
              {isFrench 
                ? "Ce résumé fournit les points clés de notre avis de confidentialité, mais vous pouvez obtenir plus de détails sur n'importe lequel de ces sujets en cliquant sur le lien suivant chaque point clé ou en utilisant notre table des matières ci-dessous pour trouver la section que vous recherchez."
                : "This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for."}
            </p>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  {isFrench ? "Quelles informations personnelles traitons-nous ?" : "What personal information do we process?"}
                </span>{" "}
                {isFrench 
                  ? "Lorsque vous visitez, utilisez ou naviguez sur nos Services, nous pouvons traiter des informations personnelles en fonction de la façon dont vous interagissez avec nous et les Services, des choix que vous faites et des produits et fonctionnalités que vous utilisez."
                  : "When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use."}
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  {isFrench ? "Traitons-nous des informations personnelles sensibles ?" : "Do we process any sensitive personal information?"}
                </span>{" "}
                {isFrench 
                  ? "Certaines des informations peuvent être considérées comme « spéciales » ou « sensibles » dans certaines juridictions, par exemple votre origine raciale ou ethnique, votre orientation sexuelle et vos croyances religieuses. Nous ne traitons pas d'informations personnelles sensibles."
                  : "Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information."}
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  {isFrench ? "Collectons-nous des informations auprès de tiers ?" : "Do we collect any information from third parties?"}
                </span>{" "}
                {isFrench 
                  ? "Nous ne collectons aucune information auprès de tiers."
                  : "We do not collect any information from third parties."}
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  {isFrench ? "Comment traitons-nous vos informations ?" : "How do we process your information?"}
                </span>{" "}
                {isFrench 
                  ? "Nous traitons vos informations pour fournir, améliorer et administrer nos Services, communiquer avec vous, pour la sécurité et la prévention de la fraude, et pour nous conformer à la loi. Nous pouvons également traiter vos informations à d'autres fins avec votre consentement. Nous traitons vos informations uniquement lorsque nous avons une raison légale valable de le faire."
                  : "We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so."}
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  {isFrench ? "Dans quelles situations et avec quels types de parties partageons-nous des informations personnelles ?" : "In what situations and with which types of parties do we share personal information?"}
                </span>{" "}
                {isFrench 
                  ? "Nous pouvons partager des informations dans des situations spécifiques et avec des catégories spécifiques de tiers."
                  : "We may share information in specific situations and with specific categories of third parties."}
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  {isFrench ? "Comment protégeons-nous vos informations ?" : "How do we keep your information safe?"}
                </span>{" "}
                {isFrench 
                  ? "Nous avons mis en place des processus et procédures organisationnels et techniques adéquats pour protéger vos informations personnelles. Cependant, aucune transmission électronique sur Internet ou technologie de stockage d'informations ne peut être garantie à 100 % sécurisée, nous ne pouvons donc pas promettre ou garantir que des pirates informatiques, des cybercriminels ou d'autres tiers non autorisés ne seront pas en mesure de contourner notre sécurité et de collecter, accéder, voler ou modifier de manière inappropriée vos informations."
                  : "We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information."}
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  {isFrench ? "Quels sont vos droits ?" : "What are your rights?"}
                </span>{" "}
                {isFrench 
                  ? "Selon votre emplacement géographique, la loi sur la confidentialité applicable peut signifier que vous avez certains droits concernant vos informations personnelles."
                  : "Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information."}
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">
                  {isFrench ? "Comment exercez-vous vos droits ?" : "How do you exercise your rights?"}
                </span>{" "}
                {isFrench 
                  ? "La façon la plus simple d'exercer vos droits est de visiter tdiaagency.com/privacy, ou de nous contacter. Nous examinerons et agirons sur toute demande conformément aux lois applicables en matière de protection des données."
                  : "The easiest way to exercise your rights is by visiting tdiaagency.com/privacy, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws."}
              </p>

              <p className="leading-relaxed">
                {isFrench 
                  ? "Vous voulez en savoir plus sur ce que nous faisons avec les informations que nous collectons ? Consultez l'avis de confidentialité complet."
                  : "Want to learn more about what we do with any information we collect? Review the Privacy Notice in full."}
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {isFrench ? "TABLE DES MATIÈRES" : "TABLE OF CONTENTS"}
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-primary">
              <li><button onClick={() => scrollToSection('info-collect')} className="hover:underline text-left">{isFrench ? "QUELLES INFORMATIONS COLLECTONS-NOUS ?" : "WHAT INFORMATION DO WE COLLECT?"}</button></li>
              <li><button onClick={() => scrollToSection('info-process')} className="hover:underline text-left">{isFrench ? "COMMENT TRAITONS-NOUS VOS INFORMATIONS ?" : "HOW DO WE PROCESS YOUR INFORMATION?"}</button></li>
              <li><button onClick={() => scrollToSection('legal-bases')} className="hover:underline text-left">{isFrench ? "SUR QUELLES BASES LÉGALES NOUS APPUYONS-NOUS POUR TRAITER VOS INFORMATIONS PERSONNELLES ?" : "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?"}</button></li>
              <li><button onClick={() => scrollToSection('info-share')} className="hover:underline text-left">{isFrench ? "QUAND ET AVEC QUI PARTAGEONS-NOUS VOS INFORMATIONS PERSONNELLES ?" : "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"}</button></li>
              <li><button onClick={() => scrollToSection('cookies')} className="hover:underline text-left">{isFrench ? "UTILISONS-NOUS DES COOKIES ET D'AUTRES TECHNOLOGIES DE SUIVI ?" : "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?"}</button></li>
              <li><button onClick={() => scrollToSection('ai')} className="hover:underline text-left">{isFrench ? "PROPOSONS-NOUS DES PRODUITS BASÉS SUR L'INTELLIGENCE ARTIFICIELLE ?" : "DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?"}</button></li>
              <li><button onClick={() => scrollToSection('info-retain')} className="hover:underline text-left">{isFrench ? "COMBIEN DE TEMPS CONSERVONS-NOUS VOS INFORMATIONS ?" : "HOW LONG DO WE KEEP YOUR INFORMATION?"}</button></li>
              <li><button onClick={() => scrollToSection('info-safe')} className="hover:underline text-left">{isFrench ? "COMMENT PROTÉGEONS-NOUS VOS INFORMATIONS ?" : "HOW DO WE KEEP YOUR INFORMATION SAFE?"}</button></li>
              <li><button onClick={() => scrollToSection('minors')} className="hover:underline text-left">{isFrench ? "COLLECTONS-NOUS DES INFORMATIONS AUPRÈS DE MINEURS ?" : "DO WE COLLECT INFORMATION FROM MINORS?"}</button></li>
              <li><button onClick={() => scrollToSection('privacy-rights')} className="hover:underline text-left">{isFrench ? "QUELS SONT VOS DROITS EN MATIÈRE DE CONFIDENTIALITÉ ?" : "WHAT ARE YOUR PRIVACY RIGHTS?"}</button></li>
              <li><button onClick={() => scrollToSection('dnt')} className="hover:underline text-left">{isFrench ? "CONTRÔLES POUR LES FONCTIONNALITÉS DO-NOT-TRACK" : "CONTROLS FOR DO-NOT-TRACK FEATURES"}</button></li>
              <li><button onClick={() => scrollToSection('us-rights')} className="hover:underline text-left">{isFrench ? "LES RÉSIDENTS DES ÉTATS-UNIS ONT-ILS DES DROITS SPÉCIFIQUES EN MATIÈRE DE CONFIDENTIALITÉ ?" : "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"}</button></li>
              <li><button onClick={() => scrollToSection('updates')} className="hover:underline text-left">{isFrench ? "APPORTONS-NOUS DES MISES À JOUR À CET AVIS ?" : "DO WE MAKE UPDATES TO THIS NOTICE?"}</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:underline text-left">{isFrench ? "COMMENT POUVEZ-VOUS NOUS CONTACTER À PROPOS DE CET AVIS ?" : "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"}</button></li>
              <li><button onClick={() => scrollToSection('review-data')} className="hover:underline text-left">{isFrench ? "COMMENT POUVEZ-VOUS CONSULTER, METTRE À JOUR OU SUPPRIMER LES DONNÉES QUE NOUS COLLECTONS AUPRÈS DE VOUS ?" : "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"}</button></li>
            </ol>
          </section>

          <div className="border-t border-border my-8" />

          <div className="space-y-12 text-foreground/90">
            {/* Section 1 */}
            <section id="info-collect">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isFrench ? "1. QUELLES INFORMATIONS COLLECTONS-NOUS ?" : "1. WHAT INFORMATION DO WE COLLECT?"}
              </h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {isFrench ? "Informations personnelles que vous nous divulguez" : "Personal information you disclose to us"}
              </h3>
              
              <p className="text-muted-foreground italic mb-4">
                <span className="font-semibold">{isFrench ? "En bref :" : "In Short:"}</span>{" "}
                {isFrench 
                  ? "Nous collectons les informations personnelles que vous nous fournissez."
                  : "We collect personal information that you provide to us."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous collectons les informations personnelles que vous nous fournissez volontairement lorsque vous exprimez un intérêt à obtenir des informations sur nous ou nos produits et Services, lorsque vous participez à des activités sur les Services, ou autrement lorsque vous nous contactez."
                  : "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">
                  {isFrench ? "Informations personnelles fournies par vous." : "Personal Information Provided by You."}
                </span>{" "}
                {isFrench 
                  ? "Les informations personnelles que nous collectons dépendent du contexte de vos interactions avec nous et les Services, des choix que vous faites et des produits et fonctionnalités que vous utilisez. Les informations personnelles que nous collectons peuvent inclure les éléments suivants :"
                  : "The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>{isFrench ? "noms" : "names"}</li>
                <li>{isFrench ? "numéros de téléphone" : "phone numbers"}</li>
                <li>{isFrench ? "adresses e-mail" : "email addresses"}</li>
                <li>{isFrench ? "titres de poste" : "job titles"}</li>
                <li>{isFrench ? "préférences de contact" : "contact preferences"}</li>
                <li>{isFrench ? "noms d'utilisateur" : "usernames"}</li>
                <li>{isFrench ? "données de contact ou d'authentification" : "contact or authentication data"}</li>
                <li>{isFrench ? "données techniques et analytiques" : "technical & analytics data"}</li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">
                  {isFrench ? "Informations sensibles." : "Sensitive Information."}
                </span>{" "}
                {isFrench 
                  ? "Nous ne traitons pas d'informations sensibles."
                  : "We do not process sensitive information."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                {isFrench 
                  ? "Toutes les informations personnelles que vous nous fournissez doivent être vraies, complètes et exactes, et vous devez nous informer de tout changement concernant ces informations personnelles."
                  : "All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information."}
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {isFrench ? "Informations collectées automatiquement" : "Information automatically collected"}
              </h3>
              
              <p className="text-muted-foreground italic mb-4">
                <span className="font-semibold">{isFrench ? "En bref :" : "In Short:"}</span>{" "}
                {isFrench 
                  ? "Certaines informations — telles que votre adresse IP et/ou les caractéristiques de votre navigateur et de votre appareil — sont collectées automatiquement lorsque vous visitez nos Services."
                  : "Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous collectons automatiquement certaines informations lorsque vous visitez, utilisez ou naviguez sur les Services. Ces informations ne révèlent pas votre identité spécifique (comme votre nom ou vos coordonnées) mais peuvent inclure des informations sur l'appareil et l'utilisation, telles que votre adresse IP, les caractéristiques du navigateur et de l'appareil, le système d'exploitation, les préférences linguistiques, les URL de référence, le nom de l'appareil, le pays, l'emplacement, des informations sur la façon dont et quand vous utilisez nos Services, et d'autres informations techniques. Ces informations sont principalement nécessaires pour maintenir la sécurité et le fonctionnement de nos Services, et pour nos analyses internes et nos rapports."
                  : "We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Comme de nombreuses entreprises, nous collectons également des informations via des cookies et des technologies similaires. Vous pouvez en savoir plus à ce sujet dans notre Avis sur les cookies :"
                  : "Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice:"}
                {" "}
                <a href="https://www.tdiaagency.com/#/cookie-policy" className="text-primary hover:underline">
                  https://www.tdiaagency.com/#/cookie-policy
                </a>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench ? "Les informations que nous collectons incluent :" : "The information we collect includes:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-4 ml-4">
                <li>
                  <span className="italic">{isFrench ? "Données de journal et d'utilisation." : "Log and Usage Data."}</span>{" "}
                  {isFrench 
                    ? "Les données de journal et d'utilisation sont des informations liées au service, de diagnostic, d'utilisation et de performance que nos serveurs collectent automatiquement lorsque vous accédez ou utilisez nos Services et que nous enregistrons dans des fichiers journaux. Selon la façon dont vous interagissez avec nous, ces données de journal peuvent inclure votre adresse IP, des informations sur l'appareil, le type de navigateur et les paramètres, ainsi que des informations sur votre activité dans les Services (telles que les horodatages associés à votre utilisation, les pages et fichiers consultés, les recherches et autres actions que vous effectuez comme les fonctionnalités que vous utilisez), des informations sur les événements de l'appareil (telles que l'activité du système, les rapports d'erreur (parfois appelés « crash dumps ») et les paramètres matériels)."
                    : "Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings)."}
                </li>
                <li>
                  <span className="italic">{isFrench ? "Données de l'appareil." : "Device Data."}</span>{" "}
                  {isFrench 
                    ? "Nous collectons des données sur l'appareil telles que des informations sur votre ordinateur, téléphone, tablette ou autre appareil que vous utilisez pour accéder aux Services. Selon l'appareil utilisé, ces données peuvent inclure des informations telles que votre adresse IP (ou serveur proxy), les numéros d'identification de l'appareil et de l'application, l'emplacement, le type de navigateur, le modèle de matériel, le fournisseur de services Internet et/ou l'opérateur mobile, le système d'exploitation et les informations de configuration du système."
                    : "We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information."}
                </li>
                <li>
                  <span className="italic">{isFrench ? "Données de localisation." : "Location Data."}</span>{" "}
                  {isFrench 
                    ? "Nous collectons des données de localisation telles que des informations sur l'emplacement de votre appareil, qui peuvent être précises ou imprécises. La quantité d'informations que nous collectons dépend du type et des paramètres de l'appareil que vous utilisez pour accéder aux Services. Par exemple, nous pouvons utiliser le GPS et d'autres technologies pour collecter des données de géolocalisation qui nous indiquent votre emplacement actuel (en fonction de votre adresse IP). Vous pouvez refuser de nous autoriser à collecter ces informations soit en refusant l'accès aux informations, soit en désactivant le paramètre de localisation sur votre appareil. Cependant, si vous choisissez de vous désinscrire, vous pourriez ne pas pouvoir utiliser certains aspects des Services."
                    : "We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services."}
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="info-process">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isFrench ? "2. COMMENT TRAITONS-NOUS VOS INFORMATIONS ?" : "2. HOW DO WE PROCESS YOUR INFORMATION?"}
              </h2>
              
              <p className="text-muted-foreground italic mb-6">
                <span className="font-semibold">{isFrench ? "En bref :" : "In Short:"}</span>{" "}
                {isFrench 
                  ? "Nous traitons vos informations pour fournir, améliorer et administrer nos Services, communiquer avec vous, pour la sécurité et la prévention de la fraude, et pour nous conformer à la loi. Nous pouvons également traiter vos informations à d'autres fins avec votre consentement."
                  : "We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">
                  {isFrench ? "Nous traitons vos informations personnelles pour diverses raisons, selon la façon dont vous interagissez avec nos Services, notamment :" : "We process your personal information for a variety of reasons, depending on how you interact with our Services, including:"}
                </span>
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-4 ml-4">
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Pour répondre aux demandes des utilisateurs/offrir un support aux utilisateurs." : "To respond to user inquiries/offer support to users."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons traiter vos informations pour répondre à vos demandes et résoudre tout problème potentiel que vous pourriez avoir avec le service demandé."
                    : "We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service."}
                </li>
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Pour vous envoyer des communications marketing et promotionnelles." : "To send you marketing and promotional communications."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons traiter les informations personnelles que vous nous envoyez à des fins de marketing, si cela est conforme à vos préférences marketing. Vous pouvez vous désinscrire de nos e-mails marketing à tout moment. Pour plus d'informations, consultez « QUELS SONT VOS DROITS EN MATIÈRE DE CONFIDENTIALITÉ ? » ci-dessous."
                    : "We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see 'WHAT ARE YOUR PRIVACY RIGHTS?' below."}
                </li>
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Pour vous envoyer des communications ciblées." : "To deliver targeted advertising to you."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons traiter vos informations pour développer et afficher du contenu et des publicités personnalisés adaptés à vos intérêts, votre emplacement, et plus encore. Pour plus d'informations, consultez notre Avis sur les cookies."
                    : "We may process your information to develop and display personalised content and advertising tailored to your interests, location, and more. For more information see our Cookie Notice."}
                </li>
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Pour protéger nos Services." : "To protect our Services."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons traiter vos informations dans le cadre de nos efforts pour assurer la sécurité de nos Services, y compris la surveillance et la prévention de la fraude."
                    : "We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention."}
                </li>
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Pour identifier les tendances d'utilisation." : "To identify usage trends."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons traiter des informations sur la façon dont vous utilisez nos Services pour mieux comprendre comment ils sont utilisés afin de pouvoir les améliorer."
                    : "We may process information about how you use our Services to better understand how they are being used so we can improve them."}
                </li>
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Pour déterminer l'efficacité de nos campagnes marketing et promotionnelles." : "To determine the effectiveness of our marketing and promotional campaigns."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons traiter vos informations pour mieux comprendre comment fournir des campagnes marketing et promotionnelles qui vous sont les plus pertinentes."
                    : "We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you."}
                </li>
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Pour sauvegarder ou protéger l'intérêt vital d'un individu." : "To save or protect an individual's vital interest."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons traiter vos informations lorsque cela est nécessaire pour sauvegarder ou protéger l'intérêt vital d'un individu, par exemple pour prévenir un préjudice."
                    : "We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm."}
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="legal-bases">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isFrench ? "3. SUR QUELLES BASES LÉGALES NOUS APPUYONS-NOUS POUR TRAITER VOS INFORMATIONS PERSONNELLES ?" : "3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?"}
              </h2>
              
              <p className="text-muted-foreground italic mb-6">
                <span className="font-semibold">{isFrench ? "En bref :" : "In Short:"}</span>{" "}
                {isFrench 
                  ? "Nous ne traitons vos informations personnelles que lorsque nous estimons que cela est nécessaire et que nous avons une raison légale valide (c'est-à-dire une base légale) pour le faire en vertu de la loi applicable, comme avec votre consentement, pour nous conformer aux lois, pour vous fournir des services pour conclure ou exécuter nos obligations contractuelles, pour protéger vos droits ou pour satisfaire nos intérêts commerciaux légitimes."
                  : "We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests."}
              </p>

              {/* EU/UK Section */}
              <h3 className="text-lg font-semibold text-foreground mb-4 underline">
                {isFrench ? "Si vous êtes situé dans l'UE ou au Royaume-Uni, cette section s'applique à vous." : "If you are located in the EU or UK, this section applies to you."}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Le Règlement général sur la protection des données (RGPD) et le RGPD britannique nous obligent à expliquer les bases légales valides sur lesquelles nous nous appuyons pour traiter vos informations personnelles. À ce titre, nous pouvons nous appuyer sur les bases légales suivantes pour traiter vos informations personnelles :"
                  : "The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-4 ml-4 mb-6">
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Consentement." : "Consent."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons traiter vos informations si vous nous avez donné la permission (c'est-à-dire le consentement) d'utiliser vos informations personnelles à des fins spécifiques. Vous pouvez retirer votre consentement à tout moment."
                    : "We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time."}
                </li>
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Exécution d'un contrat." : "Performance of a Contract."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons traiter vos informations personnelles lorsque nous estimons que cela est nécessaire pour remplir nos obligations contractuelles envers vous, y compris fournir nos Services ou à votre demande avant de conclure un contrat avec vous."
                    : "We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you."}
                </li>
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Intérêts légitimes." : "Legitimate Interests."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons traiter vos informations lorsque nous estimons que cela est raisonnablement nécessaire pour atteindre nos intérêts commerciaux légitimes et que ces intérêts ne l'emportent pas sur vos intérêts et vos droits et libertés fondamentaux. Par exemple, nous pouvons traiter vos informations personnelles pour certaines des fins décrites afin de :"
                    : "We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:"}
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>{isFrench ? "Envoyer aux utilisateurs des informations sur les offres spéciales et les réductions sur nos produits et services" : "Send users information about special offers and discounts on our products and services"}</li>
                    <li>{isFrench ? "Analyser comment nos Services sont utilisés afin de les améliorer pour engager et fidéliser les utilisateurs" : "Analyse how our Services are used so we can improve them to engage and retain users"}</li>
                    <li>{isFrench ? "Soutenir nos activités marketing" : "Support our marketing activities"}</li>
                    <li>{isFrench ? "Diagnostiquer les problèmes et/ou prévenir les activités frauduleuses" : "Diagnose problems and/or prevent fraudulent activities"}</li>
                    <li>{isFrench ? "Comprendre comment nos utilisateurs utilisent nos produits et services afin d'améliorer l'expérience utilisateur" : "Understand how our users use our products and services so we can improve user experience"}</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Obligations légales." : "Legal Obligations."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons traiter vos informations lorsque nous estimons que cela est nécessaire pour nous conformer à nos obligations légales, par exemple pour coopérer avec un organisme d'application de la loi ou une agence de réglementation, exercer ou défendre nos droits légaux, ou divulguer vos informations comme preuve dans un litige dans lequel nous sommes impliqués."
                    : "We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved."}
                </li>
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Intérêts vitaux." : "Vital Interests."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons traiter vos informations lorsque nous estimons que cela est nécessaire pour protéger vos intérêts vitaux ou les intérêts vitaux d'un tiers, par exemple dans des situations impliquant des menaces potentielles pour la sécurité de toute personne."
                    : "We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person."}
                </li>
              </ul>

              {/* Canada Section */}
              <h3 className="text-lg font-semibold text-foreground mb-4 underline">
                {isFrench ? "Si vous êtes situé au Canada, cette section s'applique à vous." : "If you are located in Canada, this section applies to you."}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous pouvons traiter vos informations si vous nous avez donné une permission spécifique (c'est-à-dire un consentement exprès) d'utiliser vos informations personnelles à des fins spécifiques, ou dans des situations où votre permission peut être déduite (c'est-à-dire un consentement implicite). Vous pouvez retirer votre consentement à tout moment."
                  : "We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can withdraw your consent at any time."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Dans certains cas exceptionnels, nous pouvons être légalement autorisés en vertu de la loi applicable à traiter vos informations sans votre consentement, y compris, par exemple :"
                  : "In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>{isFrench ? "Si la collecte est clairement dans l'intérêt d'un individu et que le consentement ne peut être obtenu en temps opportun" : "If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way"}</li>
                <li>{isFrench ? "Pour les enquêtes et la détection et la prévention de la fraude" : "For investigations and fraud detection and prevention"}</li>
                <li>{isFrench ? "Pour les transactions commerciales à condition que certaines conditions soient remplies" : "For business transactions provided certain conditions are met"}</li>
                <li>{isFrench ? "Si elle est contenue dans une déclaration de témoin et que la collecte est nécessaire pour évaluer, traiter ou régler une réclamation d'assurance" : "If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim"}</li>
                <li>{isFrench ? "Pour identifier les personnes blessées, malades ou décédées et communiquer avec les proches parents" : "For identifying injured, ill, or deceased persons and communicating with next of kin"}</li>
                <li>{isFrench ? "Si nous avons des motifs raisonnables de croire qu'un individu a été, est ou pourrait être victime d'abus financier" : "If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse"}</li>
                <li>{isFrench ? "S'il est raisonnable de s'attendre à ce que la collecte et l'utilisation avec consentement compromettent la disponibilité ou l'exactitude des informations et que la collecte est raisonnable à des fins liées à l'enquête sur une violation d'un accord ou d'une contravention aux lois du Canada ou d'une province" : "If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province"}</li>
                <li>{isFrench ? "Si la divulgation est requise pour se conformer à une assignation, un mandat, une ordonnance du tribunal ou des règles du tribunal relatives à la production de documents" : "If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records"}</li>
                <li>{isFrench ? "S'il a été produit par un individu dans le cadre de son emploi, de son entreprise ou de sa profession et que la collecte est conforme aux fins pour lesquelles les informations ont été produites" : "If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced"}</li>
                <li>{isFrench ? "Si la collecte est uniquement à des fins journalistiques, artistiques ou littéraires" : "If the collection is solely for journalistic, artistic, or literary purposes"}</li>
                <li>{isFrench ? "Si les informations sont accessibles au public et sont spécifiées par les règlements" : "If the information is publicly available and is specified by the regulations"}</li>
                <li>{isFrench ? "Nous pouvons divulguer des informations dépersonnalisées pour des projets de recherche ou de statistiques approuvés, sous réserve de la surveillance de l'éthique et des engagements de confidentialité" : "We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments"}</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="info-share">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isFrench ? "4. QUAND ET AVEC QUI PARTAGEONS-NOUS VOS INFORMATIONS PERSONNELLES ?" : "4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"}
              </h2>
              
              <p className="text-muted-foreground italic mb-6">
                <span className="font-semibold">{isFrench ? "En bref :" : "In Short:"}</span>{" "}
                {isFrench 
                  ? "Nous pouvons partager des informations dans des situations spécifiques décrites dans cette section et/ou avec les catégories de tiers suivantes."
                  : "We may share information in specific situations described in this section and/or with the following categories of third parties."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">
                  {isFrench ? "Fournisseurs, consultants et autres fournisseurs de services tiers." : "Vendors, Consultants, and Other Third-Party Service Providers."}
                </span>{" "}
                {isFrench 
                  ? "Nous pouvons partager vos données avec des fournisseurs tiers, des prestataires de services, des sous-traitants ou des agents (« tiers ») qui effectuent des services pour nous ou en notre nom et qui ont besoin d'accéder à ces informations pour effectuer ce travail. Nous avons des contrats en place avec nos tiers, qui sont conçus pour aider à protéger vos informations personnelles. Cela signifie qu'ils ne peuvent rien faire avec vos informations personnelles à moins que nous ne leur ayons demandé de le faire. Ils ne partageront pas non plus vos informations personnelles avec une organisation autre que nous. Ils s'engagent également à protéger les données qu'ils détiennent en notre nom et à les conserver pendant la période que nous leur demandons."
                  : "We may share your data with third-party vendors, service providers, contractors, or agents ('third parties') who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organisation apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Les catégories de tiers avec lesquels nous pouvons partager des informations personnelles sont les suivantes :"
                  : "The categories of third parties we may share personal information with are as follows:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>{isFrench ? "Réseaux publicitaires" : "Ad Networks"}</li>
                <li>{isFrench ? "Plateformes d'IA" : "AI Platforms"}</li>
                <li>{isFrench ? "Services de cloud computing" : "Cloud Computing Services"}</li>
                <li>{isFrench ? "Outils de communication et de collaboration" : "Communication & Collaboration Tools"}</li>
                <li>{isFrench ? "Services d'analyse de données" : "Data Analytics Services"}</li>
                <li>{isFrench ? "Fournisseurs de services de stockage de données" : "Data Storage Service Providers"}</li>
                <li>{isFrench ? "Outils de surveillance des performances" : "Performance Monitoring Tools"}</li>
                <li>{isFrench ? "Outils de vente et de marketing" : "Sales & Marketing Tools"}</li>
                <li>{isFrench ? "Réseaux sociaux" : "Social Networks"}</li>
                <li>{isFrench ? "Fournisseurs de services d'hébergement web" : "Website Hosting Service Providers"}</li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous pouvons également avoir besoin de partager vos informations personnelles dans les situations suivantes :"
                  : "We also may need to share your personal information in the following situations:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-4 ml-4">
                <li>
                  <span className="font-semibold text-foreground">{isFrench ? "Transferts d'entreprise." : "Business Transfers."}</span>{" "}
                  {isFrench 
                    ? "Nous pouvons partager ou transférer vos informations dans le cadre de, ou pendant les négociations de, toute fusion, vente d'actifs de l'entreprise, financement ou acquisition de tout ou partie de notre entreprise par une autre société."
                    : "We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company."}
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="cookies">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isFrench ? "5. UTILISONS-NOUS DES COOKIES ET D'AUTRES TECHNOLOGIES DE SUIVI ?" : "5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?"}
              </h2>
              
              <p className="text-muted-foreground italic mb-6">
                <span className="font-semibold">{isFrench ? "En bref :" : "In Short:"}</span>{" "}
                {isFrench 
                  ? "Nous pouvons utiliser des cookies et d'autres technologies de suivi pour collecter et stocker vos informations."
                  : "We may use cookies and other tracking technologies to collect and store your information."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous pouvons utiliser des cookies et des technologies de suivi similaires (comme les balises web et les pixels) pour recueillir des informations lorsque vous interagissez avec nos Services. Certaines technologies de suivi en ligne nous aident à maintenir la sécurité de nos Services, à prévenir les plantages, à corriger les bogues, à enregistrer vos préférences et à aider aux fonctions de base du site."
                  : "We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous permettons également à des tiers et à des fournisseurs de services d'utiliser des technologies de suivi en ligne sur nos Services pour l'analyse et la publicité, y compris pour aider à gérer et afficher des publicités, pour adapter les publicités à vos intérêts, ou pour envoyer des rappels de panier abandonné (selon vos préférences de communication). Les tiers et fournisseurs de services utilisent leur technologie pour fournir de la publicité sur des produits et services adaptés à vos intérêts, qui peuvent apparaître soit sur nos Services, soit sur d'autres sites web."
                  : "We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Dans la mesure où ces technologies de suivi en ligne sont considérées comme une « vente »/« partage » (ce qui inclut la publicité ciblée, telle que définie par les lois applicables) en vertu des lois des États américains applicables, vous pouvez refuser ces technologies de suivi en ligne en soumettant une demande comme décrit ci-dessous dans la section « LES RÉSIDENTS DES ÉTATS-UNIS ONT-ILS DES DROITS SPÉCIFIQUES EN MATIÈRE DE CONFIDENTIALITÉ ? »"
                  : "To the extent these online tracking technologies are deemed to be a 'sale'/'sharing' (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section 'DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?'"}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isFrench 
                  ? "Des informations spécifiques sur la façon dont nous utilisons ces technologies et sur la façon dont vous pouvez refuser certains cookies sont présentées dans notre Avis sur les cookies :"
                  : "Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice:"}
                {" "}
                <a href="https://www.tdiaagency.com/#/cookie-policy" className="text-primary hover:underline">
                  https://www.tdiaagency.com/#/cookie-policy
                </a>.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Google Analytics
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous pouvons partager vos informations avec Google Analytics pour suivre et analyser l'utilisation des Services. Les fonctionnalités publicitaires de Google Analytics que nous pouvons utiliser incluent : le remarketing avec Google Analytics, les données démographiques et les intérêts de Google Analytics et les rapports d'impressions du réseau Display de Google. Pour refuser d'être suivi par Google Analytics sur les Services, visitez"
                  : "We may share your information with Google Analytics to track and analyse the use of the Services. The Google Analytics Advertising Features that we may use include: Remarketing with Google Analytics, Google Analytics Demographics and Interests Reporting and Google Display Network Impressions Reporting. To opt out of being tracked by Google Analytics across the Services, visit"}
                {" "}
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">
                  https://tools.google.com/dlpage/gaoptout
                </a>.{" "}
                {isFrench 
                  ? "Vous pouvez refuser les fonctionnalités publicitaires de Google Analytics via les paramètres des annonces et les paramètres des annonces pour les applications mobiles. D'autres moyens de refus incluent"
                  : "You can opt out of Google Analytics Advertising Features through Ads Settings and Ad Settings for mobile apps. Other opt out means include"}
                {" "}
                <a href="http://optout.networkadvertising.org/" className="text-primary hover:underline">
                  http://optout.networkadvertising.org/
                </a>{" "}
                {isFrench ? "et" : "and"}{" "}
                <a href="http://www.networkadvertising.org/mobile-choice" className="text-primary hover:underline">
                  http://www.networkadvertising.org/mobile-choice
                </a>.{" "}
                {isFrench 
                  ? "Pour plus d'informations sur les pratiques de confidentialité de Google, veuillez visiter la page Confidentialité et conditions de Google."
                  : "For more information on the privacy practices of Google, please visit the Google Privacy & Terms page."}
              </p>
            </section>

            {/* Section 6 */}
            <section id="ai">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isFrench ? "6. PROPOSONS-NOUS DES PRODUITS BASÉS SUR L'INTELLIGENCE ARTIFICIELLE ?" : "6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?"}
              </h2>
              
              <p className="text-muted-foreground italic mb-6">
                <span className="font-semibold">{isFrench ? "En bref :" : "In Short:"}</span>{" "}
                {isFrench 
                  ? "Nous proposons des produits, des fonctionnalités ou des outils alimentés par l'intelligence artificielle, l'apprentissage automatique ou des technologies similaires."
                  : "We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isFrench 
                  ? "Dans le cadre de nos Services, nous proposons des produits, des fonctionnalités ou des outils alimentés par l'intelligence artificielle, l'apprentissage automatique ou des technologies similaires (collectivement, « Produits IA »). Ces outils sont conçus pour améliorer votre expérience et vous fournir des solutions innovantes. Les conditions de cet avis de confidentialité régissent votre utilisation des produits IA au sein de nos Services."
                  : "As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, 'AI Products'). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services."}
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isFrench ? "Nos produits IA" : "Our AI Products"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nos produits IA sont conçus pour les fonctions suivantes :"
                  : "Our AI Products are designed for the following functions:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>{isFrench ? "Automatisation IA" : "AI automation"}</li>
                <li>{isFrench ? "Insights IA" : "AI insights"}</li>
                <li>{isFrench ? "Recherche IA" : "AI research"}</li>
                <li>{isFrench ? "Analytique prédictive IA" : "AI predictive analytics"}</li>
                <li>{isFrench ? "Traitement du langage naturel" : "Natural language processing"}</li>
                <li>{isFrench ? "Modèles d'apprentissage automatique" : "Machine learning models"}</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isFrench ? "Comment nous traitons vos données en utilisant l'IA" : "How We Process Your Data Using AI"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isFrench 
                  ? "Toutes les informations personnelles traitées à l'aide de nos produits IA sont gérées conformément à notre avis de confidentialité et à notre accord avec des tiers. Cela garantit une haute sécurité et protège vos informations personnelles tout au long du processus, vous donnant la tranquillité d'esprit quant à la sécurité de vos données."
                  : "All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety."}
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isFrench ? "Comment refuser" : "How to Opt Out"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous croyons qu'il est important de vous donner le pouvoir de décider comment vos données sont utilisées. Pour refuser, vous pouvez :"
                  : "We believe in giving you the power to decide how your data is used. To opt out, you can:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>{isFrench ? "Nous contacter en utilisant les coordonnées fournies" : "Contact us using the contact information provided"}</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="info-retain">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isFrench ? "7. COMBIEN DE TEMPS CONSERVONS-NOUS VOS INFORMATIONS ?" : "7. HOW LONG DO WE KEEP YOUR INFORMATION?"}
              </h2>
              
              <p className="text-muted-foreground italic mb-6">
                <span className="font-semibold">{isFrench ? "En bref :" : "In Short:"}</span>{" "}
                {isFrench 
                  ? "Nous conservons vos informations aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cet avis de confidentialité, sauf si la loi l'exige autrement."
                  : "We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous ne conserverons vos informations personnelles que le temps nécessaire aux fins énoncées dans cet avis de confidentialité, à moins qu'une période de conservation plus longue ne soit requise ou autorisée par la loi (comme les exigences fiscales, comptables ou autres exigences légales). Aucune finalité de cet avis ne nous obligera à conserver vos informations personnelles plus longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique, ou comme l'exigent les lois et réglementations applicables."
                  : "We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable laws and regulations."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {isFrench 
                  ? "Lorsque nous n'avons plus de besoin commercial légitime de traiter vos informations personnelles, nous supprimerons ou anonymiserons ces informations, ou, si cela n'est pas possible (par exemple, parce que vos informations personnelles ont été stockées dans des archives de sauvegarde), nous stockerons en toute sécurité vos informations personnelles et les isolerons de tout traitement ultérieur jusqu'à ce que la suppression soit possible."
                  : "When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible."}
              </p>
            </section>

            {/* Section 8 */}
            <section id="info-safe">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isFrench ? "8. COMMENT PROTÉGEONS-NOUS VOS INFORMATIONS ?" : "8. HOW DO WE KEEP YOUR INFORMATION SAFE?"}
              </h2>
              
              <p className="text-muted-foreground italic mb-6">
                <span className="font-semibold">{isFrench ? "En bref :" : "In Short:"}</span>{" "}
                {isFrench 
                  ? "Nous visons à protéger vos informations personnelles grâce à un système de mesures de sécurité organisationnelles et techniques."
                  : "We aim to protect your personal information through a system of organisational and technical security measures."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {isFrench 
                  ? "Nous avons mis en œuvre des mesures de sécurité techniques et organisationnelles appropriées et raisonnables conçues pour protéger la sécurité de toute information personnelle que nous traitons. Cependant, malgré nos garanties et nos efforts pour sécuriser vos informations, aucune transmission électronique sur Internet ou technologie de stockage d'informations ne peut être garantie à 100 % sécurisée, nous ne pouvons donc pas promettre ou garantir que des pirates informatiques, des cybercriminels ou d'autres tiers non autorisés ne seront pas en mesure de contourner notre sécurité et de collecter, accéder, voler ou modifier de manière inappropriée vos informations. Bien que nous fassions de notre mieux pour protéger vos informations personnelles, la transmission d'informations personnelles vers et depuis nos Services est à vos propres risques. Vous ne devez accéder aux Services que dans un environnement sécurisé."
                  : "We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment."}
              </p>
            </section>

            {/* Section 9 */}
            <section id="minors">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isFrench ? "9. COLLECTONS-NOUS DES INFORMATIONS AUPRÈS DE MINEURS ?" : "9. DO WE COLLECT INFORMATION FROM MINORS?"}
              </h2>
              
              <p className="text-muted-foreground italic mb-6">
                <span className="font-semibold">{isFrench ? "En bref :" : "In Short:"}</span>{" "}
                {isFrench 
                  ? "Nous ne collectons pas sciemment de données auprès d'enfants de moins de 18 ans ou ne leur faisons pas de marketing, ou l'âge équivalent tel que spécifié par la loi dans votre juridiction."
                  : "We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {isFrench 
                  ? "Nous ne collectons pas sciemment, ne sollicitons pas de données auprès d'enfants de moins de 18 ans ou de l'âge équivalent tel que spécifié par la loi dans votre juridiction, ne leur faisons pas de marketing, et ne vendons pas sciemment ces informations personnelles. En utilisant les Services, vous déclarez avoir au moins 18 ans ou l'âge équivalent tel que spécifié par la loi dans votre juridiction, ou que vous êtes le parent ou le tuteur d'un tel mineur et consentez à l'utilisation des Services par ce mineur à charge. Si nous apprenons que des informations personnelles d'utilisateurs de moins de 18 ans ou de l'âge équivalent tel que spécifié par la loi dans votre juridiction ont été collectées, nous désactiverons le compte et prendrons des mesures raisonnables pour supprimer rapidement ces données de nos dossiers. Si vous avez connaissance de données que nous aurions pu collecter auprès d'enfants de moins de 18 ans ou de l'âge équivalent tel que spécifié par la loi dans votre juridiction, veuillez nous contacter à "
                  : "We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at "}
                <a href="mailto:privacy@tdiaagency.com" className="text-primary hover:underline">
                  privacy@tdiaagency.com
                </a>.
              </p>
            </section>

            {/* Section 10 */}
            <section id="privacy-rights">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isFrench ? "10. QUELS SONT VOS DROITS EN MATIÈRE DE CONFIDENTIALITÉ ?" : "10. WHAT ARE YOUR PRIVACY RIGHTS?"}
              </h2>
              
              <p className="text-muted-foreground italic mb-6">
                <span className="font-semibold">{isFrench ? "En bref :" : "In Short:"}</span>{" "}
                {isFrench 
                  ? "Selon votre état de résidence aux États-Unis ou dans certaines régions, comme l'Espace économique européen (EEE), le Royaume-Uni (RU), la Suisse et le Canada, vous avez des droits qui vous permettent un meilleur accès et un meilleur contrôle sur vos informations personnelles. Vous pouvez consulter, modifier ou résilier votre compte à tout moment, selon votre pays, province ou état de résidence."
                  : "Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Dans certaines régions (comme l'EEE, le Royaume-Uni, la Suisse et le Canada), vous avez certains droits en vertu des lois applicables sur la protection des données. Ceux-ci peuvent inclure le droit (i) de demander l'accès et d'obtenir une copie de vos informations personnelles, (ii) de demander la rectification ou l'effacement ; (iii) de restreindre le traitement de vos informations personnelles ; (iv) le cas échéant, à la portabilité des données ; et (v) de ne pas être soumis à une prise de décision automatisée. Si une décision qui produit des effets juridiques ou des effets similaires significatifs est prise uniquement par des moyens automatisés, nous vous informerons, vous expliquerons les principaux facteurs et vous offrirons un moyen simple de demander un examen humain. Dans certaines circonstances, vous pouvez également avoir le droit de vous opposer au traitement de vos informations personnelles. Vous pouvez faire une telle demande en nous contactant en utilisant les coordonnées fournies dans la section « COMMENT POUVEZ-VOUS NOUS CONTACTER À PROPOS DE CET AVIS ? » ci-dessous."
                  : "In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous examinerons et agirons sur toute demande conformément aux lois applicables sur la protection des données."
                  : "We will consider and act upon any request in accordance with applicable data protection laws."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Si vous êtes situé dans l'EEE ou au Royaume-Uni et que vous pensez que nous traitons illégalement vos informations personnelles, vous avez également le droit de déposer une plainte auprès de votre autorité de protection des données de l'État membre ou de l'autorité de protection des données du Royaume-Uni."
                  : "If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isFrench 
                  ? "Si vous êtes situé en Suisse, vous pouvez contacter le Préposé fédéral à la protection des données et à la transparence."
                  : "If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner."}
              </p>
              
              <h3 className="text-lg font-semibold text-foreground underline mb-4">
                {isFrench ? "Retrait de votre consentement :" : "Withdrawing your consent:"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Si nous nous appuyons sur votre consentement pour traiter vos informations personnelles, qui peut être un consentement exprès et/ou implicite selon la loi applicable, vous avez le droit de retirer votre consentement à tout moment. Vous pouvez retirer votre consentement à tout moment en nous contactant en utilisant les coordonnées fournies dans la section « COMMENT POUVEZ-VOUS NOUS CONTACTER À PROPOS DE CET AVIS ? » ci-dessous."
                  : "If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isFrench 
                  ? "Cependant, veuillez noter que cela n'affectera pas la légalité du traitement avant son retrait ni, lorsque la loi applicable le permet, n'affectera le traitement de vos informations personnelles effectué sur la base de motifs de traitement légaux autres que le consentement."
                  : "However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent."}
              </p>
              
              <h3 className="text-lg font-semibold text-foreground underline mb-4">
                {isFrench ? "Désabonnement des communications marketing et promotionnelles :" : "Opting out of marketing and promotional communications:"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Vous pouvez vous désabonner de nos communications marketing et promotionnelles à tout moment en cliquant sur le lien de désabonnement dans les e-mails que nous envoyons, en répondant « STOP » ou « UNSUBSCRIBE » aux SMS que nous envoyons, ou en nous contactant en utilisant les coordonnées fournies dans la section « COMMENT POUVEZ-VOUS NOUS CONTACTER À PROPOS DE CET AVIS ? » ci-dessous. Vous serez alors retiré des listes marketing. Cependant, nous pouvons toujours communiquer avec vous — par exemple, pour vous envoyer des messages liés au service qui sont nécessaires à l'administration et à l'utilisation de votre compte, pour répondre aux demandes de service, ou à d'autres fins non marketing."
                  : "You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying 'STOP' or 'UNSUBSCRIBE' to the SMS messages that we send, or by contacting us using the details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isFrench 
                  ? "Aucune information mobile ne sera partagée avec des tiers ou des affiliés à des fins de marketing ou de promotion. Le partage d'informations avec des sous-traitants de services de support, tels que le service client, est autorisé. Toutes les autres catégories de cas d'utilisation excluent les données d'opt-in de messagerie texte et le consentement ; ces informations ne seront pas partagées avec des tiers."
                  : "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with third parties."}
              </p>
              
              <h3 className="text-lg font-semibold text-foreground underline mb-4">
                {isFrench ? "Cookies et technologies similaires :" : "Cookies and similar technologies:"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "La plupart des navigateurs Web sont configurés pour accepter les cookies par défaut. Si vous préférez, vous pouvez généralement choisir de configurer votre navigateur pour supprimer les cookies et les rejeter. Si vous choisissez de supprimer ou de rejeter les cookies, cela pourrait affecter certaines fonctionnalités ou services de nos Services. Pour plus d'informations, veuillez consulter notre Avis sur les cookies :"
                  : "Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. For further information, please see our Cookie Notice:"}
                {" "}
                <a href="https://www.tdiaagency.com/#/cookie-policy" className="text-primary hover:underline">
                  https://www.tdiaagency.com/#/cookie-policy
                </a>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {isFrench 
                  ? "Si vous avez des questions ou des commentaires sur vos droits en matière de confidentialité, vous pouvez nous envoyer un e-mail à "
                  : "If you have questions or comments about your privacy rights, you may email us at "}
                <a href="mailto:privacy@tdiaagency.com" className="text-primary hover:underline">
                  privacy@tdiaagency.com
                </a>.
              </p>
            </section>

            {/* Section 11 */}
            <section id="dnt">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isFrench ? "11. CONTRÔLES POUR LES FONCTIONNALITÉS DO-NOT-TRACK" : "11. CONTROLS FOR DO-NOT-TRACK FEATURES"}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "La plupart des navigateurs web et certains systèmes d'exploitation mobiles et applications mobiles incluent une fonctionnalité ou un paramètre Do-Not-Track (« DNT ») que vous pouvez activer pour signaler votre préférence en matière de confidentialité afin de ne pas avoir de données sur vos activités de navigation en ligne surveillées et collectées. À ce stade, aucune norme technologique uniforme pour reconnaître et mettre en œuvre les signaux DNT n'a été finalisée. En tant que tel, nous ne répondons actuellement pas aux signaux de navigateur DNT ou à tout autre mécanisme qui communique automatiquement votre choix de ne pas être suivi en ligne. Si une norme pour le suivi en ligne est adoptée et que nous devons la suivre à l'avenir, nous vous informerons de cette pratique dans une version révisée de cet avis de confidentialité."
                  : "Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {isFrench 
                  ? "La loi californienne nous oblige à vous informer de la façon dont nous répondons aux signaux DNT des navigateurs web. Parce qu'il n'existe actuellement pas de norme industrielle ou légale pour reconnaître ou honorer les signaux DNT, nous n'y répondons pas pour le moment."
                  : "California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognising or honouring DNT signals, we do not respond to them at this time."}
              </p>
            </section>

            {/* Section 12 */}
            <section id="us-rights">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isFrench ? "12. LES RÉSIDENTS DES ÉTATS-UNIS ONT-ILS DES DROITS SPÉCIFIQUES EN MATIÈRE DE CONFIDENTIALITÉ ?" : "12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"}
              </h2>
              
              <p className="text-muted-foreground italic mb-6">
                <span className="font-semibold">{isFrench ? "En bref :" : "In Short:"}</span>{" "}
                {isFrench 
                  ? "Si vous êtes résident de Californie, Colorado, Connecticut, Delaware, Floride, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah ou Virginie, vous pouvez avoir le droit de demander l'accès et de recevoir des détails sur les informations personnelles que nous conservons à votre sujet et sur la façon dont nous les avons traitées, de corriger les inexactitudes, d'obtenir une copie de vos informations personnelles ou de les supprimer. Vous pouvez également avoir le droit de retirer votre consentement à notre traitement de vos informations personnelles. Ces droits peuvent être limités dans certaines circonstances par la loi applicable. Plus d'informations sont fournies ci-dessous."
                  : "If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below."}
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {isFrench ? "Catégories d'informations personnelles que nous collectons" : "Categories of Personal Information We Collect"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Le tableau ci-dessous présente les catégories d'informations personnelles que nous avons collectées au cours des douze (12) derniers mois. Le tableau inclut des exemples illustratifs de chaque catégorie et ne reflète pas les informations personnelles que nous collectons auprès de vous. Pour un inventaire complet de toutes les informations personnelles que nous traitons, veuillez vous référer à la section « QUELLES INFORMATIONS COLLECTONS-NOUS ? »"
                  : "The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section 'WHAT INFORMATION DO WE COLLECT?'"}
              </p>

              {/* Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-3 text-left font-semibold">{isFrench ? "Catégorie" : "Category"}</th>
                      <th className="border border-border p-3 text-left font-semibold">{isFrench ? "Exemples" : "Examples"}</th>
                      <th className="border border-border p-3 text-center font-semibold">{isFrench ? "Collecté" : "Collected"}</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="border border-border p-3">{isFrench ? "A. Identifiants" : "A. Identifiers"}</td>
                      <td className="border border-border p-3">{isFrench ? "Coordonnées, telles que nom réel, alias, adresse postale, numéro de téléphone ou de mobile, identifiant personnel unique, identifiant en ligne, adresse de protocole Internet, adresse e-mail et nom de compte" : "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name"}</td>
                      <td className="border border-border p-3 text-center">{isFrench ? "OUI" : "YES"}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">{isFrench ? "B. Informations personnelles telles que définies dans le California Customer Records statute" : "B. Personal information as defined in the California Customer Records statute"}</td>
                      <td className="border border-border p-3">{isFrench ? "Nom, coordonnées, éducation, emploi, historique d'emploi et informations financières" : "Name, contact information, education, employment, employment history, and financial information"}</td>
                      <td className="border border-border p-3 text-center">{isFrench ? "OUI" : "YES"}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">{isFrench ? "C. Caractéristiques de classification protégées en vertu de la loi étatique ou fédérale" : "C. Protected classification characteristics under state or federal law"}</td>
                      <td className="border border-border p-3">{isFrench ? "Sexe, âge, date de naissance, race et ethnicité, origine nationale, état matrimonial et autres données démographiques" : "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data"}</td>
                      <td className="border border-border p-3 text-center">{isFrench ? "NON" : "NO"}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">{isFrench ? "D. Informations commerciales" : "D. Commercial information"}</td>
                      <td className="border border-border p-3">{isFrench ? "Informations sur les transactions, historique d'achat, détails financiers et informations de paiement" : "Transaction information, purchase history, financial details, and payment information"}</td>
                      <td className="border border-border p-3 text-center">{isFrench ? "NON" : "NO"}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">{isFrench ? "E. Informations biométriques" : "E. Biometric information"}</td>
                      <td className="border border-border p-3">{isFrench ? "Empreintes digitales et empreintes vocales" : "Fingerprints and voiceprints"}</td>
                      <td className="border border-border p-3 text-center">{isFrench ? "NON" : "NO"}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">{isFrench ? "F. Activité Internet ou autre activité réseau similaire" : "F. Internet or other similar network activity"}</td>
                      <td className="border border-border p-3">{isFrench ? "Historique de navigation, historique de recherche, comportement en ligne, données d'intérêt et interactions avec nos sites web, applications, systèmes et publicités et autres" : "Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements"}</td>
                      <td className="border border-border p-3 text-center">{isFrench ? "OUI" : "YES"}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">{isFrench ? "G. Données de géolocalisation" : "G. Geolocation data"}</td>
                      <td className="border border-border p-3">{isFrench ? "Emplacement de l'appareil" : "Device location"}</td>
                      <td className="border border-border p-3 text-center">{isFrench ? "OUI" : "YES"}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">{isFrench ? "H. Informations audio, électroniques, sensorielles ou similaires" : "H. Audio, electronic, sensory, or similar information"}</td>
                      <td className="border border-border p-3">{isFrench ? "Images et audio, vidéo ou enregistrements d'appels créés dans le cadre de nos activités commerciales" : "Images and audio, video or call recordings created in connection with our business activities"}</td>
                      <td className="border border-border p-3 text-center">{isFrench ? "NON" : "NO"}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">{isFrench ? "I. Informations professionnelles ou liées à l'emploi" : "I. Professional or employment-related information"}</td>
                      <td className="border border-border p-3">{isFrench ? "Coordonnées professionnelles pour vous fournir nos Services au niveau de l'entreprise ou du poste, historique de travail et qualifications professionnelles si vous postulez à un emploi chez nous" : "Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us"}</td>
                      <td className="border border-border p-3 text-center">{isFrench ? "OUI" : "YES"}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">{isFrench ? "J. Informations sur l'éducation" : "J. Education Information"}</td>
                      <td className="border border-border p-3">{isFrench ? "Dossiers scolaires et informations d'annuaire" : "Student records and directory information"}</td>
                      <td className="border border-border p-3 text-center">{isFrench ? "NON" : "NO"}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">{isFrench ? "K. Inférences tirées des informations personnelles collectées" : "K. Inferences drawn from collected personal information"}</td>
                      <td className="border border-border p-3">{isFrench ? "Inférences tirées de l'une des informations personnelles collectées énumérées ci-dessus pour créer un profil ou un résumé sur, par exemple, les préférences et les caractéristiques d'un individu" : "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics"}</td>
                      <td className="border border-border p-3 text-center">{isFrench ? "OUI" : "YES"}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">{isFrench ? "L. Informations personnelles sensibles" : "L. Sensitive personal Information"}</td>
                      <td className="border border-border p-3"></td>
                      <td className="border border-border p-3 text-center">{isFrench ? "NON" : "NO"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous pouvons également collecter d'autres informations personnelles en dehors de ces catégories lors d'instances où vous interagissez avec nous en personne, en ligne, ou par téléphone ou courrier dans le contexte de :"
                  : "We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>{isFrench ? "Recevoir de l'aide via nos canaux de support client" : "Receiving help through our customer support channels"}</li>
                <li>{isFrench ? "Participation à des sondages ou concours clients" : "Participation in customer surveys or contests"}</li>
                <li>{isFrench ? "Facilitation dans la livraison de nos Services et pour répondre à vos demandes" : "Facilitation in the delivery of our Services and to respond to your inquiries"}</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous utiliserons et conserverons les informations personnelles collectées selon les besoins pour fournir les Services ou pour :"
                  : "We will use and retain the collected personal information as needed to provide the Services or for:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>{isFrench ? "Catégorie A - Aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique, ou comme l'exigent les lois applicables" : "Category A - As long as necessary to fulfill the purposes outlined in this policy, or as required by applicable laws"}</li>
                <li>{isFrench ? "Catégorie B - Aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique, ou comme l'exigent les lois applicables" : "Category B - As long as necessary to fulfill the purposes outlined in this policy, or as required by applicable laws"}</li>
                <li>{isFrench ? "Catégorie F - Aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique, ou comme l'exigent les lois applicables" : "Category F - As long as necessary to fulfill the purposes outlined in this policy, or as required by applicable laws"}</li>
                <li>{isFrench ? "Catégorie G - Aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique, ou comme l'exigent les lois applicables" : "Category G - As long as necessary to fulfill the purposes outlined in this policy, or as required by applicable laws"}</li>
                <li>{isFrench ? "Catégorie I - Aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique, ou comme l'exigent les lois applicables" : "Category I - As long as necessary to fulfill the purposes outlined in this policy, or as required by applicable laws"}</li>
                <li>{isFrench ? "Catégorie K - Aussi longtemps que l'utilisateur a un compte chez nous" : "Category K - As long as the user has an account with us"}</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {isFrench ? "Sources d'informations personnelles" : "Sources of Personal Information"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isFrench 
                  ? "En savoir plus sur les sources d'informations personnelles que nous collectons dans « QUELLES INFORMATIONS COLLECTONS-NOUS ? »"
                  : "Learn more about the sources of personal information we collect in 'WHAT INFORMATION DO WE COLLECT?'"}
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {isFrench ? "Comment nous utilisons et partageons les informations personnelles" : "How We Use and Share Personal Information"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "En savoir plus sur la façon dont nous utilisons vos informations personnelles dans la section « COMMENT TRAITONS-NOUS VOS INFORMATIONS ? »"
                  : "Learn more about how we use your personal information in the section, 'HOW DO WE PROCESS YOUR INFORMATION?'"}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench ? "Nous collectons et partageons vos informations personnelles via :" : "We collect and share your personal information through:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>{isFrench ? "Cookies de ciblage/Marketing" : "Targeting cookies/Marketing cookies"}</li>
                <li>{isFrench ? "Cookies de médias sociaux" : "Social media cookies"}</li>
                <li>{isFrench ? "Balises/Pixels/Tags" : "Beacons/Pixels/Tags"}</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {isFrench ? "Vos informations seront-elles partagées avec quelqu'un d'autre ?" : "Will your information be shared with anyone else?"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous pouvons divulguer vos informations personnelles à nos fournisseurs de services conformément à un contrat écrit entre nous et chaque fournisseur de services. En savoir plus sur la façon dont nous divulguons des informations personnelles dans la section « QUAND ET AVEC QUI PARTAGEONS-NOUS VOS INFORMATIONS PERSONNELLES ? »"
                  : "We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?'"}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Nous pouvons utiliser vos informations personnelles à nos propres fins commerciales, par exemple pour entreprendre des recherches internes pour le développement et la démonstration technologiques. Cela n'est pas considéré comme une « vente » de vos informations personnelles."
                  : "We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be 'selling' of your personal information."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isFrench 
                  ? "Nous n'avons pas vendu ni partagé d'informations personnelles à des tiers à des fins commerciales ou commerciales au cours des douze (12) derniers mois. Nous avons divulgué les catégories suivantes d'informations personnelles à des tiers à des fins commerciales ou commerciales au cours des douze (12) derniers mois. Les catégories de tiers auxquels nous avons divulgué des informations personnelles à des fins commerciales ou commerciales peuvent être trouvées dans « QUAND ET AVEC QUI PARTAGEONS-NOUS VOS INFORMATIONS PERSONNELLES ? »"
                  : "We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?'"}
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {isFrench ? "Vos droits" : "Your Rights"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Vous avez des droits en vertu de certaines lois américaines sur la protection des données. Cependant, ces droits ne sont pas absolus et, dans certains cas, nous pouvons refuser votre demande comme le permet la loi. Ces droits incluent :"
                  : "You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li><span className="font-semibold">{isFrench ? "Droit de savoir" : "Right to know"}</span> {isFrench ? "si nous traitons ou non vos données personnelles" : "whether or not we are processing your personal data"}</li>
                <li><span className="font-semibold">{isFrench ? "Droit d'accéder" : "Right to access"}</span> {isFrench ? "à vos données personnelles" : "your personal data"}</li>
                <li><span className="font-semibold">{isFrench ? "Droit de corriger" : "Right to correct"}</span> {isFrench ? "les inexactitudes dans vos données personnelles" : "inaccuracies in your personal data"}</li>
                <li><span className="font-semibold">{isFrench ? "Droit de demander" : "Right to request"}</span> {isFrench ? "la suppression de vos données personnelles" : "the deletion of your personal data"}</li>
                <li><span className="font-semibold">{isFrench ? "Droit d'obtenir une copie" : "Right to obtain a copy"}</span> {isFrench ? "des données personnelles que vous avez précédemment partagées avec nous" : "of the personal data you previously shared with us"}</li>
                <li><span className="font-semibold">{isFrench ? "Droit à la non-discrimination" : "Right to non-discrimination"}</span> {isFrench ? "pour l'exercice de vos droits" : "for exercising your rights"}</li>
                <li><span className="font-semibold">{isFrench ? "Droit de refuser" : "Right to opt out"}</span> {isFrench ? "le traitement de vos données personnelles si elles sont utilisées pour la publicité ciblée (ou le partage tel que défini par la loi californienne sur la confidentialité), la vente de données personnelles, ou le profilage pour la prise de décisions qui produisent des effets juridiques ou des effets similaires significatifs (« profilage »)" : "of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ('profiling')"}</li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench ? "Selon l'état où vous vivez, vous pouvez également avoir les droits suivants :" : "Depending upon the state where you live, you may also have the following rights:"}
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>{isFrench ? "Droit d'accéder aux catégories de données personnelles traitées (comme le permet la loi applicable, y compris la loi sur la confidentialité du Minnesota)" : "Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)"}</li>
                <li>{isFrench ? "Droit d'obtenir une liste des catégories de tiers auxquels nous avons divulgué des données personnelles (comme le permet la loi applicable, y compris la loi sur la confidentialité en Californie, au Delaware et au Maryland)" : "Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)"}</li>
                <li>{isFrench ? "Droit d'obtenir une liste des tiers spécifiques auxquels nous avons divulgué des données personnelles (comme le permet la loi applicable, y compris la loi sur la confidentialité du Minnesota et de l'Oregon)" : "Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)"}</li>
                <li>{isFrench ? "Droit d'obtenir une liste des tiers auxquels nous avons vendu des données personnelles (comme le permet la loi applicable, y compris la loi sur la confidentialité du Connecticut)" : "Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)"}</li>
                <li>{isFrench ? "Droit de réviser, comprendre, questionner et, selon l'endroit où vous vivez, corriger la façon dont les données personnelles ont été profilées (comme le permet la loi applicable, y compris la loi sur la confidentialité du Connecticut et du Minnesota)" : "Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)"}</li>
                <li>{isFrench ? "Droit de limiter l'utilisation et la divulgation de données personnelles sensibles (comme le permet la loi applicable, y compris la loi sur la confidentialité de la Californie)" : "Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)"}</li>
                <li>{isFrench ? "Droit de refuser la collecte de données sensibles et de données personnelles collectées par l'utilisation d'une fonction de reconnaissance vocale ou faciale (comme le permet la loi applicable, y compris la loi sur la confidentialité de la Floride)" : "Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)"}</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {isFrench ? "Comment exercer vos droits" : "How to Exercise Your Rights"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Pour exercer ces droits, vous pouvez nous contacter en visitant "
                  : "To exercise these rights, you can contact us by visiting "}
                <a href="https://tdiaagency.com/privacy" className="text-primary hover:underline">https://tdiaagency.com/privacy</a>
                {isFrench ? ", en nous envoyant un e-mail à " : ", by emailing us at "}
                <a href="mailto:privacy@tdiaagency.com" className="text-primary hover:underline">privacy@tdiaagency.com</a>
                {isFrench ? ", ou en vous référant aux coordonnées au bas de ce document." : ", or by referring to the contact details at the bottom of this document."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isFrench 
                  ? "En vertu de certaines lois américaines sur la protection des données, vous pouvez désigner un agent autorisé pour faire une demande en votre nom. Nous pouvons refuser une demande d'un agent autorisé qui ne soumet pas la preuve qu'il a été validement autorisé à agir en votre nom conformément aux lois applicables."
                  : "Under certain US state data protection laws, you can designate an authorised agent to make a request on your behalf. We may deny a request from an authorised agent that does not submit proof that they have been validly authorised to act on your behalf in accordance with applicable laws."}
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {isFrench ? "Vérification de la demande" : "Request Verification"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isFrench 
                  ? "À la réception de votre demande, nous devrons vérifier votre identité pour déterminer que vous êtes la même personne que celle pour laquelle nous avons les informations dans notre système. Nous n'utiliserons que les informations personnelles fournies dans votre demande pour vérifier votre identité ou votre autorité à faire la demande. Cependant, si nous ne pouvons pas vérifier votre identité à partir des informations déjà conservées par nous, nous pouvons demander que vous fournissiez des informations supplémentaires aux fins de vérification de votre identité et à des fins de sécurité ou de prévention de la fraude. Si vous soumettez la demande par l'intermédiaire d'un agent autorisé, nous pouvons avoir besoin de collecter des informations supplémentaires pour vérifier votre identité avant de traiter votre demande et l'agent devra fournir une permission écrite et signée de votre part pour soumettre une telle demande en votre nom."
                  : "Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. If you submit the request through an authorised agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf."}
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {isFrench ? "Appels" : "Appeals"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isFrench 
                  ? "En vertu de certaines lois américaines sur la protection des données, si nous refusons de prendre des mesures concernant votre demande, vous pouvez faire appel de notre décision en nous envoyant un e-mail à "
                  : "Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at "}
                <a href="mailto:privacy@tdiaagency.com" className="text-primary hover:underline">privacy@tdiaagency.com</a>.
                {isFrench 
                  ? " Nous vous informerons par écrit de toute action prise ou non en réponse à l'appel, y compris une explication écrite des raisons des décisions. Si votre appel est refusé, vous pouvez soumettre une plainte à votre procureur général de l'État."
                  : " We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general."}
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {isFrench ? "Loi californienne « Shine The Light »" : "California 'Shine The Light' Law"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {isFrench 
                  ? "L'article 1798.83 du Code civil de Californie, également connue sous le nom de loi « Shine The Light », permet à nos utilisateurs résidents de Californie de demander et d'obtenir de nous, une fois par an et gratuitement, des informations sur les catégories d'informations personnelles (le cas échéant) que nous avons divulguées à des tiers à des fins de marketing direct et les noms et adresses de tous les tiers avec lesquels nous avons partagé des informations personnelles au cours de l'année civile immédiatement précédente. Si vous êtes un résident californien et souhaitez faire une telle demande, veuillez nous soumettre votre demande par écrit en utilisant les coordonnées fournies dans la section « COMMENT POUVEZ-VOUS NOUS CONTACTER À PROPOS DE CET AVIS ? »"
                  : "California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'"}
              </p>
            </section>

            <section id="updates">
              <h2 className="text-2xl font-semibold mb-4">
                {isFrench ? "13. METTONS-NOUS À JOUR CET AVIS ?" : "13. DO WE MAKE UPDATES TO THIS NOTICE?"}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4 italic">
                <span className="font-semibold">{isFrench ? "En bref : " : "In Short: "}</span>
                {isFrench 
                  ? "Oui, nous mettrons à jour cet avis si nécessaire pour rester en conformité avec les lois applicables."
                  : "Yes, we will update this notice as necessary to stay compliant with relevant laws."}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {isFrench 
                  ? "Nous pouvons mettre à jour cet avis de confidentialité de temps en temps. La version mise à jour sera indiquée par une date « Révisée » mise à jour en haut de cet avis de confidentialité. Si nous apportons des modifications importantes à cet avis de confidentialité, nous pouvons vous en informer soit en publiant bien en évidence un avis de telles modifications, soit en vous envoyant directement une notification. Nous vous encourageons à consulter fréquemment cet avis de confidentialité pour être informé de la manière dont nous protégeons vos informations."
                  : "We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information."}
              </p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-semibold mb-4">
                {isFrench ? "14. COMMENT POUVEZ-VOUS NOUS CONTACTER AU SUJET DE CET AVIS ?" : "14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isFrench 
                  ? "Si vous avez des questions ou des commentaires concernant cet avis, vous pouvez nous envoyer un e-mail à "
                  : "If you have questions or comments about this notice, you may email us at "}
                <a href="mailto:privacy@tdiaagency.com" className="text-primary hover:underline">privacy@tdiaagency.com</a>
                {isFrench ? " ou nous contacter par courrier à :" : " or contact us by post at:"}
              </p>
              
              <div className="text-muted-foreground leading-relaxed">
                <p className="font-semibold">Tdia Agency</p>
                <p>__________</p>
                <p>Montréal, Quebec</p>
                <p>Canada</p>
              </div>
            </section>

            <section id="review-data">
              <h2 className="text-2xl font-semibold mb-4">
                {isFrench ? "15. COMMENT POUVEZ-VOUS EXAMINER, METTRE À JOUR OU SUPPRIMER LES DONNÉES QUE NOUS COLLECTONS AUPRÈS DE VOUS ?" : "15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                {isFrench 
                  ? "En fonction des lois applicables de votre pays ou de votre état de résidence aux États-Unis, vous pouvez avoir le droit de demander l'accès aux informations personnelles que nous collectons auprès de vous, des détails sur la façon dont nous les avons traitées, de corriger les inexactitudes ou de supprimer vos informations personnelles. Vous pouvez également avoir le droit de retirer votre consentement à notre traitement de vos informations personnelles. Ces droits peuvent être limités dans certaines circonstances par la loi applicable. Pour demander l'examen, la mise à jour ou la suppression de vos informations personnelles, veuillez visiter : "
                  : "Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: "}
                <a href="https://tdiaagency.com/privacy" className="text-primary hover:underline">https://tdiaagency.com/privacy</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
