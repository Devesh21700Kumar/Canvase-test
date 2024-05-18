import React from 'react';

const Toolbox = ({ onToolSelect }) => {
  return (
    <div className="toolbox">
      <button onClick={() => onToolSelect('rectangle')}>Rectangle</button>
      <button onClick={() => onToolSelect('textbox')}>Text Box</button>
    </div>
  );
};

export default Toolbox;