// const firstName = "Test";
// const lastName = "Testovich";
// const email = "test@g,ail.com";

// const obj1 = {}; // стнтаксичний цукор
// const obj2 = Object();
// const obj3 = new Object();

// // властивості: рядки, Symbol()
// const user = {
//   // key: value,
//   firstName: "Test",
//   lastName: "Testovich",
//   email: "test@gmail.com",
//   password: "qwerty",
// };

// console.log("user :>> ", user);
// // alert(user);

// // Доступ до властивостей
// // Додавання властивочтей
// user.age = 10;
// console.log("user :>> ", user);

// //Читання властивості
// console.log("user.email :>> ", user.email);

// // Видалення властивості
// delete user.password;
// console.log("user :>> ", user);

// // Создать объект машины (марка, модель, год выпуска, номер, цвет)
// // просмотреть объект
// // изменить цвет
// // удалить св-во год выпуска
// // добавить св-во имя/фамилия владельца
// // просмотреть объект

// const car = {
//   mark: "VW",
//   model: "Jetta",
//   year: 1987,
//   number: "3642",
//   color: "Red",
// };
// console.log("car before :>> ", car);
// car.color = "Green";
// delete car.year;
// car.firstName = "John";
// car.lastName = "Malcovich";
// console.log("car after:>> ", car);

// /* Типи-посилання і типи-значення */
// const a = 5;
// const b = 5;
// console.log("a===b :>> ", a === b);

// const o1 = {};
// const o2 = {};
// console.log("o1===o2 :>> ", o1 === o2);

// const o3 = o1;
// console.log("o1===o3 :>> ", o1 === o3);
// o3.name = "property";
// console.log("o1 :>> ", o1);

// /* Копіювання ЗНАЧЕННЯ об'єктів (а не посилань) */
// const user1 = Object.assign({}, user);
// console.log("user1 :>> ", user1);
// console.log("user===user1 :>> ", user === user1);

// const user2 = { ...user };
// console.log("user2 :>> ", user2);
// console.log("user===user2 :>> ", user === user2);

/*  */
// const prop = prompt("Input property");
// const value = prompt("Input value");

// const obj = {
//   [prop]: value,
//   // [`${2 + 2}]:value,
// };
// console.log("obj :>> ", obj);

/*  */

// const user = {
//   firstName: "Test",
//   lastName: "Testovich",
//   email: "test@gmail.com",
//   password: "qwerty",
//   // методи
//   // getFullName: function () {
//   //   return `${this.firstName} ${this.lastName}`;
//   // },
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   },
// };

// console.log("user.getFullName() :>> ", user.getFullName());
// user.changeEmail("newmail@gmail.com");
// console.log("user :>> ", user);

// Написати метод для зміни кольору машини
// const car = {
//   mark: "VW",
//   model: "Jetta",
//   year: 1987,
//   number: "3642",
//   color: "Red",
//   changeColor(newColor) {
//     this.color = newColor;
//   },
// };

// car.changeColor("Yellow");
// console.log("car :>> ", car);

// for (const key in car) {
//   console.log(`car ${key} = ${car[key]}`);
// }

function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getFullName1 = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// const user1 = new User("Test", "Testovich", 20);
// console.log("user1 :>> ", user1);

// const user2 = new User("Test2", "Testovich2", 23);
// console.log("user2 :>> ", user2);
// console.log("user2.getFullName() :>> ", user2.getFullName());

// function Car(mark, model, year) {
//   this.mark = mark;
//   this.model = model;
//   this.year = year;
// }

// const car1 = new Car("VW", "Jetta", 1987);
// console.log("car1 :>> ", car1);

const userProto = {};

userProto.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype = userProto;

// User.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`;
// };

const user4 = new User("Test4", "Testovich4", 19);
console.log("user4 :>> ", user4);
const user5 = new User("Test5", "Testovich5", 28);
console.log("user5 :>> ", user5);

// function Car(model, color) {
//   this.model = model;
//   this.color = color;
// }

// Car.prototype.changeColor = function (newColor) {
//   this.color = newColor;
// };

// const car1 = new Car("Audi", "black");
// console.log("car1", car1);
// const car2 = new Car("BMW", "white");
// console.log("car2", car2);
// car1.changeColor("red");
// console.log("car1", car1);

const usersList = {
  1: { id: 1, name: "Test" },
  2: { id: 2, name: "Ivo" },
};

// Array - впорядкована колекція
