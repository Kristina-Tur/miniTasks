/*let arr = [1, 2, 3]
arr.length = 0
console.log(arr) // []*//*Это происходит потому, что свойство length массива является динамическим и изменяется при
добавлении или удалении элементов массива.*/

/*const str = 'hdhd'
str.length = 0
console.log(str)*/ //'hdhd'//В строках свойство length является только для чтения и не может быть изменено. Если вы
// попытаетесь присвоить значение свойству length строки, JavaScript проигнорирует это присваивание и не изменяет строку.

//--------------------------------
/*console.log(typeof Object)
console.log(typeof Date)
console.log(typeof null)
console.log(typeof 1n)
console.log(typeof new String())
console.log(typeof new Function())
console.log(typeof NaN)
console.log(typeof [])
console.log(typeof console.log(1))
console.log(typeof (typeof {}))*/
















/*console.log(typeof Object) //'function'
console.log(typeof Date) // 'function' //возвращает текущую дату
console.log(typeof null) //'object'
console.log(typeof 1n) //'bigint' //целые числа большой точности
console.log(typeof new String()) //'function''object'
console.log(typeof new Function())//'function'
console.log(typeof NaN)//'number'
console.log(typeof [])//'object'
console.log(typeof console.log(1))//'1' and 'undefined'
console.log(typeof (typeof {}))//'string'*/
//Object является функцией-конструктором, которая используется для создания новых объектов.
// Когда вы вызываете функцию Object() без аргументов, она возвращает новый пустой объект:
//
//
// let obj = new Object();
// console.log(obj); // {}
// Если вы передаете аргумент в функцию Object(), она преобразует его в объект:
//
//
// let str = "hello";
// let obj = new Object(str);
// console.log(obj); // {0: "h", 1: "e", 2: "l", 3: "l", 4: "o", length: 5}

//Это происходит потому, что конструктор String() создает новый объект строки, который является объектом, а не
// примитивным типом данных. Объекты строк имеют дополнительные свойства и методы, которые недоступны для примитивных строк.
//-------------------------------------------------------
/*let getX
let getY
let x = 0

function count() {
    let y = 0
    getX = () => console.log(x)

    getY = () => console.log(y)
    return {
        inc() {
            x++,
             y++
        },
        getX,
        getY
    }
}

console.log(count().inc())
console.log(count().inc())
console.log(count().getX())
console.log(count().getY())*/

/*try{
    if(console.log(1)){
        console.log(2)
    } else {
        throw new Error()
    }
}catch{
    console.log(console.log(3))
}*/

/*for (let i = 1; i < 3; i++) {
    console.log(i)
}
for (let i = 1; i < 3; ++i) {
    console.log(i)
}*/























