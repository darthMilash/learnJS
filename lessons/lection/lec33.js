//33. Массивы и псевдомассивы

'use strict';

const arr = [11, 2, 33, 16, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}


// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.pop(); //удаляет посл элемент
// arr.push(10); //Добавляет в конец элемент 

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const value of arr) {
//     console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

//split
// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products);
// console.log(products.join('; '));