// button.addEventListener("click", function subscriber() {}); // произошел клик
// promises.then(function subscriber() {}); // промис зарезолвился
// store.subscribe(function subscriber() {}); // стор изменился
// setTimeout(function handler() {}, 1000); // прошла секунда

// post("/users", function subscriber() {});

// // subscriber  ||  listener  ||  handler  || watcher  ||  observer

// const button = {
//   subscribers: {
//     click: [],
//     dbClick: [],
//     focus: [],
//   },
//   addEventListener(eventName, subscriber) {
//     this.subscribers[eventName].push(subscriber);

//     return () => {
//       this.subscribers[eventName] = this.subscribers[eventName].filter(
//         (sub) => sub !== subscriber
//       );
//     };
//   },
//   click() {
//     const event = new MouseEvent();
//     this.subscribers["click"].forEach((sub) => sub(event));
//   },
//   focus() {
//     const event = new MouseEvent();
//     this.subscribers["focus"].forEach((sub) => sub(event));
//   },
//   removeEventListener(eventName, subscriber) {
//     this.subscribers[eventName] = this.subscribers[eventName].filter(
//       (sub) => sub !== subscriber
//     );
//   },
// };

// const foo = () => {
//   console.log("hi");
// }

// const unSubscribe = button.addEventListener("click", foo);

// // unSubscribe()

// button.removeEventListener("click", foo);

// ----------------------------------------

const sm = document.querySelector("#small");
const md = document.querySelector("#medium");
const bg = document.querySelector("#big");
const link = document.querySelector("#link");
// const sm = document.getElementById('small')

const handler1 = (event) => {
  // console.log("target", event.target);
  // console.log("currentTarget", event.currentTarget);
  // console.log("handler1");
  event.stopPropagation();
  console.log("currentTarget", event.currentTarget);
};

const handler2 = (e) => {
  // console.log("handler2");
  e.preventDefault();
  alert("hi");
};

// const foo = () => {
//   handler1();
//   handler2();
// };

// sm.onclick = foo;
// sm.onclick = handler2;
// sm.onclick = null

sm.addEventListener("click", handler1);
md.addEventListener("click", handler1);
bg.addEventListener("click", handler1);
link.addEventListener("click", handler2);

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
