// Напиши функцию changeCase(string) который заменяет регистр каждого символа в строке
// на противоположный
// например, если строка "JavaScript", то на выходе
// должна быть строка "jAVAsCRIPT"



// let invertedString = '';



// for (const letter of letters) {
//     const isEqual = letter === letter.toLowerCase();

  
//   invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(`invertedString: `, invertedString);


const changeCase = function (string) {
    const letters = string.split('');
    let invertedString = '';

  for (const letter of letters) {
      const isInLOwerCase = letter === letter.toLowerCase();

      invertedString += isInLOwerCase ? letter.toUpperCase() : letter.toLowerCase();
  }

    return invertedString;
};
console.log(changeCase('qweRTY'));
console.log(changeCase('mAnGo'));
console.log(changeCase('AjAx'));
