import React from 'react';
import './App.css';
import './Font.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header/>

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
