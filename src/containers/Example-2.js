import React, {Component} from 'react';

class Example2 extends Component {
  render() {
    return(
      <div>
        <header className="header">{'header'}</header>
        <div className="content-2 cols-2-8-2">
          <div className="item-grid" />
          <div className="item-grid content-item">{'content'}</div>
          <div className="item-grid" />
        </div>
        <footer className="footer">{'footer'}</footer>
      </div>
    );
  }
}

export default Example2;
