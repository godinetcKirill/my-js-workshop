// Напиши функці. calcBMI(weight,height),яка розраховує та повертає індеск маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах
// Вага та висота спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді
// 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми

const bmi = calcBMI('88,3', '1.75');
console.log(bmi);

function calcBMI(weight, height) {
  weight = +weight.replace(',', '.');
  height = +height.replace(',', '.');

  const result = weight / Math.pow(height, 2);

  return result.toFixed(1);
}

// Напиши функцію min(a,b), яка повертає найменше з чисел а та б.

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

function min(a, b) {
  return a < b ? a : b;
}

// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення
// яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом

function getReactArea(dimensions) {
  const splitResult = dimensions.split(' '); //['8','11]

  const side1 = +splitResult[0]; // '8'

  const side2 = +splitResult[1]; // '11'

  return side1 * side2;
}

console.log(getReactArea('8 11'));

// НАпиши функцію logItems(items), яка отримує масив та використовує цикл for , який до кожного
// елеммента масиву буде виводити в консоль повідомлення у форматі "номер елемента " - "значення елемента ".
// Нумерація елементів пвинна починатися з 1 .
//  НАприклад для першого елемента массиву mango polly ajax з індексом - буде виведено 1-манго
// а для індексу 2 виведе 3-ajax/

function logItems(items) {
  let counter = 0;
  for (const item of items) {
    console.log(`${++counter} - ${item}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['apple', 'strawberry', 'orange', 'pear', 'lemon']);

// паттерн раннє повернення
function coffeeMachine(coffeeNumber) {
  // const coffeeTypes = ['americano', 'latte', 'raf'];

  switch (coffeeNumber) {
    case 0:
      return 'americano';

    case 1:
      return 'latte';

    case 2:
      return 'raf';
  }
}
console.log(coffeeMachine(0));

// Найдовше слово у рядку

const string = 'Js is awesome ! fasdsdf dsgsdgsd dsvsdgfe dsgfwegwegwgwe';
console.log(biggestWord(string));

function biggestWord(string) {
  const wordsArray = string.split(' ');

  let largestWord = wordsArray[0];
  for (const word of wordsArray) {
    if (largestWord.length < word.length) {
      largestWord = word;
    }
  }
  return largestWord;
}



// напиши програму, яка отримує від користувача
// число ( кількість хвилин) і виведе у консоль
// рядок у форматі годин і хвилин
//  70 ===01:10


const globalMinutes = 69;

const hours = String(Math.floor(globalMinutes / 60)).padStart(2,0);

const minutes = String(globalMinutes % 60).padStart(2,0);

console.log(`${hours}:${minutes}`);

// Напиши функцію findSmallerNUmber(numbers)
// яка шукає найменше число в масиві.
// додай перевірку що функція отримує масив

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, , 3];

function findSmallerNumber(array) {
    if (!Array.isArray(array)) {
       return alert('це не є масив ! ') 
    }
    let min = array[0];

    for (let i = 0; i < array.length; i += 1){
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}


const smallestNumber = findSmallerNumber(numbers);
console.log(smallestNumber);