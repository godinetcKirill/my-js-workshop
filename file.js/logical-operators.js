// приведение к булю на примере Boolean(value)
// Запам'ятайте 6 хибних (falsy) значень,
//  що приводяться до false у логічному перетворенні:
// 0, NaN, null, undefined, порожній рядок і false. 
// Абсолютно все інше приводиться до true.

console.log(Boolean(''));



// Логическое И (оператор &&)
// -запинаетсся на лжи
// - Возвращает то, на чём запнулось или последний операнд


console.log( 5 &&'hello')


// Логическое ИЛИ (оператор ||)
// запинаеться на правде
// возвращает то, на чем запнулось или последний операнд;
console.log( false || 0 || 9 || 11);


// Логическое НЕ (оператор !)
// делает инверсию правда> ложь и ложь > правда 
console.log(!1);
console.log(!0);

// !-no False or true (boolean)