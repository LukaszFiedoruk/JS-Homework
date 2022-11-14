// b.	Create an object that will give us data about:
// i.	How much money was spent in 2014
// ii.	Earnings per company
// iii.	Spendings per transaction type
// iv.	Spendings by month
// v.	Spendings per day of the week

const financialData = require('./financial.json');

function homeworkObject(b, i, ii, iii, iv, v) {
    const money = financialData.reduce(count, date) => {
        if (date.detailsOfPayent.date >= 01-01-2014,< 01-01-2015) {
            return count += date.detailsOfPayent.date;
        } return count
    };
}