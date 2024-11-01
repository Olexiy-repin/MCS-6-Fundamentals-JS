/*
? Фільтрація за діапазоном
?
? Напишіть функцію filterRange(numbers, a, b), яка приймає масив numbers, 
? шукає в ньому елементи більші-рівні min та менші-рівні max і віддає масив цих елементів.
*/
// const filterRange = (numbers, min, max) => {};

// console.log([10, 20, 2, 3, 56, 4], 4, 56);
// console.log(filterRange([10, 20, 2, 3, 56, 4], 3, 10));

//? Відфільтруйте масив на унікальні значення.
// const users = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];
// const filtredUsers = [];

// console.log('users:', users);
// console.log('filtredUsers:', filtredUsers);

//? Відфільтруйте масив з користувачами на унікальні значення.
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];
// const filtredUsers = [];

// console.table(allUsers);
// console.table(filtredUsers);

/*
? Відсортувати користувачів за віком
? 
? Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.
*/
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];

// const sortByAge = users => {};

// console.log(allUsers);
// console.log(sortByAge(allUsers));

/*
? Вирахувати середній вік
? Напишіть функцію getAverageAge(users), яка приймає масив об’єктів 
? з властивістю age та повертає середній вік.
*/
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];

// const getAverageAge = users => {};

// console.log(getAverageAge(allUsers)); // 28

/*
? Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
? значенням властивості price залежно від переданої знижки.
? Через метод map()
 */
// const allCars = [
//   { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
//   { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
//   { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
//   { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
//   { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
//   { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
//   { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
//   { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
// ];

// const makeCarsWithDiscount = (cars, discount) => {};

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));
