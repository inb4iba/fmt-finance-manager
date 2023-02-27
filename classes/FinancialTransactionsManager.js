import { FinancialTransaction } from "./FinancialTransaction.js";

export class FinancialTransactionsManager {
  inputs;
  expensesList;
  earningsList;
  #totalEarnings = 0;
  #totalExpenses = 0;
  #finalBalance = 0;

  constructor(inputs, initialExpenses = [], initialEarnings = []) {
    this.inputs = inputs;
    this.expensesList = initialExpenses;
    this.earningsList = initialEarnings;

    this.createScreen();
  }

  createScreen() {
    if (this.expensesList > 0) {
      this.createHtmlListFromArray(this.expensesList, "expenses-list");
    }
    if (this.earningsList > 0) {
      this.createHtmlListFromArray(this.earningsList, "earnings-list");
    }

    this.updateIndicators();
  }

  addEarning(description, value) {
    const addedFinancialTransaction = new FinancialTransaction(
      description,
      value
    );
    this.earningsList.push(addedFinancialTransaction);
    this.updateScreen(addedFinancialTransaction, "earnings-list");
    this.clearInputs();
  }

  addExpense(description, value) {
    const addedFinancialTransaction = new FinancialTransaction(
      description,
      value
    );
    this.expensesList.push(addedFinancialTransaction);
    this.updateScreen(addedFinancialTransaction, "expenses-list");
    this.clearInputs();
  }

  updateScreen(newItem, htmlListId) {
    this.createListItem(newItem, htmlListId);
    this.updateIndicators();
  }

  updateIndicators() {
    this.#totalEarnings = this.earningsList.reduce(
      (accumulator, currentValue) =>
        (accumulator += Number(currentValue.value)),
      0
    );

    this.#totalExpenses = this.expensesList.reduce(
      (accumulator, currentValue) =>
        (accumulator += Number(currentValue.value)),
      0
    );

    this.#finalBalance = this.#totalEarnings - this.#totalExpenses;

    document.getElementById("final-balance").innerHTML = this.#finalBalance;
    document.getElementById("total-expenses").innerHTML = this.#totalExpenses;
    document.getElementById("total-earnings").innerHTML = this.#totalEarnings;
  }

  createHtmlListFromArray(objectsArray, listElementId) {
    for (var i = 0; i < objectsArray.length; i++) {
      this.createListItem(objectsArray[i], listElementId);
    }
  }

  createListItem(object, listElementId) {
    var li = document.createElement("li");
    li.innerText = `${object.description}: R$ ${object.value}`;

    document.getElementById(listElementId).appendChild(li);
  }

  clearInputs() {
    this.inputs.descriptionInput.value = "";
    this.inputs.valueInput.value = "";
  }
}
