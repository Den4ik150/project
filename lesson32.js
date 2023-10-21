"use strict";

const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();


const {border, background} = options.colors; // Деструктуризация (вытащили свойства в качестве отдельных переменных)
console.log(border); 

console.log(Object.keys(options).length); // Берет наш объект и на его основании создает массив со всеми ключами

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`); // перебор свойств объекта внутри объекта; 
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`); // Перебор и взаимодействие с объектами (for in)
//         counter++; // Показывает количество свойств в объекте
//     }
// }
// console.log(counter);


