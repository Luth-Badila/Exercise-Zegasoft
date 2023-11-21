// Looping example
const numbers: number[] = [1, 2, 3, 4, 5];
for (let i: number = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// For...of example
for (const number of numbers) {
  console.log(number * 2);
}

// ForEach example
numbers.forEach(function (number: number) {
  console.log(number * 2);
});

// Mapping example
const doubledNumbers: number[] = numbers.map(function (number: number): number {
  return number * 2;
});

console.log(doubledNumbers);
