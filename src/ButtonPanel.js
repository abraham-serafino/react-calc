import React from 'react';
import InputButton from './InputButton.js';
import FunctionButton from './FunctionButton.js';

import './ButtonPanel.css';

function ButtonPanel() {
  return (
    <div>
      <div className="ButtonRow">
        <FunctionButton value="C"/>
        <FunctionButton value="CE"/>
        <FunctionButton value="&divide;"/>
        <FunctionButton value="&times;"/>
      </div>
      <br/>
      <div className="ButtonRow">
        <InputButton value="7"/>
        <InputButton value="8"/>
        <InputButton value="9"/>

        <div>
          <p><FunctionButton value="&minus;"/></p>
        </div>
      </div>
      <br/>
      <div className="ButtonRow">
        <InputButton value="4"/>
        <InputButton value="5"/>
        <InputButton value="6"/>

        <div>
          <p><FunctionButton value="+"/></p>
        </div>
      </div>
      <br/>
      <div className="ButtonRow">
        <InputButton value="1"/>
        <InputButton value="2"/>
        <InputButton value="3"/>

        <div>
          <p><FunctionButton value="&radic;"/></p>
        </div>
      </div>
      <br/>
      <div className="ButtonRow">
        <InputButton doubleWide="true" value="0"/>
        <FunctionButton doubleWide="true" value="="/>
      </div>
    </div>
  );
}

export default ButtonPanel;
