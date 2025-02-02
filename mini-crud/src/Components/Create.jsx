import React, { useState } from 'react';

const Create = ({ addAnimal }) => {
    const [type, setType] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type && weight) {
            addAnimal({ type, weight: parseFloat(weight) });
            setType('');
            setWeight('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Pridėti naują gyvulį</h2>
            <div>
                <label>Tipas:</label>
                <select value={type} onChange={(e) => setType(e.target.value)} required>
                    <option value="">Pasirinkite tipą</option>
                    <option value="avis">Avis</option>
                    <option value="antis">Antis</option>
                    <option value="antilope">Antilopė</option>
                </select>
            </div>
            <div>
                <label>Svoris:</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Pridėti</button>
        </form>
    );
};

export default Create;