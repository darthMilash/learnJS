'use strcit';

// let num = 5; debugger

// function logNumber() {
//     let num = 4;
//     debugger
//     console.log(num);
// }

// num = 6; 

// logNumber(); debugger

function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}

const increment = createCounter();
console.log(increment())
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(c1, c2, c3);

