//На замыкание
//task1. Написать функцию накопления createEAdder, которая будет принимать новое значение
//и суммировать его к предыдущему результату

//task2. Создать функцию createPerson, которая будет возвращать объект
//с методами для задания и получения имени

//task3. Создать функцию createMultiplier, которая принимает множитель и возвращает функцию,
//которая умножает переданное число с множителем

//task4. Создайте фуекцию delay, которая возвращает промис, который разрешается чере заданное время (в мc)

//task1
const createEAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const func = createEAdder(2)

/*console.log(func(3))*/

//task2
function createPerson(name) {
    let person = name
    return {
        get() {
            return person
        },
        set(value) {
            return person = value
        }
    }
}

const man = createPerson('Zak')

/*
console.log(man.get())
console.log(man.set('Tray'))*/

//task3
const createMultiplier = (mult) => {
    return (number) => {
        return mult * number
    }
}

/*
console.log(createMultiplier(2)(3))*/

//task4
const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}
/*delay(3000).then(() => console.log('Text'))*/


//task5. Создайту функцию calculateSquare, которая принимает число и возвращает промис, который разрешается с результатом
//квадрата этого числа.

//task6. Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли она себя одинаково во всех обстоятельствах,
//для всех переданных им обработчиков?

//task7. Есть "обычная" функция f. Как можно внутри нее получить результат выполнения async-функции?

/*async function wait () {
    await new Promise((res) => {
        setTimeout(res, 1000)
    })
    return 10
}

function f(){

}*/

//task8. В каком порядке будут выведены логи
/*console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)
Promise.resolve()
    .then(() => {
        console.log(3)
    })
    .then(() => {
        console.log(4)
    })
setTimeout(() => {
    console.log(5)
}, 0)
console.log(6)*/

//task5
const calculateSquare = (num) => {
    return new Promise((res) => {
        res(num)
    })
}

/*calculateSquare(3).then((data) => console.log(data * data))*/

//task6

/*promise.then(f1).catch(f2)
promise.then(f1, f2)*/

//Разница в том, что в первом варианте catch отловит ошибку и в promise, и в then, если она будет.
//А во втором варианте, если в первом колбэке, т.е. в зарезолвленном промисе, будет ошибка, то второй колбэк эту ошибку не отловит

//task7
async function wait() {
    await new Promise((res) => {
        setTimeout(res, 1000)
    })
    return 10
}

function f() {
    wait().then(data => console.log(data))
}

/*f()*/

//task8
/*console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)
Promise.resolve()
    .then(() => {
        console.log(3)
    })
    .then(() => {
        console.log(4)
    })
setTimeout(() => {
    console.log(5)
}, 0)
console.log(6)*/
//1 6 3 4 2 5

//task9
/*async function asyncFunc1 (){
    console.log(1)
    await asyncFunc2()
    console.log(2)
}

async function asyncFunc2 (){
    console.log(3)
}

console.log(4)

setTimeout(() => {
    console.log(5)
}, 0)

asyncFunc1()

new Promise((res) => {
    console.log(6)
    res()
}).then(() => {
    console.log(7)
})

console.log(8)*/







//4 1 3 6 8 2 7 5

//task10. Что будет в консоли
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Привет, меня зовут ${this.name}`);
    }

    delayGreet() {
        setTimeout(function() {
            console.log(`Привет, меня зовут ${this.name}`);
        }.bind(person), 1000);
    }

    delayGreetArrow() {
        setTimeout(() => {
            console.log(`Привет, меня зовут ${this.name}`);
        }, 1000);
    }
}
/*const person = new Person('Alex')
person.greet()
person.delayGreet()
person.delayGreetArrow()*/






//Привет, меня зовут Alex
//Привет, меня зовут undefined
//Привет, меня зовут Alex

//task11. Что будет в консоли
const person = {
    name: 'Alex',
    friends: ['Alice', 'Bob', 'Charlie'],

    printFriends() {
        this.friends.forEach(function(friend) {
            console.log(`${this.name} дружит с ${friend}`);
        })
    },

    printFriendsArrow() {
        this.friends.forEach(friend => {
            console.log(`${this.name} дружит с ${friend}`);
        });
    }
};
/*person.printFriends()
person.printFriendsArrow()*/









//ошибка у меня в консоли
//но если вставить навпрямую в консоль
// undefined дружит с Alice', 'Bob', 'Charlie'
// и Alex дружит с Alice', 'Bob', 'Charlie'

//task12. Что будет в консоли
// @ts-ignore
const person2 = {
    name: 'Alex',
    greet() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
};

const anotherPerson = {
    name: 'Bob'
};

const greet = person2.greet
greet()
greet.call(anotherPerson)
greet.bind(anotherPerson)







//Привет, меня зовут undefined
//Привет, меня зовут Bob
//возвращена функция greet

//task13. Что будет в консоли
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak(types) {
        console.log(`${this.name} издает звук с громкостью ${types}`);
    }
}

class Dog extends Animal {
    speak(types) {
        if (types) {
            console.log(`${this.name} громко лает: ${types}`);
        } else {
            super.speak()
        }
        console.log(`${this.name} лает`);
    }
}

const dog = new Dog('Rex')
dog.speak('Loud')







//Rex громко лает: Loud
// Rex лает

//task14. Что будет в консоли
Promise.resolve()
    .then(() => {
        console.log(1);
        throw new Error();
    })
    .then(() => console.log(2))
    .catch(() => console.log(3))
    .finally(() => console.log(4))
    .then(() => console.log(5));

Promise.resolve()
    .then(() => console.log(11))
    .then(() => {
        console.log(12);
        throw new Error();
    })
    .catch(() => console.log(13))
    .then(() => console.log(14));








//после ошибки throw new Error() промис попадает в следующий допустим then, но не отрабатывает, поэтому прыгаем
//в следующую цепочку
//1 11 12 3 13 4 14 5

