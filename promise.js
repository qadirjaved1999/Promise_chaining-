console.log("Promises in JavaSript");
//without then chaining All data at a time render but i want to show data1 firstly and then show later data2 so achiving this functionality we can use then chaning.
// const asyncFunction = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data1");
//       resolve("scusses");
//     }, 4000);
//   });
// };

// const asyncFunction2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data2");
//       resolve("scusses");
//     }, 4000);
//   });
// };

// console.log("fetching Data1....");
// let p1 = asyncFunction();
// p1.then((res) => {
//   console.log("API Response", res);
// });
// p1.catch((err) => {
//   console.log("API Response ", err);
// });

// console.log("fetching Data2....");
// let p2 = asyncFunction2();
// p1.then((res) => {
//   console.log("API Response", res);
// });
// p2.catch((err) => {
//   console.log("API Response ", err);
// });

// Use then chaining in this code firstly fetch data one and then second.
const asyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("scusses");
    }, 4000);
  });
};

const asyncFunction2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("scusses");
    }, 4000);
  });
};

// console.log("fetching Data1....");
// let p1 = asyncFunction();
// p1.then((res) => {
//   console.log("API Response 1", res);
//   console.log("fetching Data1....");
//   let p2 = asyncFunction2();
//   p2.then((res) => {
//     console.log("API Response 2");
//   });
// });
// p1.catch((err) => {
//   console.log("API Response ", err);
// });

// Alternate of Above code short and easy syntax
console.log("fetching Data1....");
asyncFunction().then((res) => {
  console.log("API Response 1", res);
  console.log("fetching Data2....");
  asyncFunction2().then((res) => {
    console.log("API Response 2", res);
  });
});

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("My promise");
//     // resolve("scusses");
//     reject("error");
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise Resolve", res);
// });

// promise.catch((err) => {
//   console.log("Rejected", err);
// });

// let promise = new Promise((resolve, reject) => {
//   console.log("My promise");
//   //   resolve("scusses");
//   reject("some error");
// });

// Return Promise
function asyncFun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Loading.....");
      resolve("success");
    }, 2000);
  });
}
