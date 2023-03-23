// Напиши скрипт котрый обьеденяет все елементы масива в одно
//  строковое значение .

// -элементов может быть произвольное кол-во
// Пусть элемеенты масива в строке будут разделены запятой.
// -сначала черех фор
// -потом через Join()

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

const string = friends.join(', ');
console.log(friends);
console.log(string);
// Должно получиться 'Манго, Поли, киви, аяакс'