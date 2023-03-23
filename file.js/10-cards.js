// Работаем с коллекцией карточек в trello
// - метод splice()
// - Удалить
// -Добавить
// -Обновить

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'
];
console.table(cards);

// Удаление ( по индексу), метод indexOf()

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.table(cards);

// добавление ( по индексу )

// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);

// console.table(cards);
// обновление (по индексу )
// замена 

// const cardToUpdate = 'Карточка-4 ';
// cards.splice(3, 1, 555);
// console.table(cards);

const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);
console.log(index);

cards.splice(index, 1, 'GOOOOOOOOBLIN');
console.table(cards);


