import React, { useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import Toolbox from "./components/Toolbox";

const App = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [zoom, setZoom] = useState(1);

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
  };

  const handleZoom = (zoomLevel) => {
    setZoom(zoomLevel);
  };

  return (
    <div className="app">
      <Canvas selectedTool={selectedTool} zoom={zoom} onZoom={handleZoom} />{" "}
      <Toolbox onToolSelect={handleToolSelect} />
    </div>
  );
};

export default App;
