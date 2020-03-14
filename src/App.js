import React from 'react';
import './App.css';
import './Font.css';
import Header from './Header';
import Footer from './Footer';
import Farming from './Farming';
import Mining from './Mining';

const URL = "";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: {},
      timestamp: Date.now()
    }
    this.runRoutine();
  }

  async runRoutine () {
    const item = "STOCK_OF_STONKS";
    const res = await fetch(URL + '/bazaar/' + item, {method: 'POST'});
    const data = await res.json();
    
    this.setState({items: {...this.state.items, "STOCK_OF_STONKS": data}, timestamp: Date.now()});
    setTimeout(() => {
      this.runRoutine();
    }, 30000);
  }

  render () {
    return (
      <div>
        <Header/>

        <div className="bz-body uk-container uk-margin-top uk-margin-bottom">
          <ul uk-accordion="collapsible: false">
            <Farming items={this.state.items}/>
            <Mining items={this.state.items}/>
            <li>
              <span className="uk-accordion-title">
                <span className="bz-section-title bz-color-combat">Combat</span>
              </span>
              <div className="uk-accordion-content">
                <p>COMING SOON!</p>
              </div>
            </li>
            <li>
              <span className="uk-accordion-title" href="#">
                <span className="bz-section-title bz-color-woodfish">Woods & Fishes</span>
              </span>
              <div className="uk-accordion-content">
                <p>COMING SOON!</p>
              </div>
            </li>
            <li>
              <span className="uk-accordion-title" href="#">              
                <span className="bz-section-title bz-color-oddities">Oddities</span>
              </span>
              <div className="uk-accordion-content">
                <table className="uk-table uk-table-divider bz-table">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Buy Price (highest)</th>
                      <th>Sell Price (lowest)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bz-color-oddities">Stock of Stonks</td>
                      <td className="bz-item-price">{this.state.items["STOCK_OF_STONKS"] ? this.state.items["STOCK_OF_STONKS"].buyPrice : 'N/A'}</td>
                      <td className="bz-item-price">{this.state.items["STOCK_OF_STONKS"] ? this.state.items["STOCK_OF_STONKS"].sellPrice : 'N/A'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>

        <Footer timestamp={this.state.timestamp}/>
      </div>
    );
  }
}

export default App;
