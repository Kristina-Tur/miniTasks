//promise

// const axios = require("axios");

// const delay = (ms) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => res("hi"), 2000);
//   });

// };

// console.log("start");

// delay().then((data) => console.log(data));

// console.log("end");

/*fetch("https://yahoo.com")
  .then((data) => {
    console.log(data.url);
    return fetch("https://bing54.com");
  })
  .then((data) => {
    console.log(data.url);
    return fetch("https://google.com");
  })
  .then((data) => {
    console.log(data.url);
  })
  .catch((err) => {
    console.log(err.message);
    return 10; // return Promise.resolve(10)
  })
  .then((data) => {
    console.log("end", data);
    return 20;
  })
  .finally((data) => {
    console.log("finally", data);
    return 30;
  })
  .then((data) => {
    console.log("end2", data);
  });*/

// ---------------------------

/*fetch("https://yahoo.com")
  .then((data) => {
    console.log(data.url);
    return fetch("https://bing54.com");
  })
  .then((data) => {
    console.log(data.url);
    return fetch("https://google.com");
  })
  .then((data) => {
    console.log(data.url);
  })*/

/*const foo = async () => {
  const yahooData = await fetch("https://yahoo.com");
  console.log("yahooData", yahooData.url);
  const bingData = await fetch("https://bing3456.com");
  console.log("bingData", bingData.url);
  const googleData = await fetch("https://google.com");
  console.log("googleData", googleData.url);
  // console.log()

  console.log("finally");

  // return fetch("https://yahoo.com");
};

foo()
  .then((data) => {
    console.log("then foo", data);
  })
  .catch((err) => {
    console.log("catch foo", err.message);
  });*/

// ---------------------------

// all race any allSettled

// ALL

// const pr1 = fetch("https://yahoo.com");
// const pr2 = fetch("https://bing.com");
// const pr3 = fetch("https://google234.com");

// const bigPromise = Promise.all([pr1, pr2, pr3]);

// bigPromise
//   .then((bigData) => {
//     console.log(bigData[1].url);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// Promise.all([
//   fetch("https://yahoo.com"),
//   fetch("https://bing.com"),
//   fetch("https://google.com"),
// ])
//   .then((bigData) => {
//     console.log(bigData);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// race

// Promise.race([
//   fetch("https://yahoo.com"),
//   fetch("https://bing.com"),
//   fetch("https://google.com"),
// ])
//   .then((data) => {
//     console.log(data.url);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// any

// Promise.any([
//   fetch("https://yahoo45345.com"),
//   fetch("https://bing645456.com"),
//   fetch("https://google4535.com"),
// ])
//   .then((data) => {
//     console.log(data.url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// allSettled

// Promise.allSettled([
//   fetch("https://yahoo45665.com"),
//   fetch("https://bing.com"),
//   fetch("https://google.com"),
// ]).then((data) => {
//   console.log("then", data);
// });

// const data = await fetch("https://swapi.dev/api/planets");

// const parseData = await data.json();

// console.log(parseData);

// function* foo() {

// }

// foo()

// function* generateSalaryWithBonus(salary) {
//   const something = yield salary + (salary / 100) * 10;
//   console.log(something);
//   yield salary + (salary / 100) * 15;
//   yield salary + (salary / 100) * 20;
//   yield salary + (salary / 100) * 25;
//   return salary + (salary / 100) * 30;
// }

// const generator = generateSalaryWithBonus(2000);

// console.log(generator.next());
// console.log(generator.next(20));
// console.log(generator.next(30));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// const getUsers = newAsync(function* () {
//   const response = yield fetch("https://www.google.com/search?q=js");
//   console.log(response.url);
// });

// // Определите функцию с именем asyncAlt, которая принимает функцию генератора
// //в качестве аргумента.
// function newAsync(generatorFunction) {
//   // Возвращаем функцию
//   return function () {
//     // Создайте и назначьте объект-генератор
//     const generator = generatorFunction();

//     // Определите функцию, которая принимает следующую итерацию генератора.
//     function resolve(next) {
//       // Если генератор закрыт(завершен) и больше нет значений для вывода,
//       // резолвим последнее значение.
//       if (next.done) {
//         return Promise.resolve(next.value);
//       }

//       //Если еще есть значения, для следующих yield, то это промис
//       // и их необходимо резолвить.
//       return Promise.resolve(next.value).then((response) => {
//         return resolve(generator.next(response));
//       });
//     }

