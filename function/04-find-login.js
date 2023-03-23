// Напиши скрипт поиска логина
// -Если логина нет, вывести сообщение "Пользователь (логин) не найден"
//  -Если нашли логин, вывести сообщение "Пользователь (логин) найден"


const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];


// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind}   не найден`;
  

// console.log(message);

// const findLogin = function (allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден`;
//         }
//     }
//     return `Пользователь ${loginToFind} не найден`;
// };

// вирішення за допомогою тернарного оператора 
// const findLogin = function (allLogins, loginToFind) {
//     const message = allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден`
//         : `Пользователь ${loginToFind}   не найден`;
    
//     return message;
// };
// вирішення з тернарним через ретьорн
const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден`
    : `Пользователь ${loginToFind}   не найден`;

  
};

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'kiwidab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));