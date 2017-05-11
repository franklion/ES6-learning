const team = {
    members: [ 'Jane', 'Bill' ],
    teamName: 'Super Squad',
    teamSummary: function () {
        // return object team { ... }
        return this
    }
};

let summary = team.teamSummary();
console.log( summary );

/*---------------------------------------------- */

const team2 = {
    members: [ 'Jane', 'Bill' ],
    teamName: 'Super Squad',
    teamSummary: () => {
        // return object window { ... }
        return this
    }
};

let summary2 = team2.teamSummary();
console.log( summary2 );

