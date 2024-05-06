/*let fruits = ['apple', 'banana', 'orange'];
fruits.push('lime', 'apple')
console.log(fruits); // Output: ['apple', 'banana', 'orange', твои добавленные элементы в конец]

let users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: false,
    },
];
const lastUser = users.pop()
const firstUser = users.shift()
users.unshift({id: 4, name: 'Donald', isStudent: false})
console.log(lastUser); // { id: 4, name: 'Donald', isStudent: false }
console.log(users); // [ { id: 1, name: 'Bob', isStudent: true },  { id: 2, name: 'Alex', isStudent: true },{ id: 3, name: 'Ann', isStudent: true }]
console.log(firstUser); // { id: 1, name: 'Bob', isStudent: true }
console.log(users); // [{ id: 2, name: 'Alex', isStudent: true },  { id: 3, name: 'Ann', isStudent: true },  { id: 4, name: 'Donald', isStudent: false }]
console.log(users);

const str = 'JavaScript is awesome';
const res = str.split(' ').reverse().join(' ')
console.log(res); // awesome is JavaScript

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2)
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi'])); // Output: ["apple", "banana", "orange", "kiwi"]

function flattenArray(arr) {
    return arr.flat(Infinity)
}
console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]


function findFirstElement(arr, condition) {
    return arr.find(condition)
}
let firstNumberGreaterThan25 = findFirstElement([10, 20, 30, 40, 50]
    , (num) => num > 25);
console.log(firstNumberGreaterThan25); // Output: 30

let firstFruitStartingWithO = findFirstElement(["яблоко", "банан", "orange", "киви"], (fruit) => fruit.startsWith('o'));
console.log(firstFruitStartingWithO); // Output: "orange"

function checkElement(arr, inc){
    return arr.includes(inc)
}
let numbers = [1, 2, 3, 4, 5];
let fruitss = ['apple', 'banana', 'orange', 'kiwi'];

console.log(checkElement(numbers, 3)); // Output: true
console.log(checkElement(fruitss, 'grape')); // Output: false

function filterGreaterThan(arr, cond){
    return arr.filter(el => el > cond)
}
let numbers1 = [10, 20, 30, 40, 50];
let numbers2 = [5, 15, 25, 35, 45];

console.log(filterGreaterThan(numbers1, 25)); // Output: [30, 40, 50]
console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]

function sortAlphabeticallyByProperty(arr, property){
    return arr.sort((a, b) => a[property].localeCompare(b[property]))
}
let people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
];

console.log(sortAlphabeticallyByProperty(people, 'name')); // [ { name: 'Alice', age: 25 },{ name: 'Bob', age: 35 },{ name: 'John', age: 30 }]

function sortDescending (arr) {
    return arr.sort((a, b) => b-a)
}
let numberss = [5, 2, 8, 1, 4];
console.log(sortDescending(numberss)); // Output: [8, 5, 4, 2, 1]*/


let data = [
    {value: 1, name: 'Option 1'},
    {value: 2, name: 'Option 2'},
    {value: 3, name: 'Option 3'},
];

const formattedData = data.map((el) => {
    return {value: el.value, label: el.name}
})
console.log(formattedData); // [
//   { value: 1, label: 'Option 1' },
// { value: 2, label: 'Option 2' },
// { value: 3, label: 'Option 3' }
// ]

let products = [
    {id: 1, name: 'Apple', price: 1.99},
    {id: 2, name: 'Banana', price: 0.99},
    {id: 3, name: 'Orange', price: 2.49},
];
let productsWithDiscount = products.map((el) => {
    return {...el, discountedPrice: el.price * 0.9}
})
console.log(productsWithDiscount); // [
//   { id: 1, name: 'Apple', price: 1.99, с: 1.791 },
//   { id: 2, name: 'Banana', price: 0.99, discountedPrice: 0.891 },
//   { id: 3, name: 'Orange', price: 2.49, discountedPrice: 2.241 }
// ]

function isPalindrome(str) {
    /*debugger*/
    let one = str.split('').reverse().join('')
    return one === str
}

console.log(isPalindrome('level')); // Вернет true
console.log(isPalindrome('racecar')); // Вернет true
console.log(isPalindrome('hello')); // Вернет false

let arr = [1, 1, 5, 6, 7, 8, 9, 9, 3, 4, 0, 19];

function removeDublicates(arr) {
    return arr.filter((el, index) => arr.indexOf(el) !== index)
}

console.log(removeDublicates(arr));//[ 1, 9 ]


const persons = [
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 35},
];

function sortByProperty(arr, property) {
    return arr.sort((a, b) => a[property] - b[property])
}

console.log(sortByProperty(persons, 'age'));
// [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]




