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
              <tr>
                <td className="bz-color-combat">String</td>
                <td className="bz-item-price">{this.props.items["STRING"] ? this.props.items["STRING"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["STRING"] ? this.props.items["STRING"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted String</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_STRING"] ? this.props.items["ENCHANTED_STRING"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_STRING"] ? this.props.items["ENCHANTED_STRING"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Spider Eye</td>
                <td className="bz-item-price">{this.props.items["SPIDER_EYE"] ? this.props.items["SPIDER_EYE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["SPIDER_EYE"] ? this.props.items["SPIDER_EYE"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Spider Eye</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_SPIDER_EYE"] ? this.props.items["ENCHANTED_SPIDER_EYE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_SPIDER_EYE"] ? this.props.items["ENCHANTED_SPIDER_EYE"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Fermented Spider Eye</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_FERMENTED_SPIDER_EYE"] ? this.props.items["ENCHANTED_FERMENTED_SPIDER_EYE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_FERMENTED_SPIDER_EYE"] ? this.props.items["ENCHANTED_FERMENTED_SPIDER_EYE"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Gunpowder</td>
                <td className="bz-item-price">{this.props.items["SULPHUR"] ? this.props.items["SULPHUR"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["SULPHUR"] ? this.props.items["SULPHUR"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Gunpowder</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_GUNPOWDER"] ? this.props.items["ENCHANTED_GUNPOWDER"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_GUNPOWDER"] ? this.props.items["ENCHANTED_GUNPOWDER"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Ender Pearl</td>
                <td className="bz-item-price">{this.props.items["ENDER_PEARL"] ? this.props.items["ENDER_PEARL"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENDER_PEARL"] ? this.props.items["ENDER_PEARL"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Ender Pearl</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_ENDER_PEARL"] ? this.props.items["ENCHANTED_ENDER_PEARL"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_ENDER_PEARL"] ? this.props.items["ENCHANTED_ENDER_PEARL"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Eye of Ender</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_EYE_OF_ENDER"] ? this.props.items["ENCHANTED_EYE_OF_ENDER"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_EYE_OF_ENDER"] ? this.props.items["ENCHANTED_EYE_OF_ENDER"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Ghast Tear</td>
                <td className="bz-item-price">{this.props.items["GHAST_TEAR"] ? this.props.items["GHAST_TEAR"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["GHAST_TEAR"] ? this.props.items["GHAST_TEAR"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Ghast Tear</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_GHAST_TEAR"] ? this.props.items["ENCHANTED_GHAST_TEAR"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_GHAST_TEAR"] ? this.props.items["ENCHANTED_GHAST_TEAR"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Slimeball</td>
                <td className="bz-item-price">{this.props.items["SLIME_BALL"] ? this.props.items["SLIME_BALL"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["SLIME_BALL"] ? this.props.items["SLIME_BALL"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Slimeball</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_SLIME_BALL"] ? this.props.items["ENCHANTED_SLIME_BALL"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_SLIME_BALL"] ? this.props.items["ENCHANTED_SLIME_BALL"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Slime Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_SLIME_BLOCK"] ? this.props.items["ENCHANTED_SLIME_BLOCK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_SLIME_BLOCK"] ? this.props.items["ENCHANTED_SLIME_BLOCK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Blaze Rod</td>
                <td className="bz-item-price">{this.props.items["BLAZE_ROD"] ? this.props.items["BLAZE_ROD"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["BLAZE_ROD"] ? this.props.items["BLAZE_ROD"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Blaze Powder</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_BLAZE_POWDER"] ? this.props.items["ENCHANTED_BLAZE_POWDER"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_BLAZE_POWDER"] ? this.props.items["ENCHANTED_BLAZE_POWDER"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Blaze Rod</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_BLAZE_ROD"] ? this.props.items["ENCHANTED_BLAZE_ROD"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_BLAZE_ROD"] ? this.props.items["ENCHANTED_BLAZE_ROD"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Magma Cream</td>
                <td className="bz-item-price">{this.props.items["MAGMA_CREAM"] ? this.props.items["MAGMA_CREAM"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["MAGMA_CREAM"] ? this.props.items["MAGMA_CREAM"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-combat">Enchanted Magma Cream</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_MAGMA_CREAM"] ? this.props.items["ENCHANTED_MAGMA_CREAM"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_MAGMA_CREAM"] ? this.props.items["ENCHANTED_MAGMA_CREAM"].sellPrice : 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    );
  }
}

export default Combat;