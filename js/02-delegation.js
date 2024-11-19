/*
 * Додавання прослуховувача подій на кожен елемент
 */

//? Отримай колір квадратика по якому було здійснено клік
// const boxesElems = document.querySelectorAll('.js-box');

// console.log(boxesElems);

// boxesElems.forEach(el => {
//   el.addEventListener('click', event => {
//     console.log(event.target.dataset.color);
//   });
// });

/*
 * Дегегування подій
 */

//? Отримай колір квадратика по якому було здійснено клік
const containerEl = document.querySelector('.js-container');

console.log(containerEl);

containerEl.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }

  console.log(event.target.dataset.color);
});
