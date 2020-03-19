import React from 'react';
import './App.css';
import './Font.css';
import Header from './Header';
import Footer from './Footer';
import Farming from './Farming';
import Mining from './Mining';
import Combat from './Combat';
import Oddities from './Oddities';

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
    const res = await fetch(URL + '/bazaar/' + item, {method: 'POST'});
    const data = await res.json();
    
    this.setState({items: data, timestamp: Date.now()});
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
            <Combat items={this.state.items}/>
            <li>
              <span className="uk-accordion-title" href="#">
                <span className="bz-section-title bz-color-woodfish">Woods & Fishes</span>
              </span>
              <div className="uk-accordion-content">
                <p>COMING SOON!</p>
              </div>
            </li>
            <Oddities items={this.state.items}/>
          </ul>
        </div>

        <Footer timestamp={this.state.timestamp}/>
      </div>
    );
  }
}

export default App;
