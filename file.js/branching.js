//  Оператор Ветвления If
// код по условию .запись :
// все что в иф приводиться к булю 
// Если да то выполняй тело если нет, то не выполняется 
if (6 > 5) {
    // тело
 console.log('jiuiuiu')
}


// Оператор ветвления If///else 
// если да значит єто в противном случає сделай ето
// если іф тру то он виполняеться если нет то віполняеться else ;

if (5 > 30) {
    console.log('x > y');
} else {
    console.log('x < y');
}


// Оператор ветвления else....if

const salary = 5000;
if (salary <= 500) {
    console.log('Уровень 1');
} else if (salary > 500 && salary <= 1500) {
    console.log('Уровень 2');
} else if (salary > 1500 && salary < 3000) {
    console.log('Уровень 3');
} else {
    console.log('Уровень 4');
}

// Тернарный оператор - используется только для записи переменной 
// при условии.
const balance = 1000;
// let message;

// if (balance >= 0) {
//     message = 'Позитивный баланс';
// } else {
//     message = 'Негативный баланс'; 
// }

const message = balance >= 0 ? 'позитивний баланс' : 'негативный баланс';
console.log(message)

// Блочная видимость переменных

const a = 5;
console.log(a);