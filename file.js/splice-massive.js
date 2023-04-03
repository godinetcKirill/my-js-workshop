// удаляем єлемент 
let arrOne = ['vanya', 'kolya', 'victor'];
// начиная с первой позиции, удаляем 1 єлемент
arrOne.splice(1, 1);
console.log(arrOne);

// удаляем элемент и возвращаем его в переменную
// splice(cтартовая позиция,кол-во элементов которые мы хотим удалить )
// splice (в третьем значение может идти новый елемент )
let arrTwo = ['vanya', 'kolya', 'victor'];
let removed = arrTwo.splice(1, 1);
console.log(removed);


// заменяем элементы 
let arrThree = ['vanya', 'kolya', 'victor'];
// начинаем с 0 позиции (ваня ), заменяем один элемент 
arrThree.splice(0, 1, 'Volodya');
console.log(arrThree);

// добавляем элементы 
let arrFour = ['vanya', 'kolya', 'victor'];
// начиная с первой позиции(перед коля),добавляем 2 элемента 
arrFour.splice(1, 0, 'kuzia', 'lorik');
console.log(arrFour);

// удаляем елемент 
let arrFive = ['vanya', 'kolya', 'victor'];
// начиная с последней позиции, удаляем 1 элемент .
arrFive.splice(-1, 1);
console.log(arrFive);