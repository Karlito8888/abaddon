# 🚀 Guide de mise en place des médias Abaddon

## 📁 Étape 1 : Placer vos fichiers

### **Dans public/media/facebook/ :**
Copiez vos images Facebook avec des noms descriptifs :
```bash
termite-treatment-dasmarinas.jpg
commercial-pest-control.jpg
ant-elimination-cavite.jpg
cockroach-restaurant.jpg
```

### **Dans public/media/tiktok/ :**
Copiez vos vidéos ET leurs images de couverture :
```bash
team-in-action.mp4
team-in-action-cover.jpg
before-after.mp4
before-after-cover.jpg
equipment-demo.mp4
equipment-demo-cover.jpg
```

## ⚙️ Étape 2 : Éditer media-config.json

Remplacez le contenu par vos vrais médias. Voici un template :

```json
{
  "lastUpdated": "2024-01-16T15:00:00Z",
  "mediaItems": [
    {
      "id": "fb_001",
      "type": "facebook",
      "title": "[TITRE DE VOTRE POST FACEBOOK]",
      "description": "[DESCRIPTION COPIÉE DEPUIS FACEBOOK]",
      "imagePath": "/media/facebook/[NOM-DE-VOTRE-IMAGE].jpg",
      "originalUrl": "https://www.facebook.com/photo.php?fbid=[VOTRE-FBID]&set=pb.100063857540013.-2207520000&type=3",
      "createdAt": "[DATE DU POST AU FORMAT 2024-01-15T08:00:00Z]",
      "engagement": {
        "likes": [NOMBRE DE LIKES],
        "comments": [NOMBRE DE COMMENTAIRES],
        "shares": [NOMBRE DE PARTAGES]
      }
    },
    {
      "id": "tt_001",
      "type": "tiktok",
      "title": "[TITRE DE VOTRE VIDÉO TIKTOK]",
      "description": "[DESCRIPTION DE LA VIDÉO]",
      "imagePath": "/media/tiktok/[NOM-IMAGE-COUVERTURE].jpg",
      "videoPath": "/media/tiktok/[NOM-VIDÉO].mp4",
      "originalUrl": "https://www.tiktok.com/@abaddon_2020/video/[VIDEO-ID]",
      "createdAt": "[DATE DE LA VIDÉO]",
      "engagement": {
        "likes": [NOMBRE DE LIKES],
        "comments": [NOMBRE DE COMMENTAIRES],
        "shares": [NOMBRE DE PARTAGES]
      }
    }
  ]
}
```

## 📋 Étape 3 : Checklist de vérification

### **Avant de publier :**
- [ ] Tous les fichiers sont dans les bons dossiers
- [ ] Les noms de fichiers correspondent à `imagePath` et `videoPath`
- [ ] Le JSON est valide (pas d'erreur de syntaxe)
- [ ] Les dates sont au bon format ISO
- [ ] Les URLs originales sont correctes

### **Test :**
1. Rechargez la page du site
2. Vérifiez que toutes les images s'affichent
3. Testez la lecture des vidéos TikTok
4. Vérifiez sur mobile

## 🎯 Exemple concret

Si vous avez une photo Facebook de traitement de termites :

**Fichier :** `public/media/facebook/termites-dasmarinas-jan2024.jpg`

**Configuration :**
```json
{
  "id": "fb_termites_dasmarinas",
  "type": "facebook",
  "title": "Élimination complète des termites à Dasmarinas",
  "description": "Intervention réussie chez un client à Dasmarinas. Traitement complet avec garantie 5 ans. Équipe professionnelle et produits certifiés.",
  "imagePath": "/media/facebook/termites-dasmarinas-jan2024.jpg",
  "originalUrl": "https://www.facebook.com/photo.php?fbid=1220251526780087&set=pb.100063857540013.-2207520000&type=3",
  "createdAt": "2024-01-15T14:30:00Z",
  "engagement": {
    "likes": 28,
    "comments": 12,
    "shares": 4
  }
}
```

## 🔄 Mise à jour

Pour ajouter du nouveau contenu :
1. Ajoutez les nouveaux fichiers dans les dossiers
2. Ajoutez les nouvelles entrées dans `mediaItems`
3. Mettez à jour `lastUpdated`
4. Rechargez la page

**Le site se mettra à jour automatiquement !** 🎉