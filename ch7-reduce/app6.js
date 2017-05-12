var numbers = [ 1, 1, 2, 3, 4, 4 ];
var rep     = {};
for ( var key in numbers ) {
    var val = numbers[ key ];
    if ( !rep[ val ] ) {
        rep[ val ] = val;
    }
}

console.log( rep );