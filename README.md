# About

Willkommen zum Privathaftpflichtversicherungs Rechner. Diese Anwendung hilft, den Haftpflichtversicherungsschutz und die Kosten zu berechnen. Die App bietet Informationen über Standorte, die Versicherung, Deckung durch verschiedene Pläne, Inhalte der verschiedenen Pläne etc.

## Inhaltsverzeichnis
- [Installation](#installation)
- [Verwendung](#verwendung)
- [Komponenten](#komponenten)
- [Navigation](#navigation)
- [Abhängigkeiten](#abhängigkeiten)
- [Deployment auf Vercel](#deployment-auf-vercel)

## Installation

Um mit dem Projekt zu beginnen, klont man das Repository und wechselt dann in Projektverzeichnis

``` bash
git clone https://github.com/mikeezvz/InsuranceCalculator.git
cd InsuranceCalculator
npm install
npm i express
npm i react-router-dom
```

## Verwendung

Um den Entwicklungsserver zu starten, führen Sie aus:
``` bash
npm start
```

Öffne http://localhost:3000 in deinem Browser, um die App anzusehen.

## Komponenten
### App.js
Die Hauptkomponente, die das Routing und die Navigation einrichtet.

### homepage.js
Homepage, Landing-Page

### calculator.js
Seite mit Versicherungsrechner. Hier kann man den gewünschten Plan und Zusatzleistungen auswählen.

### aboutus.js
Seite mit Informationen über die Versicherung als Unternehmen.

### contact.js 
Seite mit Kontaktformular. Hier kann man Betreff und Anliegen angeben.

## Navigation

Die App verwendet React Router für die Navigation. Die Datei App.js enthält die Routen-Konfiguration unter Verwendung des node_module `react-router-dom.`.

## Abhängigkeiten

Das Projekt verwendet die folgenden Abhängigkeiten:

```
React
React Bootstrap
React Router Dom
Bootstrap
```

Installiere alle Abhängigkeiten mit:

``` bash

npm install
npm i react-bootstrap
npm i react-router-dom
```

## Deployment auf Vercel

Die Anwendung wird auf Vercel gehostet. Vercel macht es super einfach, React-Apps zu hosten und automatisch zu aktualisieren. So funktioniert's:

### Schritte zum Deployment

1. **Vercel-Konto erstellen**
   - Gehe zu [vercel.com](https://vercel.com) und melde dich an oder erstelle ein neues Konto.

2. **Projekt auf GitHub**
   - Stelle sicher, dass unser React-Projekt auf GitHub liegt. Wenn nicht, erstelle ein neues Repository und pushe das Projekt dorthin.

3. **Vercel mit GitHub verbinden**
   - Melde dich bei Vercel an und gehe zu deinem Dashboard.
   - Klicke auf "New Project" und dann auf "Import Git Repository".
   - Erlaube Vercel den Zugriff auf deine GitHub-Repositories, falls noch nicht geschehen.
   - Wähle das Repository mit deinem React-Projekt aus.

4. **Projekt konfigurieren**
   - Vercel erkennt normalerweise automatisch, dass es sich um ein React-Projekt handelt und stellt die Build- und Deploy-Skripte entsprechend ein.
   - Überprüfe die Einstellungen und passe sie bei Bedarf an. Standardmäßig sollte das Build-Kommando `npm run build` und das Output-Verzeichnis `build` sein.

5. **Deployment starten**
   - Klicke auf "Deploy". Vercel wird das Projekt nun bauen und auf einer generierten URL bereitstellen.

### Projekt verwalten
Nach dem erfolgreichen Deployment kann man das Projekt im Vercel-Dashboard verwalten und weitere Einstellungen vornehmen. Jede Änderung, die man ins GitHub-Repository pushst, löst automatisch ein neues Deployment aus.

---------------------------------------------------------------

# About

Welcome to the personal liability insurance calculator. This application helps to calculate liability insurance coverage and costs. The app provides information about locations, insurance, coverage by different plans, contents of different plans etc.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Navigation](#navigation)
- [Dependencies](#dependencies)
- [Deployment] (#deployment)

## Installation

To start the project, clone the repository and then change to the project directory

``` bash
git clone https://github.com/mikeezvz/InsuranceCalculator.git
cd Insurancecalculator
npm install
```

## Usage

To start the development server, run:
``` bash
npm start
```

Open http://localhost:3000 in your browser to view the app.

## Components
### App.js
The main component that sets up the routing and navigation.

### homepage.js
Homepage, landing page

### calculator.js
Page with insurance calculator. Here you can select the desired plan and additional services.

### aboutus.js
Page with information about the insurance company.

### contact.js 
Page with contact form. Here you can enter subject and request.

## Navigation

The app uses React Router for navigation. The App.js file contains the route configuration using the node_module `react-router-dom.`.

## Dependencies

The project uses the following dependencies:

```
React
React Bootstrap
React Router Dom
Bootstrap
```

Install all dependencies with:

``` bash

npm install
npm i react-bootstrap
npm i react-router-dom
```
## Deployment on Vercel

The application is hosted on Vercel. Vercel makes it super easy to host and automatically update React apps. Here's how it works:

### Steps to deployment

1. **Create a Vercel account**
   - Go to [vercel.com](https://vercel.com) and sign in or create a new account.

2. **Project on GitHub**
   - Make sure our React project is on GitHub. If not, create a new repository and push the project there.

3 **Connect Vercel to GitHub**
   - Log in to Vercel and go to your dashboard.
   - Click on "New Project" and then on "Import Git Repository".
   - Allow Vercel to access your GitHub repositories, if not already done.
   - Select the repository with your React project.

4 **Configure project**
   - Vercel usually automatically recognizes that it is a React project and sets the build and deploy scripts accordingly.
   - Check the settings and adjust them if necessary. By default, the build command should be `npm run build` and the output directory `build`.

5 **Start deployment**
   - Click on "Deploy". Vercel will now build the project and deploy it to a generated URL.

### Manage project
After successful deployment, you can manage the project in the Vercel dashboard and make further settings. Every change you push to the GitHub repository automatically triggers a new deployment.
