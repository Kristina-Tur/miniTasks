// 1. В массиве найти максимальное число и минимальное
//2.  Рекурсия: фибоначчи, факториал, сумма чисел от 0 до N
//
// Факториал
// Fibonacci



//1
const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let maxNumber = numbers[0]
for (let i = 0; i <= numbers.length; i++){
    if(numbers[i] > maxNumber){
        maxNumber = numbers[i]
    }
}
console.log(maxNumber)

let minNumber = numbers[0]
for (let i = 0; i <= numbers.length; i++) {
    if(numbers[i] < minNumber){
        minNumber = numbers[i]
    }
}
console.log(minNumber)

function findMaxNumber(arr) {
    return Math.max(...arr);
}
console.log(findMaxNumber(numbers))

function findMaxNumberR(arr) {
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}
console.log(findMaxNumberR(numbers))

function findMaxNumberS(arr) {
    return arr.sort((a, b) => b - a)[0]
}
console.log(findMaxNumberS(numbers))

//2
//a
const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1
}
console.log(factorial(5))

//b следующее число получается как сумма двух предыдущих
const fib = (n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}
console.log(fib(5))


























