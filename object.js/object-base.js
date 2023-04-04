// Синтаксис


// Создание обьекта

// let userInfo = new Object();//синтаксис "конструктор обьекта"
// let userInfo = {};//синтаксис "литерал обьетка " чаще всего используется


// Свойства обьектов. Ключ(имя) : + значение ,

// let userInfo = {
//     name: 'Vasya',
//     age: 30,
    
// };
// console.log(userInfo);//весь обьект
// console.log(userInfo.name);// к одному значению конкретного свойства

//=============================================================
// Имена свойств

// имя из двух и больше слов
 
// let userInfo = {
//     name: 'Vasya',
//     age: 30,
//     'likes javascript': true,
// };

// console.log(userInfo.name);//значение если слово состоит из одного слова
// console.log(userInfo['likes javascript'])//если два или болеее слов

//=============================================================
// ИМена свойств
// Вычесляемое лио передаваемое имя
// вычесляем имя

// let firstPart = 'likes';
// let userInfo = {
//     name: 'Vasya',
//     age: 30,
//     [firstPart + 'javascript']: true,
// };
// console.log(userInfo['likes javascript']);


//=============================================================
//Передаем имя 
let firstPart = 'likes';
let userInfo = {
  name: 'Vasya',
  age: 30,
  [firstPart]: true,
};
console.log(userInfo[firstPart]);

//преимущество квадратных скобок 
let key = 'name';
console.log(userInfo[key]);
//==============================================================

//==============================================================
//Имена свойст _ может быть как строка, так и символ

let usName = {
    0: 'Vasil',// 0 тоже самое что "0"
};
console.log(usName[0]);
//==============================================================


//==============================================================
//тип данных Symbol

//слздаем символ id с описанием (имени ) "id"
let id = Symbol('id');
let usInfo = {
    name: 'Vasya',
    age: 30,
    [id]: 'Некое значение '
};
console.log(usInfo);