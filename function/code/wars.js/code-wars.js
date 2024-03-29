//Создайте функцию, которая принимает целое число в качестве аргумента и возвращает значение "Even"для четных или "Odd"нечетных чисел.

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return 'Even';
//   } else {
//     return 'Odd';
//   }
// }



//Создайте функцию с двумя аргументами, которая будет возвращать массив первых nкратных x.

//Предположим, что и заданное число, и количество раз для подсчета будут положительными числами больше, чем 0.

//Возвращайте результаты в виде массива или списка (в зависимости от языка).
// function countBy(x, n) {
//   let z = [];

//   for (let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }
//   return z;
// }

// console.log(countBy(1, 10));
// console.log(countBy(2, 5));


//Реализуйте функцию, которая преобразует данное логическое значение в его строковое представление.

//Примечание. Будут даны только действительные входные данные.

// function booleanToString(b) {
//   return b.toString();
// }



//function booleanToString(b) {
 // return b ? 'true' : 'false';
//}


// Тимми и Сара думают, что они влюблены, но там, где они живут, они узнают об этом, только когда каждый сорвет по цветку. Если у одного из цветов четное количество лепестков, а у другого нечетное количество лепестков, это означает, что они влюблены.

// Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать true, если они влюблены, и false, если нет.

function areTheyInLove(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


// Завершите функцию, чтобы она нашла среднее значение трех переданных ей баллов и вернула буквенное значение, связанное с этой оценкой.

// Числовая оценка	Письмо Оценка
// 90 <= оценка <= 100	«А»
// 80 <= оценка < 90	'Б'
// 70 <= оценка < 80	'С'
// 60 <= оценка < 70	'Д'
// 0 <= оценка < 60	'Ф'
// Все проверенные значения находятся в диапазоне от 0 до 100. Нет необходимости проверять наличие отрицательных значений или значений, превышающих 100.


function getGrade(s1, s2, s3) {
  let meanScore = (s1 + s2 + s3) / 3;

  if (meanScore >= 90 && meanScore <= 100) {
    return 'A';
  } else if (meanScore >= 80 && meanScore < 90) {
    return 'B';
  } else if (meanScore >= 70 && meanScore < 80) {
    return 'C';
  } else if (meanScore >= 60 && meanScore < 70) {
    return 'D';
  } else {
    return 'F';
  }
}


// Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.

// Например, for [1, 2, 2]он должен возвращаться 9, потому что
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// "="
// 9
// 1
// 2
//  +2
// 2
//  +2
// 2
//  "="9.


// знизу пояснення і код 

function squareSum(numbers) {
  let squaredNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    squaredNumbers.push(numbers[i] ** 2);
  }
  return squaredNumbers.reduce((total, current) => total + current, 0);
}

// 1.Создаем пустой массив squaredNumbers, в который мы будем помещать квадраты чисел.

// 2. Запускаем цикл for, который проходит по каждому элементу входного массива numbers.

// 3. В теле цикла мы используем оператор возврата в степень **, чтобы возвести каждый элемент в квадрат, и помещаем результат в массив squaredNumbers, используя метод push().
// После того, как все числа были возведены в квадрат и помещены в массив squaredNumbers, мы используем метод reduce() для нахождения суммы элементов массива squaredNumbers.
// Функция reduce() принимает функцию обратного вызова, которая принимает два аргумента: total (аккумулятор) и current (текущий элемент массива).
//Начальное значение аккумулятора установлено на 0.
// Функция обратного вызова складывает total и current в каждой итерации, и возвращает обновленное значение total.
// После завершения итераций, функция reduce() возвращает итоговое значение, которое является суммой квадратов всех элементов входного массива numbers.
// Таким образом, когда мы вызываем функцию squareSum([1, 2, 2]), мы получаем результат 9, так как 1^2 + 2^2 + 2^2 = 1 + 4 + 4 = 9.


