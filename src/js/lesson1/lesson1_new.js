//примиттивные
//Number, string, boolean, bigInt, sybmol, null, undefined

//ссылочные
//массивы объекты и функции

//Особенности у ссылочного типа данных:
//1) сложная структура
//2) имеются свои методы и свойста
//3) ссылочный тип данных

// //мутабельно
// const users1 = {
//   // #12345
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const user2 = users1; // // #12345

// console.log(users1 === user2);//true

// user2.name = 'Alex';

// console.log('users1', users1);// users1 { id: 1, name: 'Alex', isStudent: true }
// console.log('users2', user2);// users2 { id: 1, name: 'Alex', isStudent: true }

//иммутабельно

// const users1 = {
//   // #12345
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const user2 = {
//   // #0000
//   id: users1.id,
//   name: users1.name,
//   isStudent: users1.isStudent,
// };

// console.log(users1 === user2); //false
// console.log(users1 == user2); // false

///spread operator

// const users1 = {
//   // #12345
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const users2 = { ...users1 }; //#5555

// console.log(users1 === users2);// false
// console.log('users1: ', users1);// users1:  { id: 1, name: 'Bob', isStudent: true }
// console.log('users2: ', users2);// users2:  { id: 1, name: 'Bob', isStudent: true }

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
//     name: 'Ann',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald',
//     isStudent: true,
//   },
// ];

//pop() - удлить последнего юзера

// users.pop();
// console.log('users: ', users);

//1) если метод не мутирует исходный массив, то его используем, а если мутирует, то долджны сделать копию

// const users1 = [...users];
// users1.pop();

// console.log('users: ', users);
//users:  [
//     { id: 1, name: 'Bob', isStudent: true },
//     { id: 2, name: 'Alex', isStudent: true },
//     { id: 3, name: 'Ann', isStudent: true },
//     { id: 4, name: 'Donald', isStudent: true }
//   ]
// console.log('users1: ', users1);
//users1:  [
//     { id: 1, name: 'Bob', isStudent: true },
//     { id: 2, name: 'Alex', isStudent: true },
//     { id: 3, name: 'Ann', isStudent: true }
//   ]

//map, filter => return []

// const superUser = {
//   id: 10,
//   name: 'Clementina DuBuque',
//   username: 'Moriah.Stanton',
//   email: 'Rey.Padberg@karina.biz',
//   address: {
//     street: 'Kattie Turnpike',
//     suite: 'Suite 198',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     geo: {
//       lat: '-38.2386',
//       lng: '57.2232',
//     },
//   },
//   phone: '024-648-3804',
//   website: 'ambrose.net',
//   company: {
//     name: 'Hoeger LLC',
//     catchPhrase: 'Centralized empowering task-force',
//     bs: 'target end-to-end models',
//   },
// };

//spread оператор копирует один уровень вложенности
// const newSuperUser = { ...superUser };
// newSuperUser.address.city = 'Toronto';

// console.log('super user: ', superUser.address.city); //super user:  Toronto
// console.log('new super user: ', newSuperUser.address.city); //new super user:  Toronto

//разные уровни вложенности

// const superUser = {
//   id: 10,
//   name: 'Clementina DuBuque',
//   username: 'Moriah.Stanton',
//   email: 'Rey.Padberg@karina.biz',
//   address: {
//     street: 'Kattie Turnpike',
//     suite: 'Suite 198',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     geo: {
//       lat: '-38.2386',
//       lng: '57.2232',
//     },
//   },
//   phone: '024-648-3804',
//   website: 'ambrose.net',
//   company: {
//     name: 'Hoeger LLC',
//     catchPhrase: 'Centralized empowering task-force',
//     bs: 'target end-to-end models',
//   },
// };

// const newSuperUser = {
//   ...superUser,
//   address: { ...superUser.address, city: 'Toronto', geo: { ...superUser.address.geo, lat: 'test value' } },
// };

// //[...users, taskId]

// console.log('super user: ', superUser.address); //super user:  {
// //     street: 'Kattie Turnpike',
// //     suite: 'Suite 198',
// //     city: 'Lebsackbury',
// //     zipcode: '31428-2261',
// //     geo: { lat: '-38.2386', lng: '57.2232' }
// //   }
// console.log('new super user: ', newSuperUser.address); //new super user:  {
// //     street: 'Kattie Turnpike',
// //     suite: 'Suite 198',
// //     city: 'Toronto',
// //     zipcode: '31428-2261',
// //     geo: { lat: 'test value', lng: '57.2232' }
// //   }

////

// const superUser = {
//   id: 10,
//   name: 'Clementina DuBuque',
//   username: 'Moriah.Stanton',
//   email: 'Rey.Padberg@karina.biz',
//   address: {
//     street: 'Kattie Turnpike',
//     suite: 'Suite 198',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     geo: {
//       lat: '-38.2386',
//       lng: '57.2232',
//     },
//   },
//   phone: '024-648-3804',
//   website: 'ambrose.net',
//   company: {
//     name: 'Hoeger LLC',
//     catchPhrase: 'Centralized empowering task-force',
//     bs: 'target end-to-end models',
//   },
// };

// const newStructuredObj = structuredClone(superUser);

// newStructuredObj.address.geo.lat = 'new structure clone value';

// console.log('super user: ', superUser.address.geo); //super user:  { lat: '-38.2386', lng: '57.2232' }
// console.log('new structered user: ', newStructuredObj.address.geo); //new structered user:  { lat: 'new structure clone value', lng: '57.2232' }

//деструктуризация

//objects

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
// };

// const firstName = employee.firstName;
// const lastName = employee.lastName;

// console.log('firstName', firstName); //firstName Ivan
// console.log('lastName', lastName); //lastName Ivanov

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   message: 'Hello World!',
//   role: 'admin',
// };

// const firstName = 'Nika';

// const { firstName: userName, lastName, role = 'user' } = employee;

// // console.log(firstName, lastName); //Ivan Ivanov
// console.log('firstName: ', firstName); //firstName:  Nika
// console.log('userName: ', userName); //userName:  Ivan
// console.log(role); //admin

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   message: 'Hello World!',
//   //   role: 'user',
//   permession: {
//     canEdit: true,
//     canDelete: false,
//   },
// };

// const message = 'Test message';

// const {
//   firstName,
//   message: newMessage,
//   role = 'admin',
//   permession: { canDelete, canEdit },
// } = employee;

// console.log('firstName', firstName); //firstName Ivan
// console.log('newMessage', newMessage); //newMessage Hello World!
// console.log('role', role); //user -> admin, admin -> user
// console.log('permessions: ', canDelete, canEdit); // false, true

//деструктуризация массивов

// const colors = ['red', 'blue', 'green', 'white', 'black'];

// const redColor = colors[0];
// console.log(redColor);//red

// const [firstValue, blueColor] = colors;

// console.log('firstValue: ', firstValue); //firstValue:  red
// console.log('blueColor', blueColor); //blueColor blue

// const colors = ['red', 'blue', 'green', 'white', 'black'];

// const [redColor, blueColor, , whiteColor = "white"] = colors;

// console.log(blueColor);//blue
// console.log(whiteColor);//white

// const colors = ['red', ['1', '2', '3'], 'green', 'white', 'black'];

// const [firstValue, [, secondValue, thirdValue], greenValue] = colors;

// console.log('firstValue', firstValue); //firstValue red
// console.log('secondValue', secondValue); //secondValue 2
// console.log('thirdColor', thirdValue); //thirdColor 3
// console.log('greenValue', greenValue); //greenValue green

const employee = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  middleName: 'Ivanovich',
  message: 'Hello World!',
  //   role: 'user',
  permession: {
    canEdit: true,
    canDelete: false,
  },
};

function sayHi({ firstName, message }) {
  console.log(firstName + ':' + message); //Ivan:Hello World!
}

// const {firstName, message} = employee
sayHi(employee);

//
