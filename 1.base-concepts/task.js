"use strict";

function solveEquation(a, b, c) {
  const arr = [];
  const d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    return arr;
  }

  if (d === 0) {
    arr.push (-b / (2 * a));
  }

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  
  return arr;
}
