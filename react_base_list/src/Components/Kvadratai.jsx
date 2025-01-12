export default function Kvadratai() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <div className="divsHere">
        {dogs.map((dog, index) => <div className="square" key={index} >{dog}</div>)}
        </div>
    )

}