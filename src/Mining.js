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
              <tr>
                <td className="bz-color-mining">Coal</td>
                <td className="bz-item-price">{this.props.items["COAL"] ? this.props.items["COAL"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["COAL"] ? this.props.items["COAL"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Coal</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COAL"] ? this.props.items["ENCHANTED_COAL"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COAL"] ? this.props.items["ENCHANTED_COAL"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Charcoal</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_CHARCOAL"] ? this.props.items["ENCHANTED_CHARCOAL"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_CHARCOAL"] ? this.props.items["ENCHANTED_CHARCOAL"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Coal Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COAL_BLOCK"] ? this.props.items["ENCHANTED_COAL_BLOCK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COAL_BLOCK"] ? this.props.items["ENCHANTED_COAL_BLOCK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Iron Ingot</td>
                <td className="bz-item-price">{this.props.items["IRON_INGOT"] ? this.props.items["IRON_INGOT"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["IRON_INGOT"] ? this.props.items["IRON_INGOT"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Iron</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_IRON"] ? this.props.items["ENCHANTED_IRON"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_IRON"] ? this.props.items["ENCHANTED_IRON"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Iron Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_IRON_BLOCK"] ? this.props.items["ENCHANTED_IRON_BLOCK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_IRON_BLOCK"] ? this.props.items["ENCHANTED_IRON_BLOCK"].sellPrice : 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    )
  }
}

export default Mining;