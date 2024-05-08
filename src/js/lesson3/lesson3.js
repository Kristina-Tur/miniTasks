//slice, splice, toSpliced, reduce

//slice - иммутабельным метдом массива (второй параметр вырезает не включительно)

//массив.slice(откуда отрезать, [докуда отрезать]);

//1)
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let result = arr.slice(0, 2);

// console.log('arr: ', arr);//arr:  [ 'a', 'b', 'c', 'd', 'e' ]
// console.log('result: ', result);// result:  [ 'a', 'b' ]

//2)
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const res = arr.slice(1);

// console.log('res: ', res); // res:  [ 'b', 'c', 'd', 'e' ]

//3

// let arr = ['a', 'b', 'c', 'd', 'e'];
// const res = arr.slice(1, -1);

// console.log('res: ', res); //res:  [ 'b', 'c', 'd' ]

//4
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const res = arr.slice(-1);

// console.log(res); //[ 'e' ]

//splice

// массив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...);

//1)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// const res = arr.splice(1, 3);

// console.log('arr: ', arr); //arr:  [ 'a', 'e' ]
// console.log('res: ', res);// res:  [ 'b', 'c', 'd' ]

//2)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = arr.splice(2, 0, 'value1', 'value2', 'value3');

// console.log('arr: ', arr); //
// // arr:  [
// //     'a',      'b',
// //     'value1', 'value2',
// //     'value3', 'c',
// //     'd',      'e'
// //   ]
// console.log('res: ', res);//res:  []

//3)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = arr.splice(-2, 1);

// console.log('arr: ', arr); //arr:  [ 'a', 'b', 'c', 'e' ]
// console.log('res: ', res); //res:  [ 'd' ]

//toSpliced() - иммутабельный

//reduce -

//reduce((acc, item ) => {}) если не указываем стартовое значение, то по лефолту у нас с вами это будет нулевой элемент массива

//1)
// let a = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }

// console.log('sum: ', sum);//sum:  15

//reduce task 1

// let a = [1, 2, 3, 4, 5];

// let result = a.reduce((acc, item) => {
//   console.log('acc: ', acc);
//   console.log('item: ', item);
//   return acc + item;
// }, 0);

// console.log('result: ', result); //15

//reduce task 2

// const fruits = [
//   { name: 'apple', quantity: 2 },
//   { name: 'banana', quantity: 3 },
//   { name: 'orange', quantity: 1 },
// ];

// //expected: 6 - общее кол-во фруктов на складе

// const totalQuantity = fruits.reduce((acc, fruit) => {
//   console.log('acc: ', acc);
//   console.log('fruit', fruit);
//   return acc + fruit.quantity;
// }, 0);

// console.log('totalQuantity: ', totalQuantity); //totalQuantity:  6

//reduce task3

// const numbers = [5, 2, 8, 1, 6];

// //const maxNumber = numbers.reduce((acc) => {}, numbers[0])

// const maxNumber = numbers.reduce((acc, currentNumber) => {
//   console.log('acc: ', acc);
//   console.log('currentNumber: ', currentNumber);

//   return currentNumber > acc ? currentNumber : acc;
// }); // не прописывали начальное значение,
// //так как оно ивозьмет по дефолту нулевой элементм массива

// console.log('MaxNumber: ', maxNumber);// 8

//reduce task4

// const peoples = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ]; // {totalNames: [], totalAges: ...}

// const result = peoples.reduce(
//   (acc, people) => {
//     console.log('people: ', people); //peoples[i]
//     console.log('acc: ', acc);

//     acc.totalNames.push(people.name);
//     acc.totalAges += people.age; // acc.totalAges = acc.totalAges + people.age

//     return acc;
//   },
//   { totalNames: [], totalAges: 0 }
// );

// console.log('result: ', result); //result:  { totalNames: [ 'Alice', 'Bob', 'Charlie' ], totalAges: 77 }

//reduce task5

// const peoples = [
//   { name: 'Vika', age: 25, budget: 4500 },
//   { name: 'Nikita', age: 45, budget: 35000 },
//   { name: 'Igor', age: 55, budget: 340 },
//   { name: 'Insaf', age: 65, budget: 50000 },
//   { name: 'Alyona', age: 75, budget: 20 },
// ];

// //expected ..(общий бюджет)

// const result = peoples.reduce((acc, el) => {
//   console.log('el: ', el);
//   return acc + el.budget;
// }, 0);

// console.log('result: ', result); // result:  89860

//reduce task

// const peoples = [
//   { name: 'Vika', age: 25, budget: 4500 },
//   { name: 'Nikita', age: 45, budget: 35000 },
//   { name: 'Igor', age: 55, budget: 340 },
//   { name: 'Insaf', age: 65, budget: 50000 },
//   { name: 'Alyona', age: 75, budget: 20 },
// ];
// //["Vika", ...]

// const result = peoples.reduce((acc, person) => {
//   console.log('[person: ', person);
//   acc.push(person.name);

//   return acc;
// }, []);

// console.log('result: ', result); // result:  [ 'Vika', 'Nikita', 'Igor', 'Insaf', 'Alyona' ]

///reduce task

// Expected: {totalAges: 0, totalNames: []}

// const peoples = [
//   { name: 'Vika', age: 25, budget: 4500 },
//   { name: 'Nikita', age: 45, budget: 35000 },
//   { name: 'Igor', age: 55, budget: 340 },
//   { name: 'Insaf', age: 65, budget: 50000 },
//   { name: 'Alyona', age: 75, budget: 20 },
// ];

// const res = peoples.reduce(
//   (acc, el) => {
//     acc.totalAges += el.age;
//     console.log('acc:', acc);
//     return { ...acc, totalNames: [...acc.totalNames, el.name] };
//   },
//   { totalAges: 0, totalNames: [] }
// );

// console.log('res', res); //res {
//     totalAges: 265,
//     totalNames: [ 'Vika', 'Nikita', 'Igor', 'Insaf', 'Alyona' ]
//   }

// reduce task

// const words = ['Hello', ' ', 'world', '!']; //"Hello word!"

// const result = words.reduce((acc, el) => {
//   console.log('el: ', el);
//   console.log('acc: ', acc); // ""

//   return acc + el;
// }, '');

// console.log('result: ', result); //result:  Hello world!

// console.log('Hello' + ''); //'Hello' // acc + el
// console.log('Hello' + ' '); //"Hello " // acc + el
// console.log('Hello ' + 'world'); // "Hello world"// acc + el

//task reduce

const numbers = [5, 2, 8, 1, 6];
//find min number

const result = numbers.reduce((acc, currentNum) => {
  return acc < currentNum ? acc : currentNum;
});

console.log('result: ', result); //result:  1

/*
const res = peoples.reduce(
    (acc, el) => {
      acc.totalAges += el.age;
      console.log('acc:', acc);
      return { ...acc, totalNames: [...acc.totalNames, el.name] };
    },
    { totalAges: 0, totalNames: [] }
);

console.log('res', res);*/
