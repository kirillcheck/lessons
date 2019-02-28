let money = prompt('"Ваш бюджет на месяц');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let itemOfExpenditure = prompt('Введите обязательную статью расходов в этом месяце');
let Cost = prompt('Во сколько обойдется?');


let appData = {
    budget: money,
    timeData: time,
    sarvings: false
};

let expenses = {
    itemOfExpenditure: Cost
};

let optionalExpenses = {

};

let income = [];



console.log(expenses.itemOfExpenditure);