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

//lesson 20

if (4 == 4) {
    console.log('Ok!');
} else {
    console.log('Err');
}

const num = 50;



(num === 50) ? console.log('ok') : console.log('error');

switch (num) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('error');
        break;
    default:
        console.log('not today');
        break;
}


