/*
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

//? Порахуйте загальну кількість відгуків. Відгуки зібрані в обʼєкті feedback.

//? Через цикл for...in
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log(feedback);

// let total = 0;

// for (const key in feedback) {
//   total += feedback[key];
// }

// console.log(total);

//? Через метод Object.keys() та цикл for...of
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log(feedback);

// const feedbackKeys = Object.keys(feedback);

// console.log(feedbackKeys);

// let total = 0;

// for (const key of feedbackKeys) {
//   total += feedback[key];
// }

// console.log(total);

//? Через метод Object.values() та цикл for...of
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log(feedback);

// const feedbackValues = Object.values(feedback);

// console.log(feedbackValues);

// let total = 0;

// for (const value of feedbackValues) {
//   total += value;
// }

// console.log(total);
