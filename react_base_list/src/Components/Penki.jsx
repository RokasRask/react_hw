export default function Penki() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <div className="divsHere">
        {dogs.map((dog, index) => {
            const length = dog.length;
            const color = length > 6 ? 'green' : 'red';

            return (
                <div 
                    className="square" 
                    key={index} 
                    style={{ backgroundColor: color }}
                >
                    {length}
                </div>
            );
        })}
        </div>
    );
}