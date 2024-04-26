/*const a = {};
const b = {};
const c = a;
const d = c;

console.log(a === b);  //false
console.log(a === c);//true
console.log(c === d);//true
console.log(a === c);//true*/

/*--------------*/

/*const a = {};
const b = a;
b['test'] = 'test value'; //создаете новое свойство с ключом 'test' в объекте b и присваиваете ему значение 'test value'.Если свойство с ключом 'test' уже существует в объекте b, то это присваивание перезапишет его значение на 'test value'.

console.log(b === a);true
console.log(a);{test: 'test value'}
// смутриурет ли объект a? да*/

/*--------------*/

/*
const user = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA',
    },
};

const updatedUser = {...user, address: {...user.address, city: 'Toronto'}}
console.log(updatedUser)*/

/*--------------*/

/*У вас есть массив и новый элемент, который вы хотите добавить в конец этого массива. Напишите функцию addElementToArray, которая принимает исходный массив и новый элемент, и возвращает новый массив, в котором новый элемент добавлен в конец(используйте spread опретаор для решения)*/
const originalArray = [1, 2, 3, 4, 5];
const addElementToArray = (array, element) => {
    return [...array, element]
}

const newArray = addElementToArray(originalArray, 6);

console.log(newArray);
// Ожидаемый вывод: [1, 2, 3, 4, 5, 6]



