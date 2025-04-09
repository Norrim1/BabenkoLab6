let days = prompt('Количество дней для добавления к текущей дате', 1);
let dates = new Date(Date.now());
let date_days = dates.getDate();
console.log(dates.getDate())
dates.setDate(date_days + days);
alert(dates)