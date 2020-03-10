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
              <table class="uk-table uk-table-divider bz-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Buy Price</th>
                    <th>Sell Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bz-item-stockofstonks">Stock of Stonks</td>
                    <td className="bz-item-price">28,898 coins</td>
                    <td className="bz-item-price">17,381 coins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
