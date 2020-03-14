import React from 'react';

class Combat extends React.Component {
  render () {
    return (
      <li>
        <span className="uk-accordion-title">
          <span className="bz-section-title bz-color-combat">Combat</span>
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
                <td className="bz-color-combat">Rotten Flesh</td>
                <td className="bz-item-price">{this.props.items["ROTTEN_FLESH"] ? this.props.items["ROTTEN_FLESH"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ROTTEN_FLESH"] ? this.props.items["ROTTEN_FLESH"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Rotten Flesh</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_ROTTEN_FLESH"] ? this.props.items["ENCHANTED_ROTTEN_FLESH"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_ROTTEN_FLESH"] ? this.props.items["ENCHANTED_ROTTEN_FLESH"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Bone</td>
                <td className="bz-item-price">{this.props.items["BONE"] ? this.props.items["BONE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["BONE"] ? this.props.items["BONE"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Bone</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_BONE"] ? this.props.items["ENCHANTED_BONE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_BONE"] ? this.props.items["ENCHANTED_BONE"].sellPrice : 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    );
  }
}

export default Combat;