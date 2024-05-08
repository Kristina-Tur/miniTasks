/*
let str = 'Hello, world!';
let startIndex = 7;

function getSubStr(str, index){
    return str.slice(index)
}
console.log(getSubStr(str, startIndex)); // Выведет: "world!"*/

/*function getLastElements(arr, index){
    return arr.slice(-index)
}
console.log(getLastElements([1, 2, 3, 4, 5], 3)); // Выведет: [3, 4, 5]*/

/*function extractPath(str, index) {
    return str.split('').slice(index).join('')
}
console.log(extractPath('https://example.com/blog/article', 18)); // Выведет: "/blog/article"*/

/*function removeElement(arr, index){
    arr.splice(index, 1)
    return arr
}
let numbers = [1, 2, 3, 4, 5];
console.log(removeElement(numbers, 2)); // Выведет: [1, 2, 4, 5]*/
/*
function insertElement(arr, i1, i2){
    arr.splice(i1, 0, i2)
    return arr
}
let numbers = [1, 2, 4, 5];
console.log(insertElement(numbers, 2, 3)); // Выведет: [1, 2, 3, 4, 5]*/

/*function sumArray(arr) {
    return arr.reduce((sum, item) => sum+item, 0)
}
let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Выведет: 15*/

/*function sumStringLengths(arr) {
    return arr.reduce((sum, item) => sum + item.length,0)
}
console.log(sumStringLengths(['apple', 'banana', 'cherry'])); // Выведет: 17*/

/*function sumNestedArrays(arr){
    return arr.reduce((sum, item) => sum + item.reduce((sumArray, itemArray) => sumArray + itemArray ,0) , 0)
}
console.log(
    sumNestedArrays([
        [1, 2],
        [3, 4, 5],
        [6, 7, 8, 9],
    ])
); // Выведет: 45*/

/*function removeDuplicates(arr) {
    return arr.reduce((rem, item) => {
           if(!rem.includes(item)){
               rem.push(item)
       }
        return rem
    }, [])
}
const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
console.log(removeDuplicates(numbers)); // Выведет: [1, 2, 3, 4, 5, 6]*/

/*function findDuplicates(arr){
    return arr.reduce((acc, item, index) => {
        if(arr.indexOf(item, index + 1) !== -1 && acc.indexOf(item) === -1){
            acc.push(item)
        }
        return acc
    }, [])
}
const array = [1, 2, 3, 2, 4, 5, 4, 5];
const duplicatesArray = findDuplicates(array);
console.log(duplicatesArray); // Output: [2, 4, 5]*/

/*function wordCount (arr){
return arr.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1
    return acc
}, {})
}
const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
console.log(wordCount(words)); // Output: { apple: 3, banana: 2, cherry: 1 }*/


const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
];
function getPropertyValues(arr, str){
    return arr.reduce((acc, item) => {
        acc.push(item[str])
        return acc
    },[])

}
const names = getPropertyValues(people, 'name');
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']









