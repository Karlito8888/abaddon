# 📁 Media Management Guide

## Structure des dossiers

```
public/media/
├── facebook/          # Images des posts Facebook
├── tiktok/           # Images et vidéos TikTok  
├── media-config.json # Configuration des médias
└── README.md         # Ce guide
```

## 🚀 Comment ajouter du nouveau contenu

### 1. Ajouter des images

**Facebook :**
- Placez vos images dans `/public/media/facebook/`
- Nommage recommandé : `post-titre-1.jpg`

**TikTok :**
- Placez vos images dans `/public/media/tiktok/`
- Nommage recommandé : `video-titre-1.jpg`

### 2. Ajouter des vidéos (TikTok uniquement)

- Placez vos vidéos MP4 dans `/public/media/tiktok/`
- Nommage recommandé : `video-titre-1.mp4`
- Taille max recommandée : 10MB

### 3. Mettre à jour la configuration

Éditez le fichier `/public/media/media-config.json` et ajoutez vos nouveaux éléments dans le tableau `mediaItems`.

**Exemple d'ajout :**

```json
{
  "id": "fb_005",
  "type": "facebook",
  "title": "Nouveau traitement anti-termites",
  "description": "Intervention réussie chez un client à Dasmarinas. Traitement complet et garantie 5 ans.",
  "imagePath": "/media/facebook/termites-janvier-2024.jpg",
  "originalUrl": "https://www.facebook.com/profile.php?id=100063857540013",
  "createdAt": "2024-01-16T14:30:00Z",
  "engagement": {
    "likes": 28,
    "comments": 12,
    "shares": 4
  }
}
```

### 4. Types de contenu

**Facebook (`"type": "facebook"`) :**
- `imagePath` : Chemin vers l'image (obligatoire)
- `videoPath` : Non utilisé pour Facebook

**TikTok (`"type": "tiktok"`) :**
- `imagePath` : Image de couverture (obligatoire)
- `videoPath` : Chemin vers la vidéo (optionnel)

### 5. Champs obligatoires

- `id` : Identifiant unique (ex: "fb_005", "tt_003")
- `type` : "facebook" ou "tiktok"
- `title` : Titre du post/vidéo
- `description` : Description du contenu
- `imagePath` : Chemin vers l'image
- `originalUrl` : Lien vers le post original
- `createdAt` : Date au format ISO (YYYY-MM-DDTHH:mm:ssZ)

### 6. Champs optionnels

- `videoPath` : Pour les vidéos TikTok
- `engagement` : Statistiques (likes, comments, shares)

## 🔄 Mise à jour du site

1. Ajoutez vos fichiers dans les dossiers appropriés
2. Mettez à jour `media-config.json`
3. Sur le site, cliquez sur "Refresh Content"
4. Vos nouveaux médias apparaissent immédiatement !

## 📝 Conseils

- **Images** : Format JPG, 400x300px minimum
- **Vidéos** : Format MP4, max 10MB
- **Nommage** : Utilisez des noms descriptifs sans espaces
- **Dates** : Respectez le format ISO pour `createdAt`
- **JSON** : Vérifiez la syntaxe (virgules, guillemets)

## ⚠️ Dépannage

**L'image ne s'affiche pas :**
- Vérifiez le chemin dans `imagePath`
- Assurez-vous que le fichier existe
- Vérifiez les permissions du fichier

**Erreur JSON :**
- Utilisez un validateur JSON en ligne
- Vérifiez les virgules et guillemets
- Respectez la structure existante

**La vidéo ne se lance pas :**
- Vérifiez le format (MP4 recommandé)
- Réduisez la taille si > 10MB
- Testez la vidéo dans un navigateur

## 🎯 Exemple complet

Voici un exemple d'ajout complet :

1. **Fichiers à ajouter :**
   - `/public/media/facebook/cafards-restaurant-jan2024.jpg`
   - `/public/media/tiktok/demo-equipement-jan2024.jpg`
   - `/public/media/tiktok/demo-equipement-jan2024.mp4`

2. **Ajout dans media-config.json :**

```json
{
  "id": "fb_006",
  "type": "facebook", 
  "title": "Élimination cafards - Restaurant",
  "description": "Intervention d'urgence dans un restaurant. Traitement sécurisé conforme aux normes alimentaires.",
  "imagePath": "/media/facebook/cafards-restaurant-jan2024.jpg",
  "originalUrl": "https://www.facebook.com/profile.php?id=100063857540013",
  "createdAt": "2024-01-16T16:00:00Z",
  "engagement": { "likes": 35, "comments": 15, "shares": 6 }
},
{
  "id": "tt_004",
  "type": "tiktok",
  "title": "Démonstration équipement professionnel", 
  "description": "Découvrez nos outils de pointe pour l'élimination des nuisibles !",
  "imagePath": "/media/tiktok/demo-equipement-jan2024.jpg",
  "videoPath": "/media/tiktok/demo-equipement-jan2024.mp4",
  "originalUrl": "https://www.tiktok.com/@abaddon_2020",
  "createdAt": "2024-01-16T18:30:00Z",
  "engagement": { "likes": 142, "comments": 28, "shares": 15 }
}
```

3. **Refresh sur le site** et c'est terminé ! 🎉