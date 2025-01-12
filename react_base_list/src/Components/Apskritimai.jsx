export default function Apskritimai() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    const sortedDogs = dogs.sort((a, b) => b.length - a.length);

    return (
        <div className="divsHere">
            {sortedDogs.map((dog, index) => (
                <div className="circle" key={index}>
                    {index + 1}. {dog}
                </div>
            ))}
        </div>
    );

}