import React, { useState, useRef } from 'react';
import Rectangle from './objects/Rectangle';
import TextBox from './objects/Textbox';

const Canvas = ({ selectedTool, zoom, onZoom }) => {
  const [objects, setObjects] = useState([]);
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);
  const [selectedObject, setSelectedObject] = useState(null);
  const canvasRef = useRef(null);

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
        text: '',
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

  const handleObjectClick = (objectId) => {
    setSelectedObject(objectId);
  };

  const handleObjectDelete = () => {
    if (selectedObject) {
      const updatedObjects = objects.filter((obj) => obj.id !== selectedObject);
      setObjects(updatedObjects);
      setSelectedObject(null);
    }
  };

  const handleObjectDrag = (event, objectId) => {
    const { movementX, movementY } = event;
    const updatedObjects = objects.map((obj) => {
      if (obj.id === objectId) {
        return {
          ...obj,
          x: obj.x + movementX,
          y: obj.y + movementY,
        };
      }
      return obj;
    });
    setObjects(updatedObjects);
  };

  const handleObjectResize = (objectId, width, height) => {
    const updatedObjects = objects.map((obj) => {
      if (obj.id === objectId) {
        return {
          ...obj,
          width,
          height,
        };
      }
      return obj;
    });
    setObjects(updatedObjects);
  };

  const handleObjectTextChange = (objectId, text) => {
    const updatedObjects = objects.map((obj) => {
      if (obj.id === objectId) {
        return {
          ...obj,
          text,
        };
      }
      return obj;
    });
    setObjects(updatedObjects);
  };

  const handleWheel = (event) => {
    event.preventDefault();
    const delta = event.deltaY < 0 ? 1.1 : 0.9;
    const newZoom = zoom * delta;
    onZoom(newZoom);
  };

  const handleKeyDown = (event) => {
    if ((event.metaKey || event.ctrlKey) && (event.key === '+' || event.key === '-')) {
      event.preventDefault();
      const delta = event.key === '+' ? 1.1 : 0.9;
      const newZoom = zoom * delta;
      onZoom(newZoom);
    }
  };

  const renderObject = (object) => {
    switch (object.type) {
      case 'rectangle':
        return (
          <Rectangle
            key={object.id}
            {...object}
            selected={selectedObject === object.id}
            onSelect={() => handleObjectClick(object.id)}
            onDrag={handleObjectDrag}
            onResize={handleObjectResize}
          />
        );
      case 'textbox':
        return (
          <TextBox
            key={object.id}
            {...object}
            selected={selectedObject === object.id}
            onSelect={() => handleObjectClick(object.id)}
            onDrag={handleObjectDrag}
            onTextChange={handleObjectTextChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="canvas"
      ref={canvasRef}
      onMouseDown={handleCanvasMouseDown}
      onMouseUp={handleCanvasMouseUp}
      onMouseMove={handleCanvasMouseMove}
      onWheel={handleWheel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{ transform: `scale(${zoom})` }}
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
      {selectedObject && (
        <div className="delete-button" onClick={handleObjectDelete}>
          Delete
        </div>
      )}
    </div>
  );
};

export default Canvas;