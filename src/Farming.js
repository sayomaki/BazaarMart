import React from 'react';
import './Icons.css';

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
                <td className="bz-color-farming"><span className="uk-icon uk-icon-image bz-icon-wheat"></span> Wheat</td>
                <td className="bz-item-price">{this.props.items["WHEAT"] ? this.props.items["WHEAT"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["WHEAT"] ? this.props.items["WHEAT"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming"><span className="uk-icon uk-icon-image bz-icon-enchanted-bread"></span> Enchanted Bread</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_BREAD"] ? this.props.items["ENCHANTED_BREAD"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_BREAD"] ? this.props.items["ENCHANTED_BREAD"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Carrot</td>
                <td className="bz-item-price">{this.props.items["CARROT_ITEM"] ? this.props.items["CARROT_ITEM"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["CARROT_ITEM"] ? this.props.items["CARROT_ITEM"].sellPrice : 'N/A'}</td>
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
                <td className="bz-item-price">{this.props.items["POTATO_ITEM"] ? this.props.items["POTATO_ITEM"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["POTATO_ITEM"] ? this.props.items["POTATO_ITEM"].sellPrice : 'N/A'}</td>
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
                <td className="bz-color-farming">Melon</td>
                <td className="bz-item-price">{this.props.items["MELON"] ? this.props.items["MELON"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["MELON"] ? this.props.items["MELON"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Melon</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_MELON"] ? this.props.items["ENCHANTED_MELON"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_MELON"] ? this.props.items["ENCHANTED_MELON"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Glistering Melon</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_GLISTERING_MELON"] ? this.props.items["ENCHANTED_GLISTERING_MELON"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_GLISTERING_MELON"] ? this.props.items["ENCHANTED_GLISTERING_MELON"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Melon Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_MELON_BLOCK"] ? this.props.items["ENCHANTED_MELON_BLOCK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_MELON_BLOCK"] ? this.props.items["ENCHANTED_MELON_BLOCK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Seeds</td>
                <td className="bz-item-price">{this.props.items["SEEDS"] ? this.props.items["SEEDS"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["SEEDS"] ? this.props.items["SEEDS"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Red Mushroom</td>
                <td className="bz-item-price">{this.props.items["RED_MUSHROOM"] ? this.props.items["RED_MUSHROOM"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["RED_MUSHROOM"] ? this.props.items["RED_MUSHROOM"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Red Mushroom Block</td>
                <td className="bz-item-price">{this.props.items["HUGE_MUSHROOM_2"] ? this.props.items["HUGE_MUSHROOM_2"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["HUGE_MUSHROOM_2"] ? this.props.items["HUGE_MUSHROOM_2"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Red Mushroom Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_HUGE_MUSHROOM_2"] ? this.props.items["ENCHANTED_HUGE_MUSHROOM_2"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_HUGE_MUSHROOM_2"] ? this.props.items["ENCHANTED_HUGE_MUSHROOM_2"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Brown Mushroom</td>
                <td className="bz-item-price">{this.props.items["BROWN_MUSHROOM"] ? this.props.items["BROWN_MUSHROOM"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["BROWN_MUSHROOM"] ? this.props.items["BROWN_MUSHROOM"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Brown Mushroom Block</td>
                <td className="bz-item-price">{this.props.items["HUGE_MUSHROOM_1"] ? this.props.items["HUGE_MUSHROOM_1"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["HUGE_MUSHROOM_1"] ? this.props.items["HUGE_MUSHROOM_1"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Brown Mushroom Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_HUGE_MUSHROOM_1"] ? this.props.items["ENCHANTED_HUGE_MUSHROOM_1"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_HUGE_MUSHROOM_1"] ? this.props.items["ENCHANTED_HUGE_MUSHROOM_1"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Cocoa Beans</td>
                <td className="bz-item-price">{this.props.items["INK_SACK:3"] ? this.props.items["INK_SACK:3"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["INK_SACK:3"] ? this.props.items["INK_SACK:3"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Cocoa Bean</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COCOA"] ? this.props.items["ENCHANTED_COCOA"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COCOA"] ? this.props.items["ENCHANTED_COCOA"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Cookie</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COOKIE"] ? this.props.items["ENCHANTED_COOKIE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COOKIE"] ? this.props.items["ENCHANTED_COOKIE"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Cactus</td>
                <td className="bz-item-price">{this.props.items["CACTUS"] ? this.props.items["CACTUS"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["CACTUS"] ? this.props.items["CACTUS"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Cactus Green</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_CACTUS_GREEN"] ? this.props.items["ENCHANTED_CACTUS_GREEN"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_CACTUS_GREEN"] ? this.props.items["ENCHANTED_CACTUS_GREEN"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-farming">Enchanted Cactus</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_CACTUS"] ? this.props.items["ENCHANTED_CACTUS"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_CACTUS"] ? this.props.items["ENCHANTED_CACTUS"].sellPrice : 'N/A'}</td>
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