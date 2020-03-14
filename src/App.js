import React from 'react';
import './App.css';
import './Font.css';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>

        <div className="bz-body uk-container uk-margin-top uk-margin-bottom">
          <ul uk-accordion="collapsible: false">
            <li>
              <span class="uk-accordion-title" href="#">
                <span className="bz-section-title bz-title-farming">Farming</span>
              </span>
              <div class="uk-accordion-content">
                <p>COMING SOON!</p>
              </div>
            </li>
            <li>
              <span class="uk-accordion-title" href="#">
                <span className="bz-section-title bz-title-mining">Mining</span>
              </span>
              <div class="uk-accordion-content">
                <p>COMING SOON!</p>
              </div>
            </li>
            <li>
              <span class="uk-accordion-title">
                <span className="bz-section-title bz-title-combat">Combat</span>
              </span>
              <div class="uk-accordion-content">
                <p>COMING SOON!</p>
              </div>
            </li>
            <li>
              <span class="uk-accordion-title" href="#">
                <span className="bz-section-title bz-title-woodfish">Woods & Fishes</span>
              </span>
              <div class="uk-accordion-content">
                <p>COMING SOON!</p>
              </div>
            </li>
            <li class="uk-open">
              <span class="uk-accordion-title" href="#">              
                <span className="bz-section-title bz-title-oddities">Oddities</span>
              </span>
              <div class="uk-accordion-content">
                <table class="uk-table uk-table-divider bz-table">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Buy Price (highest)</th>
                      <th>Sell Price (lowest)</th>
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
}

export default App;
