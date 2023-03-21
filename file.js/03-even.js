// НАпиши скрипт который подсчитывает сумму всех чётных чисел в масиве

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// 1-переменная тотал
let total = 0;

// 2- перебрать масив
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
//   // 3- на каждой итерации проверить елемент на чётность === ИЛИ !== ЕСЛИ НЕ ЧЁТНОЕ
//   if (numbers[i] % 2 === 0) {
//     console.log(' Чётное!!!');

//     // 4- если число чётное то плюсуем его к тотал
//       total += numbers[i];
//   }
// }

// лучше использовать фор оф
// for (const number of numbers) {
//     // console.log(number);

//     if (number % 2 === 0) {
//         console.log(`${number} - Чётное!!!`);
//         total += number;
//     }
// }


    // ЛОгика от обратного 
for (const number of numbers) {
  if (number % 2 !== 0) {
      console.log('Єту итерацию нужно пропустить', number);
      continue;
  }
  console.log(`${number} - Чётное!!!`);
    total += number;
}

console.log('total:', total);



