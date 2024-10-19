/*
? Напиши скрипт перевірки підписки користувача при доступі до контента
? - Є три типа підписки: free, pro і vip.
? - Отримати доступ можуть тільки користувачі pro і vip
 */
// const sub = 'pro';
// const canAccessContent = sub !== 'free';

// console.log('Чи є доступ до контенту?', canAccessContent);

/*
 ? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 ? маси тіла людини. Для цього необхідно розділити вагу на квадрат висоти.
 ?
 ? Вага та висота будуть спеціально передані як рядки.
 ?
 ? Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */
// const calcBMI = function (weight, height) {
//   weight = Number(weight);
//   height = Number(height);

//   const resultBmi = weight / height ** 2;

//   return Number(resultBmi.toFixed(1));
// };

// const bmi = calcBMI('88.3', '1.75');

// console.log(bmi); // 28.8

/*
? У змінній minutes лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/
// const minutes = 20;

// if (minutes >= 0 && minutes < 15) {
//   console.log('Перша чверть години');
// } else if (minutes >= 15 && minutes < 30) {
//   console.log('Друга чверть години');
// } else if (minutes >= 30 && minutes < 45) {
//   console.log('Третя чверть години');
// } else if (minutes >= 45 && minutes < 60) {
//   console.log('Четверта чверть години');
// } else {
//   console.log('Некоректна кількість хвилин');
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
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/
// 1 Варіант вирішення
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

// 2 Варіант вирішення
// for (let i = 1; i <= 100; i++) {
//   let str = '';

//   if (i % 3 === 0) {
//     str += 'Fizz';
//   }

//   if (i % 5 === 0) {
//     str += 'Buzz';
//   }

//   console.log(str || i);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/
// const values = [17, -10, 94, -30, 1, 23, -20];
// let min = values[0];

// console.log(values);

// for (let i = 1; i < values.length; i++) {
//   if (values[i] < min) {
//     min = values[i];
//   }
// }

// console.log(min);

/*
? У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// let total = 0;

// for (const salary of managerSalaries) {
//   total += salary;
// }

// for (const salary of developersSalaries) {
//   total += salary;
// }

// console.log(total);

/*
? Напиши скрипт, який виводить у консоль усі слова рядка
? крім першого і останнього. Результуючий рядок не повинен починатися
? або закінчуватися символ пробілу.
? Скрипт повинен працювати для будь-якого рядка.
*/

// 1 Варіант
// const string = 'Welcome to the future';
// const wordsArr = string.split(' ');
// let resultString = '';

// console.log(string);
// console.log(wordsArr);

// for (let i = 1; i < wordsArr.length - 1; i++) {
//   resultString += ` ${wordsArr[i]}`;
// }

// console.log(resultString.trim());

// 2 Варіант
// const string = 'Welcome to the future';
// const wordsArr = string.split(' ');
// let resultString = wordsArr
//   .slice(1, wordsArr.length - 1)
//   .join(' ')
//   .trim();

// console.log(wordsArr);
// console.log(resultString);

/*
? Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
? В параметр str будуть передавати рядок.
*/
// const changeCaseOfLetters = function (str) {
//   let resultStr = '';

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       resultStr += str[i].toUpperCase();
//     } else {
//       resultStr += str[i].toLowerCase();
//     }
//   }

//   return resultStr;
// };

// console.log(changeCaseOfLetters('AbC')); // aBc
// console.log(changeCaseOfLetters('CBA')); // cba

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(courseName) - додає курс в кінець колекції
? removeCourse(courseName) - видаляє курс з колекції (через метод splice())
? updateCourse(oldCourseName, newCourseName) - змінює назву курса (через метод splice())
*/
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// console.log(courses);

// const addCourse = function (courseName) {
//   if (courses.includes(courseName)) {
//     return console.log(`У вас вже є курс ${courseName}`);
//   }

//   courses.push(courseName);
// };

// const removeCourse = function (courseName) {
//   const idxOfCourse = courses.indexOf(courseName);

//   if (idxOfCourse === -1) {
//     return console.log(`${courseName} не знайдено!`);
//   }

//   courses.splice(idxOfCourse, 1);
// };

// const updateCourse = function (oldCourseName, newCourseName) {
//   const idxOfCourse = courses.indexOf(oldCourseName);

//   courses.splice(idxOfCourse, 1, newCourseName);
// };

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('React'); // 'Курс з такою назвою не знайдено'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
