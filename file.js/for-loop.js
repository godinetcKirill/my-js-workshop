/*
Циклы(позволяют повторять один и тот же кусочек кода много раз )
Цикл For_____
инициализация -оюьявляем счетчик   let i = 0;
i-итерацция.
условие- условие прекращение цикла .чаще всего больше_меньше.
*/

// for (let i = 5; i < 10; i += 1) {
//     console.log(i);
// }
// console.log('keryatopchik')

/*
Pre-increment and Post-increment ZLOOOOO
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*
-напиши скрипт котрый подсчитывает обущю сумму работников.
-Кол-во работников хранится в переменной employees/
-Зарплата каждого работника это случайное число от 500до 5000
- Записать сумму в переменную totalSalary и вывести в консоль
*/
// 1. сделать переменные
const minSalary = 500;
const maxSalary = 5000;
const employees = 7;
let totalSalary = 0;
// 2.перебрать раотников в цикле
for (let i = 1; i <= employees; i += 1) {
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary,
    );
    console.log(`ЗП работника номер ${i} -${salary}`);
    totalSalary += salary;
    console.log('totalSalary:', totalSalary);
}

// 3. сгенерировать случайную зп
// 4. прибавить к тоталу
// 5. сделать лог

/*
Напиши скрипт который подсчитывает сумму всех четных чисел,
которые входят в диапазон чисел в переменных от min до max/
-например если мін =0 и макс =5, то диапазон 0-5, и в нем два четных 
числа -2 и 4,их сумма 6. 
*/