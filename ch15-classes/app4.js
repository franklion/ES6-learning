class Monster {
    constructor( options ) {
        this.health = 100;
        this.name   = options.name;
    }
}

const monster = new Monster( { name : 'fire man' } );

console.log( monster );