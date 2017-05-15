function validateShoppingList( ...items ) {
    if ( items.indexOf( 'milk' ) === -1 ) {
        return [ 'milk', ...items ];
    }

    return items;
}

console.log( validateShoppingList( 'oranges', 'bread', 'egg' ) );