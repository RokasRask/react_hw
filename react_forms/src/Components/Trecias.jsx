import { useState } from 'react';

export default function Trecias() {
  const [firstValue, setFirstValue] = useState(100);
  const [secondValue, setSecondValue] = useState(50);

  const ratio = 2; // Santykis tarp laukelių

  const handleFirstChange = (e) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setFirstValue(newValue);
      setSecondValue(newValue / ratio);
    }
  };

  const handleSecondChange = (e) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setSecondValue(newValue);
      setFirstValue(newValue * ratio);
    }
  };

  return (
    <div>
      <div>
        <label>
          Pirmas laukelis:
          <input
            type="number"
            value={firstValue}
            onChange={handleFirstChange}
          />
        </label>
      </div>
      <div>
        <label>
          Antras laukelis:
          <input
            type="number"
            value={secondValue}
            onChange={handleSecondChange}
          />
        </label>
      </div>
    </div>
  );
}