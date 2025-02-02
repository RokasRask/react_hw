import React from 'react';

const Delete = ({ animal, index, confirmDelete, closeModal }) => {
    return (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Ar tikrai norite ištrinti šį gyvulį?</h2>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <p>{animal.type} - {animal.weight} kg</p>
                        <button className="btn red me-2" onClick={() => confirmDelete(index)}>Taip</button>
                        <button className="btn btn-secondary" onClick={closeModal}>Ne</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delete;