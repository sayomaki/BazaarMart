import React from 'react';

class Mining extends React.Component {
  render () {
    return (
      <li>
        <span className="uk-accordion-title" href="#">
          <span className="bz-section-title bz-color-mining">Mining</span>
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
                <td className="bz-color-mining">Cobblestone</td>
                <td className="bz-item-price">{this.props.items["COBBLESTONE"] ? this.props.items["COBBLESTONE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["COBBLESTONE"] ? this.props.items["COBBLESTONE"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Cobblestone</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COBBLESTONE"] ? this.props.items["ENCHANTED_COBBLESTONE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COBBLESTONE"] ? this.props.items["ENCHANTED_COBBLESTONE"].sellPrice : 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    )
  }
}

export default Mining;