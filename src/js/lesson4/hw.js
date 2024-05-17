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


const person = { firstName: 'Max', lastName: 'Johnson' };

const firstName = 'first Name: Nina';
const lastName = 'last Name: Ivanov';

const {firstName: one, lastName: two, age = 25} = person

console.log(one); // 'Max'
console.log(two); // 'Johnson'
console.log(age); // 25 (значение по умолчанию)










