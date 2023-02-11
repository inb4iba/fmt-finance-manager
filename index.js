var mesAtual = 'janeiro';
var entradas = 8000;
var saidas = 400;
var saldo = 1000;

var earningsList = [
  {
    description: 'Salário',
    value: 4000,
  },
  {
    description: 'Freela',
    value: 400,
  },
];

var expensesList = [
  {
    description: 'Alimentação',
    value: 650,
  },
  {
    description: 'PSN',
    value: 40,
  },
  {
    description: 'Energia',
    value: 500,
  },
];

// Mês
document.getElementById('month').innerHTML = mesAtual;

// Entradas
document.getElementById('total-earnings').innerHTML = entradas;

// Saídas
document.getElementById('total-expenses').innerHTML = saidas;

// Saldo
document.getElementById('final-balance').innerHTML = saldo;

for (var i = 0; i < earningsList.length; i++) {
  var li = document.createElement('li');
  li.innerText = `${earningsList[i].description}: R$ ${expensesList[i].value}`;

  document.getElementById('earnings-list').appendChild(li);
}

for (var i = 0; i < expensesList.length; i++) {
  var li = document.createElement('li');
  li.innerText = `${expensesList[i].description}: R$ ${expensesList[i].value}`;

  document.getElementById('expenses-list').appendChild(li);
}
