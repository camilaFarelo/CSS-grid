import React, {Component} from 'react';

class Example3 extends Component {
  render() {
    return(
      <div>
        <header className="header">{'Header'}</header>
        <div className="content-3 cols-2-8-2">
          <div className="item-grid content-item">{'content'}</div>
          <div className="item-grid content-item">{'content'}</div>
          <div className="item-grid content-item">{'content'}</div>
        </div>
        <footer className="footer">{'footer'}</footer>
      </div>
    );
  }
}

export default Example3;
