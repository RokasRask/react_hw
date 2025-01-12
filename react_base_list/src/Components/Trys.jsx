export default function Trys() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    const sortedDogs = dogs.sort((a, b) => b.length - a.length);

    return (
        <div className="divsHere">
            {sortedDogs.map((dog, index) => {
                // Jei indeksas porinis, rodome kvadrate, jei neporinis - apskritime
                const shapeClass = index % 2 === 0 ? 'square' : 'circle';
                return (
                    <div className={shapeClass} key={index}>
                        {index + 1}. {dog}
                    </div>
                );
            })}
        </div>
    );
}