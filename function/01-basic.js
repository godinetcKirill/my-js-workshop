// Функции

// -функциональные выражения
// спочатку в дужках після функції передаються параметри 
const add = function (x, y) {
    console.log(x);
    console.log(y);
    console.log('виконуется функція add');

    return x + y;
};
// для того щоб функцію викликати
// і тут в дужках потім передается аргументи 
const r1 = add(2, 3);
console.log('r1:', r1);

const r2 = add(7, 13);
console.log('r2:', r2);

const r3 = add(7, 13);
console.log('r3:', r3);


// - аргументы и параметры
// - возврат значения

// стек вызовов
// stack-trace и поиск ошибок

const fnA = function () {
    console.log('Выполняеться функция A');
    fnB();
};

const fnB = function () {
    console.log('Выполняеться функция B');
    fnC();
 
};

const fnC = function () {
    console.log('Выполняеться функция C');
       console.log(value);
};


// console.log('Лог перед вызовом функции А');
fnA();
// console.log('Лог после вызова функции А');

// console.log('Лог перед вызовом функции B');
// fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции C');
// fnC();
// console.log('Лог после вызова функции C');