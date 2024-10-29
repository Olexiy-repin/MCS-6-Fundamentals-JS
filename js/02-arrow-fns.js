/*
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

//* Два і більше параметрів
// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(10, 20));

//* Один параметр
// const greet = firstName => {
//   console.log(`Hello ${firstName}`);
// };

// greet('Oleksii');

//* Без параметрів
// const greet = () => {
//   const firstName = prompt('Your name?');

//   console.log(`Hello ${firstName}`);
// };

// greet();

//* arguments
// const sum = (...args) => {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3));
// console.log(sum(20, 30, 40, 2, 4));

//* Неявне повернення
// const sum = (a, b) => a + b;

// console.log(sum(10, 20));

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const createProduct = (partialProduct, callback) => {
//   const product = {
//     id: Date.now(),
//     ...partialProduct,
//   };

//   callback(product);
// };

// const logProduct = product => console.log(product);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
const each = (array, callback) => {
  const newArr = [];

  for (const el of array) {
    newArr.push(callback(el));
  }

  return newArr;
};

// Повна версія стрілочної інлайнової функції
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value * 2;
//   })
// );
// Скорочена версія стрілочної інлайнової функції
// console.log(each([64, 49, 36, 25, 16], value => value * 2));

// Повна версія стрілочної інлайнової функції
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value - 10;
//   })
// );
// Скорочена версія стрілочної інлайнової функції
// console.log(each([64, 49, 36, 25, 16], value => value - 10));

// Повна версія стрілочної інлайнової функції
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return Math.sqrt(value);
//   })
// );
// Скорочена версія стрілочної інлайнової функції
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));

// Повна версія стрілочної інлайнової функції
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.ceil(value);
//   })
// );
// Скорочена версія стрілочної інлайнової функції
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

// Повна версія стрілочної інлайнової функції
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.floor(value);
//   })
// );
// Скорочена версія стрілочної інлайнової функції
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
