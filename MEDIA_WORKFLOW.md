# 🎯 Workflow de gestion des médias Abaddon

## 📋 Checklist de récupération de contenu

### **Facebook (https://www.facebook.com/profile.php?id=100063857540013)**

**Étapes :**
1. 🔍 **Parcourir la page** https://www.facebook.com/profile.php?id=100063857540013
2. 📸 **Cliquer sur chaque photo** → URL devient `/photo.php?fbid=XXXXX`
3. 🖼️ **Clic droit > "Enregistrer l'image"** (résolution maximale)
4. 📝 **Noter les métadonnées** directement visibles :
   - Description complète du post
   - Date exacte de publication
   - Nombre de likes/commentaires
   - Localisation si mentionnée
5. 📁 **Sauvegarder** dans `/public/media/facebook/`

**Nommage recommandé :**
- `termite-treatment-dasmarinas.jpg`
- `commercial-pest-control.jpg`
- `ant-elimination-cavite.jpg`
- `cockroach-control-restaurant.jpg`

### **TikTok (@abaddon_2020)**

**Étapes :**
1. 🎥 **Aller sur** https://www.tiktok.com/@abaddon_2020
2. 📱 **Copier l'URL** de chaque vidéo intéressante
3. 🔽 **Télécharger avec SnapTik.app** :
   - Coller l'URL TikTok
   - Télécharger "HD No Watermark"
   - Récupérer aussi l'image de couverture
4. 📁 **Organiser** dans `/public/media/tiktok/`

**Nommage recommandé :**
- `team-in-action.mp4` + `team-in-action-cover.jpg`
- `before-after.mp4` + `before-after-cover.jpg`
- `equipment-demo.mp4` + `equipment-demo-cover.jpg`

## 🛠️ Outils recommandés

### **Pour Facebook :**
- **Méthode recommandée** : Navigation photo par photo via `/photo.php?fbid=`
- **Haute résolution** : Clic droit direct sur l'image agrandie
- **Métadonnées** : Toutes les infos visibles sur la page photo
- **Alternative** : F12 > Network > Images pour l'URL directe .jpg

### **Pour TikTok :**
- **SnapTik.app** (recommandé) - Sans watermark
- **TikTok Downloader** - Alternative
- **yt-dlp** (ligne de commande) - Pour les power users

### **Optimisation d'images :**
- **TinyPNG.com** - Compression sans perte de qualité
- **Squoosh.app** - Redimensionnement et compression
- **Format cible** : JPG pour photos, PNG pour logos/graphiques

## 📐 Spécifications techniques

### **Images :**
- **Résolution min** : 400x300px
- **Résolution optimale** : 800x600px
- **Format** : JPG (qualité 85%)
- **Taille max** : 500KB par image

### **Vidéos :**
- **Format** : MP4 (H.264)
- **Résolution** : 720p ou 1080p
- **Taille max** : 10MB
- **Durée** : 15-60 secondes idéal

## 📝 Processus de mise à jour

### **1. Récupération du contenu**
```bash
# Structure cible
public/media/
├── facebook/
│   ├── termite-treatment-dasmarinas.jpg
│   ├── commercial-pest-control.jpg
│   └── ant-elimination-cavite.jpg
└── tiktok/
    ├── team-in-action.mp4
    ├── team-in-action-cover.jpg
    ├── before-after.mp4
    └── before-after-cover.jpg
```

### **2. Mise à jour de la config**
Éditer `/public/media/media-config.json` :

```json
{
  "id": "fb_new",
  "type": "facebook",
  "title": "Titre du post Facebook",
  "description": "Description détaillée du traitement...",
  "imagePath": "/media/facebook/nom-du-fichier.jpg",
  "originalUrl": "https://www.facebook.com/profile.php?id=100063857540013",
  "createdAt": "2024-01-16T10:00:00Z",
  "engagement": {
    "likes": 25,
    "comments": 8,
    "shares": 3
  }
}
```

### **3. Test et validation**
- Recharger la page du site
- Vérifier que les images s'affichent
- Tester la lecture des vidéos TikTok
- Vérifier la responsivité mobile

## 🎨 Conseils pour un rendu optimal

### **Sélection de contenu :**
- **Privilégier** : Photos avant/après, équipe en action, résultats spectaculaires
- **Éviter** : Photos floues, contenu trop technique, images de mauvaise qualité
- **Équilibrer** : 50% Facebook / 50% TikTok

### **Titres accrocheurs :**
- "Élimination complète des termites à Dasmarinas"
- "Intervention d'urgence - Restaurant sauvé des cafards"
- "Équipe professionnelle en action"
- "Transformation spectaculaire avant/après"

### **Descriptions engageantes :**
- Mentionner la localisation (Dasmarinas, Cavite, Metro Manila)
- Inclure le type de nuisible traité
- Souligner les résultats obtenus
- Ajouter un call-to-action subtil

## 🔄 Fréquence de mise à jour

**Recommandé :**
- **Hebdomadaire** : Vérifier les nouveaux posts Facebook/TikTok
- **Mensuel** : Mise à jour complète avec nouveau contenu
- **Trimestriel** : Révision et optimisation de l'ensemble

**Priorités :**
1. Contenu avec fort engagement (likes, commentaires)
2. Photos/vidéos de qualité professionnelle
3. Diversité des types d'intervention
4. Contenu récent (moins de 3 mois)

## 📊 Métriques à suivre

**Sur le site :**
- Temps passé sur la section Media
- Clics vers Facebook/TikTok
- Engagement mobile vs desktop

**Sur les réseaux :**
- Posts avec le plus d'engagement
- Types de contenu les plus populaires
- Croissance des followers

Cette approche vous garantit un contenu de qualité, régulièrement mis à jour, qui valorise le travail d'Abaddon ! 🎯