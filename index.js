var mesAtual = 'janeiro';
var entradas = 8000;
var saidas = 400;
var saldo = 1000;
var salario = {
  description: 'Salário',
  value: 4000,
};
var alimentacao = 800;

// Mês
document.getElementById('month').innerHTML = mesAtual;

// Entradas
document.getElementById('total-earnings').innerHTML = entradas;

// Saídas
document.getElementById('total-expenses').innerHTML = saidas;

// Saldo
document.getElementById('final-balance').innerHTML = saldo;

// Minha receita: Salário
document.getElementById(
  'salary'
).innerHTML = `${salario.description}: R$ ${salario.value}`;

// Meus gastos: Alimentação
document.getElementById('food').innerHTML = alimentacao;
