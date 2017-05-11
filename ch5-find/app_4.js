var ladders = [
    { id : 1, height : 20, color : 'blue', status : 'broken' },
    { id : 2, height : 20, color : 'blue', status : 'free' },
    { id : 3, height : 30, color : 'blue', status : 'in use' },
    { id : 4, height : 20, color : 'red', status : 'free' },
    { id : 5, height : 50, color : 'blue', status : 'free' }
];

function findWhere( array, criteria ) {
    let key = Object.keys( criteria )[ 0 ];
    // find method only return first data
    // filter method can return many data
    return array.filter( ( item ) => {
        return item[ key ] === criteria[ key ];
    } );
}

let result = findWhere( ladders, { 'height' : 20 } );
console.log( result );