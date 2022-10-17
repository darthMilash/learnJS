'use strict';

// У вас есть список учеников, которые хотят поиграть в игру:
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
// Эти группы должны быть массивами. Как итог, 
// функция возвращает новый массив с тремя командами и строкой как 4й элемент.
// Пример:

// sortStudentsByGroups(students)  =>
// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:
// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:
// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    const sortStudents = [...arr.sort()];
    let a = [], b = [],  c = [],  rest  = [];
    
    for (let i = 0; i < sortStudents.length; i++) {
        if (i < 3) {
            a.push(sortStudents[i]);
        }
        else if (i < 6) {
            b.push(sortStudents[i]);
        }
        else if (i < 9) {
            c.push(sortStudents[i]);
        }
        else {
            rest.push(sortStudents[i]);
        }
    }

    if (rest.length !== 0) {
        return [a, b, c, `Оставшиеся студенты: ${rest.join(', ')}`];
    }
    else {
        return [a, b, c, `Оставшиеся студенты: -`]
    }





    // sortStudents.forEach(students => {
    //     const arr = students;
    //     return console.log(arr);
    // });
    

}

console.log(sortStudentsByGroups(students));
