import React, { useState, useEffect } from 'react';

const TextBox = ({ id, x, y, width, height, text, selected, onSelect, onDrag, onTextChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isEditing && text === '') {
      onTextChange(id, '');
    }
  }, [isEditing, text, id, onTextChange]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleTextChange = (event) => {
    onTextChange(id, event.target.value);
  };

  return (
    <div
      className={`textbox ${selected ? 'selected' : ''}`}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
      }}
      onClick={onSelect}
      onDoubleClick={handleDoubleClick}
      draggable
      onDragStop={(e) => {
        onDrag(e, id);
      }}
    >
      {isEditing ? (
        <textarea
          value={text}
          onChange={handleTextChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <div>{text}</div>
      )}
    </div>
  );
};

export default TextBox;