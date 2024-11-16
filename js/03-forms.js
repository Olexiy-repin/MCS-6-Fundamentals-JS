/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 */

/*
? Оброби форму та збережи відгук користувача в об'єкт
*/

const formEl = document.querySelector('.js-form');

// console.dir(formEl);

const onFormSubmit = event => {
  event.preventDefault();

  const formData = {
    [formEl.elements.email.name]: formEl.elements.email.value,
    [formEl.elements.password.name]: formEl.elements.password.value,
    [formEl.elements.comment.name]: formEl.elements.comment.value,
  };

  console.log(formData);

  formEl.reset();
};

formEl.addEventListener('submit', onFormSubmit);
