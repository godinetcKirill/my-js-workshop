// парс числа с конструкцией Number.parsInt() and Number.parsFloat();
let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth:',elementWidth);




let elementHeight = '275.578787978px';
elementHeight = Number.parseFloat(elementHeight);
console.log('element height:', elementHeight);

// метод число toFixed();
// матрешки на примере console.log(Number(число toFixed(digits)))
let salary = 1038.864445;
salary = Number(salary.toFixed(2));
console.log(salary);
console.log(Number(salary.toFixed(2)));

// приведение к число с NUmber(value)
// значение NaN и метод Number.isNan(value)
// true-1; false-0;--------------
let quantity = '30';
let value = 'эту строку невозможно привести к числу';
console.log(Number(quantity))

// Обьект Math
// -возведение в степень;
// - Exponent operator;

// const base = 5;
// const power = 7;
// const result = Math.pow(5, 7);
// console.log(base ** power);


// напиши скрипт который просит пользователя вести число и степень,
// возводит число в эту степень и выводит результат в консоль;
// base-число; power- переменная ;
// 1. попросить ввести число и сохранить в переменной;
let base = prompt('Давай число !  ');
base = Number(base);
console.log(base);
// 2.попросить ввести степень и сохранить в переменную;
let power = prompt('Давай степень!');
power = Number(power);
console.log(power);
// 3.возвести введеные данные в степень и вывести;
// const result = base ** power;
// console.log(result);

// генерим случайные числа
// метод Мath.random обирає рандомне число Math.round() округлює 
// до цілого числа ;
const max = 50;
const min = 80;
const result = Math.round(Math.random() * (max - min) + min);
console.log(result);
// Math.random() * (max-min) +min

