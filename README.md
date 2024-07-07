# About

Willkommen zum Privathaftpflichtversicherungs-Rechner. Dieses Projekt ist eine React-App, verknüpft mit einem Express-Backend. Diese Anwendung hilft, den Haftpflichtversicherungsschutz und die Kosten zu berechnen. Die App bietet Informationen über Standorte, die Versicherung, Deckung durch verschiedene Pläne, Inhalte der verschiedenen Pläne etc. Zudem kann man sich auch einloggen und das Benutzerkonto anschauen. 

## Inhaltsverzeichnis
- [Installation](#installation)
- [Verwendung](#verwendung)
- [Komponenten](#komponenten)
- [Navigation](#navigation)
- [Abhängigkeiten](#abhängigkeiten)

## Installation

Um mit dem Projekt zu beginnen, klont man das Repository und wechselt dann in Projektverzeichnis

``` bash
git clone https://github.com/mikeezvz/InsuranceCalculator.git
cd InsuranceCalculator
cd frontend
npm install
cd .. 
cd backend
npm install
```

## Verwendung

### Starten

Der Command um das Projekt zu starten:
``` bash
cd InsuranceCalculator
npm start
```

Öffne http://localhost:3000 im Browser, um die App anzusehen.
http://localhost:5000 ist die Backend-URL.
Anmerkung: Es muss nicht separat in das backend-Verzeichnis und dann in das frontend-Verzeichnis gewechselt werden damit Backend und Frontend läuft. Das package.json File im Root-Verzeichnis "InsuranceCalculator" wurde so konfiguriert, dass "npm start" beide Instanzen startet.

### User

Es git auch 3 bereits vorhandene User mit denen man sich einloggen kann. 

user1
password1
user2
password2
user3
password3

Das Login ist Case-Sensitive.

## Komponenten
### Frontend
#### App.js
Die Hauptkomponente, die das Routing und die Navigation einrichtet.

#### home.js
Homepage, Landing-Page

#### calculator.js
Seite mit Versicherungsrechner. Hier kann man den gewünschten Plan und Zusatzleistungen auswählen.

#### aboutus.js
Seite mit Informationen über die Versicherung als Unternehmen.

#### contact.js 
Seite mit Kontaktformular. Hier kann man Betreff und Anliegen angeben.

#### checkout.js
Seite für die Zahlung wenn man beim Prämienrechner auf die nächste Seite geht

#### success.js
Seite mit einer Erfolgsmeldung, dass die Zahlung abgewickelt werden konnte. Diese ist rein ästhetisch.

### Backend

#### login.js
Ein Endpoint um das Login abzuwickeln.

#### logout.js
Ein Endpoint, der die Session zerstört und den aktuell eingeloggten User ausloggt.

#### user.js
Ein Endpoint, der Informationen zur aktuell gespeicherten Session abrufen kann.


## Navigation

Die React-App verwendet React Router für die Navigation. Die Datei App.js enthält die Routen-Konfiguration unter Verwendung des node_module `react-router-dom.`.
Das Backend verwendet Express Router für eine saubere Struktur. Die Datei server.js enthält die Routen-Konfiguration unter Verwendung der integrierten Express- Funktion `express-router`

## Abhängigkeiten

Das Projekt verwendet die folgenden Abhängigkeiten:

Frontend

```
React
React Bootstrap
React Router Dom
Bootstrap
```

Backend

```
Express
Express Session
CORS
```

Installiere alle Abhängigkeiten mit:

``` bash
cd frontend
npm install react react-bootstrap react-router-dom bootstrap
cd ..
cd backend
npm install express express-session cors

```

---------------------------------------------------------------

# About

Welcome to the personal liability insurance calculator. This project is a React app, linked to an Express backend. This application helps to calculate liability insurance coverage and costs. The app provides information about locations, insurance, coverage by different plans, contents of different plans etc. Moreover, one can also log in and view the user account. 

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Navigation](#navigation)
- [Dependencies](#dependencies)

## Installation

To start the project, clone the repository and then change to the project directory

``` bash
git clone https://github.com/mikeezvz/InsuranceCalculator.git
cd InsuranceCalculator
cd frontend
npm install
cd .. 
cd backend
npm install
```

## Usage

### Start

The command to start the project:
``` bash
cd InsuranceCalculator
npm start
```

Open http://localhost:3000 in the browser to view the app.
http://localhost:5000 is the backend URL.
Note: It is not necessary to change separately to the backend directory and then to the frontend directory for the backend and frontend to run. The package.json file in the root directory "InsuranceCalculator" has been configured so that "npm start" starts both instances.

### User

There are also 3 existing users with which you can log in. 

user1
password1
user2
password2
user3
password3

The login is case-sensitive.

## Components
### Frontend
#### App.js
The main component that sets up the routing and navigation.

#### home.js
Homepage, landing page

#### calculator.js
Page with insurance calculator. Here you can select the desired plan and additional services.

#### aboutus.js
Page with information about the insurance company.

#### contact.js 
Page with contact form. Here you can enter subject and request.

#### checkout.js
Page for payment when you go to the next page of the premium calculator

#### success.js
Page with a success message that the payment has been processed. This is purely aesthetic.

### Backend

#### login.js
An endpoint to process the login.

#### logout.js
An endpoint that destroys the session and logs out the currently logged in user.

#### user.js
An endpoint that can retrieve information about the currently saved session.


## Navigation

The React app uses React Router for navigation. The App.js file contains the route configuration using the node_module `react-router-dom.`.
The backend uses Express Router for a clean structure. The server.js file contains the route configuration using the integrated Express function `express-router`.

## Dependencies

The project uses the following dependencies:

Frontend

```
React
React Bootstrap
React Router Dom
bootstrap
```

Backend

```
Express
Express Session
CORS
```

Install all dependencies with:

``` bash
cd frontend
npm install react react-bootstrap react-router-dom bootstrap
cd ..
cd backend
npm install express express-session cors

```
