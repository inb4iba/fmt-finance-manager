const monthNames = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];
const descriptionInput = document.getElementById('description-input');
const valueInput = document.getElementById('value-input');

var mesAtual = monthNames[new Date().getMonth()];

// Mês
document.getElementById('month').innerHTML = mesAtual;

class FinancialMovement {
  description;
  value;

  constructor(description, value) {
    this.description = description;
    this.value = Number(value);
  }
}

class FinancialMovements {
  expensesList;
  earningsList;
  #totalEarnings = 0;
  #totalExpenses = 0;
  #finalBalance = 0;

  constructor(initialExpenses = [], initialEarnings = []) {
    this.expensesList = initialExpenses;
    this.earningsList = initialEarnings;

    this.createScreen();
  }

  createScreen() {
    if (this.expensesList > 0) {
      this.createHtmlListFromArray(this.expensesList, 'expenses-list');
    }
    if (this.earningsList > 0) {
      this.createHtmlListFromArray(this.earningsList, 'earnings-list');
    }

    this.updateIndicators();
  }

  addEarning(description, value) {
    const addedFinancialMovement = new FinancialMovement(description, value);
    this.earningsList.push(addedFinancialMovement);
    this.updateScreen(addedFinancialMovement, 'earnings-list');
    this.clearInputs();
  }

  addExpense(description, value) {
    const addedFinancialMovement = new FinancialMovement(description, value);
    this.expensesList.push(addedFinancialMovement);
    this.updateScreen(addedFinancialMovement, 'expenses-list');
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

    document.getElementById('final-balance').innerHTML = this.#finalBalance;
    document.getElementById('total-expenses').innerHTML = this.#totalExpenses;
    document.getElementById('total-earnings').innerHTML = this.#totalEarnings;
  }

  createHtmlListFromArray(objectsArray, listElementId) {
    for (var i = 0; i < objectsArray.length; i++) {
      this.createListItem(objectsArray[i], listElementId);
    }
  }

  createListItem(object, listElementId) {
    var li = document.createElement('li');
    li.innerText = `${object.description}: R$ ${object.value}`;

    document.getElementById(listElementId).appendChild(li);
  }

  clearInputs() {
    descriptionInput.value = '';
    valueInput.value = undefined;
  }
}

const myFinancialMovements = new FinancialMovements();

function addFinancialMovement() {
  const earningRadioValueIsChecked =
    document.getElementById('earning-radio').checked;

  if (earningRadioValueIsChecked) {
    myFinancialMovements.addEarning(descriptionInput.value, valueInput.value);
  } else {
    myFinancialMovements.addExpense(descriptionInput.value, valueInput.value);
  }
}
