let money = prompt("Ваш бюджет на месяц?", ""),
    date = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let a2 = prompt("Во сколько обойдется?", "");
let a3 = prompt("Введите обязательную статью расходов в этом месяце", "");
let a4 = prompt("Во сколько обойдется?", "");

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

alert(appData.budget / 30);
