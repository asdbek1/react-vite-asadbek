function  Student({car}) {
    console.log(car);
    
    return(
        <>
        <div className="card">
            <img className="rasm" src={car.img} alt={car.name} />
            <h2>{car.name}</h2>
            <h3>{car.brand}</h3>
            <h4>{car.color}</h4>
            <h5>{car.price}</h5>
        </div>
        </>
    )
}

export default Student;