let computers = [
    { name : 'Apple', ram : 24 },
    { name : 'Compaq', ram : 4 },
    { name : 'Acer', ram : 32 }
];

let allComputersCanRunProgrom      = true;
let onlySomeComputersCanRunProgrom = false;

for ( let i = 0; i < computers.length; i++ ) {
    let computer = computers[ i ];

    if ( computer.ram < 16 ) {
        allComputersCanRunProgrom = false;
    } else {
        onlySomeComputersCanRunProgrom = true
    }

}

console.log( 'allComputersCanRunProgrom: ' + allComputersCanRunProgrom );
console.log( 'onlySomeComputersCanRunProgrom: ' + onlySomeComputersCanRunProgrom );
console.log( '------------------' );

// every spirit: AND(&&)
// ram => 24 , 4, 16
// true && false && true = false
// return false
let result1 = computers.every( ( computer ) => {
    return computer.ram > 16;
} );

console.log( result1 );
console.log( '------------------' );

// some spirit: OR(||)
// ram => 24 , 4, 16
// true || false || true = true
// return true
let result2 = computers.some( ( computer ) => {
    return computer.ram > 16;
} );

console.log( result2 );