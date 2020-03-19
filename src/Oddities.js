import React from 'react';

class Oddities extends React.Component {
  render () {
    return (
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
                <td className="bz-item-price">{this.props.items["STOCK_OF_STONKS"] ? this.props.items["STOCK_OF_STONKS"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["STOCK_OF_STONKS"] ? this.props.items["STOCK_OF_STONKS"].sellPrice : 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    );
  }
}

export default Oddities;