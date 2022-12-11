// arguments - псевдомассив

// function f(a, b) {
//   // console.log("arguments instanceof Array :>> ", arguments instanceof Array);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log("f(1, 2, 3, 4, 5) :>> ", f(1, 2, 3, 4, 5));

// function mult() {
//   let accumulator = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     accumulator *= arguments[i];
//   }
//   return accumulator;
// }

// console.log("mult(1, 1, 10, 5) :>> ", mult(1, 1, 10, 5));

// function f1(...args) {
//   const sum = args.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
//   }, 0);
//   return sum;
// }

// console.log("f1(1, 2, 3, 4, 5) :>> ", f1(1, 2, 3, 4, 5));

// Arrow function

function sum1(a, b) {
  return a + b;
}

// const sum2 = (a, b) => {
//   return a + b;
// };

const sum2 = (a, b) => a + b;

console.log("sum2(3, 2) :>> ", sum2(3, 2));

// const isAdult = (age) => {
//   return age >= 18;
// };
// console.log("isAdult(12) :>> ", isAdult(12));

const isAdult = (age) => age >= 18;
console.log("isAdult(19) :>> ", isAdult(19));

//  Запакувати об'єкт у функцію

const packObject = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName,
});

console.log(
  'packObject("Test", "Testovich") :>> ',
  packObject("Test", "Testovich")
);

// 1 Якщо параметр 1, то можна не брати його у дужки
// const isAdult = (age) => age >= 18;
// 2 Якщо в тілі функціі тільки повернення значення, то дужки і return можно пропустити
// const isAdult = (age) => age >= 18;
// 3 Якщо в скороченному записі 2 повертається об'ект, то його потрібно взяти в дужки ()
//const packObject = (firstName, lastName) => ({
//  firstName: firstName,
//  lastName: lastName,
// });

const isEven = (a) => a % 2 === 0;
console.log("isEven (4) :>> ", isEven(4));

// Функція greeting(lang, userName), яка має повертати
// 'Hello ' + userName, if lang==='en'
// 'Привет ' + userName, if lang==='ru'
// 'Вiтаю ' + userName, if lang==='ua'

const greetingOptions = {
  en: "Hello",
  ru: "Привет",
  ua: "Вiтаю",
};

const greeting = (lang, userName) => {
  return `${greetingOptions[lang]} ${userName}`;
};
console.log('greeting("ua", "Ivo") :>> ', greeting("ua", "Ivo"));
