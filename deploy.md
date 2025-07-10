# 🚀 Guide de Déploiement Netlify - Abaddon Pest Control

## Étapes de Déploiement

### 1. Préparation du Repository GitHub

```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Commit initial
git commit -m "Initial commit: Abaddon Pest Control website ready for Netlify"

# Ajouter le repository GitHub
git remote add origin https://github.com/VOTRE-USERNAME/abaddon-pest-control.git

# Push vers GitHub
git push -u origin main
```

### 2. Déploiement sur Netlify

#### Option A: Déploiement automatique via GitHub

1. Aller sur [netlify.com](https://netlify.com)
2. Cliquer "New site from Git"
3. Connecter votre compte GitHub
4. Sélectionner le repository `abaddon-pest-control`
5. Netlify détectera automatiquement les paramètres depuis `netlify.toml`
6. Cliquer "Deploy site"

#### Option B: Déploiement manuel

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login Netlify
netlify login

# Déployer
netlify deploy --prod --dir=build
```

### 3. Configuration du Domaine Personnalisé

1. Dans Netlify Dashboard → Site settings → Domain management
2. Ajouter votre domaine personnalisé (ex: `abaddonpestcontrol.com`)
3. Configurer les DNS selon les instructions Netlify
4. Activer HTTPS automatique

### 4. Variables d'Environnement Netlify

Dans Netlify Dashboard → Site settings → Environment variables, ajouter :

```
REACT_APP_SITE_URL=https://votre-domaine.com
REACT_APP_COMPANY_NAME=Abaddon Pest Control Services Inc.
REACT_APP_PHONE_1=+639175842100
REACT_APP_PHONE_2=+639175090485
REACT_APP_EMAIL=jyabaddonpco@gmail.com
REACT_APP_FDA_LICENSE=CCHUHSRR-RIVA-PCO-01-ER-732510
```

### 5. Optimisations Post-Déploiement

#### A. Google Search Console

1. Ajouter le site à Google Search Console
2. Soumettre le sitemap : `https://votre-site.com/sitemap.xml`
3. Demander l'indexation des pages principales

#### B. Google My Business

1. Créer/optimiser la fiche Google My Business
2. Ajouter l'URL du site web
3. Vérifier l'adresse : 42 Paliparan Molino Road Salawag, Dasmariñas

#### C. Facebook Business

1. Mettre à jour la page Facebook avec l'URL du site
2. Ajouter le lien dans la bio
3. Publier l'annonce du nouveau site web

### 6. Monitoring et Analytics

#### Google Analytics 4

```javascript
// À ajouter dans public/index.html avant </head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Facebook Pixel (optionnel)

```javascript
// Pour le remarketing Facebook
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

### 7. Tests Post-Déploiement

#### Checklist de Vérification

- [ ] Site accessible sur l'URL Netlify
- [ ] Toutes les pages se chargent correctement
- [ ] Formulaire de contact fonctionne
- [ ] Liens téléphone/WhatsApp/Viber fonctionnent
- [ ] Images se chargent correctement
- [ ] Site responsive sur mobile
- [ ] Vitesse de chargement < 3 secondes
- [ ] Meta tags SEO présents
- [ ] Schema.org markup valide

#### Tests de Performance

```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse https://votre-site.netlify.app --view

# Test de vitesse
# Utiliser tools.pingdom.com ou gtmetrix.com
```

### 8. Maintenance Continue

#### Mises à jour

```bash
# Pour mettre à jour le site
git add .
git commit -m "Update: description des changements"
git push origin main
# Netlify redéploiera automatiquement
```

#### Monitoring

- Vérifier Google Search Console mensuellement
- Surveiller les performances avec Google Analytics
- Mettre à jour le contenu saisonnier (saison des pluies/sèche)
- Ajouter de nouveaux témoignages clients

### 9. URLs Importantes Post-Déploiement

- **Site principal:** https://abaddonpestcontrol.netlify.app
- **Admin Netlify:** https://app.netlify.com
- **Google Search Console:** https://search.google.com/search-console
- **Google Analytics:** https://analytics.google.com
- **Facebook Business:** https://business.facebook.com
- **Page Facebook Abaddon:** https://www.facebook.com/profile.php?id=100063857540013
- **TikTok Abaddon:** https://tiktok.com/@abaddon_2020

### 10. Support et Dépannage

#### Problèmes Courants

- **404 sur refresh:** Vérifier `_redirects` file
- **Images ne se chargent pas:** Vérifier les chemins relatifs
- **Build fail:** Vérifier les erreurs TypeScript
- **Lenteur:** Optimiser les images et le code

#### Contacts Support

- **Netlify Support:** https://www.netlify.com/support/
- **Documentation:** https://docs.netlify.com/

---

## 🎉 Félicitations !

Votre site Abaddon Pest Control est maintenant prêt pour le déploiement sur Netlify avec toutes les optimisations SEO pour le marché philippin !
