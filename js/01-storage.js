/*
? Напиши клас Storage який створює об'єкти для керування складом товарів.
? При виклику отримуватиме один аргумент - початковий масив товарів і
? записуватиме його властивість items.
?
? Додай методи класу:
? - getItems() - повертає масив товарів.
? - addItem(item) - отримує новий товар і додає його до поточних.
? - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */

class Storage {
  constructor(items) {
    // this = {}
    this.items = items;
    // return this;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(item) {
    if (!this.items.includes(item)) {
      return console.log(`${item} не знайдено!`);
    }

    this.items = this.items.filter(el => el !== item);
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

console.log(storage);

console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');

console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');

console.log(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]
