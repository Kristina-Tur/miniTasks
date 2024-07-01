// promise

// import callbackFetch from '..//jkfdhsd'
// import setPage from '../store.js'

// callbackFetch("bookstore.com/authors", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     callbackFetch(`bookstore.com/authors/${data.id}`, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         callbackFetch(
//           `bookstore.com/authors/author/${data.books}`,
//           (err, data) => {
//             if (err) {
//               console.log(err);
//             } else {
//               callbackFetch(
//                 `bookstore.com/authors/author/books/${data.bookId}`,
//                 (err, data) => {
//                   if (err) {
//                     console.log(err);
//                   } else {
//                     callbackFetch(
//                       `bookstore.com/authors/author/books/bookId/${data.pageId}`,
//                       (err, data) => {
//                         if (err) {
//                           console.log(err);
//                         } else {
//                           setPage(data);
//                         }
//                       }
//                     );
//                   }
//                 }
//               );
//             }
//           }
//         );
//       }
//     });
//   }
// });

// promiseFetch("bookstore.com/authors")
//   .then((data) => {
//     return promiseFetch(`bookstore.com/authors/${data.id}`);
//   })
//   .then((data) => {
//     return promiseFetch(`bookstore.com/authors/author/${data.books}`);
//   })
//   .then((data) => {
//     return promiseFetch(`bookstore.com/authors/author/books/${data.bookId}`);
//   })
//   .then((data) => {
//     return promiseFetch(
//       `bookstore.com/authors/author/books/bookId/${data.pageId}`
//     );
//   })
//   .then((data) => {
//     setPage(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// promiseFetch("bookstore.com/authors").then((data) => {
//   promiseFetch(`bookstore.com/authors/${data.id}`).then((data) => {
//     promiseFetch(`bookstore.com/authors/author/${data.books}`).then(() => {
//       promiseFetch(`bookstore.com/authors/author/books/${data.bookId}`).then(
//         () => {
//           promiseFetch(
//             `bookstore.com/authors/author/books/bookId/${data.pageId}`
//           ).then(() => {});
//         }
//       );
//     });
//   });
// });

// function Promise(executor) {

//   const resolve = (data) => {
//     return {
//       state: "fulfilled",
//       result: data,
//     };
//   };

//   const rejected = (err) => {
//     return {
//       state: "rejected",
//       result: err,
//     };
//   };

//   executor(resolve, rejected);
//   return {
//     state: "pending",
//     result: undefined,
//   };
// }

// const fs = require("fs");

// fs.readFileSync('./js4.js', (err, data) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		setState(data)
// 	}
// })

// const promiseFetch = (url) => {
// 	return new Promise((res, rej) => {
// 	fs.readFileSync(url, (err, data) => {
// 		if (err) {
// 			// console.log(err)
// 			rej(err)
// 		} else {
// 			// setState(data)
// 			res(data)
// 		}
// 	})
// })
// }

// const promise = promiseFetch('google.com')

// axios.get('google.com').then((data) => {

// })

/* const promiseFetch = (url) => {
   return new Promise((res, rej) => {
     setTimeout(() => {
       res("some data from server");
       // rej("some error");
     }, 1000);
   });
 };

 promiseFetch("google.com")
   .then((data) => {
     console.log("then1", data);
     return 10;
   })
   .then((data) => {
     console.log("then2", data);
     foo();
     // return data; // throw new Error("a is not defined");
   })
   .then((data) => {
     console.log("then3", data);
   })
   .catch((err) => {
     console.log("catch1", err.message);
     // foo2();
     return 50;
   })
   .then((data) => {
     console.log("then4", data);
     return 100;
   })
   .catch((err) => {
     console.log("catch2", err.message);
   })
   .finally((data) => {
     console.log("finally", data); //100
     return 200;
   })
   .then((data) => {
     console.log("then5", data);
   });*/

// const promiseFetch = (url) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("some data from server");
//       // rej("some error");
//     }, 3000);
//   });
// };

// promiseFetch("google.com")
//   .then((data) => {
//     console.log("then1", data);
//     return promiseFetch("yahoo.com");
//   })
//   .then((data) => {
//     console.log("then2", data);
//   })
//   .catch((err) => {
//     console.log("catch2", err.message);
//   });

//  -------------

// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Пример использования:

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// delay(2000).then(() => console.log("Hello!"));

/*const promiseFetch = (url) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // res("some data from server");
      rej("rejected1");
    }, 3000);
   });
};

promiseFetch()
  .catch((t) => t + "catch1")
  .catch((t) => t + "catch2")
  .then((t) => t + "then1")
  .finally((t) => t + "finally")
  .then((t) => console.log(t));*/

/*/!*Создание промиса: Напишите функцию createPromise, которая принимает число и возвращает промис. Промис должен ждать
количество миллисекунд, равное переданному числу, и затем возвращать это число.*!/
const createPromises = (number) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(number)
        }, number)
    })
}
createPromises(3000)
    .then((number) => {
        console.log(number)
    })*/


/*/!*Использование .then и .catch: Напишите функцию handlePromise, которая принимает промис и использует .then для вывода
результата промиса и .catch для вывода ошибки, если промис отклонен.*!/
const promise = new Promise((res, rej) => {
    res(10)
    rej('Error')
})

const handlePromise = (promise) => {
    return promise
        .then((data) => {
            console.log(data)
            return data
        })
        .catch((err) => {
            console.log(err)
        })
}
console.log(handlePromise(promise))*/

/*/!*
Использование .finally: Напишите функцию executePromise, которая принимает промис и использует .finally для вывода
сообщения о том, что промис завершен, независимо от того, выполнен он успешно или отклонен.
*!/

const executePromise = (promise) => {
     return promise
        .then((data) => {return data})
        .catch(() => {return 'Error'})
        .finally(() => {
            console.log('Promise is done')})
}
console.log(executePromise(Promise.resolve('success')))*/




















