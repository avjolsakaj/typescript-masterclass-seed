//#region 'this' keyword primer

// //Function
// function myFunction() {
//   console.log("Function: ", this);
// }

// myFunction();

// //Object literal
// const myObject = {
//   myMethod() {
//     console.log("Object: ", this);
//   }
// };

// myObject.myMethod();

// //Classes
// class myClass {
//   myMethod() {
//     console.log("Class: ", this);
//   }
// }

// const myInstance = new myClass();
// myInstance.myMethod();

//#endregion

//#region Exploring “this” with .call, .apply and .bind

// //Object literal
// const myObject = {
//   myMethod() {
//     console.log("Object: ", this);
//   }
// };
// //myObject.myMethod();

// //Function
// function myFunction(...text: string[]) {
//   console.log("Function: ", this, text);
// }
// myFunction();
// const bindFunction = myFunction.bind(myObject);
// bindFunction("ABC", "DEF");
// myFunction.call(myObject, "ABC", "DEF");
// myFunction.apply(myObject, ["ABC", "DEF"]);
// bindFunction("123", "456");

//#endregion

//#region Arrow Functions and Lexical Scope

// class MyClass {
//   myMethod() {
//     const foo = 123;
//     console.log("1", this);
//     setTimeout(() => {
//       console.log("2", this);
//     }, 0);
//   }
// }

// const myInstance = new MyClass();
// myInstance.myMethod();

//#endregion

//#region Typing "this" and "noImplicitThis"

// const elem = document.querySelector(".click");

// function handleClick(this: HTMLAnchorElement, event: Event) {
//   event.preventDefault();
//   console.log(this);
// }

// elem.addEventListener("click", handleClick, false);

//#endregion
