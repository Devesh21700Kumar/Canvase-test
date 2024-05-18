import React from 'react';

const Rectangle = ({ x, y, width, height }) => {
  return (
    <div
      className="rectangle"
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
        border: '1px solid black',
      }}
    />
  );
};

export default Rectangle;