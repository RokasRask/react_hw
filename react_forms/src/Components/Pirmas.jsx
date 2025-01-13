import { useState } from 'react';
import rand from '../Functions/rand';

export default function Pirmas() {
  const [squares, setSquares] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addSquares = () => {
    const count = parseInt(inputValue, 10);
    if (isNaN(count) || count <= 0) {
      alert('Įveskite teigiamą skaičių!');
      return;
    }

    const newSquares = Array.from({ length: count }, () => ({
      id: Math.random(),
      number: rand(100, 200)
    }));

    setSquares((prev) => [...prev, ...newSquares]);
  };

  return (
    <>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={addSquares}>Sukurti</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {squares.map((square) => (
          <div 
            key={square.id} 
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: 'red',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '5px',
              fontSize: '14px'
            }}
          >
            {square.number}
          </div>
        ))}
      </div>
    </>
  );
}
