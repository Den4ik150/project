"use strict";

// First task
for (let i = 5; i <=10; i++) {
  console.log(i);
}

// Second task
for (let i = 20; i > 10; i--) {
  if (i === 13) {
    break;
  }
  console.log(i);
}
// Third task
for (let i = 2; i <=10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Fourth task
let i = 2;
while (i <= 16) {
  if (i % 2 === 0) {
    i++;
    continue;
  } else {
    console.log(i);
  }
  i++;
}

// Fifth task
const arr = [];

for (let i = 5; i <= 10; i++) {
  arr[i - 5] = i;
}
  console.log(arr);
  return arr;


  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  // Пишем решение вот тут
      result[arr - 6 ] = arr;
      console.log(result);
  
  // Не трогаем
  return result;