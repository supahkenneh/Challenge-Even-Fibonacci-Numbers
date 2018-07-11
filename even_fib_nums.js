/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {

  var sum = 0;
  let addNum1 = 1;
  let addNum2 = 1;
  let nextNumInSeq = 0;

  while (nextNumInSeq <= maxFibValue) {
    nextNumInSeq = addNum1 + addNum2;
    addNum1 = addNum2;
    addNum2 = nextNumInSeq;
    
    if (nextNumInSeq % 2 === 0 && nextNumInSeq <= maxFibValue) {
      sum += nextNumInSeq;
    }
  }


  // for (let i = 1; i < fibSeq.length; i++) {
  //   let nextSeq = fibSeq[i] + fibSeq[i-1]
  //   if (fibSeq[i] <= maxFibValue){
  //     fibSeq.push(nextSeq)
  //     if (nextSeq%2 === 0){
  //       sum += nextSeq;
  //     }
  //   }
  // }
  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;

  let addNum1 = 1;
  let addNum2 = 1;
  let nextNumInSeq = 0;

  while (nextNumInSeq <= maxFibValue){
    nextNumInSeq = addNum1 + addNum2;
    addNum1 = addNum2;
    addNum2 = nextNumInSeq;
    highest = nextNumInSeq;

    if (highest >= maxFibValue){
      return addNum1;
    }
  }
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};