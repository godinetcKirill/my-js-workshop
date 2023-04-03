//  преобразование массива

// методы split/join

// метод сплит преобразовываает строку в масив по
// заданому разделителю
// синтаксис str.split(delim)

let str = 'vanya, kolya, olya';
let arr = str.split(',');
console.log(arr);

// можно ограничивать кол-во обьектов
// которые попадут в массив

let arrTwo = str.split(',', 2);
console.log(arrTwo);

// метод join работает наооборот
// преобразовывает масив в строку

let ar = ['vasil', 'kirilo', 'mikola'];
let srt = ar.join(',');
console.log(srt);
