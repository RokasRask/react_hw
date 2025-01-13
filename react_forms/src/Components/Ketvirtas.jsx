import { useState } from 'react';

export default function Ketvirtas() {
  const [text, setText] = useState('');
  const [color, setColor] = useState('black');
  const [fontSize, setFontSize] = useState('16px');
  const [fontFamily, setFontFamily] = useState('Arial');

  const colors = ['black', 'red', 'blue', 'green', 'purple'];
  const fontSizes = ['12px', '16px', '20px', '24px', '28px'];
  const fontFamilies = ['Arial', 'Times New Roman', 'Verdana', 'Georgia', 'Courier New'];

  return (
    <div>
      <div>
        <label>
          Tekstas:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Spalva:
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            {colors.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Šrifto dydis:
          <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
            {fontSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Šriftas:
          <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
            {fontFamilies.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div style={{
        marginTop: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        color: color,
        fontSize: fontSize,
        fontFamily: fontFamily,
      }}>
        {text || 'Čia bus jūsų tekstas'}
      </div>
    </div>
  );
}