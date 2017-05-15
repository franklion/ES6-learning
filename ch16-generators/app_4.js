function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();
console.log( gen.next() ); // get { value: 'red', done: false }
console.log( gen.next() ); // get { value: 'blue', done: false }
console.log( gen.next() ); // get { value: 'green', done: false }
console.log( gen.next() ); // get { value: undefined, done: true }