// 其餘參數(Rest parameters)
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
function product( ...numbers ) {

    return numbers.reduce( ( acc, number ) => {
        return acc * number;
    }, 1 );
}

console.log( product( 1, 2, 3, 4, 5 ) );