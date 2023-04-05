// Работа с колекцией (массивом обьектов )
//Массив сложных типов в фор оф мы получаем ссылку на этот обьект 
// КАк перебирать массиив обьектов и на каждой иттерации получать доступ к его свойствам 

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];

console.table(friends);
// ------------------------------------------------------
// Ищем друга по имени

const findFrienndByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.name);

        if (friend.name ===friendName) {
            return 'Нашли!!!'
        }
    }
    return 'Не нашли :('
}

// console.log(findFrienndByName(friends, 'Poly'));
// console.log(findFrienndByName(friends, 'Chelsey'));

// ------------------------------------------------------

// Получаем имена всех друзей

const getAllNames = function (allFriends) {
    const names = [];
    for (const friend of allFriends) {
        console.log(friend.name);
        names.push(friend.name);
    }
  return names;
}
// console.log(getAllNames(friends));

// ------------------------------------------------------

//Получаем имена только друзей которые онлайн



const getOnlineFriends = function (allFriends) {
    for (const friend  of allFriends) {
        console.log(friend);
    }
}
console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {};



// ------------------------------------------------------

// // перебор масива обьектов с добалением нового значения
// for (const friend of friends) {
//     console.log(friend);

//     friend.newprop = 555;
// }

//  console.table(friends);


// ------------------------------------------------