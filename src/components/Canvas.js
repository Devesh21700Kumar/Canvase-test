import React, { useState } from 'react';
import Rectangle from './objects/Rectangle';
import TextBox from './objects/Textbox';

const Canvas = ({ selectedTool }) => {
  const [objects, setObjects] = useState([]);
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);

  const handleCanvasMouseDown = (event) => {
    if (selectedTool) {
      setDragStart({ x: event.clientX, y: event.clientY });
    }
  };

  const handleCanvasMouseUp = (event) => {
    if (selectedTool && dragStart) {
      const width = event.clientX - dragStart.x;
      const height = event.clientY - dragStart.y;

      const newObject = {
        id: Date.now(),
        type: selectedTool,
        x: dragStart.x,
        y: dragStart.y,
        width,
        height,
      };

      setObjects([...objects, newObject]);
      setDragStart(null);
      setDragEnd(null);
    }
  };

  const handleCanvasMouseMove = (event) => {
    if (selectedTool && dragStart) {
      setDragEnd({ x: event.clientX, y: event.clientY });
    }
  };

  const renderObject = (object) => {
    switch (object.type) {
      case 'rectangle':
        return <Rectangle key={object.id} {...object} />;
      case 'textbox':
        return <TextBox key={object.id} {...object} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="canvas"
      onMouseDown={handleCanvasMouseDown}
      onMouseUp={handleCanvasMouseUp}
      onMouseMove={handleCanvasMouseMove}
    >
      {objects.map(renderObject)}
      {selectedTool && dragStart && dragEnd && (
        <div
          className={`preview ${selectedTool}`}
          style={{
            position: 'absolute',
            left: dragStart.x,
            top: dragStart.y,
            width: dragEnd.x - dragStart.x,
            height: dragEnd.y - dragStart.y,
          }}
        />
      )}
    </div>
  );
};

export default Canvas;