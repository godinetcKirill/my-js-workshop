//  Напиши скрипт который считает сумму элементов двух массивов

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;
// первый и второй масив сшиваем и создается новый 
const numbers = array1.concat(array2);
// перебираем масив с помощью фор оф
for (const number of numbers) {
    total += number;
}
console.log(total);