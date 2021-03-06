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

//#region typeof and Type Guards

// class Song {
//   public title: string;
//   public duration: string | number;

//   constructor(title: string, duration: string | number) {
//     this.title = title;
//     this.duration = duration;
//   }
// }

// function getSongDuration(item: Song) {
//   if (typeof item.duration === "string") {
//     return item.duration;
//   }

//   const { duration } = item;
//   const minutes = Math.floor(duration / 60000);
//   const seconds = (duration / 1000) % 60;
//   return `${minutes}:${seconds}`;
// }

// const songDurationFromString = getSongDuration(new Song("Wonderful", "05:31"));
// const songDurationFromMS = getSongDuration(new Song("Wonderful", 330000));

// console.log(songDurationFromString);
// console.log(songDurationFromMS);

//#endregion

//#region instanceof and Type Guards

// class Song {
//   public title: string;
//   public duration: string | number;

//   constructor(title: string, duration: string | number) {
//     this.title = title;
//     this.duration = duration;
//   }
// }

// class Playlist {
//   public name: string;
//   public songs: Song[];

//   constructor(name: string, songs: Song[]) {
//     this.name = name;
//     this.songs = songs;
//   }
// }

// function getItemName(item: Song | Playlist) {
//   if (item instanceof Song) {
//     return item.title;
//   }

//   return item.name;
// }

// const songName = getItemName(new Song("Wondorful", 30000));
// console.log("Song Name: ", songName);

// const playlistName = getItemName(
//   new Playlist("The Best Songs", [new Song("The Man", 30000)])
// );
// console.log("Playlist name:", playlistName);

//#endregion

//#region User Defined Type Guards

// class Song {
//   public title: string;
//   public duration: string | number;

//   constructor(title: string, duration: string | number) {
//     this.title = title;
//     this.duration = duration;
//   }
// }

// class Playlist {
//   public name: string;
//   public songs: Song[];

//   constructor(name: string, songs: Song[]) {
//     this.name = name;
//     this.songs = songs;
//   }
// }

// function getItemName(item: Song | Playlist) {
//   if (isSong(item)) {
//     return item.title;
//   }

//   return item.name;
// }

// function isSong(item: any): item is Song {
//   return item instanceof Song;
// }

// const songName = getItemName(new Song("Wondorful", 30000));
// console.log("Song Name: ", songName);

// const playlistName = getItemName(
//   new Playlist("The Best Songs", [new Song("The Man", 30000)])
// );
// console.log("Playlist name:", playlistName);

//#endregion

//#region Literal Type Guards and "in" Operator

// class Song {
//   public title: string;
//   public duration: string | number;
//   public kind: "song";

//   constructor(title: string, duration: string | number) {
//     this.title = title;
//     this.duration = duration;
//     this.kind = "song";
//   }
// }

// class Playlist {
//   public name: string;
//   public songs: Song[];
//   public kind: "playlist";

//   constructor(name: string, songs: Song[]) {
//     this.name = name;
//     this.songs = songs;
//     this.kind = "playlist";
//   }
// }

// function getItemName(item: Song | Playlist): string {
//   if (item.kind === "playlist") {
//     return item.name;
//   }
//   return item.title;
// }

// function isSong(item: any): item is Song {
//   return "title" in item;
// }

// const songName = getItemName(new Song("Wondorful", 30000));
// console.log("Song Name: ", songName);

// const playlistName = getItemName(
//   new Playlist("The Best Songs", [new Song("The Man", 30000)])
// );
// console.log("Playlist name:", playlistName);

//#endregion

//#region Intersection Types

// interface Order {
//   id: string;
//   amount: number;
//   currency: string;
// }

// interface Stripe {
//   card: string;
//   cvc: string;
// }

// interface PayPal {
//   email: string;
// }

// type CheckoutCard = Order & Stripe;

// type CheckoutPayPal = Order & PayPal;

// const order: Order = {
//   id: "xj28s",
//   amount: 10,
//   currency: "USD"
// };

// const orderCard: CheckoutCard = {
//   ...order,
//   card: "1000 2000 3000 4000",
//   cvc: "123"
// };

