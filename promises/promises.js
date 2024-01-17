// function saveToDB(data) {
//   return new Promise((resolve, reject) => {
//     let speed = Math.floor(Math.random() * 10) + 1;

//     if (speed > 4) {
//       resolve("data was saved");
//     } else {
//       reject("weak connection! data wasn't save");
//     }
//   });
// }

// saveToDB("hello world")
//   .then((result) => {
//     console.log("data1 saved");
//     console.log('result of promise: ',result);
//     return saveToDB("hello india");
//   })
//   .then((result) => {
//     console.log("data2 saved");
//     console.log('result of promise: ',result);
//     return saveToDB("hello telangana");
//   })
//   .then((result) => {
//     console.log("data3 saved");
//     console.log('result of promise: ',result)
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log('result of promise: ',error)
//   });

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolved, rejected) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolved("color was changed");
//     }, delay);
//   });
// }

// changeColor("red", 1000)
//   .then((result) => {
//     console.log(result);
//     return changeColor("blue", 1000);
//   })
//   .then((result) => {
//     console.log(result);
//     return changeColor("green", 1000);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let num = prompt("enter the number: ");

// let oddeven = new Promise((resolve, reject) => {
//   if (num % 2 == 0) {
//     resolve("number is even");
//   } else {
//     reject("number is odd");
//   }
// });

// oddeven
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

let DataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "zayeem", password: 123 });
    } else {
      reject("ERR: Data didn't get");
    }
  }, 2000);
});

// METHOD 1 USING .then and .catch

// DataPromise
// .then((resolve) => {
//   console.log(`data is: ${resolve}`);
//   return resolve.username;
// })
//   .then((username) => {
//     console.log(`username is: ${username}`);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

// METHOD 2 USING async await and try catch

// async function ConsumeDataPromise(){
//     try {
//         let response = await DataPromise
//         console.log(response)
//         console.log(response.username)
//     } catch (error) {
//         console.log(error)
//     }
// }

// ConsumeDataPromise();

// 1. APIs using async await and try catch

// async function getAllUsers(){
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users");
//         let data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

// 2. APIs using fetch promise and .then .catch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Err: ", error));
