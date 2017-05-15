function User( id ) {
    this.id = id;
}

function generateId() {
    return Math.floor( Math.random() * 9999999 );
}

function createAdminUser( user = new User( generateId() ) ) {
    user.admin = true;

    return user;
}

const adminUser = createAdminUser();
console.log( adminUser );

const user = new User( generateId() );
console.log( user );