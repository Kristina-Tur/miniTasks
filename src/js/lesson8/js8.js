// eventloop

// console.log("start");

// setTimeout(function () {
//   console.log("timeout1");
// }, 1000);

// setTimeout(function () {
//   console.log("timeout2");
// }, 1000);

// setTimeout(function () {
//   console.log("timeout3");
// }, 1000);

// console.log("end");

// function a() {
//   setTimeout(() => {
//     console.log("1");
//   });
// }
// function b() {
//   console.log("2");
// }

// a();

// const promise = new Promise(function (res, rej) {
//   console.log("3");
//   res();
// });

// promise.then(() => {
//   setTimeout(function timer() {
//     console.log("4");
//   }, 0);
// });

// b();
// // 3 2 1 4

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// });

// new Promise(function (res, rej) {
//   console.log(3);
//   res();
// }).then(() => {
//   console.log(4);
// });

// console.log(5);

// 1 3 5 4 2

// ------------------------

// setTimeout(() => {
//   console.log("1");
// }, 0);

// setTimeout(() => {
//   console.log("2");
// }, 0);

// new Promise((res, rej) => {
//   console.log("3");
//   res();
//   console.log("4");
// }).then(() => {
//   console.log("5");
// });

// console.log("6");

// async function test1() {
//   console.log("7");
//   await test2();
//   console.log("8");
// }

// async function test2() {
//   console.log("9");
// }

// test1();

// console.log("10");
// 6 10 3
// 3 6 7 10 4 5 9 8 1 2
// 3 4 6 10 5 7 9 8 1 2
// 3 4 6 7 8 10 5 9 1 2

// -------------------------

// console.log(1);

// setTimeout(() => {
//   console.log(2);
//   Promise.resolve().then(() => {
//     console.log(3);
//   });
// });

// new Promise((res, rej) => {
//   console.log(4);
//   res(5);
// }).then((data) => {
//   console.log(data);

//   Promise.resolve()
//     .then(() => {
//       console.log(6);
//     })
//     .then(() => {
//       console.log(7);

//       setTimeout(() => {
//         console.log(8);
//       }, 0);
//     });
// });

// setTimeout(() => {
//   console.log(9);
// });

// console.log(10);

// ----------------------

// async function first() {
//   console.log(9);
//   await Promise.resolve(2).then((r) => console.log(r));
//   console.log(0);
//   await Promise.resolve(3).then((r) => console.log(r));
// }

// async function second() {
//   console.log(10);
//   await Promise.resolve(4).then((r) => console.log(r));
//   console.log(11);
//   await Promise.resolve(5).then((r) => console.log(r));
// }

// first();
// second();

// const promises = Promise.resolve("new Promise");
// promises.then((str) => console.log(str));

// 9 10

/*Promise.resolve()
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
  .then(() => console.log(14));*/
//1 11 3 12 4 13 5 14
// 1 11 12 3 13 4 14 5
/*
const tasks = async () => {
    console.log(1);

    await new Promise((resolve, reject) => {
        console.log(10);
        resolve();
    }).then(() => console.log(2));

    setTimeout(() => {
        Promise.resolve().then(() => console.log(3));
        console.log(3.1);
        Promise.resolve().then(() => console.log(3.2));
    }, 0);

    setTimeout(() => console.log(4), 0);

    Promise.resolve().then(() => console.log(5));

    console.log(6);
}
tasks();

//1 6 10 2 5*/

























