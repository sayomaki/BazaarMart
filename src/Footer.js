import React from 'react';
import Heart from './heart.svg';

class Footer extends React.Component {
  render () {
    return (
      <div className="bz-footer uk-position-bottom">
        <div className="uk-container">
          <div style={{display: 'inline-block'}}>
            Made with <span className="uk-icon uk-icon-image" style={{backgroundImage: `url(${Heart})`}}></span> by <a className="bz-author" href="https://github.com/willi123yao">willi123yao</a>
          </div>
          <div className="uk-align-right" style={{display: 'inline-block'}}>
            Last updated: 10 March 2020 12:52 UTC
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;