// const orderPayPal: CheckoutPayPal = {
//   ...order,
//   email: "abc@def.com"
// };

// const assigned = Object.assign({}, order, orderCard);

// console.log(assigned);

//#endregion

//#region Discriminated (Tagged) Unions

// interface Order {
//   id: string;
//   amount: number;
//   currency: string;
// }

// interface Stripe {
//   type: "stripe";
//   card: string;
//   cvc: string;
// }

// interface PayPal {
//   type: "paypal";
//   email: string;
// }

// type CheckoutCard = Order & Stripe;

// type CheckoutPayPal = Order & PayPal;

// const order: Order = {
//   id: "xj28s",
//   amount: 10,
//   currency: "USD"
// };

// const orderCard: CheckoutCard = {
//   ...order,
//   type: "stripe",
//   card: "1000 2000 3000 4000",
//   cvc: "123"
// };

// const orderPayPal: CheckoutPayPal = {
//   ...order,
//   type: "paypal",
//   email: "abc@def.com"
// };

// type Payload = CheckoutCard | CheckoutPayPal;

// function checkout(payload: Payload) {
//   if (payload.type === "stripe") {
//     console.log(payload.card, payload.cvc);
//   }
//   if (payload.type === "paypal") {
//     console.log(payload.email);
//   }
// }

//#endregion

//#region Interfaces vs Type Aliases

// interface Item{
//     name: string;
// }

// interface Artist extends Item{
//     songs: number;
// }

// interface Artist extends Item {
//     getSongs(): number;
// }

// type Artist2 = {
//     name: string;
// } & Item;

// const newArtist: Artist = {
//     name: 'ABC',
//     songs: 5,
//     getSongs() {
//         return this.songs;
//     }
// }

//#endregion

//#region Interfaces vs Classes

// interface Artist {
//   name: string;
// }

// class ArtistCreator /*implements Artist*/ {
//   constructor(public name: string) {}

//   //   public name: string;
//   //   constructor(name: string) {
//   //     this.name = name;
//   //   }
// }

// function artistFactory({ name }: ArtistCreator) {
//   return new ArtistCreator(name);
// }

// console.log(artistFactory({ name: "Avjol" }));

//#endregion

//#region Function Generics

// class Pizza {
//   private name: string;
//   private price: number;
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class List<T> {
//   private list: Array<T>;

//   addItem(item: T): void {
//     this.list.push(item);
//   }

//   getList(): Array<T> {
//     return this.list;
//   }
// }

// const list = new List<Pizza>();

// list.addItem(new Pizza("Pepperoni", 15));

// const pizzas = list.getList();

//#endregion

//#region Function Overloads

// function reverse(str: string): string;
// function reverse<T>(arr: T[]): T[];
// function reverse<T>(stringOrArray: string | T[]): string | T[] {
//   if (typeof stringOrArray === "string") {
//     return stringOrArray
//       .split("")
//       .reverse()
//       .join("");
//   }

//   return stringOrArray.slice().reverse();
// }

// reverse("Pepperoni");
// reverse(["bacon", "pepperoni", "chili", "mushrooms"]);

//#endregion

//#region Numeric Enums and Reverse Mappings

// enum Sizes {
//   Small,
//   Medium,
//   Large
// }

// enum Sizes {
//   ExtraLarge = 3
// }

// console.log(Sizes[2]);

//#endregion

//#region String Enums and Inlining Members

// enum Sizes {
//   Small = "small",
//   Medium = "medium",
//   Large = "large"
// }

// let selected: Sizes = Sizes.Small;

// function updateSize(size: Sizes): void {
//   selected = size;
// }

// updateSize(Sizes.Large);

// console.log(selected);

//#endregion

//#region Writing Declaration Files

// import * as x from "lodash";

// x.chunk([1, 2, 3, 4], 2);

//#endregion

//#region Augmenting Modules with Declarations

// import * as x from "lodash";

// x.chunk([1, 2, 3, 4], 2);

// x.mixin({
//   log(item: string) {
//     console.log(":::", item);
//   }
// });

// x.log("Hello!");

//#endregion

//#region Emitting Declaration Files from tsc

// export class Foo {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   bar(age: string) {}
// }

//#endregion
