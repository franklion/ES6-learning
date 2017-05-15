function createBookShop( inventory ) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce( ( total, book ) => {
                return total + book.inventory;
            }, 0 )
        },
        priceForTitle( title ) {
            return this.inventory.find( ( book ) => {
                return book.title === title
            } ).price;
        }
    }
}

const inventory = [
    { title : 'Harry Potter', price : 10, inventory: 35 },
    { title : 'Eloquent Javascript', price : 15, inventory: 50 }
];

const bookShop = createBookShop( inventory );

console.log( bookShop.inventoryValue() );
console.log( bookShop.priceForTitle( 'Eloquent Javascript' ) );