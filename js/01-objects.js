/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const filmHarryPotter = {
  title: 'Harry Potter',
  description: 'Lorem ipsum dolor sit amet.',
  rating: 10,
  actors: ['Donald Mullins', 'Jane Garner', 'Lettie Reeves'],
  translations: {
    ua: 'https://ua',
    en: 'https://en',
  },
};

console.log(filmHarryPotter);

console.log(filmHarryPotter.rating);
console.log(filmHarryPotter.actors);

console.log(filmHarryPotter['title']);

const objectKey = 'description';

console.log(filmHarryPotter.objectKey);
console.log(filmHarryPotter[objectKey]);

filmHarryPotter.description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
filmHarryPotter.actors.push('Matilda Russell');

console.log(filmHarryPotter);

console.log(filmHarryPotter.translations.ua);
console.log(filmHarryPotter.translations.en);

filmHarryPotter.test = 10;

console.log(filmHarryPotter);
