/*
 ? Що буде виведено до консолі
 */

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log(null || (2 && 3) || 4);

/*
? У змінній minutes лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/
// const minutes = 15;

// if (minutes >= 0 && minutes < 15) {
//   console.log('Перша чверть години!');
// } else if (minutes >= 15 && minutes < 30) {
//   console.log('Друга чверть години!');
// } else if (minutes >= 30 && minutes < 45) {
//   console.log('Тертя чверть години!');
// } else if (minutes >= 45 && minutes < 60) {
//   console.log('Четверта чверть години!');
// }

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/
// const number = Number(prompt('Введіть число між 0 та 3'));

// if (number === 0) {
//   console.log('Ви ввели число 0');
// } else if (number === 1) {
//   console.log('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   console.log('Ви ввели число 2, а може й 3');
// } else {
//   console.log('Ви ввели якесь інше число');
// }

// switch (number) {
//   case 0: {
//     console.log('Ви ввели число 0');

//     break;
//   }

//   case 1: {
//     console.log('Ви ввели число 1');

//     break;
//   }

//   case 2:
//   case 3: {
//     console.log('Ви ввели число 2, а може й 3');

//     break;
//   }

//   default: {
//     console.log('Ви ввели якесь інше число');
//   }
// }

/*
? Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
? Для цього, користувач має бути:
? - другом
? - онлайн
? - без режима не турбувати
 */
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// let canOpenChat = isFriend && isOnline && !isDnd;

// console.log('Чи можна відкрити чат? ', canOpenChat);

/*
? Форматування посилання (includes та логічне «І»)
? Напиши скрипт який перевіряє чи закінчується значення
? змінної link символом /. Якщо ні, додай до кінця
? значення link цей символ, але тільки в тому випадку,
? якщо в link є підрядок "my-site".
? Використовуй конструкцію if...else або тернарний оператор.
*/
// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// console.log(link);

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

/*
? Напиши цикл for, який виводить у консоль браузера
? числа за зростанням від a до b, але тільки якщо число кратне 5.
*/
// const a = 20;
// const b = 100;

// for (let i = a; i <= b; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
