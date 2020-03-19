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
                <td className="bz-color-oddities">Revenant Flesh</td>
                <td className="bz-item-price">{this.props.items["REVENANT_FLESH"] ? this.props.items["REVENANT_FLESH"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["REVENANT_FLESH"] ? this.props.items["REVENANT_FLESH"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Revenant Viscera</td>
                <td className="bz-item-price">{this.props.items["REVENANT_VISCERA"] ? this.props.items["REVENANT_VISCERA"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["REVENANT_VISCERA"] ? this.props.items["REVENANT_VISCERA"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Tarantula Web</td>
                <td className="bz-item-price">{this.props.items["TARANTULA_WEB"] ? this.props.items["TARANTULA_WEB"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["TARANTULA_WEB"] ? this.props.items["TARANTULA_WEB"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Tarantula Silk</td>
                <td className="bz-item-price">{this.props.items["TARANTULA_SILK"] ? this.props.items["TARANTULA_SILK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["TARANTULA_SILK"] ? this.props.items["TARANTULA_SILK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Wolf Tooth</td>
                <td className="bz-item-price">{this.props.items["WOLF_TOOTH"] ? this.props.items["WOLF_TOOTH"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["WOLF_TOOTH"] ? this.props.items["WOLF_TOOTH"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Golden Tooth</td>
                <td className="bz-item-price">{this.props.items["GOLDEN_TOOTH"] ? this.props.items["GOLDEN_TOOTH"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["GOLDEN_TOOTH"] ? this.props.items["GOLDEN_TOOTH"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Hot Potato Book</td>
                <td className="bz-item-price">{this.props.items["HOT_POTATO_BOOK"] ? this.props.items["HOT_POTATO_BOOK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["HOT_POTATO_BOOK"] ? this.props.items["HOT_POTATO_BOOK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Compactor</td>
                <td className="bz-item-price">{this.props.items["COMPACTOR"] ? this.props.items["COMPACTOR"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["COMPACTOR"] ? this.props.items["COMPACTOR"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Super Compactor 3000</td>
                <td className="bz-item-price">{this.props.items["SUPER_COMPACTOR_3000"] ? this.props.items["SUPER_COMPACTOR_3000"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["SUPER_COMPACTOR_3000"] ? this.props.items["SUPER_COMPACTOR_3000"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Summoning Eye</td>
                <td className="bz-item-price">{this.props.items["SUMMONING_EYE"] ? this.props.items["SUMMONING_EYE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["SUMMONING_EYE"] ? this.props.items["SUMMONING_EYE"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Green Candy</td>
                <td className="bz-item-price">{this.props.items["GREEN_CANDY"] ? this.props.items["GREEN_CANDY"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["GREEN_CANDY"] ? this.props.items["GREEN_CANDY"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Purple Candy</td>
                <td className="bz-item-price">{this.props.items["PURPLE_CANDY"] ? this.props.items["PURPLE_CANDY"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["PURPLE_CANDY"] ? this.props.items["PURPLE_CANDY"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">White Gift</td>
                <td className="bz-item-price">{this.props.items["WHITE_GIFT"] ? this.props.items["WHITE_GIFT"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["WHITE_GIFT"] ? this.props.items["WHITE_GIFT"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Green Gift</td>
                <td className="bz-item-price">{this.props.items["GREEN_GIFT"] ? this.props.items["GREEN_GIFT"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["GREEN_GIFT"] ? this.props.items["GREEN_GIFT"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-oddities">Red Gift</td>
                <td className="bz-item-price">{this.props.items["RED_GIFT"] ? this.props.items["RED_GIFT"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["RED_GIFT"] ? this.props.items["RED_GIFT"].sellPrice : 'N/A'}</td>
              </tr>
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