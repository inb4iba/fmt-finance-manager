import { GroupExpenses } from "../classes/GroupExpenses.js";
import { closeModal } from "../components/FormModal/index.js";

const table = document.getElementById("group-expenses");

const groupExpenses = [];

const titleElement = document.getElementById("title-input");
const participantsElement = document.getElementById("participants-input");
const amountElement = document.getElementById("amount-input");

function updatePage() {
  const expense = groupExpenses[groupExpenses.length - 1];

  table.insertAdjacentHTML(
    "beforeend",
    `
    <div class="row">
        <div>${expense.title}</div>
        <div>R$ ${expense.partialValue}</div>
        <div>R$ ${expense.amount}</div>
    </div>
    `
  );
}

window.addGroupExpense = () => {
  groupExpenses.push(
    new GroupExpenses(
      titleElement.value,
      participantsElement.value,
      amountElement.value
    )
  );

  updatePage();

  titleElement.value = "";
  participantsElement.value = "";
  amountElement.value = "";

  closeModal();
};
