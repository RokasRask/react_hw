import React, { useState } from 'react';

const Create = ({ addAnimal }) => {
    const [type, setType] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (type && weight) {
            addAnimal({ type, weight: parseFloat(weight) });
            setType('');
            setWeight('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card p-3">
            <h2 className="card-title">Pridėti naują gyvulį</h2>
            <div className="mb-3">
                <label className="form-label">Tipas:</label>
                <select
                    className="form-select"
                    value={type}
                    onChange={e => setType(e.target.value)}
                    required
                >
                    <option value="">Pasirinkite tipą</option>
                    <option value="Avis">Avis</option>
                    <option value="Antis">Antis</option>
                    <option value="Antilopė">Antilopė</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Svoris:</label>
                <input
                    type="number"
                    className="form-control"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="green">Pridėti</button>
        </form>
    );
};

export default Create;