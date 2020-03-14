import React from 'react';

class Farming extends React.Component {
  render () {
    return (
      <li>
        <span className="uk-accordion-title" href="#">
          <span className="bz-section-title bz-title-farming">Farming</span>
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
                <td className="bz-item-stockofstonks">Enchanted Sugar Cane</td>
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