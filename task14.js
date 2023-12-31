"use strict";

function factorial(n) {
    if (typeof (n) !== 'number' || !Number.isInteger(n)){
        return "Ошибка, проверьте данные";
    }
    
    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
    return n ? n * factorial(n - 1) : 1;
}
// Вычисление факториала

