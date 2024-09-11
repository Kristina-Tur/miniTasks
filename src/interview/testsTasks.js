// 1. В массиве найти максимальное число и минимальное
//2.  Рекурсия: фибоначчи, факториал, сумма чисел от 0 до N
//
// Факториал
// Fibonacci
// Сумма n чисел
// 3.Call, apply, bind
//
// bind (не выполняет функцию, возвращает другую функцию с навсегда заданным контекстом):
//apply\call (сразу выполняют функцию, разница двух функций в том, как передавать параметры...    apply - array, call - comma (запятая))

//1
const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let maxNumber = numbers[0]
for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i]
    }
}
console.log(maxNumber)

let minNumber = numbers[0]
for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] < minNumber) {
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

//c
const sum = (n) => {
    return n === 1 ? n : sum(n - 1) + n
}
console.log(sum(2))

//3 bind
/*function foo() {
    console.log(this.name);
}

let a = { name: 'Dima' };
let b = { name: 'Viktor' };

const bindedFooA = foo.bind(a);
const bindedFooB = foo.bind(b);

bindedFooA();
bindedFooB();*/

//-----
/*function foo(age, city) {
    console.log(`${this.name}, ${age}, ${city}`);
}

let a = {name: 'Dima'};
let b = {name: 'Viktor'};

const bindedFooA = foo.bind(a, 30);
const bindedFooB = foo.bind(b, 18);

bindedFooA('Tbilisi');
bindedFooB('Minsk');*/

/*function foo() {
    console.log(this.name);
}

let a = { name: 'Dima' };
let b = { name: 'Viktor' };

const bindedFooA = foo.bind(a);
const bindedFooB = foo.bind(b);

bindedFooA(); // 'Dima'
bindedFooB(); // 'Viktor'

----------

  function foo(age, city) {
      console.log(`${this.name}, ${age}, ${city}`);
  }

  let a = { name: 'Dima' };
  let b = { name: 'Viktor' };

  const bindedFooA = foo.bind(a, 30);
  const bindedFooB = foo.bind(b, 18);

  bindedFooA('Tbilisi'); // Dima, 30, Tbilisi
  bindedFooB('Minsk'); // 'Viktor, 18, Minsk
*/

//3 apply, call
function foo(age, city) {
    console.log(`${this.name}, ${age}, ${city}`)
}

let a = {name: 'Dima'}
let b = {name: 'Viktor'}


foo.apply(a, [31, 'Tbilisi'])
foo.call(b, 18, 'Minsk')


//4. map, filter, reduce
//map. Возвращает НОВЫЙ массив.
//    map нужен, чтобы из массива, в котором содержаться элементы в оригинальном виде, получить массив той же длины,
//    который сожержит "новые" элементы, полученные на основе элементов старого массива:

//1. массив строк преобразовываем в массив чисел ['1', '2', '3']
//2. из массива чисел получаем массив объектов, с полями: age и adult (взрослый): true\false в зависимости от того, возраст >= 18 или нет


    //Решение
    ['1', '2', '3'].map((el) => +el)

    [18, 20, 12].map((age) => {
    if (age >= 18) {
        return {age: age, adult: true}
    } else {
        return {age, adult: false}
    }
})

//filter возвращает НОВЫЙ массив.
// filter нужен, чтобы получить новый отфильтрованный массив, в котором будет меньше элементов, чем в исходном, потому что мы фильтруем исходный, убираем ненужное:
// 1. пропускаем в результирующий массив не пустые строки
// 2. пропускаем на вечеринку только тех, кто девочка и кому 18+

    ['Minsk', 'Moscow', '', '', 'London', '']
    [{age: 18, sex: 'f', name: 'Sveta'}, {age: 17, sex: 'f', name: 'Sashka'}, {
    age: 19,
    sex: 'm',
    name: 'Andrew'
}]






    //Решение
    ['Minsk', 'Moscow', '', '', 'London', ''].filter((el) => el !== '');
[{age: 18, sex: 'f', name: 'Sveta'}, {age: 17, sex: 'f', name: 'Sashka'}, {
    age: 19,
    sex: 'm',
    name: 'Andrew'
}].filter((person) => {
    return person.age >= 18 && person.sex === 'f';
})


//reduce пробегается по всему массиву и на выход выдаёт какое-то одно обобщённое значение. Это может быть как новый массив,
// так и простое значение примитив или объект:
//1. подсчитываем, сколько у нас в массиве не пустых строк
//2. на выходе получаем новый массив, состоящий из людей, кто девочка и кому 18+ (но лучше эту задачу решать с помощью filter,
// но и так можно)
// 3. подсчёт суммы всех чисел в массиве
    ['Minsk', 'Moscow', '', '', 'London', '']
    [
    { age: 18, sex: 'f', name: 'Sveta' },
        { age: 17, sex: 'f', name: 'Sashka' },
        { age: 19, sex: 'm', name: 'Andrew' }
    ]
    [1, 4, 6, 66, -12]








    //Решение
    ['Minsk', 'Moscow', '', '', 'London', ''].reduce((acc, el) => {
        if (el !== '') acc++
        return acc
    }, 0)


    [
    { age: 18, sex: 'f', name: 'Sveta' },
        { age: 17, sex: 'f', name: 'Sashka' },
        { age: 19, sex: 'm', name: 'Andrew' }
    ].reduce((acc, person) => {
    if (person.age >= 18 && person.sex === 'f') {
        acc.push(person)
    }
    return acc
}, [])


    [1, 4, 6, 66, -12].reduce((acc, number) => {
    acc += number
    return acc
}, 0)

















