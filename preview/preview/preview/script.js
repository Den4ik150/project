"use strict";

// const boxesQuery = document.querySelectorAll('.box');
// const boxesGet = document.getElementsByClassName('box');

// boxesQuery.forEach(box => {
//     if (box.matches('.this')) console.log('box');
// })

// console.log(boxesQuery[0].closest('.wrapper'));

// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     // document.body.append(div);
//     boxesGet[boxesGet.length] = div; // напрямую HTML коллекцию изменять нельзя
// }

// console.log(boxesQuery);
// console.log(boxesGet);
// // console.log(document.body.children);

// console.log(Array.from(boxesGet));


// const obj = {
//     'name': 'Test',
//    [Symbol("id")]: 1,
//    getId: function() {
//     return this[id];
//    }
// }




// obj[id] = 1;

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (let value in obj) console.log(value)

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123
}

// Сторонний код библиотеки

myAwesomeDB.id = '32323232';

console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);
