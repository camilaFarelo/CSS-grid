import React, {Component} from 'react';

class Example1 extends Component {
  render() {
    return(
      <div>
        <header className="header">{'header'}</header>
        <div className="content-1">
          <nav className="content-item nav">{'nav'}</nav>
          <div className="content-item content">{'container'}</div>
        </div>
        <footer className="footer">{'footer'}</footer>
      </div>
    )
  }
}

export default Example1;
