/*
 * Цикли
 *
 * - Інкремент і декремент
 * - Цикли while і do...while
 * - Цикл for
 * - Відлік від 0 до N
 * - Зворотній відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 */

// let a = 10;

// a--;

// console.log('a:', a);

/*
? Виведіть числа від 1 до 50 використовуючи цикл while
*/
// let i = 1;

// while (i <= 50) {
//   console.log(i);

//   i++;
// }

/*
? Напишіть цикл, який пропонує prompt ввести число більше за 100.
? Якщо відвідувач введе інше число – попросити ввести ще раз, і так далі.
*/
// let userInput;

// do {
//   userInput = Number(prompt('Введіть число більше за 100!'));
// } while (userInput < 100);

// console.log(userInput);

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/*
? Напиши цикл for, який виводить у консоль браузера
? числа за зростанням від a до b, але тільки якщо число кратне 5.
*/
// const a = 20;
// const b = 100;
