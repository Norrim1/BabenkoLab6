let currentDate = new Date();
let targetDate = new Date(currentDate.getFullYear(), 8, 1);
if (currentDate > targetDate) 
    {
    targetDate.setFullYear(targetDate.getFullYear() + 1);
}
let monthsLeft = (targetDate.getMonth() - currentDate.getMonth() + 12) % 12;
alert(monthsLeft);