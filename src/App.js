import React, { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Toolbox from './components/Toolbox';

const App = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className="app">
      <Canvas selectedTool={selectedTool} />
      <Toolbox onToolSelect={handleToolSelect} />
    </div>
  );
};

export default App;