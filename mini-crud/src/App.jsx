import './crud.scss';
import { useState, useEffect } from 'react';
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';
import Delete from './Components/Delete';

const App = () => {
    const [animals, setAnimals] = useState([]);
    const [editData, setEditData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);

    useEffect(_ => {
        const storedAnimals = JSON.parse(localStorage.getItem('animals')) || [];
        setAnimals(storedAnimals);
    }, []);

    const saveAnimals = newAnimals => {
        localStorage.setItem('animals', JSON.stringify(newAnimals));
        setAnimals(newAnimals);
    };

    const addAnimal = animal => {
        const newAnimals = [...animals, animal];
        saveAnimals(newAnimals);
    };

    const editAnimal = index => {
        setEditData({ index, animal: animals[index] });
    };

    const updateAnimal = (index, updatedAnimal) => {
        const newAnimals = [...animals];
        newAnimals[index] = updatedAnimal;
        saveAnimals(newAnimals);
        setEditData(null);
    };

    const deleteAnimal = index => {
        setDeleteData({ index, animal: animals[index] });
    };

    const confirmDelete = index => {
        const newAnimals = animals.filter((_, i) => i !== index);
        saveAnimals(newAnimals);
        setDeleteData(null);
    };

    const closeModal = _ => {
        setEditData(null);
        setDeleteData(null);
    };

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <Create addAnimal={addAnimal} />
                    </div>
                    <div className="col-md-8">
                        <List
                            animals={animals}
                            editAnimal={editAnimal}
                            deleteAnimal={deleteAnimal}
                        />
                    </div>
                </div>
            </div>
            {editData !== null && (
                <Edit
                    animal={editData.animal}
                    index={editData.index}
                    updateAnimal={updateAnimal}
                    closeModal={closeModal}
                />
            )}
            {deleteData !== null && (
                <Delete
                    animal={deleteData.animal}
                    index={deleteData.index}
                    confirmDelete={confirmDelete}
                    closeModal={closeModal}
                />
            )}
        </>
    );
};

export default App;