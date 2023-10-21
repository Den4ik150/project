"use strict";

// Динамическая типизация примитивов
// To string
// 1)
console.log(typeof(String(null))); // превращает в  строку (string)

// 2)
console.log(typeof(null + "")); // превращение в строку с помощью конкатенации

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

// To number
// 1)

console.log(typeof(Number("4"))); // превращает в число

// 2)
console.log(typeof(+"5")); // унарный +

// 3) 
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", ""); // превращает строковый тип данных в число, что получаем от пользователя только строка

// To boolean
// 1)

// 0, null, undefined, "", NaN, все возвращает ложь

let switcher = null;

if (switcher) {
    console.log("Working");
}

switcher = 1;

if (switcher) {
    console.log("Working...");
}


// 2) 

console.log(typeof(Boolean("4")));

// 3)
console.log(typeof(!!"4444"));

