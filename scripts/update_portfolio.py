"""Add pages.ourWork.portfolio block with section UI + creative titles/descriptions.
Preserves all existing keys in fr.json / en.json.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FR = ROOT / "src/i18n/locales/fr.json"
EN = ROOT / "src/i18n/locales/en.json"

# Creatives in the exact order they appear in CreativesPortfolio.tsx (ids 11..31 -> indices 0..20)
EN_CREATIVES = [
    {"title": "UGC that educates and converts",
     "description": "A clear, authentic breakdown of Onyx's SaaS services, delivered by a creator users can trust."},
    {"title": "Annick Levesque creative photoshoot",
     "description": "Professional photoshoot creative with strong visual storytelling and brand positioning."},
    {"title": "1001 Noix UGC campaign",
     "description": "Product-focused UGC showcasing natural ingredients and health benefits."},
    {"title": "A creator story that sells without selling",
     "description": "An authentic testimonial from a real user, highlighting Ika's freshness, confidence boost, and everyday impact, all in under 30 seconds."},
    {"title": "Showing the product. Selling the benefits.",
     "description": "A clean, minimal demo that highlights Ika's key benefits to convert fast in a crowded market."},
    {"title": "Animated elegance that drives attention",
     "description": "A high-end animated visual designed to elevate product perception and increase thumb-stopping power in-feed."},
    {"title": "From mug to message: UGC that feels like home",
     "description": "A cozy, relatable UGC showing how Thé du Nord becomes part of a winter self-care ritual, built to inspire and convert."},
    {"title": "When clean eating meets scroll-stopping UGC",
     "description": "A smooth, sensory UGC experience showcasing the natural texture and wellness benefits of 1001 Noix."},
    {"title": "Who's GoCoconut? Let this UGC show you.",
     "description": "A warm, relatable UGC that introduces GoCoconut and its multifunctional play furniture."},
    {"title": "GSTHST campaign video",
     "description": "Strategic brand campaign focusing on market positioning and audience engagement."},
    {"title": "Designed to spark thirst & foot traffic",
     "description": "A bold, flavor-forward creative crafted to drive in-store visits and spotlight the cocktail of the month with irresistible visual appeal."},
    {"title": "When AI meets herbal calm",
     "description": "A visually striking AI-generated visual for DASSA's herbal tea, caffeine-free, theine-free, and tech-forward."},
    {"title": "Looks new. Costs less.",
     "description": "This static creative highlights GoCoconut's reconditioned products, identical in quality and playfulness, but lighter on your wallet."},
    {"title": "The North's warmest gift",
     "description": "This festive visual celebrates Thés du Nord's Fireweed Black Tea, organic, caffeine-free, and crafted to warm both hands and hearts this holiday season."},
    {"title": "Pause. Sip. Reconnect.",
     "description": "Set against a backdrop of forest serenity, this creative highlights the purity and grounding effect of Thés du Nord's fireweed tea, a natural break in every sip."},
    {"title": "One brand. Four bold infusions.",
     "description": "A festive showcase of four signature blends from Thés du Nord: playful, aromatic, and grounded in nature. Delivered to your door with exclusive holiday perks."},
    {"title": "Obstacle course to cozy couch: all in one",
     "description": "A playful and practical promo highlighting the multifunctional GoCoconut sofa, from fort to couch, now 30% off when reloved."},
    {"title": "The secret weapon of Sunday brunch",
     "description": "A delicious spotlight on 1001 Noix's Chai Maple pecan butter, the perfect finishing touch to elevate any weekend brunch."},
    {"title": "The deodorant that does more with less",
     "description": "A bold, minimalist visual that positions this natural deodorant as a clean yet powerful alternative: no compromises, just confidence."},
    {"title": "Designed to stand out. Formulated to fit in.",
     "description": "This bold static creative highlights the product's eco-design and skin-safe formula, using vibrant packaging to reinforce the brand's identity and values in one scroll-stopping visual."},
    {"title": "Pure performance. Minimal design.",
     "description": "This clean, minimalist static creative conveys trust and purity through clinical design, emphasizing the product's medical-grade, natural, and economical benefits, all in one scroll-stopping visual."},
]

FR_CREATIVES = [
    {"title": "UGC qui éduque et convertit",
     "description": "Une présentation claire et authentique des services SaaS d'Onyx, livrée par un créateur en qui les utilisateurs peuvent avoir confiance."},
    {"title": "Séance photo créative Annick Levesque",
     "description": "Séance photo professionnelle avec un storytelling visuel fort et un positionnement de marque affirmé."},
    {"title": "Campagne UGC 1001 Noix",
     "description": "UGC centré sur le produit, mettant en valeur les ingrédients naturels et les bienfaits santé."},
    {"title": "Une histoire de créateur qui vend sans vendre",
     "description": "Un témoignage authentique d'une utilisatrice réelle, qui met en avant la fraîcheur d'Ika, le boost de confiance et son impact au quotidien, le tout en moins de 30 secondes."},
    {"title": "Montrer le produit. Vendre les bénéfices.",
     "description": "Une démo claire et minimaliste qui met en avant les bénéfices clés d'Ika pour convertir vite dans un marché encombré."},
    {"title": "Élégance animée qui capte l'attention",
     "description": "Un visuel animé haut de gamme conçu pour élever la perception du produit et augmenter le pouvoir d'arrêt du pouce en feed."},
    {"title": "De la tasse au message : un UGC qui a un goût de chez soi",
     "description": "Un UGC chaleureux et relatable montrant comment Thé du Nord devient un rituel de self-care hivernal, conçu pour inspirer et convertir."},
    {"title": "Quand l'alimentation saine rencontre un UGC qui arrête le scroll",
     "description": "Une expérience UGC fluide et sensorielle qui met en valeur la texture naturelle et les bienfaits bien-être de 1001 Noix."},
    {"title": "C'est qui GoCoconut ? Laisse cet UGC te le montrer.",
     "description": "Un UGC chaleureux et relatable qui présente GoCoconut et son mobilier de jeu multifonctionnel."},
    {"title": "Vidéo de campagne GSTHST",
     "description": "Campagne de marque stratégique centrée sur le positionnement marché et l'engagement de l'audience."},
    {"title": "Conçu pour donner soif et faire venir du monde",
     "description": "Un créatif audacieux et gourmand pensé pour faire venir en boutique et mettre en avant le cocktail du mois avec un attrait visuel irrésistible."},
    {"title": "Quand l'IA rencontre la sérénité végétale",
     "description": "Un visuel généré par IA saisissant pour la tisane de DASSA : sans caféine, sans théine, résolument moderne."},
    {"title": "Ça a l'air neuf. Ça coûte moins cher.",
     "description": "Ce créatif statique met en avant les produits reconditionnés GoCoconut : identiques en qualité et en fun, mais plus légers pour ton portefeuille."},
    {"title": "Le cadeau le plus chaleureux du Nord",
     "description": "Ce visuel festif célèbre le thé noir Fireweed des Thés du Nord : bio, sans caféine, conçu pour réchauffer les mains et les cœurs pendant les fêtes."},
    {"title": "Pause. Gorgée. Reconnexion.",
     "description": "Sur fond de sérénité forestière, ce créatif met en lumière la pureté et l'effet ancrant du thé fireweed des Thés du Nord : une vraie pause à chaque gorgée."},
    {"title": "Une seule marque. Quatre infusions marquantes.",
     "description": "Une vitrine festive de quatre mélanges signatures des Thés du Nord : ludiques, aromatiques et ancrés dans la nature. Livrés à ta porte avec des avantages exclusifs pour les fêtes."},
    {"title": "Du parcours d'obstacles au canapé douillet : tout-en-un",
     "description": "Une promo à la fois ludique et pratique qui met en avant le canapé multifonctionnel GoCoconut : du fort au canapé, maintenant à -30 % en version reloved."},
    {"title": "L'arme secrète du brunch du dimanche",
     "description": "Un focus gourmand sur le beurre de pacanes Chai Érable de 1001 Noix : la touche finale idéale pour sublimer n'importe quel brunch du week-end."},
    {"title": "Le déodorant qui fait plus avec moins",
     "description": "Un visuel audacieux et minimaliste qui positionne ce déodorant naturel comme une alternative clean mais puissante : pas de compromis, juste de la confiance."},
    {"title": "Conçu pour se démarquer. Formulé pour s'intégrer.",
     "description": "Ce créatif statique audacieux met en avant l'éco-design et la formule safe pour la peau, avec un packaging vibrant qui renforce l'identité et les valeurs de la marque en un seul visuel qui arrête le scroll."},
    {"title": "Performance pure. Design minimaliste.",
     "description": "Ce créatif statique clean et minimaliste transmet la confiance et la pureté grâce à un design clinique, en mettant l'accent sur les bénéfices grade médical, naturels et économiques du produit : le tout en un seul visuel qui arrête le scroll."},
]

EN_PORTFOLIO = {
    "eyebrow": "Portfolio",
    "heading": "A portfolio of",
    "headingSerif": "performance",
    "subtitle": "A data-powered selection of ads that delivered growth, not just impressions.",
    "filters": {
        "all": "All",
        "ugc": "UGC",
        "professional": "Professional",
        "demo": "Demo",
    },
    "emptyState": "No creatives found.",
    "viewAll": "View all",
    "metrics": {
        "hookRate": "Hook Rate",
        "roas": "ROAS",
        "ctr": "CTR",
    },
    "modal": {
        "performanceMetrics": "Performance Metrics",
        "campaignOverview": "Campaign Overview",
        "campaignDescription": "This {{format}} creative was designed to maximize engagement and conversion through authentic storytelling and data-driven optimization. The campaign achieved exceptional performance metrics across all key indicators, demonstrating the effectiveness of our creative strategy and execution.",
    },
    "creatives": EN_CREATIVES,
}

FR_PORTFOLIO = {
    "eyebrow": "Portfolio",
    "heading": "Un portfolio de",
    "headingSerif": "performance",
    "subtitle": "Une sélection de publicités appuyée par la data qui a généré de la croissance, pas juste des impressions.",
    "filters": {
        "all": "Tout",
        "ugc": "UGC",
        "professional": "Professionnel",
        "demo": "Démo",
    },
    "emptyState": "Aucun créatif trouvé.",
    "viewAll": "Tout voir",
    "metrics": {
        "hookRate": "Taux d'accroche",
        "roas": "ROAS",
        "ctr": "CTR",
    },
    "modal": {
        "performanceMetrics": "Métriques de performance",
        "campaignOverview": "Aperçu de la campagne",
        "campaignDescription": "Ce créatif {{format}} a été conçu pour maximiser l'engagement et la conversion grâce à un storytelling authentique et une optimisation basée sur la data. La campagne a atteint des métriques de performance exceptionnelles sur tous les indicateurs clés, démontrant l'efficacité de notre stratégie créative et de son exécution.",
    },
    "creatives": FR_CREATIVES,
}


def update(path, portfolio):
    data = json.load(open(path, encoding="utf-8"))
    data.setdefault("pages", {}).setdefault("ourWork", {})["portfolio"] = portfolio
    Path(path).write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {path}")


update(FR, FR_PORTFOLIO)
update(EN, EN_PORTFOLIO)
