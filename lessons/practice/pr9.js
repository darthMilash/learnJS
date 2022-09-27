'use strict';

function fib(a) {
    if (typeof (a) !== 'number' || a <= 0 || !Number.isInteger(a)) {
        return '';
    } else {
        let zero = 0;
        let one = 1;
        let result = ``;
        for (let i = 0; i < a; i++) {
            if (i + 1 === a) {
                result += `${zero}`;
            } else {
                result += `${zero} `;
            }
            let two = one + zero;
            zero = one;
            one = two;
        }
        return result;
    }

}

console.log(fib(2));