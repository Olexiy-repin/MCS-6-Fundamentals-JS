/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//* Функції це об'єкти зі своїми властивостями та методами

// const fn = function () {};

// console.dir(fn);

// fn.test = 10;

// console.dir(fn);

// console.log(fn.test);

//? Викличте функцію showFullName у контексті об'єкта user
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user);

//? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Marvin',
//   lastName: 'Jordan',
//   age: 30,
// };

// showFullName.call(anotherUser);

//? Викличте функцію changeColor в контексті різних обʼєктів
// const changeColor = function (color) {
//   console.log('changeColor -> this', this);

//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// changeColor.call(hat, 'red');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// changeColor.apply(sweater, ['yellow']);

// console.log(sweater);

//? Створіть копію функції changeColor з привʼязаним контекстом
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('red');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// const changeSweaterColor = changeColor.bind(sweater);

// changeSweaterColor('yellow');

// console.log(sweater);

//? Передайте метод обʼєкта в якості callback функції
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('This --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   callback();
// };

// someFunction(user.showName.bind(user));
