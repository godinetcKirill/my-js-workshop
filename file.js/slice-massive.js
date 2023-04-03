// метод slice/
// создаёт новый массив, в который копирует часть
//  либо весь массив
//  синтаксис arr.slice([start],[end]) не включая [end]

// копируем часть массива 
let arrOne = ['leha', 'bixon', 'manya', 'loh'];
// начиная с 1 позиции бихон до 2 позиции маня(не включая)
let arrTwo = arrOne.slice(1, 2);
console.log(arrTwo);

// начиная с предпоследней маня до лох не включая 
let arrThree = arrOne.slice(-3, -2);
console.log(arrThree);
