/*
знакомство с масивами 
-обьявление 
-индексация 
-длина 
-индекс последнего єлемента
-переопределение 
'mango' , 'riwi' , 'poly' , 'ajax'

  Масив  список в котрром хранятся однотипные елемента 
[]-литерал масива 
последний индекс= длина (-1);
*/

// const friends = ['Mango', 'Ajax', 'Ukraine', 'Poly'];
// console.table(friends);


// // зміна елементу масиву, можно робити скільки завгодно
// friends[1] = 'fuckyou';
// friends[2] = 'welcome to club'
// console.table(friends);

//  як вивести масив по індесу - console.log(friends[1]);

//довжина масиву const lastIndex = friends.length - 1;
// console.log(lastIndex);

/*
передача по ссылке и по значению
- примитивы и сложные типы 
- ссылочное равенство(referential equality)
*/
// передача по значению;
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

// a = 20;
// console.log(a);
// console.log(b);
// передача по ссилке
  
const a = [1, 2, 3];
const b = a;
console.log('a', a);
console.log('b', b);
a[0] = 500;

console.log('a', a);
console.log('b', b);

console.log(a === b);
// a идет в масив находит нулевой елемент и подменяет его на 500


/*
Перебор (итерация) массива
- for (если нужен индекс или нужно заменить элемент массива )
- for...jf (если индекс не нужен и в массиве ничего менять не нужно )
*/
const friends = ['Mango', 'Ajax', 'Ukraine', 'Poly'];
console.table(friends);

// for (let i = 0; i < friends.length; i += 1){
//     friends[i] += '-1'
// }

for (const friend of friends) {
    console.log(friend);
}

// console.table(friends);

//  