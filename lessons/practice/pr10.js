'use strict';

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let str = '';
        const arrLang = [...plan.skills.languages];
        
        str = `Мне ${plan.age} и я владею языками: `;

        arrLang.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        return console.log(str);
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    return console.log(`${plan.skills.exp}`);
}


// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков.  Если ни один не указан, то возвращается пустая строка.

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    for (let key in plan.skills.programmingLangs) {
        str += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
    }
    return console.log(str);
    // "Язык js изучен на 20% Язык php изучен на 10%"
}

showProgrammingLangs(personalPlanPeter);

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
// При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). 
// Если данные в объекте поменяются, то и сообщение тоже изменится.


