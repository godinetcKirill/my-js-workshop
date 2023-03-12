// Конструкция Switch используется только при строгом сравнение.
// Напиши скрипт выбора стоимости по кол-ву звёзд.
// ** 1-20$, 2-30$, 3-50$, 4-70$, 5-120$
// Если в переменной stars что-то кроме чисел 1-5, выведи строку:
// Такого кол-ва звёзд нет.

// const stars = 3;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// }
// else {
//     console.log('Такого кол-ва звёзд нет');
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//         break;

//     default:
//         console.log('Такого кол-ва звёзд нет');
// }
// console.log(price);

// Напиши скрипт выбора отеля стоимости по кол-ву звезд.
/* 1.2-20$< 3.4-30$, 5-120$
 */

// const stars = 2;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого кол-ва звёзд нет');
// }
// console.log(price);

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 50;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звёзд нет');
// }
// console.log(price);


/*
напиши скрипт выбора опций доставки товара.
Опция храниться в переменной option: 1-самовывоз. 2-курьер,
3 -почта .
В переменную message записать сообщение в зависимости от опции.
-вы можете забрать товар завтра с 12:00 в нашем офисе.
-курьер доставит заказ завтра с 9:00 до 18:00.
- посылка будет отправлена сегодня .
-вам перезвонит менеджер.
*/

// 1.-сделать переменные.
const option = 2;
let message = '';

// 2. сделать свитч 1 2 3 
//3. в каждом кейсе записать в message строку
switch (option) {
    case 1:
        message = 'вы можете забрать товар завтра с 12:00 в нашем офисе';
        break;
    case 2:
        message = 'курьер доставит заказ завтра с 9:00 до 18:00.';
        break;
    case 3:
        message = 'посылка будет отправлена сегодня';
        break;
    
    default:
        message = 'вам перезвонит менеджер';
}

// 4. сделать лог мсдж
console.log(message);
 