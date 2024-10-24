/*
 * Масив об'єктів
 *
 * - Перебір масива
 * - Пошук об'єкта за значенням властивості
 */

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.log(friends);
// console.table(friends);

/*
? Пошук друга за іменем
?
? Напишіть функцію findFriendByName (allFriends, friendName),
? якій будуть передавати масив з друзями (параметр allFriends),
? та імʼя одного друга (параметр friendName).
? Функція має перевірити чи є цей друг у масиві.
? Якщо є, то функція має повернути інформацію по цьому другу.
? Якщо немає, тоді функція має повернути повідомлення про це.
*/
// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name.toLowerCase() === friendName.toLowerCase()) {
//       return friend;
//     }
//   }

//   return `Друга ${friendName} не знайдено!`;
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
? Отримуємо імена всіх друзів
?
? Напишіть функцію getAllNames (allFriends),
? якій будуть передавати масив з друзями (параметр allFriends).
? Функція на основі отриманого масиву має створити новий масив
? тільки з іменами друзів і повернути його.
*/
// const getAllNames = function (allFriends) {
//   const allNames = [];

//   for (const friend of allFriends) {
//     allNames.push(friend.name);
//   }

//   return allNames;
// };

// console.log(getAllNames(friends));

/*
? Отримуємо імена тільки тих друзів, які зараз онлайн
? 
? Напишіть функцію getOnlineFriends (allFriends),
? Функція на основі отриманого масиву має створити новий масив
? але тільки з друзями, які зараз онлайн.
*/
// const getOnlineFriends = function (allFriends) {
//   const allFriendsOnline = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       allFriendsOnline.push(friend);
//     }
//   }

//   return allFriendsOnline;
// };

// console.log(getOnlineFriends(friends));

/*
? Напишіть функцію calcTotalPrice(stones, stoneName),
? яка приймає масив об'єктів та рядок з назвою каменю.
? Функція рахує і повертає загальну вартість каміння з
? таким ім'ям.
*/
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Аконіт', price: 200, quantity: 2 },
// ];

// console.log(stones);

// const calcTotalPrice = function (allStones, stoneName) {
//   for (const stone of allStones) {
//     if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return `${stoneName} не знайдено!`;
// };

// console.log(calcTotalPrice(stones, 'Діамант'));
// console.log(calcTotalPrice(stones, 'Смарагд'));
// console.log(calcTotalPrice(stones, 'Аметист'));
