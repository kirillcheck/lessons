let money = +prompt('"Ваш бюджет на месяц'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    itemOfExpenditure = +prompt('Введите обязательную статью расходов в этом месяце'),
    Cost = +prompt('Во сколько обойдется?');


let appData = {
    budget: money,
    timeData: time,
    sarvings: false,
    expenses: {
        itemOfExpenditure: Cost
    },
    optionalExpenses: {

    },
    income: []

};

appData.expenses[itemOfExpenditure] = Cost;
console.log(appData['expenses']);
alert("ваш бюджет на 1 день равняется " + (money - itemOfExpenditure - Cost)/30);