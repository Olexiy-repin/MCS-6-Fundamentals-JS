/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

//? Функція конструктор
// function User(firstName, lastName, age, login, password) {
//   // let this = {};

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.login = login;
//   this.password = password;

//   // return this;
// }

// console.dir(User);

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// const userA = new User('Ada', 'Reed', 20, 'test@gmail.com', 'qwerty123');

// console.log(userA);
// console.log(userA.getFullName());

// const userB = new User('Henry', 'Bridges', 30, 'some@gmail.com', '321qwerty');

// console.log(userB);
// console.log(userB.getFullName());

//? Клас
class User {
  #password;
  #login;

  static test = 10;

  constructor(firstName, lastName, age, login, password) {
    // let this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.#login = login;
    this.#password = password;
    // return this;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getPassword() {
    return this.#password;
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }
}

console.dir(User);

const userA = new User('Ada', 'Reed', 20, 'test@gmail.com', 'qwerty123');

console.log(userA);
// console.log(userA.getFullName());
// console.log(userA.getPassword());
// userA.setPassword('123');

// console.log(userA);

// console.log(userA.login);
// userA.login = 'newlogin@gmail.com';

// console.log(userA);
