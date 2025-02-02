import React from 'react';

const ListAnimal = ({ animal, index, editAnimal, deleteAnimal }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>{animal.type} - {animal.weight} kg</span>
            <div>
                <button className="btn blue me-2" onClick={() => editAnimal(index)}>Redaguoti svorį</button>
                <button className="btn red" onClick={() => deleteAnimal(index)}>Ištrinti</button>
            </div>
        </li>
    );
};

export default ListAnimal;