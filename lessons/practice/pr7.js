'use strict';

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба 
// (тоже базовая математика, иногда используется в создании анимаций). 
// Эта функция принимает в себя целое число со значением длины ребра куба. 
// Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// Место для первой задачи
function calculateVolumeAndArea(num) {

    if (num > 0 && typeof(num) == 'number' && Number.isInteger(num)) {
        const area = 6 * num * num;
        const volume = num * num * num;
        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    }
    else {
        return 'При вычислении произошла ошибка';
    }
}


// Место для второй задачи
function getCoupeNumber(num) {
    if (num > 0 && num < 37 && typeof(num) == 'number' && Number.isInteger(num)) {
        if (num  < 5) return `1`;
        else if (num > 4 && num  < 9) return 2;
        else if (num > 8 && num  < 13) return 3;
        else if (num > 12 && num  < 17) return 4;
        else if (num > 16 && num  < 21) return 5;
        else if (num > 20 && num  < 25) return 6;
        else if (num > 24 && num  < 29) return 7;
        else if (num > 28 && num  < 33) return 8;
        else return 9;

        
    }
    else if (num > 36 || num === 0) {
        return 'Таких мест в вагоне не существует';
    }
    else return 'Ошибка. Проверьте правильность введенного номера места';
}


