import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Importiere die benutzerdefinierte CSS-Datei

function App() {
  return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sricing Pex</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-5">
          <h1>Welcome to React with Bootstrap</h1>
          <p>This is a simple example of using Bootstrap in a React project.</p>
          <button type="button" className="btn btn-primary">Primary Button</button>
        </div>
      </div>
  );
}

export default App;
