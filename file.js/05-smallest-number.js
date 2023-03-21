// Напиши скрипт поиска маленького числа в массиве
// при условие что числа уникальные( не повторяются)

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];


for (const number of numbers) {
    console.log(number);
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log('smallestNumber:', smallestNumber);