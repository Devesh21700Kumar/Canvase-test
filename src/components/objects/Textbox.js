import React, { useState } from 'react';

const TextBox = ({ x, y, width, height }) => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      className="textbox"
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
        border: '1px solid black',
      }}
    >
      <textarea value={text} onChange={handleTextChange} />
    </div>
  );
};

export default TextBox;