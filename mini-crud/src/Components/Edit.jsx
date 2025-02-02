import React, { useState } from 'react';

const Edit = ({ animal, index, updateAnimal, closeModal }) => {
    const [weight, setWeight] = useState(animal.weight);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateAnimal(index, { ...animal, weight: parseFloat(weight) });
        closeModal();
    };

    return (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Redaguoti svorį</h2>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Svoris:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn green">Išsaugoti</button>
                            <button type="button" className="btn btn-secondary ms-2" onClick={closeModal}>Atšaukti</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;