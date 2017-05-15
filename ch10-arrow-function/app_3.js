const team = {
    members: [ 'Jane', 'Bill' ],
    teamName: 'Super Squad',
    teamSummary: function () {

        // method 1
        const self = this;
        return this.members.map( function ( member ) {
            return `${member} is on team ${self.teamName}`;
        } );

        // method 2

        // return this.members.map( function ( member ) {
        // return `${member} is on team ${this.teamName}`;
        // }.bind( this ) );

    }
};

let summary = team.teamSummary();
console.log( summary );