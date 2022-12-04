
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>max) {
      max = arr[i];
    }
    if (arr[i]<min) {
      min = arr[i];
    }  
    sum += arr [i];             
  }

  avg = Number((sum / arr.length).toFixed(2)); 
  return { min: min, max: max, avg: avg };

}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum; 

}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let dif = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>max) {
      max = arr[i];
    }  
    if (arr[i]<min) {
      min = arr[i];
    } 
    dif = max - min;
  }
  return dif;

}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let dif = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { // проверка на четность элемента
      sumEvenElement += arr[i];// чтобы четные значения суммировались
  } else sumOddElement += arr[i];//это остальные, то есть не четные, тоже сумма значений

    dif = sumEvenElement - sumOddElement; 
  }
  return dif;

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let evg = 0;
  
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0){
      sumEvenElement += arr[i];//Если элемент чётный, то увеличивайте одну переменную на перебираемый элемент
      countEvenElement++;//  переменную countEvenElement увеличивать на единицу.
    }

    evg = sumEvenElement / countEvenElement;

  } 
  return evg; 
  
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity; //здесь будет формироваться максимальный результат
  
  for (let i = 0; i < arrOfArr.length; i++) {    
    const arr = func(...arrOfArr[i]);         //Внутри цикла каждый перебираемый элемент передавайте в функцию-насадку. Используйте spread-оператор для разделения массива элементов на отдельные элементы скобки(). 
    if (arr > maxWorkerResult) {        
      maxWorkerResult = arr;
    }
    
  }

  return maxWorkerResult;

}
