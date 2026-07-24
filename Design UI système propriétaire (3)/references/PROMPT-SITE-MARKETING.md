# Prompt — Refonte premium du site marketing TDIA (tdiaagency.com)
> À donner à Claude/Lovable AVEC le screenshot de référence `6a-site-marketing-premium.png`.
> Suppose que DESIGN-SYSTEM-PREMIUM.md est déjà appliqué (tokens, recettes, interdits).

```
Refonte visuelle COMPLÈTE du site marketing TDIA. Reproduis exactement la direction
de l'écran de référence 6a-site-marketing-premium.png et applique DESIGN-SYSTEM-PREMIUM.md.
Ne change PAS les contenus, les textes, ni la structure des sections — uniquement la
direction visuelle. Conserve la logique existante (routing, calculatrice ROI, carrousels,
i18n FR/EN, modales des systèmes).

OBJECTIF : passer d'un patchwork visuel à UNE direction premium unique.

SUPPRIME partout :
- les cartes à dégradés vert / violet / rose (les « 3 leviers », les tags colorés)
- le jaune (« Fait confiance », étoiles jaunes)
- les emoji (garantie, sections)
- les fonds constellation/étoiles et les dégradés bleu criards
- les mélanges de bleus (#007bff, cyan, etc.)

REMPLACE par le système :
- Fond global #060910. UN halo radial bleu par section max :
  radial-gradient(900px 400px at 50% 0%, rgba(47,107,255,.1), transparent 60%).
- Accent UNIQUE : bleu TDIA #4d9fff→#2f6bff (boutons en gradient + glow) ; texte bleu
  clair #9ec8ff pour les mots-accent et liens.
- Titres : Inter weight 400, letter-spacing -.025em ; UN mot-clé par titre en
  Instrument Serif italique #9ec8ff (ex. « machines à profit », « différent »,
  « experts », « confiance »). Jamais de titres en 700+ criards.
- Chiffres/labels : JetBrains Mono weight 300 (stats, ROAS, prix), micro-labels mono
  9px MAJ letterspacing .28em couleur muted.
- Cartes : rgba(255,255,255,.02) + border 1px rgba(148,170,215,.12) + inset highlight.
  PAS de fonds pleins colorés. Icônes dans tuile bleue translucide identique pour les 3.
- Étoiles de notation : bleu #4d9fff, pas jaune.

STRUCTURE (ordre inchangé, restylé) :
1. NAV — logo « tdia » (Instrument Serif), liens Services/Études de cas/Explorer/
   Notre équipe, FR, bouton pill « Commencer » gradient bleu + glow.
2. HERO 2 colonnes — badge « ★★★★★ La confiance de 30+ marques », h1 56px
   (« machines à profit » en serif italique), sous-texte muted, CTA gradient,
   rangée de 3 stats séparées par hairlines verticales (+15M$ / 4× / 75%).
   Colonne droite : grande image (emplacement) radius 20px + pastille glass
   « Choisi par les marques… » avec point vert.
3. BANDE PARTENAIRES — hairline haut+bas, logos en gris (Google Ads, Meta, Instagram,
   TikTok Ads), micro-label « PARTENAIRES CERTIFIÉS ».
4. VIDÉO/DIFFÉRENCE — centré, micro-label « POURQUOI TDIA », h2 (« différent » serif),
   lecteur vidéo 16:9 (emplacement) + bouton play gradient bleu.
5. LES 3 LEVIERS — badge pill « LE PROFIT OS TDIA », h2 (« Profit OS » serif), 3 cartes
   IDENTIQUES (même tuile icône bleue, numéro mono 01/02/03) : titre, sous-titre bleu
   clair, paragraphe, 3 points ✓ verts sous hairline, bouton ghost bleu « En savoir plus ».
6. ÉTUDE DE CAS — carte 2 colonnes (image gauche / contenu droite), chiffre ROAS mono
   géant, tags en pills bordées neutres (PAS colorées), lien « En savoir plus → ».
7. CALCULATRICE ROI — carte 2 colonnes : gauche inputs (dépense $, ROAS actuel,
   ROAS cible en surbrillance bleue) + bouton gradient « Calculer le ROI » ; droite
   résultat — grand chiffre mono + delta vert + bouton ghost « Réserver un audit ».
8. TÉMOIGNAGE — 2 colonnes : citation + auteur sous hairline / vidéo (emplacement)
   avec play. Étoiles bleues.
9. GARANTIE — h2 (« payez seulement si vous gagnez » serif), citation en serif italique
   muted, 3 cartes identiques (tuile ✓ bleue, PAS d'emoji).
10. ÉQUIPE — badge pill « NOTRE ÉQUIPE », h2 (« experts » serif), 3 portraits 3:4
    (emplacements) avec fade bas + nom/rôle (rôle en bleu clair).
11. CTA FINAL — halo bleu, h2 46px (« machine à profit » serif), gros bouton gradient,
    sous-texte mono « SANS ENGAGEMENT · RÉPONSE SOUS 24 H ».
12. FOOTER — logo serif, copyright muted, liens.

IMAGES : garde tes visuels réels actuels (modèle skincare hero, vidéo fondateur, Runak,
témoignage, 3 portraits d'équipe). Sur la maquette de référence ce sont des emplacements
gris — remplace-les par les vraies images aux mêmes emplacements/ratios.

INTERDITS : dégradés multi-teintes, cartes colorées par catégorie, emoji, jaune,
plus d'un halo par section, titres gras massifs, fonds étoilés animés.
```
