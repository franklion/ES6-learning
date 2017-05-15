function Car( model ) {
    this.model = model;
}

var cars = [
    new Car( 'BMW' ),
    new Car( 'Mazda' ),
    new Car( 'Honda' ),
    new Car( 'Volvo' ),
    new Car(' Smart')
]

let filteredCar = cars.find( ( car ) => {
    return car.model === 'Volvo';
} );

console.log( filteredCar );