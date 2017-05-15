let numbers        = [ 1, 2, 3 ];
let doubledNumbers = [];

// ES5
for ( let i = 0; i < numbers.length; i++ ) {
    doubledNumbers.push( numbers[ i ] * 2 );
}

// ES6
let doubled = numbers.map( ( number ) => {
    return number * 2;
} );

console.log( doubledNumbers );
console.log( doubled );