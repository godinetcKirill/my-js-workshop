// метод concat
// создает новый массив в который копирует данные из других массивов
// синтаксис arr.concat(arg1,arg2.....)


let arrOne = ['vasil', 'kirilo', 'mikola'];
let arrTwo = arrOne.concat('vadim','lebovski','hui','perec');
console.log(arrTwo);


// поиск в массиве

// indexOf/lastIndexOf/includes
// аналоги строковым методам

// indexOf ищет item , начиная с индекс фром, и возвращает индекс,
// на котором был найден искомый элемент, в противном случае -1.
// lastIndexOf - то же самое, но ищет справа налево
//  includes - ищет item начиная с индекса фром, и возвращает булевое значение


let arr = ['vasil', 'kirilo', 'mikola'];

// indexOf
console.log(arr.indexOf('vasil'));
console.log(arr.indexOf('mikola'));
console.log(arr.indexOf('kirilo', 2));


// includes
console.log(arr.includes('vasil'));
console.log(arr.includes('mikola'));
console.log(arr.includes('kirilo', 2));