function Field( value ) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}

let userName  = new Field( '2cool' );
let password  = new Field( 'my_password' );
let birthday = new Field( '10/10/2000' );

let fields = [ userName, password, birthday ];

let validateResult = fields.every( ( field ) => {
    return field.validate();
} );

console.log( validateResult );

// this example can be more flexible;
// TODO: In next example, i will add alerts.