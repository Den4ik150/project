"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1

// };

// const copy = obj; // Ссылку на существующий объект, передача по ссылке. 

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for(key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    i: 20
};

const clone = Object.assign({}, add); // Объединяет сразу несколько объектов

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice(); // метод который позволяет скопировать старый массив

newArr[1] = 'adsadsd';
console.log(newArr);
console.log(oldArr);

const video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress', 'lifejournal', 'blogger'],
        internet = [...video,...blogs, 'vk', 'facebook']; // ... оператор разворота spread

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];


const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
