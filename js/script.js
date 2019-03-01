let money = +prompt('"Ваш бюджет на месяц'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    q1 = prompt("введите обязательно статью расходов в этом месяце ", ''),
    q2 = prompt("Во сколько обойдется?", ''),
    q3 = prompt("введите обязательно статью расходов в этом месяце ", ''),
    q4 = prompt("Во сколько обойдется?", '');

let appData = {
    budget: money,
    timeData: time,
    savings: false,
    expenses: {

    },
    optionalExpenses: {

    },
    income: []

};


appData.expenses[q1] = q2;
appData.expenses[q3] = q4;

alert( "бюджет на день"+  appData.budget / 30);