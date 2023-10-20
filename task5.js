// Место для первой задачи
function sayHello(name) {
    return "Привет, " + name + "!";
}

// Место для второй задачи
function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1]; 
}

// Место для третьей задачи
function getMathResult(base, count) {
    if (typeof(count) !== 'number' || count <= 0) {
        return base
    }
    
    let str = '';
    
    for (let i = 1; i <= count; i++) {
        if (i === count) {
            str += `${base * i}`;
        } else {
            str += `${base * i}---`;
        }
     }
     return str;
 }