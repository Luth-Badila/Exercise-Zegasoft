// Fibonacci Function
function fibonacciSequence(limit: number): number[] {
  const fibSequence: number[] = [0, 1];

  while (fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2] <= limit) {
    fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
  }

  return fibSequence;
}

// make function that check number positive or negative
function checkNumber(num: number): string {
  if (num < 0) {
    return "Negative";
  } else if (num > 0) {
    return "Positive";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(0));

console.log(fibonacciSequence(55));
