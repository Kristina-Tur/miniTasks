/*
let head = {
  glasses: 1
};

let table = {
  __proto__: head,
  pen: 3
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed,
  money: 2000
};
console.log(pockets.pen)
console.log(bed.glasses)*/

/*
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple*/

//-----------------------------------
/*function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log(rabbit)
alert( rabbit.eats ); // true*/

/*function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit(); //{}

Rabbit.prototype = {};

console.log( rabbit.eats ); // true

let rabbit2 = new Rabbit()
console.log(rabbit2) //*/

//-------------------------------

/*function f() {
    alert("Hello!");
}

Function.prototype.defer = function (ms){
    setTimeout(this, ms)
}

f.defer(1000); // выведет "Hello!" через 1 секунду*/

//Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
//Например, должно работать так:

/*function f(a, b) {
    alert(a + b);
}

Function.prototype.defer = function (ms) {
    const f = this
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms)
    }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.



function foo () {
    return 1
}
console.log(foo.call(5))*/

//-------------------------------
//Используя мето apply() реализовать свой собственный метод bind

//чтобы метод был кастомныйм, записываем в prototype
/*Function.prototype.customBind = function (ctx, ...args){
    const _self = this //ссылка на исходную функцию
    return function (...arg2){
        return _self.apply(ctx, [...args, ...arg2])
    }
}

//Возвращаемая функция принимает дополнительные аргументы arg2 и вызывает исходную функцию
// с объединенными аргументами [...args, ...arg2] в контексте ctx.

let obj = {name: 'Hanna'}
let obj2 = {name: 'Jo', sayName(){console.log(this.name)}}

obj2.sayName.customBind(obj)()*/

//-------------------------------

/*const qq = () => {
    const a = {}
    if(a == 5 && a ==6 && a==7){
        console.log('It works')
    }
}
console.log(qq())*/

//Решение
/*const qq = () => {
    let a = {
        a: 5
    }
    /!*a.toString = function (){
        return this.a++
    }*!/
    //или
    a.valueOf = function (){
        return this.a++
    }
    if(a == 5 && a ==6 && a==7){
        console.log('It works')
    }
}
console.log(qq())*/

//-------------------------------
//как заполнить объект, чтобы вывести console.log('Bingo')
/*let obj = {a: 1}
if (obj.a === 1 && obj.a === 2 && obj.a === 3){
    console.log('Bingo')
}*/

//Решение
/*let obj = {
    intA: 1,
}
Object.defineProperty(obj, 'a', {
    get (){
        return this.intA++
    }
})

if (obj.a === 1 && obj.a === 2 && obj.a === 3){

    console.log('Bingo')
}*/

/*

let obj = {
    _a: 1,
    get a() {
        return this._a++;
    },

};

if (obj.a === 1 && obj.a === 2 && obj.a === 3) {
    console.log('Bingo');
}
*/


//-------------------------------
//Рализовать класс Animal, который принимает name(по умолчанию 'Animal') в качестве параметра,
// у которго будет 3 метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие.
//Пример: walk => `${this.name} wolking`
//Проверить, что методы работают


//Реализовать класс

















