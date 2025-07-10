# 🎨 Guide Typographique - Abaddon Pest Control

## 🔤 **Police Principale : Inter**

### **Pourquoi Inter ?**
- ✅ **Moderne et professionnelle** - Design contemporain
- ✅ **Excellente lisibilité** - Optimisée pour les écrans
- ✅ **Support complet** - Tous les poids et styles
- ✅ **Performance** - Chargement rapide via Google Fonts
- ✅ **Accessibilité** - Conçue pour la lisibilité

### **Poids Disponibles :**
- **300** - Light (titres délicats)
- **400** - Normal (texte courant)
- **500** - Medium (sous-titres)
- **600** - Semibold (éléments importants)
- **700** - Bold (titres principaux)
- **800** - Extrabold (titres hero)

## 📏 **Letter Spacing : 1px**

### **Espacement des Lettres :**
- **Base** : `1px` - Appliqué à tout le texte
- **Tight** : `0.5px` - Titres compacts
- **Wide** : `1.5px` - Éléments décoratifs
- **Wider** : `2px` - Logos et badges

### **Avantages du Letter Spacing :**
- ✅ **Lisibilité améliorée** - Texte plus aéré
- ✅ **Modernité** - Look contemporain
- ✅ **Professionnalisme** - Aspect soigné
- ✅ **Accessibilité** - Plus facile à lire

## 🎯 **Variables CSS Typographiques**

### **Font Family :**
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

### **Letter Spacing :**
```css
--letter-spacing-base: 1px;
--letter-spacing-tight: 0.5px;
--letter-spacing-wide: 1.5px;
--letter-spacing-wider: 2px;
```

### **Font Weights :**
```css
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### **Line Heights :**
```css
--line-height-tight: 1.25;    /* Titres */
--line-height-normal: 1.5;    /* Texte courant */
--line-height-relaxed: 1.75;  /* Texte long */
```

## 📱 **Hiérarchie Typographique**

### **H1 - Titre Principal (Hero) :**
- **Taille** : `3rem` (48px) / `2.5rem` (40px) mobile
- **Poids** : `800` (Extrabold)
- **Letter Spacing** : `0.5px` (tight)
- **Usage** : Titre principal de la page d'accueil

### **H2 - Titres de Section :**
- **Taille** : `2.25rem` (36px) / `2rem` (32px) mobile
- **Poids** : `700` (Bold)
- **Letter Spacing** : `1px` (base)
- **Usage** : "Nos Services", "À Propos", "Contact"

### **H3 - Sous-titres :**
- **Taille** : `1.875rem` (30px) / `1.5rem` (24px) mobile
- **Poids** : `600` (Semibold)
- **Letter Spacing** : `1px` (base)
- **Usage** : Noms des services, sous-sections

### **H4 - Titres Mineurs :**
- **Taille** : `1.5rem` (24px)
- **Poids** : `600` (Semibold)
- **Letter Spacing** : `1px` (base)
- **Usage** : Éléments de contact, badges

### **Paragraphe - Texte Courant :**
- **Taille** : `1rem` (16px) / `0.875rem` (14px) mobile
- **Poids** : `400` (Normal)
- **Letter Spacing** : `1px` (base)
- **Line Height** : `1.5` (normal)

## 🎨 **Classes Utilitaires**

### **Tailles de Police :**
```css
.text-xs     /* 12px */
.text-sm     /* 14px */
.text-base   /* 16px */
.text-lg     /* 18px */
.text-xl     /* 20px */
.text-2xl    /* 24px */
.text-3xl    /* 30px */
.text-4xl    /* 36px */
.text-5xl    /* 48px */
```

### **Poids de Police :**
```css
.font-light      /* 300 */
.font-normal     /* 400 */
.font-medium     /* 500 */
.font-semibold   /* 600 */
.font-bold       /* 700 */
.font-extrabold  /* 800 */
```

### **Letter Spacing :**
```css
.tracking-tight   /* 0.5px */
.tracking-normal  /* 1px */
.tracking-wide    /* 1.5px */
.tracking-wider   /* 2px */
```

### **Line Height :**
```css
.leading-tight    /* 1.25 */
.leading-normal   /* 1.5 */
.leading-relaxed  /* 1.75 */
```

## 📱 **Responsive Typography**

### **Mobile (< 768px) :**
- **H1** : `2.5rem` → `2rem`
- **H2** : `2.25rem` → `1.75rem`
- **H3** : `1.875rem` → `1.25rem`
- **Body** : `1rem` → `0.875rem`

### **Tablet (768px - 1024px) :**
- Tailles intermédiaires
- Letter spacing maintenu

### **Desktop (> 1024px) :**
- Tailles complètes
- Espacement optimal

## 🎯 **Exemples d'Usage**

### **Titre Hero :**
```css
.hero__title {
  font-family: var(--font-primary);
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-extrabold);
  letter-spacing: var(--letter-spacing-tight);
  line-height: var(--line-height-tight);
}
```

### **Texte de Service :**
```css
.service__description {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  letter-spacing: var(--letter-spacing-base);
  line-height: var(--line-height-normal);
}
```

### **Badge/Credential :**
```css
.credential__badge {
  font-family: var(--font-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}
```

## 🚀 **Performance**

### **Optimisations :**
- ✅ **Preconnect** vers Google Fonts
- ✅ **Font-display: swap** pour chargement rapide
- ✅ **Subset** optimisé (Latin uniquement)
- ✅ **Fallback fonts** système

### **Rendu :**
- ✅ **-webkit-font-smoothing: antialiased**
- ✅ **-moz-osx-font-smoothing: grayscale**
- ✅ **text-rendering: optimizeLegibility**

## 📋 **Checklist d'Implémentation**

- [x] Police Inter chargée via Google Fonts
- [x] Variables CSS définies
- [x] Letter spacing 1px appliqué globalement
- [x] Hiérarchie typographique établie
- [x] Classes utilitaires créées
- [x] Responsive design implémenté
- [x] Performance optimisée
- [x] Fallbacks définis

---

**Résultat :** Typographie moderne, lisible et professionnelle pour Abaddon Pest Control ! 🎨✨
