import React from 'react';
import './App.css';
import './Font.css';
import Footer from './Footer';

function App() {
  return (
    <div>
      <div className="bz-navbar">
        <div className="uk-container">
          <nav className="uk-navbar-transparent uk-navbar-container uk-margin" uk-navbar="true">
            <div className="uk-navbar-left">
              <span className="uk-navbar-item uk-logo bz-logo">Bazaar Market</span>
            </div>
            <div className="uk-navbar-right">
              <div className="uk-navbar-item">
                <a className="uk-button uk-button-text bz-github" href="https://github.com/willi123yao/BazaarMart">Github</a>
              </div>
              <div className="uk-navbar-item">
                <a className="uk-button uk-button-text bz-github" href="https://github.com/willi123yao/BazaarMart/issues">Bugs?</a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="bz-body uk-container uk-margin-top uk-margin-bottom">
        <ul uk-accordion="collapsible: false">
          <li>
            <a class="uk-accordion-title" href="#">
              <span className="bz-section-title bz-title-farming">Farming</span>
            </a>
            <div class="uk-accordion-content">
              <p>COMING SOON!</p>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">
              <span className="bz-section-title bz-title-mining">Mining</span></a>
            <div class="uk-accordion-content">
              <p>COMING SOON!</p>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">
            <span className="bz-section-title bz-title-combat">Combat</span></a>
            <div class="uk-accordion-content">
              <p>COMING SOON!</p>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">
              <span className="bz-section-title bz-title-woodfish">Woods & Fishes</span>
            </a>
            <div class="uk-accordion-content">
              <p>COMING SOON!</p>
            </div>
          </li>
          <li class="uk-open">
            <a class="uk-accordion-title" href="#">              
              <span className="bz-section-title bz-title-oddities">Oddities</span>
            </a>
            <div class="uk-accordion-content">
              
            </div>
          </li>
        </ul>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
