// Реалізувати переведення оцінки з 12б системою в 5б
// 12 - 5+
// 11 - 5
// 10 - 5-
// ... Mark < 5

const mark = 10;

// if (mark === 12) {
//   console.log("5+");
// } else if (mark === 11) {
//   console.log("5");
// } else if (mark === 10) {
//   console.log("5-");
// } else {
//   console.log("Mark < 5");
// }

// Множинний вибір
// Конструкція switch..case

// switch (mark) {
//   case 12:
//     console.log("5+");
//     break;
//   case 11:
//     console.log("5");
//     break;
//   case 10:
//     console.log("5-");
//     break;
//   default:
//     console.log("Mark < 5");
// }

// const a = Number(prompt("Введіть перше число"));
// const b = Number(prompt("Введіть друге число"));
// const c = prompt("Яку операцію ви б хотіли виконати?");
// switch (c) {
//   case "+":
//     alert(a + b);
//     break;
//   case "-":
//     alert(a - b);
//     break;
//   case "*":
//     alert(a * b);
//     break;
//   case "/":
//     alert(a / b);
//     break;
//   default:
//     alert("Incorrect operation");
// }

// За введеним номером місяця вивести назву пори року.

// debugger;
// const monthNumber = Number(prompt("Номер місяця"));
// switch (monthNumber) {
//   case 12:
//   case 1:
//   case 2:
//     alert("Зима.");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     alert("Весна.");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert("Літо.");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     alert("Осінь.");
//     break;
//   default:
//     alert("Некоректний місяць.");
//     break;
// }

// Умовна операція (Тернарна)
// Знайти мінімальне з двох чисел

// const a = 8;
// const b = 6;

// let minAB = null;
// if (a < b) {
//   minAB = a;
// } else {
//   minAB = b;
// }

// console.log("minAB :>> ", minAB);

// let minAB2 = a < b ? a : b;

// console.log("minAB :>> ", minAB);

// Задано вік користувача
// вивести повідомлення, що якщо користувач повнолітній, то має повний доступ. Інакше доступ обмежено

// const age = Number(prompt("Your age"));
// let userAge = age >= 18 ? alert("Access granted") : alert("Access denied");

// alert(userAge = age >= 18 ? "Access granted" : "Access denied")

// while (condition) {
//  body
// }

// for(initialization; condition; var_change){
//   body
// }

// do {
//  body
// } while (condition)\

// Користувач має ввести коректне число

// let userNumber = null;

// do {
//   userNumber = Number(prompt("Input number"));
// } while (!Number.isFinite(userNumber));

// console.log("userNumber :>> ", userNumber);

// Користувач має вводити результат 2+2*2 до тих пір, поки не введен правильну відповідь

// let result = null;
// do {
//   result = Number(prompt("2 + 2 * 2 = ?"));
// } while (result !== 6);
// console.log("Awesome");
