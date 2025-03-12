"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d == 0) {
    arr.push(-b / (2 * a));
  }

  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
};



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution;
  let P = percent / 12 / 100;
  let monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  let finalPayout = Number((monthlyPayment * countMonths).toFixed(2));
  return finalPayout;
};

