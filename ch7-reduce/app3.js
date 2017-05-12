function balancedParens( string ) {
    return string.split( '' ).reduce( ( previous, char ) => {
        if ( previous < 0 ) {
            return previous;
        }
        if ( char === '(' ) {
            return ++previous;
        }

        if ( char === ')' ) {
            return --previous;
        }
    }, 0 );
}

console.log( balancedParens( '((' ) );

// design pattern: balance number is 0.
// to offset +1 or -1

// [REMARK]
// ++x (pre-increment) means "increment the variable; the value of the expression is the final value"
// x++ (post-increment) means "remember the original value, then increment the variable; the value of the expression is the original value"