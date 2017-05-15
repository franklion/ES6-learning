const profile = {
    name : 'Alex',
    getName : () => {
        // return object window { ... }
        return this;
    }
};

console.log( profile.getName() );

/*
 An arrow function expression has a shorter syntax compared to function expressions and does not bind its own this,
 arguments, super, or new.target.

 Because arrow functions do not bind their own 'this',
 'this' will still be pointing at the default object,
 which is the window. So window.name will return 'undefined'.
 */