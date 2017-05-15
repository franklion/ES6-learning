function* shopping() {
    const stuffFromStore = yield 'cash';
    return stuffFromStore;
}

const gen = shopping();
console.log( gen.next() );
console.log( gen.next( 'groceries' ) );