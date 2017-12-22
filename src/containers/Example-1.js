import React, {Component} from 'react';

class Example1 extends Component {
  render() {
    return(
      <div>
        <header className="header">{'header'}</header>
        <div className="content-1 cols-3-9">
          <nav className="item-grid content-item nav">{'nav'}</nav>
          <div className="item-grid content-item content">{'container'}</div>
        </div>
        <footer className="footer">{'footer'}</footer>
      </div>
    )
  }
}

export default Example1;
