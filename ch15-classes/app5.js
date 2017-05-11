class Monster {
    constructor( options ) {
        this.health = 100;
        this.name   = options.name;
    }
}

class Snake extends Monster {
    constructor( options ) {
        super( options );
    }

    bite( snake ) {
        snake.decHealth( Math.floor( (Math.random() * 20) ) + 1 );
        return `${this.name} bite ${snake.getName()}, his health is now ${snake.getHealth()}`;
    }

    getName() {
        return this.name;
    }

    getHealth() {
        return this.health;
    }

    decHealth( qty ) {
        this.health = this.health - qty;
    }
}

const angrySnake = new Snake( { name : 'Angry Snake' } );
const happySnake = new Snake( { name : 'Happy Snake' } );

angrySnake.bite( happySnake );
for ( let i = 0; i < 10; i++ ) {
    console.log( 'Round ' + (i + 1) );

    console.log( angrySnake.bite( happySnake ) );
    if ( happySnake.getHealth() <= 0 ) {
        console.log( `${happySnake.getName()} is dead` );
        break;
    }

    console.log( happySnake.bite( angrySnake ) + '\n' );
    if ( angrySnake.getHealth() <= 0 ) {
        console.log( `${angrySnake.getName()} is dead` );
        break;
    }

}