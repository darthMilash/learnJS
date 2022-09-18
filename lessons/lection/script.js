'use strict'; //строгий режим

// a = 15;
// console.log(a);



// let number = 5;
// const leftBorder = 4;

// //lesson 10

// const vehicleBodyWidth = 5000;
// const vehicleBodyLength = 4000;

// console.log("Ширинка кузова автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);

// //lesson 11

// let numberR = 4;
// console.log(4/0); //Infinity | -Infinity
// console.log('string' * 9); //NaN

// const ob = {
//     name: 'John',
//     ahe: 25,
//     isMarried: false
// };

// console.log(ob.name);

// let arr = ['plug.png', 'orange.png', 6, 'apple.png', {}, []];
// console.log(arr[1]);

// //lesson 12

// let arr12 = [1, 2, 3];
// const obj = {a: 1, b: 2};

// const arrObj = {
//     a: 'a',
//     1: 'b', 
//     2: 'c',
//     abc : {
//         def: {

//         }
//     }
// };

// const b = 'b';

// arrObj[b] = '3245';
// arrObj.b = '1234';

// console.log(arrObj['b']); //or arrObj.b

// console.log(arrObj[1]);

// //lesson 13

// const result = confirm("Arre you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer))

// const answers = [];

// answers[0] = prompt('Name?', '');
// answers[1] = prompt('Years', '');
// answers[2]= prompt('Familiya', '');

// document.write(answers);

// //lesson 14

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// //lesson 15

// console.log('arr' + "")

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// console.log(5%2);

// console.log(2*4 == 8); //true
// console.log(2*4 === '8'); //false

// const isChecked = true,
//       isClose = true;

//       console.log(isChecked && isClose);

//lesson 20 Условия

// if (4 == 4) {
//     console.log('Ok!');
// } else {
//     console.log('Err');
// }

// const num = 50;



// (num === 50) ? console.log('ok') : console.log('error');

// switch (num) {
//     case 49:
//         console.log('error');
//         break;
//     case 100:
//         console.log('error');
//         break;
//     default:
//         console.log('not today');
//         break;
// }

//lesson 22 Cycles

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// lesson 23 Cycles in cycles

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j =0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k =0; k < 3; k++) {
//             if (k == 2) {
//                 continue first;
//             }
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

//lesson 25 Function
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMessage("Hello world!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));


// //1 type

// const anotherNum = ret();
// console.log(anotherNum);

// function ret() {
//     let num = 50;
//     //
//     return num;
// }


// // 2 type
// const logger = function() {
//     console.log('Hello');
// };

// logger();

// //3 type
// const calc2 = (a, b) => { return a + b };

//lesson 26 Function Pt2

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

//lesson 27 About return

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log('Done')
}

test();
