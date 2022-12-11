"use strict";

// const regExp1 = new RegExp(шаблон, прапорці);
const regExp1 = new RegExp("qwerty", "g");

// const regExp2 = /шаблон/прапорці;
const regExp2 = /qwerty/g;
// прапор i - незалежність від регістру
//прапор g - пошук по всьому рядку

// console.log(
//   'regExp2.test("sfsffqwertyxutd") :>> ',
//   regExp2.test("sfsffqwerty2154")
// );

// console.log(
//   '"656498qwerty351qwerty".match(regExp2) :>> ',
//   "656498qwerty351qwerty".match(regExp2)
// );

// Межі
// ^ - початок рядка
// $ - кінець рядка
// \b - межа слова
// \B - не межа слова

// Перевірити, що qwerty є всім рядком
// console.log('"qwerty".match(/^qwerty$/) :>> ', "qwerty".match(/^qwerty$/));

// Перевірити, чи стоїть qwerty на початку рядка ігноруючи регістр

// console.log('"qwerty".match(/^qwerty/i) :>> ', "qwerty".match(/^qwerty/i));

// Перевірити, чи dog є окремим словом
// console.log(
//   '"My dog is cute".match(/\bdog\b/i) :>> ',
//   "My dog is cute".match(/\bdog\b/i)
// );

// console.log(
//   '"My hotdog is tasty".match(/\bdog\b/i) :>> ',
//   "My hotdog is tasty".match(/\bdog\b/i)
// );

// . -jдин будь-який символ
// Перевірити, чи пароль починається на qw і закінчується на ty
// посередені має бути 2 символи
// qw..ty
// console.log('"qwerty".match(/^qw..ty$/) :>> ', "qwerty".match(/^qw..ty$/));
// console.log('"qw55ty".match(/^qw..ty$/) :>> ', "qw55ty".match(/^qw..ty$/));
// console.log('"qwety".match(/^qw..ty$/) :>> ', "qwety".match(/^qw..ty$/));

// Перевырити, що рядок містить 7 символів і починається на 111

// console.log('"111".match(//) :>> ', "1114567".match(/^111....$/));
// console.log('"111".match(//) :>> ', "1214567".match(/^111....$/));
// console.log('"111".match(//) :>> ', "t114567".match(/^111....$/));

// Квантифікатори
// {8}
// {1.10}
// + - {1,}
// * - {0,}
// ? - {0,1}

// Перевірити, що рядок містить 7 символів і починається на 111
// console.log('"111".match(//) :>> ', "1114567".match(/^1{3}.{4}$/));
// console.log('"111".match(//) :>> ', "1114567".match(/^\{1{3}.{4}$/));

// // Перевірити, чи відповідає рядок імейлу 1-60@1-30
// console.log(
//   '"Test@gmail.com".match(//) :>> ',
//   "Test@gmail.com".match(/^.{1,10}@.{1,10}$/)
// );
// console.log(
//   '"Test@gmail.com".match(//) :>> ',
//   "Testbjjjjjjjjjjj@gmail.com".match(/^.{1,10}@.{1,10}$/)
// );

// Альтернативні символи / один з групи симаолів

// \d = [0123456789] = [0-9]
// \D = ^\d
// [a-z]
// [A-Z]
// [a-zA-Z]
// \w [a-zA-Z0-9_] - символи слова
// \W = ^\w
// \s - space
// \S = ^space = ^\s
// ^ = заперечення

// В рядку тільки цифри
// [0123456789]+
// console.log(
//   '"1234560".match(/[0123456789]+/) :>> ',
//   "1234560".match(/^[0123456789]+$/)
// );

// console.log(
//   '"1234560".match(/[0123456789]+/) :>> ',
//   "1234560".match(/^[0-9]+$/)
// );

// console.log('"1234560".match(/[0123456789]+/) :>> ', "1234560".match(/^\d+$/));

// // console.log(
// //   '"1234q560".match(/[0123456789]+/) :>> ',
// //   "1234q560".match(/^[0123456789]+$/)
// // );

