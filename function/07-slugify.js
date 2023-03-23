// напиши функцию slugify(string) которая получает строку и возвращает
// URL-slug
// СТрока состоит только из букв и пробелов

// const title = 'top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');

// const slug1 = title.toLocaleLowerCase().split().join('-');

// console.log(slug1);

const slugify = function (string) {
    
  return string.toLocaleLowerCase().split(' ').join('-');
};

console.log(slugify('Top 10 benefits of React fremework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));
