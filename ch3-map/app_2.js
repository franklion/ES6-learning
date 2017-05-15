let cars = [
    { model : 'Buick', price : 'cheap' },
    { model : 'Camaro', price : 'expensive' }
];

let prices = cars.map( ( car ) => {
    return car.price;
} );

console.log( prices );