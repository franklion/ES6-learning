// ES5
const numbers = [ 1, 2, 3 ];

let doubleNumbers = numbers.map( function ( number ) {
    return 2 * number;
} );

console.log( doubleNumbers );

// ES6
const years = [ 1920, 2000, 2017 ];

let newYears = years.map( ( year ) => {
    return year - 1911;
} );

console.log( newYears );