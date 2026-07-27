"""Update pages.ecommerceProblems in fr.json and en.json:
- Replace `problems` array with the 10 current-page problems (adding `icon` field).
- Enforce tutoiement in FR.
- Enforce fresh wording aligned with TDIA voice.
Preserves all other keys and structure.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FR_PATH = ROOT / "src/i18n/locales/fr.json"
EN_PATH = ROOT / "src/i18n/locales/en.json"

EN_PROBLEMS = [
    {"icon": "Store", "title": "Struggling to stand out from competition",
     "description": "Your e-commerce site looks like hundreds of others in your niche. Customers have no clear reason to choose you over your competitors. Without a unique, compelling value proposition, you end up competing on price and watching your margins shrink."},
    {"icon": "Globe", "title": "\"We're trying everything, but nothing really works\"",
     "description": "Your marketing feels like guesswork. You test random tactics, switch directions every week, and chase trends without understanding what actually drives results. Effort keeps going up, revenue doesn't follow."},
    {"icon": "Component", "title": "\"If Meta goes down, so does my business\"",
     "description": "You're overly reliant on a single platform, so when Meta's performance drops, your entire growth stalls. No backup channels, no fallback strategy, just panic and wasted spend."},
    {"icon": "Rocket", "title": "\"I'm scaling, but I don't know if I'm actually making money\"",
     "description": "You've validated your offer. You're running ads. But growth has stalled. Scaling isn't just about increasing budget, it's about building a system that supports performance at volume."},
    {"icon": "Layers", "title": "\"Every time I scale, my margins vanish\"",
     "description": "You're finally growing, but your profits aren't. Scaling should boost your bottom line, not bleed it dry. If every push for growth leads to higher CAC and vanishing margins, the model needs a rethink."},
    {"icon": "Award", "title": "\"The ad looks great, but my page kills the vibe\"",
     "description": "When your landing page doesn't match your ad's tone, story, or energy, it breaks the conversion flow. Customers expect consistency, and anything less feels off-brand."},
    {"icon": "ShoppingCart", "title": "\"I throw creatives out randomly\"",
     "description": "You're constantly launching new ads without a clear method. You post what feels right in the moment, hoping something will work, but there's no process behind it. You're not really testing, you're guessing."},
    {"icon": "TrendingUp", "title": "\"I'm spending money but have no idea where it's going\"",
     "description": "You're putting money into ads, but you're flying blind. You see ROAS, CPMs, CTRs, but you don't really know what they mean or how to act on them. It feels like your budget disappears into thin air."},
    {"icon": "Target", "title": "\"My creatives die after 10 days\"",
     "description": "You launch an ad, it works for a few days, and then performance drops off a cliff. You rush to make new ones, repeat the cycle, and end up in a constant state of creative panic. There's no pipeline, no predictability."},
    {"icon": "LineChart", "title": "\"I'm doing everything, but nothing's working\"",
     "description": "You're on all platforms (Meta, TikTok, Google), running campaigns, tweaking settings, making creatives. You're busy. But despite all that effort, the results are flat. Every day feels like firefighting instead of growing."},
]

FR_PROBLEMS = [
    {"icon": "Store", "title": "Difficile de te démarquer de la concurrence",
     "description": "Ton site e-commerce ressemble à des centaines d'autres dans ta niche. Les clients n'ont aucune raison claire de te choisir plutôt qu'un concurrent. Sans proposition de valeur unique et convaincante, tu te bats uniquement sur le prix et tes marges fondent."},
    {"icon": "Globe", "title": "« On essaie tout, mais rien ne marche vraiment »",
     "description": "Ton marketing ressemble à des essais au hasard. Tu testes des tactiques aléatoires, changes de direction chaque semaine, et suis les tendances sans comprendre ce qui fait vraiment bouger l'aiguille. L'effort grimpe, le revenu ne suit pas."},
    {"icon": "Component", "title": "« Si Meta tombe, mon business tombe aussi »",
     "description": "Tu dépends trop d'une seule plateforme. Quand la performance de Meta baisse, toute ta croissance stagne. Pas de canal de repli, pas de plan B, juste de la panique et du budget gaspillé."},
    {"icon": "Rocket", "title": "« Je scale, mais je ne sais pas si je fais vraiment de l'argent »",
     "description": "Tu as validé ton offre. Tu lances des pubs. Mais la croissance stagne. Scaler ne se résume pas à monter le budget, il faut un système qui tient la route au volume."},
    {"icon": "Layers", "title": "« À chaque fois que je scale, mes marges disparaissent »",
     "description": "Tu grandis enfin, mais tes profits, non. Scaler devrait faire grimper ton résultat net, pas le saigner. Si chaque poussée de croissance monte ton CAC et fond ta marge, il faut repenser le modèle."},
    {"icon": "Award", "title": "« La pub a l'air top, mais ma page casse tout »",
     "description": "Quand ta landing page ne matche pas le ton, l'histoire ou l'énergie de ta pub, ça brise le flux de conversion. Les clients veulent de la cohérence, et tout ce qui est en dessous sent le hors-marque."},
    {"icon": "ShoppingCart", "title": "« Je lance des créatifs au hasard »",
     "description": "Tu lances constamment de nouvelles pubs sans méthode claire. Tu publies ce qui te semble bien sur le moment, en espérant que quelque chose marche, mais il n'y a pas de processus derrière. Tu ne testes pas vraiment, tu devines."},
    {"icon": "TrendingUp", "title": "« Je dépense de l'argent mais je ne sais pas où il va »",
     "description": "Tu mets de l'argent dans les pubs, mais tu voles à l'aveugle. Tu vois ROAS, CPM, CTR, mais tu ne sais pas vraiment ce que ça veut dire ni comment agir dessus. Ton budget semble disparaître dans les airs."},
    {"icon": "Target", "title": "« Mes créatifs meurent après 10 jours »",
     "description": "Tu lances une pub, elle marche quelques jours, puis la performance s'effondre. Tu te précipites pour en faire de nouvelles, répètes le cycle, et finis en panique créative permanente. Pas de pipeline, pas de prévisibilité."},
    {"icon": "LineChart", "title": "« Je fais tout, mais rien ne marche »",
     "description": "Tu es sur toutes les plateformes (Meta, TikTok, Google), tu lances des campagnes, ajustes les paramètres, produis des créatifs. Tu es occupé. Mais malgré tout ça, les résultats sont plats. Chaque journée ressemble à éteindre des feux au lieu de grandir."},
]

# Copy/tone updates for the surrounding keys (tutoiement in FR)
EN_OVERRIDES = {
    "problemsEyebrow": "The blockers",
    "problemsHeading": "Problems that limit",
    "problemsHeadingSerif": "your growth",
    "problemsDescription": "Identify what's really blocking your growth, and pick the one that hurts the most right now.",
    "howToSolve": "How we fix this",
    "readyToSolve": "Ready to fix",
    "readyToSolveSerif": "these problems?",
    "readyToSolveDescription": "20 minutes on a call. We look at your numbers and tell you straight what to fix first.",
    "bookDiscoveryCall": "Book a free 20-min call",
    "faqEyebrow": "FAQ",
    "faqTitle": "Frequently asked",
    "faqTitleSerif": "questions",
    "seeHowWeCanHelp": "See how we can help you",
    "heroEyebrow": "E-commerce diagnostic",
    "heroTitle": "10 e-commerce problems",
    "heroTitleHighlight": "blocking",
    "heroTitleEnd": "your growth",
    "heroDescription": "Discover the most common obstacles preventing your online store from reaching its full potential.",
    "talkToExpert": "Talk to an expert",
}

FR_OVERRIDES = {
    "problemsEyebrow": "Les blocages",
    "problemsHeading": "Problèmes qui limitent",
    "problemsHeadingSerif": "ta croissance",
    "problemsDescription": "Identifie ce qui bloque vraiment ta croissance, et choisis celui qui fait le plus mal en ce moment.",
    "howToSolve": "Comment on règle ça",
    "readyToSolve": "Prêt à régler",
    "readyToSolveSerif": "ces problèmes ?",
    "readyToSolveDescription": "20 minutes d'appel. On regarde tes chiffres et on te dit droit par où commencer.",
    "bookDiscoveryCall": "Réserve un appel gratuit de 20 min",
    "faqEyebrow": "FAQ",
    "faqTitle": "Questions",
    "faqTitleSerif": "fréquentes",
    "seeHowWeCanHelp": "Voir comment on peut t'aider",
    "heroEyebrow": "Diagnostic e-commerce",
    "heroTitle": "10 problèmes e-commerce",
    "heroTitleHighlight": "qui bloquent",
    "heroTitleEnd": "ta croissance",
    "heroDescription": "Découvre les obstacles les plus courants qui empêchent ta boutique en ligne d'atteindre son plein potentiel.",
    "talkToExpert": "Parler à un expert",
}

# Refreshed FAQ (tutoiement in FR)
FR_FAQ = [
    {"question": "Comment savoir quel problème e-commerce affecte le plus mon business ?",
     "answer": "Analyse tes données de performance (taux de conversion, trafic, taux de rebond, panier moyen) et recueille les retours clients. Identifie les écarts entre tes objectifs et tes résultats actuels. On offre aussi un audit gratuit pour identifier précisément tes principaux freins à la croissance."},
    {"question": "Combien de temps faut-il pour résoudre ces problèmes e-commerce ?",
     "answer": "Le délai varie selon la complexité du problème et la taille de ton entreprise. Certaines optimisations donnent des résultats en quelques semaines, alors que des transformations plus profondes prennent 3 à 6 mois pour générer un impact durable."},
    {"question": "Résoudre ces problèmes nécessite-t-il un gros investissement ?",
     "answer": "Pas nécessairement. Notre approche est d'identifier des actions à fort impact qui peuvent être implémentées dans ton budget actuel. On priorise les solutions qui offrent le meilleur retour sur investissement."},
    {"question": "Comment votre agence aborde-t-elle ces problèmes différemment des autres ?",
     "answer": "Contrairement aux autres agences qui offrent des solutions standardisées, on adopte une approche systémique qui s'attaque à la cause racine de tes défis e-commerce, pas seulement aux symptômes. Notre méthodologie combine analyse de données, tests rigoureux et optimisation continue."},
    {"question": "Par où commencer pour améliorer ma performance e-commerce ?",
     "answer": "Commence par évaluer l'expérience client sur ton site et le parcours d'achat. Identifie les points de friction et goulots d'étranglement. Ensuite, analyse tes données pour comprendre le comportement des utilisateurs. Ces deux étapes révèlent souvent les problèmes les plus urgents à résoudre."},
]

EN_FAQ = [
    {"question": "How do I know which e-commerce problem is affecting my business the most?",
     "answer": "Analyze your performance data (conversion rate, traffic, bounce rate, average order value) and gather customer feedback. Identify gaps between your objectives and current results. We also offer a free audit to precisely identify your main barriers to growth."},
    {"question": "How long does it take to solve these e-commerce problems?",
     "answer": "The timeframe varies depending on the complexity of the problem and the size of your business. Some optimizations bring results within a few weeks, while deeper transformations may take 3 to 6 months to generate significant and lasting impact."},
    {"question": "Does solving these problems require a big investment?",
     "answer": "Not necessarily. Our approach is to identify high-impact actions that can be implemented within your current budget. We prioritize solutions that offer the best return on investment."},
    {"question": "How does your agency approach these problems differently from others?",
     "answer": "Unlike other agencies that offer standardized solutions, we take a systemic approach that addresses the root cause of your e-commerce challenges, not just the symptoms. Our methodology combines data analysis, rigorous testing, and continuous optimization for lasting results."},
    {"question": "Where should I start to improve my e-commerce performance?",
     "answer": "Start by evaluating the customer experience on your site and the purchase journey. Identify points of friction and bottlenecks. Then, analyze your data to understand user behavior. These two steps often reveal the most urgent problems to solve."},
]


def update(path, problems, overrides, faq):
    data = json.load(open(path, encoding="utf-8"))
    node = data["pages"]["ecommerceProblems"]
    node["problems"] = problems
    node["faqItems"] = faq
    for k, v in overrides.items():
        node[k] = v
    Path(path).write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {path}")


update(FR_PATH, FR_PROBLEMS, FR_OVERRIDES, FR_FAQ)
update(EN_PATH, EN_PROBLEMS, EN_OVERRIDES, EN_FAQ)