// // Перевірити, що вказано номер телефона у форматі (+380-2ц-3ц-4ц)
// console.log(
//   '"+380-11-111-1111".match(/^+380-d{2}-d{3}-d{4}$/) :>> ',
//   "+380-11-111-1111".match(/^\+380-\d{2}-\d{3}-\d{4}$/)
// );

// Перевірити на ім'я (Aqeqweqweqwe)2-20
// console.log(
//   '"Anna".match(/[A-Z][a-z]{1,19}/) :>> ',
//   "Anna".match(/[A-Z][a-z]{1,19}$/)
// );

// Перевірити, що число
// 11111.55555;
// -11111.55555
// console.log(
//   '"111.555".match(/^-?d+.d+$/) :>> ',
//   "111.555".match(/^-?\d+\.\d+$/)
// );
// console.log(
//   '"111.555".match(/^-?d+.d+$/) :>> ',
//   "-111.555".match(/^-?\d+\.\d+$/)
// );
// console.log(
//   '"111.555".match(/^-?d+.d+$/) :>> ',
//   "11f.555".match(/^-?\d+\.\d+$/)
// );
// console.log(
//   '"111.555".match(/^-?d+.d+$/) :>> ',
//   "111555".match(/^-?\d+\.\d+$/)
// );

// Альтернативні слова
// [123] = (1|2|3)
// (cat|dog)
// console.log(
//   '"I like cat".match(/\b(cat|dog)\b/) :>> ',
//   "I like cat".match(/\b(cat|dog)\b/)
// );
// console.log(
//   '"I like cat".match(/\b(cat|dog)s?\b/) :>> ',
//   "I like cats".match(/\b(cat|dog)s?\b/)
// );

// // Перевірка скаладного імені Aaaaaa-Aaaaaa?
// console.log(
//   '"Anna-Maria".match(/^[A-Z][a-z]{1-19}(-[A-Z][a-z]{1-19})?$/) :>> ',
//   "Anna-Maria".match(/^[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?$/)
// );

// console.log(
//   '"+380-111-11-11-11".match(/^+380-d{2}-d{3}-d{2}-d{2}$/) :>> ',
//   "+380-11-111-11-11".match(/^\+380-\d{2}-\d{3}(-\d{2}){2}$/)
// );

// console.log(
//   "+380-66-111-11-11".match(
//     /^\+380-(99|98|97|96|95|73|50|67|68|63|66)-\d{3}(-\d{2}){2}$/
//   )
// );

// Знайти цитати
// ? переводе квантифікатор з жадного режиму в лінивий
// console.log('I say "yes", but think and say "no"'.match(/".*?"/g));

// console.log(
//   '"Acfjiviv".match(//) :>> ',
//   "Acfjiviv lrjhvlr. Hsdkvl ckhcif.  Nlkcvn vkblk.".match(/[A-Z].*?\./g)
// );

// console.log("I bought 10 apples by 1$".match(/\d+(?=\$)/g));

// 8-16 A a 0 !@#$%^&*.
// Qq1.gggg

// console.log(
//   "Qq1a.gggg".match(
//     /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&.].*).{8,16}$/
//   )
// );

// Методи з використання регулярок

// replace
const str1 = "Dfknh     nkihfrj    gfy rjudhek  fbhj";
const str1Result = str1.replace(/\s{2,}/g, " ");

const str2 = "Fuck you. ))) You are asshole";
const str2Ressult = str2.replace(/(fuck|ass|asshole)\b/gi, "!@#$");

const str22 =
  "Fuck you dude! AAAAAASSHOLE!! FuCCCKKK Fuck Fuck Fuck Fuck Fuck!!!";
const str33result = str22.replace(/(f+u+c+k+|a+s+s+h+o+l+e+)/gi, "####");

const str4 = "Dfknh     nkihfrj    gfy rjudhek  fbhj";
const str4Result = str4.split(/\s{1,}/g);

// '1990/12/12' => ['1990', '12', '12'];
// '1990.12.12' => ['1990', '12', '12'];
// '1990-12-12' => ['1990', '12', '12'];

const str5 = "1990.01.01";
const str5Result = str5.split(/-|\/|\./g);
