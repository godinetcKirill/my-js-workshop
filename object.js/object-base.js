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
// let firstPart = 'likes';
// let userInfo = {
//   name: 'Vasya',
//   age: 30,
//   [firstPart]: true,
// };
// console.log(userInfo[firstPart]);

//преимущество квадратных скобок
// let key = 'name';
// console.log(userInfo[key]);
//==============================================================

//==============================================================
//Имена свойст _ может быть как строка, так и символ

// let usName = {
//     0: 'Vasil',// 0 тоже самое что "0"
// };
// console.log(usName[0]);
//==============================================================


//==============================================================
//тип данных Symbol

//слздаем символ id с описанием (имени ) "id"
// let id = Symbol('id');
// let usInfo = {
//     name: 'Vasya',
//     age: 30,
//     [id]: 'Некое значение '
// };
// console.log(usInfo);

//==============================================================
//Вложеность обьектов

// let userAbout = {
//     name: 'VASYANCHIK',
//     age: 30,
//     address: {
//         city: 'Uzhhorod',
//         street: 'Freedom',
//     }
// };

// console.log(userAbout);
// console.log(userAbout.address);
// console.log(userAbout.address.city);
//==============================================================

//==============================================================
//добавление свойства

// let userInfo = {
//     name:'Vasia',
// }
// console.log(userInfo);

// userInfo.age = 30;

// console.log(userInfo);

// userInfo['Like javascript'] = true;//якщо ім'я складаеться з двох або більше слів, синтаксис наступний !
// console.log(userInfo);

// userInfo.address = {
//     city: 'Uzhhorod',
//     street: 'Freedom',
// };

// console.log(userInfo);

//==============================================================

// удаление свойства
// let userInfo = {
//     name: 'Vasia',
//     age: 30,
//     'Like javascript': true
// };
// console.log(userInfo);

//  delete userInfo.age;

// console.log(userInfo);

// delete userInfo['Like javascript'] ;

// console.log(userInfo);
//==============================================================


//==============================================================

//изменить значение какого-нибудь свойства

// let userInfo = {
//     name: 'Vasia',
//     age: 30,
// }
// console.log(userInfo);

// userInfo.age = 18;
// console.log(userInfo);
//==============================================================

//==============================================================
// копирование обьектов
// при копирование обьекта в другую пременную
// сам обьект не дублируется, а копируется только ссылка на него

// let userInfo = {
//     name: 'Vasia',
//     age: 30,
// }
// console.log(userInfo);

// let user = userInfo;
// console.log(user);

// user.age = 18;

// console.log(userInfo);

//==============================================================

//==============================================================
//Дублирование обьектов (Object.assign)

//Синтаксис
// Object.assign(куда(обьект), что(свойство№1), что(свойства№2), ...user.);

// let userInfo = {
//     name: 'Vasia',
//     age: 30,
// }

// let user = Object.assign({}, userInfo);
// user.age = 18;
// console.log(userInfo);
// console.log(user);
//==============================================================

//==============================================================
//Опциональная цепочка

// let userInfo = {
//     name: 'vasia',
//     age: 30,
//     address: {
//         city: 'Uzhhorod',
//         street : 'Freedom',
//     }
// }
// // console.log(userInfo.address.street);

// console.log(userInfo?.address?.street); //это опциональная цепочка идет знак вопроса и точка
//==============================================================


// Оператор "in" проверка  наличия свойства внутри обьекта (делается в кавичках)

//  let userInfo = {
//     name: 'vasia',
//     age: 30,
//     address: {
//         city: 'Uzhhorod',
//         street : 'Freedom',
//     }
// }
// if ('name' in userInfo) {
//     console.log(userInfo.name);
// }

//==============================================================


//==============================================================
//  "for...in"
// этот цикл используется для перебора всех свойст обьекта

//  let userInfo = {
//     name: 'vasia',
//     age: 30,
//     address: {
//         city: 'Uzhhorod',
//         street : 'Freedom',
//     }
// }


// for (let key in userInfo) {
//     console.log(key);//name.age,adress(ключи)
//     //Значение клчей
//     console.log(userInfo[key]);//vasia,30, object{}
// }

// //якщо треба звернутись до об'єкту всередині обєкт синтакс наступний:

// for (let key in userInfo.address) {
//     console.log(key);//city.street
//     console.log(userInfo.address[key]);//Uzhhorod,freedom
// }

//==============================================================

//методы обьекта
// 'this' (подразумевает текущий обьект )

//  let userInfo = {
//    name: 'vasia',
//    age: 30,
//    address: {
//      city: 'Uzhhorod',
//      street: 'Freedom',
//      },
//      showInfo(){
//          //console.log(`${userInfo.name},${userInfo.age} лет, Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
//          console.log( `${this.name}, ${this.age} лет, Адрес: г. ${this.address.city}, ул.${this.address.street}`
//          );
//      }
// };
 
// userInfo.showInfo();

//==============================================================

//==============================================================
// функция -конструктор
// 1. Имя функции должно начинаться с большой букв(даем понять разработчикам что это конструктор )
// 2.Функция конструктора должна вызыватся при помощи оператора "new"

function UserInfo(name) {
    //this = {}; Создается пустой обьект (неявно )

    this.name = name;
    this.age = 30;

    //return this; возвращается обьект(неявно)
}

console.log(new UserInfo('Vasia'));
console.log(new UserInfo('lena'));