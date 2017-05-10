let products = [
    { name : 'cucumber', type : 'vegetable' },
    { name : 'banana', type : 'fruit' },
    { name : 'celery', type : 'vegetable' },
    { name : 'orange', type : 'fruit' }
];

let filteredProducts = [];

// es5 method
for ( let i = 0; i < products.length; i++ ) {
    if ( products[ i ].type === 'fruit' ) {
        filteredProducts.push( products[ i ] );
    }
}

console.log( filteredProducts );

// es6 filter
filteredProducts = products.filter((product) => {
   return product.type === 'vegetable';
});

console.log( filteredProducts );