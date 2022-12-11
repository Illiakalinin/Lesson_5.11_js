const usersList = {
  1: { id: 1, name: "Test" },
  2: { id: 2, name: "Ivo" },
};

// Array - впорядкована колекція

const arr1 = []; // Синтаксичний цукор
const arr2 = new Array();

const arr3 = [1, 2, 3, 4];

const users = [
  { id: 1, name: "Test" },
  { id: 2, name: "Ivo" },
];

// function printArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log("arr[i] :>> ", arr[i]);
//   }
// }
// printArray(arr3);

// написати функцію для обчислення суми елемнтів масиву
// функція приймає масив і повертає його суму

function printArraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log("printArraySum(arr3) =", printArraySum(arr3));

const arr4 = arr3;

// Копіювання массивів

const arr5 = Array.from(arr3);

const arr6 = [...arr3];

// Методи массивів
arr3[arr3.length] = 5;
console.log("arr3 :>> ", arr3);
arr3.push(6);
console.log("arr3 :>> ", arr3);

// ввести з консолі N елементів массиву

function inputArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Number(prompt("input item")));
  }
  return arr;
}

// console.log("inputArray(5) :>> ", inputArray(5));
console.log("arr3[arr3.length-1] :>> ", arr3[arr3.length - 1]);

console.log("arr3.pop() :>> ", arr3.pop()); //повертає і видаляє останній елемент

console.log("arr3.shift() :>> ", arr3.shift()); // повертає і видаляє перший елемент

arr3.unshift(10); // додає на початок массиву елемент
console.log("arr3 :>> ", arr3);
arr3.unshift(11);
console.log("arr3 :>> ", arr3);
arr3.unshift(12);
console.log("arr3 :>> ", arr3);

// shift i unshift використовувати в крайніх випадках

// slice/splice
// const singleNumbers = arr3.slice(3);
// console.log("singleNumbers :>> ", singleNumbers);

// const arr10 = [10, 15, 2, 3, 5, 122, 155];
// //скопіювати однозначні числа
// const singleNumbers2 = arr10.slice(2, -2);
// console.log("singleNumbers2 :>> ", singleNumbers2);

// видалити з arr10 5-ку

// const deleteFive = arr10.splice(4, 1);
// console.log("arr10 :>> ", arr10);

// arr10.splice(4, 1);
// console.log("splice :>>", arr10);

// const arr11 = [1, 2, 3];
// const arr12 = [10, 11, 12];
// const arr13 = arr11.concat(arr12);
// console.log("arr11.concat(arr12) :>> ", arr11.concat(arr12));

// перебір массиву

// for (key in arr13) {
//   console.log("arr[${key}]", arr13[key]);
// }

// for (item of arr13) {
//   console.log("item :>> ", item);
// }

// перебрати for..of масив
// const users = [
//   { id: 1, name: 'Test' },
//   { id: 2, name: 'Ivo' },
// ];

// for (const item of users) {
//   console.log("Users", item);
// }

// Методи перебору масивів
// const myCb = function (x) {
//   console.log("x :>> ", x);
// };

// function f(cb, a) {
//   cb(a);
// }

// f(myCb, 5);

const arr20 = [1, 3, 5, 7];

function printArray(currentValue, index, array) {
  console.log(
    `currentValue: ${currentValue};
    index: ${index};
    array: ${array}.`
  );
}
arr20.forEach(printArray);

const users2 = [
  {
    1: { id: 1, name: "test2" },
    2: { id: 2, name: "Ivo2" },
  },
];
function printUsers(currentValue) {
  console.log(currentValue);
}
users2.forEach(printUsers);

const arr21 = [10, 20, 30];

function mapArray(currentValue) {
  return currentValue ** 2;
}
const arr22 = arr21.map(mapArray);

// filter -

const arr23 = [1, 2, 3, 4];

function isOdd(item) {
  return item % 2 === 1;
}

const arr24 = arr23.filter(isOdd);

// відфільтрувати всі додатні числа массиву
const arr25 = [1, -5, 3, -11, -55];
function dodatni(item) {
  return item > 0;
}
const arr26 = arr25.filter(dodatni);

// findIndex

function find3(item) {
  return item === 3;
}

const foundedIndex = arr25.findIndex(find3); // поверне індекс з потрібним значенням або -1 якщо такого  нема
console.log(foundedIndex);
