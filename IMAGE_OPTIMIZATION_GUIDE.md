# Guide d'Optimisation des Images

## 📊 Résumé des économies potentielles
**Total actuel**: 5 267 KiB  
**Économies possibles**: 5 072 KiB (96%)  
**Impact**: Amélioration majeure du LCP et temps de chargement

---

## 🎯 Images prioritaires à optimiser (par ordre d'impact)

### 1. **IMAGE HERO** (Impact maximal sur LCP) ⚡
- **Fichier actuel**: `/lovable-uploads/8e5f3992-1b96-4aa9-a095-98f4d9fdeb74.png`
- **Taille actuelle**: 1 585,9 KiB
- **Économie possible**: 1 477,5 KiB (93%)
- **Dimensions affichées**: ~1920x800 (desktop), ~768x600 (mobile)
- **Action requise**:
  1. Convertir en WebP (compression 80-85%)
  2. Créer 3 versions responsive:
     - `hero-mobile.webp` (768x600) ~150 KiB
     - `hero-tablet.webp` (1280x720) ~300 KiB
     - `hero-desktop.webp` (1920x1080) ~400 KiB
  3. Version AVIF optionnelle pour navigateurs modernes

### 2. **Images UGC Gallery** (3 images majeures)

#### Runak
- **Fichier**: `/lovable-uploads/e0372708-63e6-4974-8764-44156350601d.png`
- **Taille actuelle**: 1 057,2 KiB → **Cible**: ~120 KiB
- **Dimensions actuelles**: 1053x890 → **Cible**: 385x320 (WebP)
- **Économie**: 937 KiB

#### Video testimonial
- **Fichier**: `/lovable-uploads/2c87bdc0-421b-4e9b-9480-36f8a728fd8a.png`
- **Taille actuelle**: 930,9 KiB → **Cible**: ~90 KiB
- **Dimensions actuelles**: 1259x651 → **Cible**: 394x204 (WebP)
- **Économie**: 840 KiB

#### Onyx
- **Fichier**: `/lovable-uploads/02f8bc66-3042-4b06-a33f-fa29d507dd24.png`
- **Taille actuelle**: 224,3 KiB → **Cible**: ~30 KiB
- **Dimensions actuelles**: 1278x1080 → **Cible**: 569x320 (WebP)
- **Économie**: 194 KiB

### 3. **Logos** (tous affichés en 56x56 mais en 1920x1920!)

Tous ces logos doivent être redimensionnés à **112x112** (2x pour Retina) et convertis en WebP:

| Logo | Fichier | Taille actuelle | Cible | Économie |
|------|---------|-----------------|-------|----------|
| Mille et Une Noix | `5c9eddd3-5fef-4698-9226-2342603b8414.png` | 334,4 KiB | ~5 KiB | 329 KiB |
| TDIA Logo | `8aed80b0-7be6-4426-9e2a-d10ece4ace35.png` | 175,8 KiB | ~8 KiB | 167 KiB |
| Roots | `55f4a520-199c-4f60-a299-f4f53f4e03d5.png` | 160,8 KiB | ~5 KiB | 155 KiB |
| Lockfeet | `6c45d0a7-a649-4ba0-8c64-5c166ffed649.png` | 154,9 KiB | ~5 KiB | 149 KiB |
| Cafexo | `93d97cb7-54fd-41f5-a9df-85cf0c707dec.png` | 140,6 KiB | ~5 KiB | 135 KiB |

### 4. **Autres images de sections**

| Image | Dimensions actuelles → Cible | Économie |
|-------|------------------------------|----------|
| `6c631716-...png` | 959x328 → 188x64 (WebP) | 131 KiB |
| `2d7f1df9-...png` | 1091x347 → 202x64 (WebP) | 99 KiB |
| `c95d4a4a-...png` | 1131x275 → 264x64 (WebP) | 92 KiB |
| `acedbc51-...png` | 969x347 → 178x64 (WebP) | 78 KiB |
| Lockfeet gallery | 527x445 → 385x320 (WebP) | 50 KiB |

