"use strict";

function solveEquation(a, b, c) {
  const arr = [];
  const d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    arr.push(-b / (2 * a));
  }

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  // if (d < 0) {
  //}
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  const monthRate = percent / 12 / 100; // процентная ставка в месяц
  const loanBody = amount - contribution; // тело кредита
  const payment = loanBody * (monthRate + (monthRate / (((1 + monthRate) ** countMonths) - 1))); // вычисляем ежемесячный платеж
  const totalSum = Number((payment * countMonths).toFixed(2));// общая сумма, которую придется заплатить клиенту
    
    return totalSum;   
  
}
