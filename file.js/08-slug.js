// Делаем slug в URL из названия статьи (например на dev.too)
// Заголовок статьи состоит только из букв и пробелов

// -Нормализуем строку
// -Разбиваем по словам
// -Сшиваем строку с разделителями

// должно получиться top -10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework';
// приводим к нижнему регистру 
const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);
// разбить в масив по словам
const words = normalizedTitle.split(' ');
console.log(words);
// соеденяем тире с помощью джоин
const slug = words.join('-');
console.log(slug);

// можно сделать простым способом в одну строку
// сначала приводим к нижнему регистру, добавляем в масив и
// соеденяем тире с помощбью джоин

const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);