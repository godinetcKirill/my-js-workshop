// Напиши скрипт поиска логина
// -Если логина нет, вывести сообщение "Пользователь (логин) не найден"
//  -Если нашли логин, вывести сообщение "Пользователь (логин) найден"


const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';

const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден`
    : `Пользователь ${loginToFind}   не найден`;
  

console.log(message);

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));