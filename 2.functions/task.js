function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum =
    arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) / arr.length;

  let avg = Number(sum.toFixed(2));


  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sum = arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    return sum;
  }

}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return Math.max(...arr) - Math.min(...arr);
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    arr.forEach(function (entry) {
      if (entry % 2 === 0) {
        sumEvenElement += entry;
      } else {
        sumOddElement += entry;
      }
    });


    if (sumEvenElement > sumOddElement) {
      return sumEvenElement - sumOddElement;
    } else {
      return sumOddElement - sumEvenElement;
    }
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    arr.forEach(function (entry) {
      if (entry % 2 === 0) {
        sumEvenElement += entry;
      } else {
        sumOddElement += entry;
      }
    });


    return sumEvenElement - sumOddElement;
  }
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    arr.forEach(function (entry) {
      if (entry % 2 === 0) {
        sumEvenElement += entry;
        countEvenElement += 1;
      }
    });

    return sumEvenElement / countEvenElement;
  }
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = [];

  for (let i = 0; i < arrOfArr.length; i++) {
    maxWorkerResult.push(func(...arrOfArr[i]));

  }

  return Math.max(...maxWorkerResult);
}
