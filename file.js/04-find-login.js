// Напиши скрипт поиска логина
// -Если логина нет, вывести сообщение "Пользователь (логин) не найден"
//  -Если нашли логин, вывести сообщение "Пользователь (логин) найден"
// -Сначала через For
//  -Потом через for..of
// Логика break
// - Метод includes() c тернарным оператором

const logins = ['m2ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];

//     console.log('Login:', login);
//     console.log(`${login} ===${loginToFind}:`, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('УРа равны!!!');
//         message = message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }
// console.log(message);

// for (const login of logins) {
//      console.log('Login:', login);
//      console.log(`${login} ===${loginToFind}:`, login === loginToFind);

//      if (login === loginToFind) {
//         console.log('УРа равны!!!');
//         message = message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }
//    console.log(message);

// декларативный код 
//  include входит или не входит? отвечает да или нет ?
const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден`
    : `Пользователь ${loginToFind}   не найден`;
console.log(message);
