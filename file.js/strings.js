// длина строки, свойство Length
// ''-строчный литерал;
const message = 'В этой строке столько-то символов.';
console.log(message.length);

// конкатенация строк
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// напиши скрипт который выведет строку в формате :
// <<Гость х у поселяеться в z номер q>>,
// подставив вместо х у z q значение переменных;
const room = 716;
const type = 'VIP';

// const welcomeMsg =
//   'Гость ' + firstName + ' ' + lastName + ' поселяеться в' + ' ' + type + ' номер ' + room;

// верхний вариант менее читабельный и нужно играть с пробелам 
// снизу код шаблонных строк \ решает быстрее!
// -------------------------------------------------------------
const welcomeMsg = `Гость ${firstName} ${lastName} поселяеться в ${type} номер ${room}`;
console.log(welcomeMsg);
// ------------------------------------------------------------
// шаблонные строки(template strings) или шаблонный литерал ;
// ставить следующие кавичкі : ``;
const quantity = 15;
const orderMsg = `вы заказываете ${quantity} холодильников `;
console.log(orderMsg);



// нормализация с методом toLowerCase()
// 'что ищем?'

const brand = 'Samsung';
const normalizedBrand = brand.toLowerCase();
console.log(normalizedBrand);



// поиск в строке с методом includes();
// includes возвращает либо true or false ;
//  есть ли в строке* слово ( спан. распродажа и тд.)
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, єто не спам, предлагаю тебе милион!';
const string2 = 'самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2 .includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));