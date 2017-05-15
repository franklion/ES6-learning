let names = [
    'Alexandria',
    'Matthew',
    'Joe'
];

// every spirit is AND
let result1 = names.every( ( name ) => {
    return name.length > 4;
} );

console.log( result1 );
console.log( '---------------------' );

// some spirit is OR
let result2 = names.some( ( name ) => {
    return name.length > 4;
} );

console.log( result2 );

