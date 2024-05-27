/*const user = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA',
    },
};

const updatedUser = {...user, address: {...user.address,city: 'Toronto'}}

console.log(updatedUser);
// Ожидаемый вывод: { name: 'John', address: { city: 'Toronto', country: 'USA' } }*/

/*
function addElementToArray(arr, el) {
    return [...arr, el]
}
const originalArray = [1, 2, 3, 4, 5];
const newArray = addElementToArray(originalArray, 6);

console.log(newArray);
// Ожидаемый вывод: [1, 2, 3, 4, 5, 6]*/


/*const user = { name: 'John', age: 25, city: 'New York' };
const {name, age, city} = user
console.log(name);  // 'John'
console.log(age);   // 25
console.log(city);  // 'New York'*/


/*const fruits = ['apple', 'banana', 'orange']
const [ ,secondFruit, thirdFruit ] = fruits
console.log(secondFruit);  // 'banana'
console.log(thirdFruit);   // 'orange'*/



/*const person = { name: 'Alice', age: 30 };
function printPersonDetails({name, age}) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printPersonDetails(person);  // Вывод: Name: Alice, Age: 30*/


/*const car = { brand: 'Toyota', model: 'Camry' };
const {brand, model, year = 2022} = car
console.log(brand);  // 'Toyota'
console.log(model);  // 'Camry'
console.log(year);   // 2022 (значение по умолчанию)*/


/*const students = [
    { name: 'Alex', grade: 'A' },
    { name: 'Emma', grade: 'B' },
    { name: 'Chris', grade: 'C' },
];
const [{name: student1}, , {name: student3}] = students
console.log(student1);  // 'Alex'
console.log(student3);  // 'Chris'*/


/*const person = { firstName: 'Max', lastName: 'Johnson' };

const firstName = 'first Name: Nina';
const lastName = 'last Name: Ivanov';

const {firstName: one, lastName: two, age = 25} = person

console.log(one); // 'Max'
console.log(two); // 'Johnson'
console.log(age); // 25 (значение по умолчанию)*/

/*let student = {
    name: 'John',
    age: 20,
    course: 'Math',
};

const propertyCount = Object.keys(student).length

console.log(propertyCount); // 3*/


/*let scores = {
    math: 90,
    english: 85,
    science: 92,
};

const totalScore = Object.values(scores).reduce((acc, item) => acc + item)

console.log(totalScore); // 267*/


/*let obj = { a: 1, b: 2, c: 3 };
function objectToArray(obj){
    return Object.entries(obj)
}
console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]*/

/*const studentGrades = new Map()
studentGrades.set('1', 'one')
studentGrades.set('1', 'one')
studentGrades.set('Bob', 85)
console.log(studentGrades.get('Bob')); // 85*/


/*let products = new Map([
    ['Milk', 1.2],
    ['Bread', 1.5],
    ['Cheese', 2.5],
]);
if(products.has('Bread')){
    products.delete('Bread')
}


console.log(products.has('Bread')); // false
console.log(products); // Map(2) { 'Milk' => 1.2, 'Cheese' => 2.5 }*/


/*let fruits = new Set(['apple', 'banana', 'mango']);
if(fruits.has('banana')){
    fruits.delete('banana')
}

console.log(fruits.has('banana')); // false
console.log(fruits); // Set(2) { 'apple', 'mango' }*/


/*const numbers = [1, 1, 4, 6, 7, 8, 9, 0, 0, 10, 10, 11]
const result = new Set(numbers)

console.log('result: ', result); //result:  [
//   1, 4,  6,  7, 8,
//   9, 0, 10, 11
// ]*/

const student = {
    name: "Leo"
}

const newStudent = student

const myFriend = {
    ...newStudent
}

const newUser = {
    name: "Ekaterina"
}

const myFriendName =  student.name !== myFriend.name
    ? newUser.name
    : student.name
console.log(myFriendName)
/*Какое значение получит переменная "myFriendName"?*/
