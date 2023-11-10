function getGreeting(hour: number): string {
  if (hour >= 0 && hour <= 23) {
    if (hour >= 5 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  } else {
    return "Invalid hour";
  }
}

// function calculateStringLengthWithoutSpaces(inputString: string): number {
//   const stringWithoutSpaces = inputString.replace(/\s/g, "");
//   return stringWithoutSpaces.length;
// }

// const myString = "Hello World";
// const lengthWithoutSpaces = calculateStringLengthWithoutSpaces(myString);
// console.log(`Length of the string "${myString}" without spaces is ${lengthWithoutSpaces}.`);

function calculateStringLengthWithoutSpaces(inputString: string): number {
  // Split the input string into an array of words using spaces as the delimiter
  const words = inputString.split(" ");

  // Join the array of words back into a single string without spaces
  const stringWithoutSpaces = words.join("");

  // Calculate the length of the resulting string
  return stringWithoutSpaces.length;
}

function roundDecimalNumber(num: number): string {
  // Bulatkan angka desimal ke 2 angka setelah koma
  const roundedNumber = Math.round(num * 100) / 100;

  // Ambil angka sebelum koma
  const integerPart = Math.floor(roundedNumber);

  // Ambil dua angka desimal
  const decimalPart = Math.round((roundedNumber - integerPart) * 100);

  if (decimalPart >= 0 && decimalPart <= 3) {
    return integerPart.toString();
  } else if (decimalPart >= 4 && decimalPart <= 7) {
    return `${integerPart}, 5`;
  } else {
    return (integerPart + 1).toString();
  }
}

// Contoh penggunaan:
const number1 = 12.12;
console.log(roundDecimalNumber(number1)); // Output: "12"

const number2 = 7.45;
console.log(roundDecimalNumber(number2)); // Output: "7, 5"

const number3 = 5.88;
console.log(roundDecimalNumber(number3)); // Output: "6"

// Example usage:
const myString = "Hello World";
const lengthWithoutSpaces = calculateStringLengthWithoutSpaces(myString);
console.log(`Length of the string "${myString}" without spaces is ${lengthWithoutSpaces}.`);

// For greeting
const hour = 0;
const greeting = getGreeting(hour);
console.log(`It's ${hour}:00, so you should say: ${greeting}`);