---

## 🛠️ Outils de conversion recommandés

### Option 1: Squoosh (Web, gratuit, recommandé)
1. Aller sur https://squoosh.app/
2. Glisser-déposer l'image
3. Choisir format WebP
4. Qualité: 80-85%
5. Redimensionner aux dimensions cibles
6. Télécharger

### Option 2: TinyPNG (Web, gratuit)
1. https://tinypng.com/
2. Supporte PNG/JPG → WebP
3. Limite: 5 MB par image, 20 images/fois

### Option 3: ImageMagick (CLI, pour batch)
```bash
# Convertir + redimensionner en WebP
convert input.png -resize 385x320 -quality 85 output.webp

# Batch conversion de tous les logos
for file in *.png; do
  convert "$file" -resize 112x112 -quality 85 "${file%.png}.webp"
done
```

### Option 4: Sharp (Node.js, pour automation)
```javascript
const sharp = require('sharp');

sharp('input.png')
  .resize(385, 320)
  .webp({ quality: 85 })
  .toFile('output.webp');
```

---

## 📝 Instructions d'implémentation

### Étape 1: Convertir et remplacer l'image hero
1. Créer 3 versions responsive de l'image hero
2. Uploader dans `/public/lovable-uploads/hero/`
3. Le composant HeroSection utilise déjà OptimizedImage

### Étape 2: Convertir les logos
1. Redimensionner tous les logos à 112x112
2. Convertir en WebP qualité 85%
3. Remplacer dans `/public/lovable-uploads/`
4. Garder même nom de fichier, changer extension `.png` → `.webp`

### Étape 3: Convertir images UGC Gallery
1. Redimensionner aux dimensions d'affichage (voir tableau ci-dessus)
2. Convertir en WebP qualité 80-85%
3. Remplacer dans le dossier uploads

### Étape 4: Mettre à jour les imports
```tsx
// Avant
<img src="/lovable-uploads/image.png" />

// Après
<OptimizedImage 
  src="/lovable-uploads/image.png"
  webpSrc="/lovable-uploads/image.webp"
  alt="Description"
  loading="lazy"
/>
```

---

## ✅ Checklist de validation

- [ ] Image hero convertie en WebP avec 3 breakpoints responsive
- [ ] Tous les logos redimensionnés à 112x112 et en WebP
- [ ] Images UGC Gallery optimisées (Runak, Video testimonial, Onyx)
- [ ] Images de sections converties en WebP
- [ ] Composant OptimizedImage utilisé partout
- [ ] Test PageSpeed Insights: LCP < 2.5s
- [ ] Test PageSpeed Insights: Économies images < 100 KiB
- [ ] Test visuel: toutes les images s'affichent correctement
- [ ] Test responsive: images adaptées à chaque breakpoint

---

## 🎯 Résultats attendus après optimisation

| Métrique | Avant | Après | Amélioration |
|----------|-------|-------|--------------|
| **Poids total images** | 5 267 KiB | ~200 KiB | **-96%** |
| **LCP** | 18.1s | **< 2.5s** | ✅ Vert |
| **Score PageSpeed** | ~40 | **> 90** | ✅ Excellent |
| **Temps de chargement** | ~8s | **< 2s** | **-75%** |

---

## 🔄 Maintenance continue

### Nouvelles images à ajouter
Toujours suivre ces règles:
1. ✅ Utiliser WebP (ou AVIF pour les navigateurs modernes)
2. ✅ Redimensionner aux dimensions d'affichage réelles
3. ✅ Qualité WebP: 80-85%
4. ✅ Utiliser `loading="lazy"` sauf images above-the-fold
5. ✅ Utiliser `fetchpriority="high"` uniquement pour l'image hero
6. ✅ Toujours fournir un `alt` descriptif

### Script de validation
```bash
# Vérifier qu'aucune image PNG > 100 KiB n'existe
find public/lovable-uploads -name "*.png" -size +100k -exec ls -lh {} \;
```
