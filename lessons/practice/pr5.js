'use strict';


//     *
//    ***
//   *****
//  *******
// *********
//***********

const lines = 5;
let result = '';

for (let i = 1; i <= lines+1; i++) {
    for (let j = lines+1-i; j > 0; j--) {
        result += ' ';
    }
    result += '*';
    for (let k = 1; k < i; k++) {
        result += '**';
    }
    result += '\n';
}

console.log(result);


for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

// Проверяется именно переменная result, формируйте строку в ней