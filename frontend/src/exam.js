const expenses = [
  { category: "groceries ", amount: 1284 },
  { category: "e", amount: 3215 },
  { category: "t ", amount: 4223 },
  { category: "g ", amount: 5512 },
  { category: "e ", amount: 9854 },
  { category: "g ", amount: 4321 },
  { category: "e ", amount: 5431 },
  { category: "t ", amount: 84214 },
  { category: "e ", amount: 7531 },
  { category: "g ", amount: 1597 },
  { category: "e ", amount: 8521 },
  { category: "t ", amount: 1236 },
];

function totalExpenses(array) {
  return array.reduce((acc, expense) => {
    if (acc[expense.category]) {
      acc[expense.category] += expense.amount;
    } else {
      acc[expense.category] = expense.amount;
    }
    return acc;
  }, {});
}

console.log(totalExpenses(expenses));