//     // Начинаем резолвить промис
//     return resolve(generator.next());
//   };
// }

// const data = await getUsers();
// console.log(data);

/*
//1. Создайте промис, который постоянно находится в состоянии pending.
// В конструкторе промиса в консоль вывести 'Promise is created'
const promise = new Promise(() => {
  console.log('Promise is created')
})
console.log(promise)*/

/*
//2. Создайте промис, который сразу же после создания переходит в состояние resolved и возвращает строку 'Promise data'.
//Получите данные промиса и выведите их в консоль
const promise = Promise.resolve('Promise data')
    promise
    .then(data => console.log(data))

console.log(promise)*/

/*
//3. Создайте промис, который сразу же после создания переходит в состояние rejected и возвращает строку 'Promise error'.
// //Получите данные промиса и выведите их в консоль

const promise = Promise.reject('Promise error')
promise.catch(err => console.log(err))
console.log(promise)*/

/*
//4.Создайте промис, который переходит в состояние resolved через 3с. и возвращает строку 'Promise data'.
// // //Получите данные промиса и выведите их в консоль

const promise = new Promise((res) => {
    setTimeout(() => {
        res('Promise data')
    }, 3000)
})
promise
    .then(data => console.log(data))
console.log(promise)*/

/*
//5. Создайте литерал объекта Obj со следующими свойствами: promise, resolve, reject, onSuccess, onError.
// Проинициализируете первые три свойства null, а последние 2 функциями, которые принимают один пармеир и выводят в
//консоль сообщение: первая - 'Promise is resolved with data ${paramName}
//вторая - 'Promise is rejected with data ${paramName}
//Создайте 3 обработчика события для кнопок: Create promise, resolve promise, reject promise
//Первый обработчик создает промис, заполняет первые 3 свойства, описанного выше объекта: свойство promise получает
//созданный промис, свойства resolve и reject получают ссылки на соответствуюшие функции resolve и reject.
// Следующие 2 обработчика запускают методы resolve и reject


const obj = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: function (paramName) {
        console.log(`Promise is resolved with data ${paramName}`)
    },
    onError: function (paramName) {
        console.log(`Promise is rejected with data ${paramName}`)
    }
}
const createPromiseHandler = () => {
    const promise = new Promise((res, rej) => {
        obj.resolve = res
        obj.reject = rej
    })
    obj.promise = promise
}
const resolvePromiseHandler = () => {
    obj.resolve('Promise data')
    obj.onSuccess('Promise data')
}
const rejectPromiseHandler = () => {
    obj.reject('Promise error')
    obj.onError('Promise error')
}

console.log(obj)
createPromiseHandler()
resolvePromiseHandler()
rejectPromiseHandler()
console.log(obj)*/

//6. Создайте промис, который через 1 с возвращает 'My name is'.
//Создайте функцию onSuccess, которая получает 1 параметр, прибавляет к нему ваше имя и возвращает новую строку из функции.
//Создайте функцию print, которая выводит в консоль значение своего параметра.
//Добавьте 2 метода then и передайте созданные функции

/*const promise = new Promise((res) => {
    setTimeout(() => {
        res('My name is')
    }, 1000)
})

const onSuccess = (param) => {
    return param + ' Kristina'
}
const print = (param) => {
    console.log(param)
}
promise
    .then(onSuccess)
    .then(print)*/

//7. Создайте 3 промиса. Первый промис возвращает объект {name: 'Anna'} через 2с,
//второй промис - объект {age: 16} через 3с
//третий промис - объект {city: ''} через 4с
//Получите результат промисов, объедините свойства объектов и выведите в консоль {name, age, city}

const promise1 = new Promise((res) => {
    setTimeout(() => {
        res({name: 'Anna'})
    }, 2000)
})
const promise2 = new Promise((res) => {
    setTimeout(() => {
        res({age: 16})
    }, 3000)
})
const promise3 = new Promise((res) => {
    setTimeout(() => {
        res({city: ''})
    }, 4000)
})

const bigPromise = Promise.all([promise1, promise2, promise3])
bigPromise
    .then(arr => {
        const newObj = arr.reduce((acc, obj) => {
            return {...acc, ...obj}
        }, {})
        const newArr = Object.keys(newObj)
        console.log(newArr)
    })











