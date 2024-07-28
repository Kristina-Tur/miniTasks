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






















