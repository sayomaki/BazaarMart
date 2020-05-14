import React from 'react';
import Heart from './heart.svg';

class Footer extends React.Component {
  parseDate () {
    const d = new Date(this.props.timestamp);
    return d.toLocaleString();
  }

  render () {
    return (
      <div className="bz-footer">
        <div className="uk-container">
          <div className="bz-footer-credits">
            Made with <span className="uk-icon uk-icon-image" style={{backgroundImage: `url(${Heart})`}}></span> by <a className="bz-author" href="https://github.com/willi123yao">willi123yao</a>.
            Data courtesy of <a className="bz-author" href="https://hypixel.net">Hypixel</a>.
            <br/>
            Icon credits to <a className="bz-author" href="https://hypixel-skyblock.fandom.com">Hypixel Skyblock Fandom Wiki</a> and <a className="bz-author" href="https://minecraft.gamepedia.com/">Minecraft Wiki</a>
          </div>
          <div className="uk-align-right" style={{display: 'inline-block'}}>
            Last updated: {this.parseDate()}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;