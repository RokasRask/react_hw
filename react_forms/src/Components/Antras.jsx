import { useState, useEffect } from 'react';

export default function Antras() {
  const [cats, setCats] = useState(() => {
    const savedCats = localStorage.getItem('cats');
    return savedCats ? JSON.parse(savedCats) : [];
  });
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');

  useEffect(() => {
    localStorage.setItem('cats', JSON.stringify(cats));
  }, [cats]);

  const addCat = () => {
    const weightNumber = parseFloat(weight);
    if (!name || isNaN(weightNumber) || weightNumber <= 0) {
      alert('Įveskite tinkamą vardą ir svorį!');
      return;
    }

    const newCat = { id: Math.random(), name, weight: weightNumber };
    setCats((prev) => [...prev, newCat].sort((a, b) => b.weight - a.weight));
    setName('');
    setWeight('');
  };

  const totalWeight = cats.reduce((sum, cat) => sum + cat.weight, 0);

  return (
    <>
      <div>
        <input 
          type="text" 
          placeholder="Katinuko vardas" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Katinuko svoris" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
        />
        <button onClick={addCat}>Pridėti</button>
      </div>
      <h3>Bendras svoris: {totalWeight.toFixed(2)} kg</h3>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            {cat.name} - {cat.weight} kg
          </li>
        ))}
      </ul>
    </>
  );
}
