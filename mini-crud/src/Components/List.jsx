import React from 'react';
import ListAnimal from './ListAnimal';

const List = ({ animals, editAnimal, deleteAnimal }) => {
    return (
        <div className="card p-3">
            <h2 className="card-title">Gyvulių sąrašas</h2>
            <ul className="list-group">
                {animals.map((animal, index) => (
                    <ListAnimal
                        key={index}
                        animal={animal}
                        index={index}
                        editAnimal={editAnimal}
                        deleteAnimal={deleteAnimal}
                    />
                ))}
            </ul>
        </div>
    );
};

export default List;