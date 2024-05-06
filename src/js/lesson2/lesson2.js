//методы массивов, полифилы

//push, pop, shift, unshift - мутабельные методы массивов

//push () - добавляет элемент в конец массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.push('Nina');
// const namesLength = names.length;

// console.log('names: ', names); //names:  [ 'Alex', 'Bob', 'Ivan', 'Sasha', 'Nina' ]
// console.log('result: ', result); //result:  5
// console.log('namesLngth', namesLength);//namesLngth 5

//pop() - удаляет последний элемент массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const poppedItem = names.pop();

// console.log('names: ', names); // names:  [ 'Alex', 'Bob', 'Ivan' ]
// console.log('poppedItem: ', poppedItem); //poppedItem:  Sasha

//shift() - удаляем первый элемент массива, возвращает удаленный элемент

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const shiftedItem = names.shift();

// console.log('names: ', names); // names:  [ 'Bob', 'Ivan', 'Sasha' ]
// console.log('shiftedItem: ', shiftedItem); // shiftedItem:  Alex

////////// shift, pop

// const names = [];
// const res = names.pop();
// const res1 = names.shift();

// console.log('res: ', res);//res:  undefined
// console.log('res1: ', res1);// res1:  undefined

//unshift () - добавляет 1 и более элементов в начало массива, возвращает новую длину массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.unshift('test value', 'test value 2');

// console.log('names: ', names); //names:  [ 'test value', 'test value 2', 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('result: ', result); //result:  6

//[...task, newTask]

//reverse() -  меняет порядок  элементов в массиве на обратный (мутабельный)
//toReverse() - иммутабельный метод в отличие от reverse mdn

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.reverse();

// console.log('names: ', names); //names:  [ 'Sasha', 'Ivan', 'Bob', 'Alex' ]
// console.log(res);//[ 'Sasha', 'Ivan', 'Bob', 'Alex' ]

//split () - разбивает строку в массив по указанному разделителю

//case 1

// const str = 'ab-cd-ef';
// const res = str.split('-', 2);

// console.log('res: ', res); //res:  [ 'ab', 'cd' ]

// const testStr = 'test string';
// const res1 = testStr.split(' ');

// console.log('res1', res1); //res1 [ 'test', 'string' ]

//case 2
// const str = 'ab-cd-ef';
// const res = str.split('');

// console.log('res: ', res); //res:  [
// //     'a', 'b', '-',
// //     'c', 'd', '-',
// //     'e', 'f'
// //   ]

//case 3
// const str = 'ab-cd-ef';
// const res = str.split();

// console.log('res: ', res); //res:  [ 'ab-cd-ef' ]

//join()

//case1
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.join(' - ');

// console.log('result: ', result);//result:  Alex - Bob - Ivan - Sasha

//case2

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.join();

// console.log('result: ', result);//result:  "Alex,Bob,Ivan,Sasha"

//case 3
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.join('');

// console.log('res: ', res); //res:  AlexBobIvanSasha

//task reverse split join

// const telephoneNumber = '123456789';
// const res = telephoneNumber.split('').reverse().join('');
// console.log('res', res); //res 987654321
// console.log(telephoneNumber);

//concat () - не мутирует исх массив

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];

// const res = arr1.concat(arr2, arr3);
// console.log(res);// [ 1, 2, 3, 4, 5, 6 ]

//case 2

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const res = arr1.concat(arr2, [5, 6], 7);

// console.log('res: ', res);//res:  [
// //     1, 2, 3, 4,
// //     5, 6, 7
// //   ]

//case 3

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const nestedArr = [
//   [5, 6],
//   [7, 8, [9, 8]],
// ];

// const res = arr1.concat(arr2, nestedArr);
// console.log('res: ', res); //res:  [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8 ] ]

//flat

// const flattedArray = res.flat(Infinity);
// console.log('flattedArray', flattedArray);//flattedArray [
// //     1, 2, 3, 4,
// //     5, 6, 7, 8
// //   ]

// const flattedArray = res.flat(); //1;
// console.log(flattedArray);

//indexOf()

// const arr = [1, 2, 3, 4, 5, 6];
// const res = arr.indexOf(3);
// const noElement = arr.indexOf(8);

// console.log('res index: ', res); //res index:  2
// console.log('no element not founded: ', noElement);//no element not founded:  -1

///case2

// const arr = [1, 2, 3, 4, 5, 6, 3];

// const res = arr.indexOf(3, 4);

// console.log(res);//6

//find()

// const arr = ['str', 'tettstst', 'tetre', 'str'];
// const res = arr.find((el) => el.length === 5);

// console.log('res', res); //res tetre

// const arr1 = ['str', 'tettstst', 'tetre', 'str'];
// const res2 = arr.find((el) => el.length === 12);

// console.log('res2', res2);//res2 undefined

//findIndex()

// const arr = [1, 2, 3, 4];
// const res = arr.findIndex((el) => el % 2 == 0);

// console.log(res);//1

//case2
// const arr = [1, 3];
// const res = arr.findIndex((el) => el % 2 == 0);

// console.log('res: ', res); //res:  -1

//includes()

// const arr = [1, 2, 3, 4];
// const result = arr.includes(4);
// const noElement = arr.includes(5);

// console.log(result); //true
// console.log(noElement);//false

///case 2

// const arr = [1, 2, [3], 4];
// const res = arr.includes(3);
// console.log(res);//false

//filter => return new array

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.filter((word) => word.length > 3);

// console.log('result', result);//result [ 'Alex', 'Ivan', 'Sasha' ]

//sort ()

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha', 'Иван', 'alex'];
// console.log(names.sort()); //[ 'Alex', 'Bob', 'Ivan', 'Sasha', 'alex', 'Иван' ]

// const numbers = [1, -1, 300, 4, 5, 7];
// console.log(numbers.sort());//[ -1, 1, 300, 4, 5, 7 ]

////

// const numbers = [1, -1, 300, 4, 5, 7];
// ///по возрастанию
// const compareFunction = (a, b) => {
//   if (a > b) {
//     return 100;
//   } else {
//     return -100;
//   }
// };

// const res = numbers.sort(compareFunction);
// console.log(res);//[ -1, 1, 4, 5, 7, 300 ]

// const res = numbers.sort((a, b) => a - b); //по возрастанию
// console.log(res);//[ -1, 1, 4, 5, 7, 300 ]

// const res2 = numbers.sort((a, b) => b - a); //по убыванию
// console.log(res2);//[ 300, 7, 5, 4, 1, -1 ]

// const users = [
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'alex',
//     isStudent: true,
//   },
// ];

// const result = users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(result);//[
// //     { id: 3, name: 'alex', isStudent: true },
// //     { id: 2, name: 'Alex', isStudent: true },
// //     { id: 1, name: 'Bob', isStudent: true }
// //   ]

// const result1 = users.sort((a, b) => b.name.localeCompare(a.name));
// console.log(result1);//[
// //     { id: 1, name: 'Bob', isStudent: true },
// //     { id: 2, name: 'Alex', isStudent: true },
// //     { id: 3, name: 'alex', isStudent: true }
// //   ]

//toSorted((a, b) => a - b)

//Полифил

const users1 = [
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
]; /// ["Bob", "Alex", "Ann", "Donald"]

// const result = users1.map((user) => user.name);
// console.log('result: ', result); // result:  [ 'Bob', 'Alex', 'Ann', 'Donald' ]

function newMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i])); //arr[i]
  }

  return result;
}

const userNamesArr = newMap(users1, (user) => user.name);
console.log(userNamesArr); //[ 'Bob', 'Alex', 'Ann', 'Donald' ]
