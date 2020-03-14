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
          <div style={{display: 'inline-block'}}>
            Made with <span className="uk-icon uk-icon-image" style={{backgroundImage: `url(${Heart})`}}></span> by <a className="bz-author" href="https://github.com/willi123yao">willi123yao</a>
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