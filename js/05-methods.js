/*
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

// const fullName = ' Harry_Potter ';
// const result = fullName.trim();

// console.log('fullName:', fullName);
// console.log('result:', result);

/*
? Нормалізація рядка
?
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»
*/
// const answer = 'ECMAScript';
// let userInput = prompt('Яка «офіційна» назва JavaScript?');

// if (userInput.toLowerCase() === answer.toLowerCase()) {
//   console.log('Вірно!');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

/*
? Форматування посилання (endsWith)
?
? Напиши скрипт який перевіряє чи закінчується значення
?  змінної link символом /. Якщо ні, додай до кінця
?  значення link цей символ.
? Використовуй конструкцію if...else.
*/
// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   link = link + '/';
// }

// console.log(link);
