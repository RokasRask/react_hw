export default function Keturi() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <div className="divsHere">
            {dogs
                .filter(dog => dog[0] === dog[0].toLowerCase())
                .map((dog, index) => <div className="square" key={index}>{dog}</div>)
            }
        </div>
    )
}