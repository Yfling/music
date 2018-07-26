import React from 'react'
import './header.less'

let Header = React.createClass({
  render() {
    return (
      <div className="components-header row">
        <img scr="/static/images/logo.png" width="40" alt="" className="-col-auto"></img>
        <h1 className="caption">React Music Player</h1>
    </div>
    );
  }
});

export default Header;
