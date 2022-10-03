'use strict';

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и 
// будет выводить в консоль эти строки в нижнем регистре.

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = 'Семья состоит из: ';
    if (arr !== []) {
        for (let i = 0; i < arr.length; i++) {
            if (i == arr.length-1) {
                str += `${arr[i]}`;
            }
        else {str += `${arr[i]}`;}
        }
        return str;
    }
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    
}