// Нам нужна функция, которая может преобразовать число (целое число) в строку.

// Какие способы достижения этого вы знаете?

function numberToString(num) {
  return num.toString();
}

//Напишите функцию, которая разбивает строку и преобразует ее в массив слов.
function stringToArray(string) {
  return string.split(' ');
}

// Вам даны lengthи widthчетырехугольника. Многоугольник может быть прямоугольным или квадратным.
// Если это квадрат, вернуть его площадь. Если это прямоугольник, верните его периметр.


const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  } else {
    return 2 * (l + w);
  }
};

// const areaOrPerimeter = function (l, w) {
//   return l == w ? l * w : 2 * (l + w);
// };

// const areaOrPerimeter = function (l, w) {
//   let area = l * w;
//   let perimeter = (l + w) * 2;

//   return l === w ? area : perimeter;
// };






// Наша футбольная команда завершила чемпионат.

// Результаты матчей нашей команды записываются в виде набора строк. Каждый матч представлен строкой в ​​формате "x:y", где x— счет нашей команды, а y— счет наших противников.

// Например: ["3:1", "2:2", "0:1", ...]

// Очки за каждый матч начисляются следующим образом:

// если x > y: 3 очка (победа)
// если x < y: 0 очков (проигрыш)
// если x = y: 1 балл (ничья)
// Нам нужно написать функцию, которая берет этот набор и возвращает количество очков, которое наша команда ( x) набрала в чемпионате по приведенным выше правилам.


function points(games) {
  let totalPoints = 0;
  for (let i = 0; i < games.length; i++) {
    let [x, y] = games[i].split(':');
    if (x > y) {
      totalPoints += 3;
    } else if (x === y) {
      totalPoints += 1;
    } else {
      totalPoints += 0;
    }
  }
  return totalPoints;
}

// В этом решении мы сначала объявляем переменную totalPoints, которая будет хранить общее количество очков, набранных нашей командой.

// Затем мы проходим по каждому матчу в массиве games с помощью цикла for. Внутри цикла мы используем метод split() для разделения строки матча на две части:
// счет нашей команды и счет противников.Затем мы сравниваем эти значения и добавляем соответствующее количество очков к totalPoints.

// В конце функция возвращает общее количество набранных очков.

// Вы можете использовать эту функцию, передав массив результатов игр нашей команды, чтобы узнать, сколько очков она набрала в чемпионате.


// Завершите метод, который принимает логическое значение и возвращает "Yes"строку для true, или "No"строку для false.

function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}

// Напишите функцию, которая принимает массив чисел и возвращает сумму чисел. Числа могут быть отрицательными или нецелыми. Если массив не содержит чисел, вы должны вернуть 0.

// Примеры
// Вход: [1, 5.2, 4, 0, -1]
// Выход:9.2

// Вход: []
// Выход:0

// Вход: [-2.398]
// Выход:-2.398

// Предположения
// Вы можете считать, что вам даны только цифры.
// Вы не можете предположить размер массива.
// Вы можете предположить, что вы получили массив, и если массив пуст, верните 0.

// Sum Numbers
function sum (numbers) {
    let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    if(typeof numbers[i] === 'number'){
      sum  += numbers[i];
    }
  }
    return sum ;
    
};

// Данная функция проходит по всем элементам массива и складывает все числа, игнорируя все остальные элементы. Затем она возвращает сумму.

// Вы можете вызвать эту функцию, передав массив чисел в качестве аргумента, например:



// Напишите функцию с именем setAlarm, которая получает два параметра. Первый параметр, used , истинен, когда вы работаете, а второй параметр, Vacation истинен, когда вы находитесь в отпуске.

// Функция должна возвращать true, если вы работаете, а не в отпуске (поскольку это обстоятельства, при которых вам нужно установить будильник). В противном случае он должен возвращать false. Примеры:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(employed, vacation) {
  return employed > vacation;
}