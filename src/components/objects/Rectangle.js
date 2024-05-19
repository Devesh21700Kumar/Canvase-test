import React from 'react';
// resiable library
import { Resizable } from 're-resizable';

const Rectangle = ({ id, x, y, width, height, selected, onSelect, onDrag, onResize }) => {
  return (
    <Resizable
      className={`rectangle ${selected ? 'selected' : ''}`}
      size={{ width, height }}
      onResizeStop={(e, direction, ref, d) => {
        onResize(id, width + d.width, height + d.height);
      }}
      draggable
      onDragStop={(e, data) => {
        onDrag(e, id);
      }}
      style={{
        position: 'absolute',
        left: x,
        top: y,
      }}
      onClick={onSelect}
    />
  );
};

export default Rectangle;