/*/!*1) Извлечь значения свойств объекта в переменные name, age, city и вывести в консоль эти переменные*!/

const user = { name: 'John', age: 25, city: 'New York' };

const {name, age, city} = user;

console.log(name);  // 'John'
console.log(age);   // 25
console.log(city);  // 'New York'*/

/*2) Извлечь значения из массива в переменные secondFruit, thirdFruit, а первую переменную пропустить
и вывести в консоль эти переменные*/

/*const fruits = ['apple', 'banana', 'orange'];

const [, secondFruit, thirdFruit] = fruits;

console.log(secondFruit);  // 'banana'
console.log(thirdFruit);   // 'orange'*/

/*3) Использовать деструктуризацию в параметрах функции*/

/*const person = { name: 'Alice', age: 30 };

// Деструктуризация в параметрах функции
function printPersonDetails({name, age}) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printPersonDetails(person);  // Вывод: Name: Alice, Age: 30*/


/*4) Установите значение по умолчанию для свойства year которого нет в объекте car
выведите в консоль его*/

/*const car = { brand: 'Toyota', model: 'Camry' };

const {brand, model, year = '2020'} = car;

console.log(brand);  // 'Toyota'
console.log(model);  // 'Camry'
console.log(year);   // 2022 (значение по умолчанию)*/


/*/!*5) Извлечь значения из массива объектов и вывести их в консоль*!/
const students = [
    { name: 'Alex', grade: 'A' },
    { name: 'Emma', grade: 'B' },
    { name: 'Chris', grade: 'C' },
];

const [student1, , student3] = students;
const {name} = student1

console.log(name);  // 'Alex'
console.log(student3.name);  // 'Chris'*/


/*6) Установите значение по умолчанию для свойства age которого нет в объекте person
и переименовать переменные, чтобы достать значение из свойства firstName
и вывести результат в консоль*/

const person = { firstName: 'Max', lastName: 'Johnson' };

const firstName = 'first Name: Nina';
const lastName = 'last Name: Ivanov';

const {firstName: name, lastName: secondName, age = '25'} = person


console.log(name); // 'Max'
console.log(secondName); // 'Johnson'
console.log(age); // 25 (значение по умолчанию)




