// 1 створіть массив genres з елементами "Jazz" "blues"
// 2 додайте "рокн-рол" до кінця.
// 3 виведіть у консоль перший елемент масиву
// 4 виведіть у консоль останній елемент масиву .
// 5 видаліть перший елемент та виведіть його в консоль
// 6 вставте "Country" та "Reggae" на початок масиву

const genres = ['Jazz', 'Blues'];

genres.push('Rock-N-Roll');

console.log(genres[genres.length - 1]);


console.log(genres.shift());

genres.unshift('Country', 'Reggae');

console.log(genres);


// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких
// зберігабться у змінній values у вигляді рядка.
// Значення гарантовано розділенні пробілом

const values = '8 11';

const splitResult = values.split(' ');//['8','11]

const side1 = +splitResult[0];// '8'

const side2 = +splitResult[1];// '11'

const result = side1 * side2;

console.log(result);

// Перебір масиву
//  Напиши скрипт для перебору масиву fruits циклом for.
// для кожного елемента масиву виведи у консоль
// рядок у форматі номер_елемента: значеня_елемента.
// нумерація елемента повинна починатися з 1 .

const fruits = ['apple', 'strawberry', 'orange', 'pear', 'lemon'];

let counter = 0;
for (const fruit of fruits) {
    console.log(++counter, fruit);
  
}

// increments and decrements

// let counter = 1;
// console.log(counter++);//1
// console.log(++counter);//3
// console.log(counter++);//3
// console.log(++counter);//5
// console.log(counter++);//5
// console.log(++counter);//7

// // якщо рахурок прилавків = 10
// console.log(counter--);//10
// console.log(--counter);//8
// console.log(counter--);//8
// console.log(--counter);//6
// console.log(counter--);//6
// console.log(--counter);//4



// Масиви та цикли
// Напиши скрипт, який ввиводить у консоль ім'я та телефонний номер
// користувача. У змінних names and phones зберігаються рядки імен та телефоних номерів,
// розділені комами.Порядковий номер імен та телефонів гарантовано однакова

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,8900055566377,890055566300';

const namesArray = names.split(',');
const phonesArray = phones.split(',');

for (let i = 0; i < namesArray.length; i += 1){
    console.log(namesArray[i], phonesArray[i]);
};

// масииви та рядки
// Напиши скрипт який виводить у консоль услі слова рядка крім
// першого і останнього.Результуючий рядок не повинен починатися або закінчуватися символом
// пробілу.Скрипт повинен працювати для будь-якого рядка

const string = 'Welcome to the future';
const words = string.split(' ')



for (let i = 0; i < words.length; i++){
    if (i === 0 || i === words.length - 1) {
        continue;
}
    console.log(words[i])
}


// Напиши скрипт, який "розгортає" рядок(зворотній порядок букв)
// і віводить його в консоль

const strings = 'Welcome to the future';
const word = strings.split('');

const reversedArray = word.reverse();
const results = reversedArray.join('')
console.log(results);


// Пошук Елемента
//  напиши скрипт пошуку найменшого числа у масиві.
// Код повинен працювати для будь-якого масиву чисел.
// Використовуй цикл для розв'язання задачі.

const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[0];

for (const number of numbers) {
    if (min > number) {
        min = number;  
   }
}

console.log(min);