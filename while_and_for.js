// 'user strict';

// let num =50;

while (num <= 55) {
  console.log(num);
  num++;
}

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

// for (let i = 1; i < 8; i++){
//    if (i === 6){
//     // break;
//     continue;
//    }
//    console.log(i);
// }


// for (let i = 0; i <3; i++) {
//     console.log(i);
//     for (let j = 0; j <3; j++){
//         console.log(j);
//     }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++){
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 5; k++){
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);

//         }
//     }
// }

let num = 55;

while (num <= 55) {
    console.log(num);
    num++;
  }
 

while ()

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


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