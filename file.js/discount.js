/*
Напиши скрипт подсчёта суммы покупки со скидкой в зовисимости
от потраченной суммы за все время( партнёрская програма)
- Общая сумма потраченного храниться в переменной totalSpent
- сумма текущего платежа храниться в переменной payment
- скидка храниться в переменной discount


- если потрачено от (100 о 1000)-бронзовый партнёр, скидка 2%
- если потрачено от ( 1000 до 5000)- серебряный партнёр, скидка 5%
-если потрачено больше 5000 - золотой партнёр, скидка 10%
- если потрачено меньше 100 - не партнёр, скидка 0%\

- В результате вывести сообщение
\\Оформляем заказ на суму ( сумма) со скидкой (скидка %)
*/

let totalSpent = 2000;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
    console.log('бронзовый партнёр, скидка 2%');
    discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    console.log('серебряный партнёр, скидка 5%');
    discount = 0.05;
} else if (totalSpent >= 5000){
    console.log('золотой партнёр, скидка 10%');
    discount = 0.1;
} else {
    console.log('Не партнёр, скидка 0%');
}
payment -= payment * discount;

console.log(`Оформляем заказ на суму ${payment} со скидкой ${discount * 100}%`);
totalSpent += payment;
console.log(`общая сумма потраченного в магазине : ${totalSpent}`);
// Бронзовий партнер, скидка 2%
// серебрянній партнер, скидка 5 %
// золотой партнер, скидка 10%
// У вас еще нет партнерской скидки


// -------------------------
// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();
// //---------------------------

// function add(a, b, c) {
//   // Change code below this line
//   return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));
// //-----------------------