let users = [
    { name : 'Jill' },
    { name : 'Alex', id: 2 },
    { name : 'Bill' },
    { name : 'Alex' }
];

let filteredUser = users.find( ( user ) => {
    return user.name === 'Alex';
} );

console.log( filteredUser );