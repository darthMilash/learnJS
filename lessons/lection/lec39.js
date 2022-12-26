'use strict';

//to string
//1) 
console.log(typeof(String(null)));
//2) Concatenation
console.log(typeof(5 + ' '));

const num = 3;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

//to Number
//1)
console.log(typeof(Number('4')));
//2) Унарный плюс
console.log(typeof(+'5'));
//3)
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("hello", "");

//to bolean
// 0, '', null, undefined, NaN; ---- false
//1
let switcher = null; 

if (switcher) {
    console.log('Working...');
}

switcher = 1; 

if (switcher) {
    console.log('Working...');
}

//2
console.log(typeof(Boolean('4')));

//3
console.log(typeof(!!"44444"));