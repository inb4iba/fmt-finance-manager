import { FinancialTransactionsManager } from "../classes/FinancialTransactionsManager.js";

const monthNames = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];
const descriptionInput = document.getElementById("description-input");
const valueInput = document.getElementById("value-input");

var mesAtual = monthNames[new Date().getMonth()];

// Mês
document.getElementById("month").innerHTML = mesAtual;

const financialTransactionsManager = new FinancialTransactionsManager({
  descriptionInput,
  valueInput,
});

window.addFinancialTransaction = () => {
  const earningRadioValueIsChecked =
    document.getElementById("earning-radio").checked;

  if (earningRadioValueIsChecked) {
    financialTransactionsManager.addEarning(
      descriptionInput.value,
      valueInput.value
    );
  } else {
    financialTransactionsManager.addExpense(
      descriptionInput.value,
      valueInput.value
    );
  }
};
