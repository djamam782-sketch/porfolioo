# 🚀 Portfolio Professionnel - Djama Mohamed Moussa

[![Hébergé sur GitHub Pages](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=github)](https://djamam782-sketch.github.io/porfolioo/)
[![Statut du TP](https://img.shields.io/badge/Statut-Complété-orange?style=for-the-badge)](https://github.com/)

Ce projet a été réalisé dans le cadre du **TP d'Exploration : Concevoir et publier son Portfolio Web et Mobile**. L'objectif était de créer une interface moderne, fonctionnelle et entièrement responsive pour présenter mon profil d'étudiant ingénieur.

---

## 🛠️ Compétences Techniques Validées

Conformément aux attentes du TP, ce projet intègre les technologies suivantes :

- **HTML5 & CSS3 Sémantique** : Structure robuste et mise en page personnalisée.
- **Framework Bootstrap** : Utilisation pour garantir un **Responsive Design** parfait sur ordinateur, tablette et smartphone (Viewport optimisé).
- **JavaScript (ES6+) Avancé** :
  - Gestion du DOM pour l'interactivité.
  - Animations (effet 3D tilt sur les cartes, effet d'écriture automatique).
- **Intégration d'API Externes** :
  - **OpenWeatherMap API** : Affichage météo en temps réel.
  - **EmailJS** : Envoi de messages via le formulaire de contact sans serveur backend.
  - **Exchange Rates API** : Convertisseur de devises dynamique (FDJ/EUR/USD).
- **Git & GitHub** : Gestion de version et déploiement via **GitHub Pages**.

---

## 🌟 Fonctionnalités du Site

### 1. Accueil & Navigation
Une barre de navigation fluide permettant de naviguer entre les sections : **À propos, Services, Projets et Contact**.

### 2. Assistant Virtuel (Chatbot JS)
Développement d'un chatbot interactif permettant de répondre aux questions fréquentes sur mon parcours et mes compétences, j'ai fait deux chatbot un ou les questions qui sont poser frequenment sont deja la et il dit juste la reponse et un autre bien plus complexe qui utilise des donner que je lui ai donner sur mon code pour repondre, le probleme il fait quelque erreur et ils bug quand on lui demande quelque chose autre que mon parcours proffesionnel il faudra regler ce probleme dans le futur.

### 3. Outils Intégrés (Section API)  (Realisation) 
- **Météo en direct(section REALISATION)**  : Recherche par ville avec affichage dynamique des conditions et emojis. 
- **Convertisseur FDJ(section SERVICES)** : Outil spécifique utilisant les taux officiels de la Banque Centrale de Djibouti, avec mise à jour en direct du cours EUR/USD car j'aurais pas que des djiboutien qui vont venir sur mon porfolio je me suis donc dit qu'il pouvais utilsier le convertisuer de devise pour que il ai un appercu de mes tarifs dans leur monaies (actuelement que le **EURO** et **DOLLARS** sont disponible j'y ajouterais d'autre comme le livre sterling , yuans etc.

### 4. Projets & Réalisations
Présentation de mes travaux (Jeu Sonic en JS, App C++, etc.) avec un système de cartes extensibles pour une lecture claire.

### 5. Formulaire de Contact Professionnel
Entièrement fonctionnel, il valide les données saisies par l'utilisateur avant l'envoi, aussi qand on touche sur l'email ca te renvoie diretement sur google gmail et tu peut directement m'envoyer un mail c'est 100% automatiser.

---

## 📁 Structure du Projet

```text
.
├── index.html          # Page d'accueil (Hero section)
├── about.html          # Détails du profil et parcours
├── services.html       # Offres de services (Web & Automation)
├── realisations.html   # Galerie des projets réalisés
├── contact.html        # Formulaire de contact avec EmailJS
├── api.html            # Dashboard météo et convertisseur
├── style.css           # Design global et variables (CSS Variables)
├── rea.css             # Styles spécifiques aux projets
├── chatbot.js          # Logique de l'assistant interactif
├── api.js              # Connexion à l'API OpenWeatherMap 
└── tarifs.js           # Logique du convertisseur de devises
