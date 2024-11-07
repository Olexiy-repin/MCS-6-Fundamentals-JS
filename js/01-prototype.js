/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

/*
? Object.create() та ланцюжки прототипів
*/
// const userMethods = {
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const userA = Object.create(userMethods);

// userA.firstName = 'Larry';
// userA.lastName = 'Barrett';
// userA.age = 30;

// console.log(userA);
// console.log(userA.getFullName());

// const userB = Object.create(userMethods);

// userB.firstName = 'Ida';
// userB.lastName = 'Rowe';
// userB.age = 20;

// console.log(userB);
// console.log(userB.getFullName());

/*
? Перебір власних властивостей з hasOwnProperty()
*/
// const objC = {
//   c: 'Object c',
// };

// const objB = Object.create(objC);

// objB.b = 'Object b';

// const objA = Object.create(objB);

// objA.a = 'Object a';

// console.log(objA);

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.hasOwnProperty('b'));

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// const objAKeys = Object.keys(objA);

// console.log(objAKeys);
