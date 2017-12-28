import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Documentation extends Component {
  render() {
    return(
    <div className="documentation-body">
        <h1>LAYOUTS EXAMPLES</h1>
        <div className="cols-3">
          <a className="item-grid" href="/example1">{'Example layout 1'}</a>
          <a className="item-grid" href="/example2">{'Example layout 2'}</a>
          <a className="item-grid" href="/example3">{'Example layout 3'}</a>
        </div>
        <hr/>
        <h1>FONT-AWESOME</h1>
        <p>You can use any icon from Font-awesome:</p>
        <a href="http://fontawesome.io/icons/" target="_blank">Check all the icons</a>
        <h3>{'How to include an icon?'}</h3>
        <div className="panel code-example">
          <h5 className="margin-0 ">
            <span className="tags-icon">&lt;</span>
            <span className="tags-color">FontAwesome</span>
          </h5>
          <p className="margin-0 p-left">
            <span className="orange-color">name=</span>
            <span className="green-color">"search"</span>
          </p>
          <p className="margin-0 p-left">
            <span className="orange-color">size=</span>
            <span className="green-color">"2x"</span>
          </p>
          <h5 className="margin-0 ">
            <span className="tags-icon">&gt;</span>
          </h5>
        </div>
        <div className="icons-container">
          <FontAwesome
            name="search"
            size="2x"
          />
        </div>
        <hr/>
        <h1>CONTENT COLUMNS</h1>
        <div className="cols-1">
          <div className="item-grid panel">{'cols-1'}</div>
        </div>
        <div className="cols-2 md--cols-10-2">
          <div className="item-grid panel">{'cols-2'}</div>
          <div className="item-grid panel">{'cols-2'}</div>
        </div>
        <div className="cols-3">
          <div className="item-grid panel">{'cols-3 sm--cols-2'}</div>
          <div className="item-grid panel">{'cols-3 sm--cols-2'}</div>
          <div className="item-grid panel">{'cols-3 sm--cols-2'}</div>
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
        <hr/>
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
        <hr/>
        <h1>RESPONSIVE GRID</h1>
        <p>the grid have 5 breakpoints:</p>
        <h4>xl--cols: min-width(2000px)</h4>
        <h4>lg--cols: min-width(992px)</h4>
        <h4>md--cols: min-width(768px)</h4>
        <h4>sm--cols: min-width(576px)</h4>
        <h4>xs--cols: min-width(480px)</h4>
          <div className="lg--cols-4 md--cols-2 sm--cols-1 m-bot-40">
            <div className="item-grid panel">{'.xl--cols-4 .md--cols-2 .sm--cols-1'}</div>
            <div className="item-grid panel">{'.xl--cols-4 .md--cols-2 .sm--cols-1'}</div>
            <div className="item-grid panel">{'.xl--cols-4 .md--cols-2 .sm--cols-1'}</div>
            <div className="item-grid panel">{'.xl--cols-4 .md--cols-2 .sm--cols-1'}</div>
          </div>
          <div className="lg--cols-8 md--cols-4 sm--cols-2">
            <div className="item-grid panel">{'.xl--cols-8 .md--cols-4 .sm--cols-2'}</div>
            <div className="item-grid panel">{'.xl--cols-8 .md--cols-4 .sm--cols-2'}</div>
            <div className="item-grid panel">{'.xl--cols-8 .md--cols-4 .sm--cols-2'}</div>
            <div className="item-grid panel">{'.xl--cols-8 .md--cols-4 .sm--cols-2'}</div>
            <div className="item-grid panel">{'.xl--cols-8 .md--cols-4 .sm--cols-2'}</div>
            <div className="item-grid panel">{'.xl--cols-8 .md--cols-4 .sm--cols-2'}</div>
            <div className="item-grid panel">{'.xl--cols-8 .md--cols-4 .sm--cols-2'}</div>
            <div className="item-grid panel">{'.xl--cols-8 .md--cols-4 .sm--cols-2'}</div>
          </div>
      </div>
    );
  }
}

export default Documentation;
