// Напиши скрипт оработки покупки в магазине.
// --Баланс пользователя храниться в переменно1-balance;
// --Сумма покупки храниться в переменной -Payment;
// **ПЕред проверкой вывести сообщение:
// ___Общая стоимость закааза (число) крудитов.
// проверяем кол-во доступных средств на счету

// Алгоритм:
// Если сумма покупки не превышает баланс:
// ----Вычесть из баланса сумму покупки
// ----Вывести сообщение (На счету осталось ...крудитов)
// --Если сумма покупки превышает баланс:
// ---вывести сообщение ( на счету недостаточно средств для операции)
// -- в конце вывести сообщение ( операция завершена)

// 1 вари
let balance = 50000;
const payment = 2000;

console.log(
  `Общая стоимость закааза ${payment} крудитов. проверяем кол-во доступных средств на счету`
);

if (payment <= balance) {
    console.log('Okey boy');

    balance -= payment;
    // balance = balance-payment;
console.log('Bсе хорошо, снимаем деньги .....спасибо за покупку !!!');
    console.log(`На счету осталось ${balance} крудитов`);
} else {
    console.log('на счету недостаточно средств для операции!');
}
console.log('Операция завершена!')

// 2 условие <= баланс


