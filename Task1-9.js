let n = parseInt(prompt("Количество дней для добавления к текущей дате:"));
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + n);
alert(currentDate.toDateString());