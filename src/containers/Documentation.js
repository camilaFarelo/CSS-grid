import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Documentation extends Component {
  render() {
    return(
      <div>
        <div className="a">
          <div className="b">
            HOLA
          </div>
        </div>
        <div className="cols-3">
          <a href="/example1">{'Example layout 1'}</a>
          <a href="/example2">{'Example layout 2'}</a>
          <a href="/example3">{'Example layout 3'}</a>
        </div>
        <h1>FONT-AWESOME</h1>
        <a href="http://fontawesome.io/icons/" target="_blank">Check all the icons</a>
        <div>
          <FontAwesome
            name='search'
            size='2x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
          />
      </div>
        <h1>CONTENT COLUMNS</h1>
        <div className="cols-1">
          <div className="item-grid panel">{'cols-1'}</div>
        </div>
        <div className="cols-2 md--cols-10-2">
          <div className="item-grid panel">{'cols-2'}</div>
          <div className="item-grid panel">{'cols-2'}</div>
        </div>
        <div className="cols-3">
          <div className="item-grid panel">{'cols-3'}</div>
          <div className="item-grid panel">{'cols-3'}</div>
          <div className="item-grid panel">{'cols-3'}</div>
        </div>
        <div className="cols-4">
          <div className="item-grid panel">{'cols-4'}</div>
          <div className="item-grid panel">{'cols-4'}</div>
          <div className="item-grid panel">{'cols-4'}</div>
          <div className="item-grid panel">{'cols-4'}</div>
        </div>
        <div className="cols-5">
          <div className="item-grid panel">{'cols-5'}</div>
          <div className="item-grid panel">{'cols-5'}</div>
          <div className="item-grid panel">{'cols-5'}</div>
          <div className="item-grid panel">{'cols-5'}</div>
          <div className="item-grid panel">{'cols-5'}</div>
        </div>
        <div className="cols-6">
          <div className="item-grid panel">{'cols-6'}</div>
          <div className="item-grid panel">{'cols-6'}</div>
          <div className="item-grid panel">{'cols-6'}</div>
          <div className="item-grid panel">{'cols-6'}</div>
          <div className="item-grid panel">{'cols-6'}</div>
          <div className="item-grid panel">{'cols-6'}</div>
        </div>
        <div className="cols-7">
          <div className="item-grid panel">{'cols-7'}</div>
          <div className="item-grid panel">{'cols-7'}</div>
          <div className="item-grid panel">{'cols-7'}</div>
          <div className="item-grid panel">{'cols-7'}</div>
          <div className="item-grid panel">{'cols-7'}</div>
          <div className="item-grid panel">{'cols-7'}</div>
          <div className="item-grid panel">{'cols-7'}</div>
        </div>
        <div className="cols-8">
          <div className="item-grid panel">{'cols-8'}</div>
          <div className="item-grid panel">{'cols-8'}</div>
          <div className="item-grid panel">{'cols-8'}</div>
          <div className="item-grid panel">{'cols-8'}</div>
          <div className="item-grid panel">{'cols-8'}</div>
          <div className="item-grid panel">{'cols-8'}</div>
          <div className="item-grid panel">{'cols-8'}</div>
          <div className="item-grid panel">{'cols-8'}</div>
        </div>
        <div className="cols-9">
          <div className="item-grid panel">{'cols-9'}</div>
          <div className="item-grid panel">{'cols-9'}</div>
          <div className="item-grid panel">{'cols-9'}</div>
          <div className="item-grid panel">{'cols-9'}</div>
          <div className="item-grid panel">{'cols-9'}</div>
          <div className="item-grid panel">{'cols-9'}</div>
          <div className="item-grid panel">{'cols-9'}</div>
          <div className="item-grid panel">{'cols-9'}</div>
          <div className="item-grid panel">{'cols-9'}</div>
        </div>
        <div className="cols-10">
          <div className="item-grid panel">{'cols-10'}</div>
          <div className="item-grid panel">{'cols-10'}</div>
          <div className="item-grid panel">{'cols-10'}</div>
          <div className="item-grid panel">{'cols-10'}</div>
          <div className="item-grid panel">{'cols-10'}</div>
          <div className="item-grid panel">{'cols-10'}</div>
          <div className="item-grid panel">{'cols-10'}</div>
          <div className="item-grid panel">{'cols-10'}</div>
          <div className="item-grid panel">{'cols-10'}</div>
          <div className="item-grid panel">{'cols-10'}</div>
        </div>
        <h1>LAYOUT COLUMNS</h1>
        <div className="cols-2-10">
          <div className="item-grid panel">{'cols-2-10'}</div>
          <div className="item-grid panel">{'cols-2-10'}</div>
        </div>
        <div className="cols-3-9">
          <div className="item-grid panel">{'cols-3-9'}</div>
          <div className="item-grid panel">{'cols-3-9'}</div>
        </div>
        <div className="cols-4-8">
          <div className="item-grid panel">{'cols-4-8'}</div>
          <div className="item-grid panel">{'cols-4-8'}</div>
        </div>
        <div className="cols-5-7">
          <div className="item-grid panel">{'cols-5-7'}</div>
          <div className="item-grid panel">{'cols-5-7'}</div>
        </div>
        <div className="cols-7-5">
          <div className="item-grid panel">{'cols-7-5'}</div>
          <div className="item-grid panel">{'cols-7-5'}</div>
        </div>
        <div className="cols-8-4">
          <div className="item-grid panel">{'cols-8-4'}</div>
          <div className="item-grid panel">{'cols-8-4'}</div>
        </div>
        <div className="cols-10-2">
          <div className="item-grid panel">{'cols-10-2'}</div>
          <div className="item-grid panel">{'cols-10-2'}</div>
        </div>
        <h1>Custom Grid</h1>
          <div className="home">
            <div className="item panel">{'item1'}</div>
            <div className="item panel">{'item2'}</div>
            <div className="item panel">{'item3'}</div>
            <div className="item panel">{'item4'}</div>
            <div className="item panel">{'item5'}</div>
            <div className="item panel">{'item6'}</div>
          </div>
      </div>
    )
  }
}

export default Documentation;
