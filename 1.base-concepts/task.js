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
}

//solveEquation(1, 2, 10);

//function calculateTotalMortgage(percent, contribution, amount, countMonths) {
//
//}