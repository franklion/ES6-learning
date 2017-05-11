// ES6
class Car {
    constructor( { title } ) {
        this.title = title;
    }

    drive() {
        return 'vroom';
    }
}

class Toyota extends Car {
    constructor( options ) {
        super(options); // Car.constructor()
        this.color = options.color;
    }

    honk() {
        return 'beep';
    }
}

const toyota = new Toyota( { color : 'red', title : 'Daily driver' } );
console.log( toyota );
console.log( toyota.honk() );
console.log( toyota.drive() );