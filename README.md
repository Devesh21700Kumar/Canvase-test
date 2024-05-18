# Canvase

Canvase is a simple wireframing application built with React that allows users to create rectangles and text boxes on a canvas. It provides a basic set of tools for creating and manipulating objects on the canvas.

## Features

- Create rectangles and text boxes by selecting the corresponding tool and dragging on the canvas.
- Objects are positioned on the canvas using absolute positioning based on the drag start and end coordinates.
- Preview of the object being created is displayed while dragging.
- Canvas can be scrolled horizontally and vertically if the content exceeds the viewport.
- Simple and intuitive user interface.

## Getting Started

### Prerequisites

- Node.js (version 12 or above)
- npm (version 6 or above)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/canvase.git
   ```

2. Navigate to the project directory:

   ```
   cd canvase
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Usage

1. Start the development server:

   ```
   npm start
   ```

2. Open your browser and visit `http://localhost:3000` to see the Canvase application.

3. Select a tool (rectangle or text box) from the toolbox at the bottom of the screen.

4. Click and drag on the canvas to create an object. The object will be added to the canvas when you release the mouse button.

5. Scroll the canvas horizontally or vertically if the content exceeds the viewport.

## File Structure

- `src/`: Contains the source code files.
  - `components/`: Contains the React components.
    - `Canvas.js`: Represents the canvas area where objects are created and manipulated.
    - `Toolbox.js`: Displays the available tools and allows the user to select a tool.
  - `objects/`: Contains the object components.
    - `Rectangle.js`: Represents a rectangle object on the canvas.
    - `TextBox.js`: Represents a text box object on the canvas.
  - `App.js`: The main component that renders the canvas and toolbox.
  - `App.css`: Contains the styles for the application.
  - `index.js`: The entry point of the application.
- `public/`: Contains the public assets and HTML file.
- `package.json`: Contains the project dependencies and scripts.