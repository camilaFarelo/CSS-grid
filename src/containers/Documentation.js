import React, { Component } from 'react';

class Documentation extends Component {
  render() {
    return(
      <div className="custom-grid">
        <div className="item-grid panel">{'panel 1'}</div>
        <div className="item-grid panel">{'panel 2'}</div>
        <div className="item-grid panel">{'panel 3'}</div>
        <div className="item-grid panel">{'panel 4'}</div>
        <div className="item-grid panel">{'panel 5'}</div>
      </div>
    )
  }
}

export default Documentation;