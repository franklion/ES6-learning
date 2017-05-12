let numbers = [ 1, 1, 2, 3, 4, 4 ];

function unique( numbers ) {
    return numbers.reduce( ( acc, number ) => {

        // method 1
        // if ( !acc.includes( number ) ) {
        //     acc.push( number );
        // }
        //
        // return acc;

        let existingElement = acc.find( ( target ) => {
            return target === number;
        } );
        if ( !existingElement ) {
            acc.push( number );
        }

        return acc;
    }, [] );
}

console.log( unique( numbers ) );


