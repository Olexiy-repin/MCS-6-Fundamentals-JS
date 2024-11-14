/*
 * - Подія input
 * - Подія blur
 * - Подія change
 */

const fieldEl = document.querySelector('.js-user-name');
const checkboxPolicyEl = document.querySelector('.js-policy-checkbox');

/*
? Виводь в консоль все що користувач вводить в input
*/

// fieldEl.addEventListener('input', event => {
//   console.dir(fieldEl.value);
// });

/*
? Користувач вводить в input своє ім'я після втрати
? фокусу отримує alert з повідомленням-привітанням
 */

// fieldEl.addEventListener('blur', event => {
//   const username = fieldEl.value;

//   alert(`Welcome ${username}`);
// });

// fieldEl.addEventListener('change', event => {
//   const username = fieldEl.value;

//   alert(`Welcome ${username}`);
// });

/*
? Після того, як користувач активує чекбокс, виводиться alert
*/

checkboxPolicyEl.addEventListener('change', event => {
  if (checkboxPolicyEl.checked) {
    alert('Done!');
  }
});
