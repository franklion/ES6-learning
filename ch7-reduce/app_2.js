let primaryColors = [
    { color : 'red' },
    { color : 'yellow' },
    { color : 'blue' }
];

let previousColors = primaryColors.reduce( ( previous, primaryColor ) => {

    previous.push( primaryColor.color );
    return previous;

}, [] );

console.log( previousColors );