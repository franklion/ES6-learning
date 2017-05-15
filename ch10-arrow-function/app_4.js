const team = {
    members: [ 'Jane', 'Bill' ],
    teamName: 'Super Squad',
    teamSummary: function () {

        // ES6 this === team
        return this.members.map( ( member ) => {
            return `${member} is on team ${this.teamName}`;
        } );
    }
};

let summary = team.teamSummary();
console.log( summary );