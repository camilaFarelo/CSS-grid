import React, { Component } from 'react';

class Documentation extends Component {
  render() {
    return(
      <div className="home">
        <div className="item panel">{'item panel'}</div>
          <div class="item side">
            <div className="side-item panel">{'side-item 1'}</div>
            <div className="side-item panel">{'side-item 2'}</div>
            <div className="side-item panel">{'side-item 3'}</div>
            <div className="side-item panel">{'side-item 1'}</div>
            <div className="side-item panel">{'side-item 2'}</div>
            <div className="side-item panel">{'side-item 3'}</div>
          </div>
      </div>
    )
  }
}

export default Documentation;
