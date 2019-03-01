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

//#region “typeof” Type Queries

// const person = {
//   name: "Todd",
//   age: 27
// };

// type Person = typeof person;

// const anotherPerson: Person = {
//   name: "Avjol",
//   age: 26
// };

//#endregion

//#region “keyof” Index Type Queries

// const person = {
//   name: "Todd",
//   age: 27
// };

// type Person = typeof person;
// type PersonKeys = keyof Person;

// type PersonTypes = Person[PersonKeys];

// const anotherPerson: Person = {
//   name: "Avjol",
//   age: 26
// };

//#endregion

//#region “keyof”, Generics and Lookup Types

// const person = {
//   name: "Todd",
//   age: 27
// };

// type Person = typeof person;
// type PersonKeys = keyof Person;
// type PersonTypes = Person[PersonKeys];

// function getProperity<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// const anotherPerson: Person = {
//   name: "Avjol",
//   age: 26
// };

// const personName = getProperity(anotherPerson, "name");
// const personAge = getProperity(anotherPerson, "age");

// console.log(personName, personAge);

//#endregion

//#region “Readonly” Mapped Type

// interface Person {
//   name: string;
//   age: number;
// }

// const person: Person = {
//   name: "Avjol",
//   age: 26
// };

// type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

// function freeze<T>(person: T): MyReadonly<T> {
//   return Object.freeze(person);
// }

// const newPerson = freeze(person);

//#endregion

//#region “Partial” Mapped Type

// interface Person {
//   name: string;
//   age: number;
// }

// function updatePerson(person: Person, prop: Partial<Person>) {
//   return { ...person, ...prop };
// }

// const person: Person = {
//   name: "Avjol",
//   age: 26
// };

// updatePerson(person, { name: "ABC" });

//#endregion

//#region "Required" Mapped Type

// interface Person {
//   name?: string;
//   age?: number;
// }

// type MyRequired<T> = { [P in keyof T]-?: T[P] };

// function printAge(person: MyRequired<Person>) {
//   return `${person.name} is ${person.age}`;
// }

// const person: MyRequired<Person> = {
//   name: "Avjol",
//   age: 26
// };

// const age = printAge(person);

//#endregion

//#region "Pick" Mapped Type

// interface Person {
//   name: string;
//   age: number;
//   address: {};
// }

// type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

// const person: Pick<Person, "name" | "age"> = {
//   name: "Avjol",
//   age: 26
// };

//#endregion

//#region "Record" Mapped Type

// let dictionary: Record<string, TrackStates> = {};

// interface TrackStates {
//   current: string;
//   next: string;
// }

// const item: Record<keyof TrackStates, string> = {
//   current: "asdfasdf",
//   next: "q2eqsqw"
// };

// dictionary[0] = item;

// console.log(dictionary[0]);

//#endregion
