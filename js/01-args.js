/*
 * - Function expression
 * - Псевдомасив arguments та Array.from
 */

//? Function declaration
// console.log(add(10, 20));

// function add(numA, numB) {
//   return numA + numB;
// }

//? Function expression
// const add = function (numA, numB) {
//   return numA + numB;
// };

// console.log(add());

//? arguments
// const fn = function () {
//   const args = Array.from(arguments);

//   console.log(args);

//   args.push(50);

//   console.log(args);
// };

// fn(10, 20, 30, 40);

/*
? Напиши функцію add для складання довільної кількості аргументів (чисел)
*/
// const add = function () {
//   let total = 0;

//   console.log(arguments);

//   for (const num of arguments) {
//     total += num;
//   }

//   return total;
// };

// console.log(add(1, 2, 3)); // 6
// console.log(add(1, 2, 4, 5, 6)); // 18

/*
? Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
? та розраховує середнє арефметичне.
*/
// const calculateAverage = function () {
//   let total = 0;

//   for (const num of arguments) {
//     total += num;
//   }

//   return total / arguments.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
