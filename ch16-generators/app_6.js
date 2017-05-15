const engineeringTeam = {
    size : 3,
    department : 'Engineering',
    lead : 'Jill',
    manager : 'Alex',
    engineering : 'Dave'
};

function* TeamIterator( team ) {
    yield team.lead;
    yield team.manager;
    yield team.engineering;
}

const names = [];
for ( let name of TeamIterator( engineeringTeam ) ) {
    names.push( name );
}

console.log( names );