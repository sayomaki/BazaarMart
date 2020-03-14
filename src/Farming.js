import React from 'react';

class Farming extends React.Component {
  render () {
    return (
      <li className="uk-open">
        <span className="uk-accordion-title" href="#">
          <span className="bz-section-title bz-color-farming">Farming</span>
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
                <td className="bz-color-farming">Wheat</td>
                <td className="bz-item-price">{this.props.items["WHEAT"] ? this.props.items["WHEAT"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["WHEAT"] ? this.props.items["WHEAT"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Bread</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_BREAD"] ? this.props.items["ENCHANTED_BREAD"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_BREAD"] ? this.props.items["ENCHANTED_BREAD"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Carrot</td>
                <td className="bz-item-price">{this.props.items["CARROT"] ? this.props.items["CARROT"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["CARROT"] ? this.props.items["CARROT"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Carrot</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_CARROT"] ? this.props.items["ENCHANTED_CARROT"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_CARROT"] ? this.props.items["ENCHANTED_CARROT"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Carrot on a Stick</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_CARROT_ON_A_STICK"] ? this.props.items["ENCHANTED_CARROT_ON_A_STICK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_CARROT_ON_A_STICK"] ? this.props.items["ENCHANTED_CARROT_ON_A_STICK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Golden Carrot</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_GOLDEN_CARROT"] ? this.props.items["ENCHANTED_GOLDEN_CARROT"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_GOLDEN_CARROT"] ? this.props.items["ENCHANTED_GOLDEN_CARROT"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Potato</td>
                <td className="bz-item-price">{this.props.items["POTATO"] ? this.props.items["POTATO"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["POTATO"] ? this.props.items["POTATO"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Potato</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_POTATO"] ? this.props.items["ENCHANTED_POTATO"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_POTATO"] ? this.props.items["ENCHANTED_POTATO"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Baked Potato</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_BAKED_POTATO"] ? this.props.items["ENCHANTED_BAKED_POTATO"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_BAKED_POTATO"] ? this.props.items["ENCHANTED_BAKED_POTATO"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Pumpkin</td>
                <td className="bz-item-price">{this.props.items["PUMPKIN"] ? this.props.items["PUMPKIN"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["PUMPKIN"] ? this.props.items["PUMPKIN"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Pumpkin</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_PUMPKIN"] ? this.props.items["ENCHANTED_PUMPKIN"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_PUMPKIN"] ? this.props.items["ENCHANTED_PUMPKIN"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Sugar Cane</td>
                <td className="bz-item-price">{this.props.items["SUGAR_CANE"] ? this.props.items["SUGAR_CANE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["SUGAR_CANE"] ? this.props.items["SUGAR_CANE"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Sugar Cane</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_SUGAR_CANE"] ? this.props.items["ENCHANTED_SUGAR_CANE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_SUGAR_CANE"] ? this.props.items["ENCHANTED_SUGAR_CANE"].sellPrice : 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    )
  }
}

export default Farming;