/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keyup', event => {
//   console.log(`event.code: ${event.code}, event.key: ${event.key}`);
// });

/*
 * Обробка комбінацій клавіш
 */
document.addEventListener('keydown', event => {
  event.preventDefault();

  console.log(event);

  if ((event.metaKey || event.ctrlKey) && event.code === 'KeyF') {
    console.log('Done!');
  }
});
