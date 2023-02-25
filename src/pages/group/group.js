import { GroupExpenses } from "../../classes/GroupExpenses.js";

const table = document.getElementById("group-expenses");

const groupExpenses = [
  new GroupExpenses("Futebol", 6, 70),
  new GroupExpenses("Churrasco", 8, 200),
  new GroupExpenses("Netflix", 3, 60),
];

groupExpenses.forEach((expense) => {
  table.insertAdjacentHTML(
    "beforeend",
    `
    <div class="row">
        <div>${expense.title}</div>
        <div>${expense.partialValue}</div>
        <div>${expense.amount}</div>
    </div>
    `
  );
});
