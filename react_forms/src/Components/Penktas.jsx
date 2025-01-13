import { useState } from 'react';

export default function Penktas() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [color, setColor] = useState('#000000');
  const [squares, setSquares] = useState([]);

  const createSquare = () => {
    setSquares((prev) => [...prev, { width, height, color }]);
  };

  return (
    <div>
      <div>
        <label>
          Plotis:
          <input
            type="range"
            min="50"
            max="300"
            value={width}
            onChange={(e) => setWidth(parseInt(e.target.value, 10))}
          />
        </label>
        <span>{width}px</span>
      </div>
      <div>
        <label>
          Aukštis:
          <input
            type="range"
            min="50"
            max="300"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value, 10))}
          />
        </label>
        <span>{height}px</span>
      </div>
      <div>
        <label>
          Spalva:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>
      <button onClick={createSquare}>Sukurti</button>
      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {squares.map((square, index) => (
          <div
            key={index}
            style={{
              width: `${square.width}px`,
              height: `${square.height}px`,
              backgroundColor: square.color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}