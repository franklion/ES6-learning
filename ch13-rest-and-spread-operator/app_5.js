// 展開運算子(Spread Operator)
// 展開運算子是"把一個陣列展開(expand)成個別數值" 的速寫語法
function join( array1, array2 ) {
    return [ ...array1, ...array2 ];
}

console.log( join( [ 1, 2, 3 ], [ 4, 5, 6 ] ) );